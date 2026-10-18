import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const MAX_BYTES = 5 * 1024 * 1024

const esc = (v) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export async function POST(request) {
  const form = await request.formData()
  const f = (k) => String(form.get(k) ?? '').trim()
  const name = f('name'), email = f('email'), phone = f('phone'), eventDate = f('eventDate')

  if (!name || !email || !phone || !eventDate) {
    return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
  }

  const attachments = []
  const photo = form.get('photo')
  if (photo && typeof photo === 'object' && photo.size > 0) {
    if (!photo.type.startsWith('image/') || photo.size > MAX_BYTES) {
      return Response.json({ success: false, error: 'Invalid reference photo' }, { status: 400 })
    }
    attachments.push({
      filename: (photo.name || 'reference').replace(/[^\w.-]/g, '_'),
      content: Buffer.from(await photo.arrayBuffer()),
    })
  }

  const rows = [
    ['Name', esc(name)],
    ['Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
    ['Phone', esc(phone)],
    ['Event Type', esc(f('eventType') || 'Not specified')],
    ['Event Date', esc(eventDate)],
    ['Preferred Colours', esc(f('colours') || 'Not specified')],
    ['Budget', esc(f('budget') || 'Not specified')],
    ['Reference Photo', attachments.length ? 'Attached' : 'None'],
  ].map(([k, v]) => `<tr><td style="padding:8px 0;color:#888;width:140px;vertical-align:top;">${k}</td><td style="padding:8px 0;">${v}</td></tr>`).join('')

  const html = `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#2D2D2D;">
      <div style="background:#E8DDD3;padding:24px 32px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:22px;color:#2D2D2D;">New Custom Order Request</h1>
      </div>
      <div style="padding:24px 32px;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;font-size:14px;margin-bottom:24px;">${rows}</table>
        <div style="padding:16px;background:#FAFAF8;border-radius:8px;">
          <strong>Description:</strong>
          <p style="margin:8px 0 0;color:#555;white-space:pre-wrap;line-height:1.6;">${esc(f('description') || 'Not provided')}</p>
        </div>
      </div>
    </div>`

  try {
    const result = await resend.emails.send({
      from: 'Balloons Calgary <orders@balloonscalgary.ca>',
      to: ['ballooncalgary@gmail.com', 'nik.sar.devs@gmail.com'],
      replyTo: email,
      subject: `Custom Order Request from ${name}`,
      html,
      attachments,
    })
    if (result.error) {
      console.error('[custom-order] Resend error:', result.error)
      return Response.json({ success: false, error: result.error.message }, { status: 500 })
    }
    return Response.json({ success: true, id: result.data?.id })
  } catch (error) {
    console.error('[custom-order] Resend threw:', error.message || error)
    return Response.json({ success: false, error: 'Failed to send request' }, { status: 500 })
  }
}
