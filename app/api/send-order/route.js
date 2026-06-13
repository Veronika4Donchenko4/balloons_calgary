import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  console.log('[order] RESEND_API_KEY loaded:', process.env.RESEND_API_KEY ? `yes (${process.env.RESEND_API_KEY.slice(0, 8)}...)` : 'NO — missing!')

  const order = await request.json()
  const { customer, items, total } = order
  console.log('[order] Received order from:', customer.name, '| items:', items.length, '| total:', total)

  const itemRows = items.map(item => {
    let details = ''
    if (item.customizations) {
      const c = item.customizations
      const balloonLines = (c.balloons || []).map((b, i) => {
        let line = `Balloon ${i + 1} (${b.size}) — ${b.color}`
        if (b.text) line += ` — "${b.text}" in ${b.textColor}`
        return line
      })
      const extraLines = (c.extraBalloons || []).map(b => {
        let line = `${b.type === 'number' ? `Number ${b.number}` : b.type} balloon — ${b.color}`
        if (b.text) line += ` — "${b.text}" in ${b.textColor}`
        return line
      })
      const addons = []
      if (c.extraBalloonsCost > 0) addons.push(`Extras: $${c.extraBalloonsCost}`)
      if (c.textCost > 0) addons.push(`Text: $${c.textCost}`)
      if (c.confettiCost > 0) addons.push(`Confetti: $${c.confettiCost}`)
      if (c.bowCost > 0) addons.push(`Bows: $${c.bowCost}`)
      details = `
        <div style="margin-top:6px;padding:8px 12px;background:#f9f9f9;border-radius:6px;font-size:13px;color:#555;">
          ${balloonLines.map(l => `<div>${l}</div>`).join('')}
          ${extraLines.map(l => `<div style="font-style:italic;">${l}</div>`).join('')}
          ${addons.length > 0 ? `<div style="margin-top:4px;color:#888;">Base: $${c.basePrice} + ${addons.join(' + ')}</div>` : ''}
        </div>`
    }
    return `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;">${item.name}${details}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:right;">$${item.price} CAD</td>
      </tr>`
  }).join('')

  const html = `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#2D2D2D;">
      <div style="background:linear-gradient(135deg,#FFF0ED,#FFD5CC);padding:24px 32px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:22px;color:#F88379;">New Balloon Order</h1>
      </div>
      <div style="padding:24px 32px;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;">
        <h3 style="margin:0 0 12px;color:#F88379;">Customer Details</h3>
        <table style="width:100%;font-size:14px;margin-bottom:24px;">
          <tr><td style="padding:4px 0;color:#888;width:140px;">Name</td><td>${customer.name}</td></tr>
          <tr><td style="padding:4px 0;color:#888;">Phone</td><td>${customer.phone}</td></tr>
          <tr><td style="padding:4px 0;color:#888;">Email</td><td><a href="mailto:${customer.email}">${customer.email}</a></td></tr>
          <tr><td style="padding:4px 0;color:#888;">Delivery Address</td><td>${customer.address}</td></tr>
          <tr><td style="padding:4px 0;color:#888;">Delivery Date</td><td>${customer.date}</td></tr>
          <tr><td style="padding:4px 0;color:#888;">Preferred Time</td><td>${customer.time || 'Not specified'}</td></tr>
        </table>

        <h3 style="margin:0 0 12px;color:#F88379;">Order Items</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px;">
          <tr style="background:#FFF0ED;">
            <th style="padding:10px 12px;text-align:left;">Item</th>
            <th style="padding:10px 12px;text-align:center;">Qty</th>
            <th style="padding:10px 12px;text-align:right;">Price</th>
          </tr>
          ${itemRows}
        </table>

        <div style="text-align:right;font-size:18px;font-weight:700;color:#F88379;padding:12px 0;border-top:2px solid #F88379;">
          Total: $${total} CAD
        </div>

        ${customer.notes ? `
        <div style="margin-top:20px;padding:14px;background:#FFF0ED;border-radius:8px;">
          <strong style="color:#F88379;">Special Notes:</strong>
          <p style="margin:6px 0 0;color:#555;">${customer.notes}</p>
        </div>` : ''}

        <p style="margin-top:24px;font-size:12px;color:#aaa;">Satin ribbons included with every balloon. Free delivery within Calgary urban area.</p>
      </div>
    </div>`

  try {
    const result = await resend.emails.send({
      from: 'Balloons Calgary <orders@resend.dev>',
      to: ['donchenko.veronika96@gmail.com'],
      subject: `New Order from ${customer.name}`,
      html,
    })
    console.log('[order] Resend response:', JSON.stringify(result, null, 2))

    if (result.error) {
      console.error('[order] Resend returned error:', result.error)
      return Response.json({ success: false, error: result.error.message }, { status: 500 })
    }

    return Response.json({ success: true, id: result.data?.id })
  } catch (error) {
    console.error('[order] Resend threw exception:', error.message || error)
    return Response.json({ success: false, error: error.message || 'Failed to send email' }, { status: 500 })
  }
}
