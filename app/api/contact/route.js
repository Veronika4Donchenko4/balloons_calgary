import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  console.log('[contact] RESEND_API_KEY loaded:', process.env.RESEND_API_KEY ? `yes (${process.env.RESEND_API_KEY.slice(0, 8)}...)` : 'NO — missing!')

  const { name, email, phone, message } = await request.json()
  console.log('[contact] Received form data:', { name, email, phone, message: message?.slice(0, 50) })

  const html = `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#2D2D2D;">
      <div style="background:linear-gradient(135deg,#FFF0ED,#FFD5CC);padding:24px 32px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:22px;color:#F88379;">New Contact Message</h1>
      </div>
      <div style="padding:24px 32px;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;font-size:14px;margin-bottom:24px;">
          <tr><td style="padding:8px 0;color:#888;width:100px;vertical-align:top;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Phone</td><td style="padding:8px 0;">${phone || 'Not provided'}</td></tr>
        </table>
        <div style="padding:16px;background:#FFF0ED;border-radius:8px;">
          <strong style="color:#F88379;">Message:</strong>
          <p style="margin:8px 0 0;color:#555;white-space:pre-wrap;line-height:1.6;">${message}</p>
        </div>
      </div>
    </div>`

  try {
    const result = await resend.emails.send({
      from: 'Balloons Calgary <orders@resend.dev>',
      to: ['donchenko.veronika96@gmail.com'],
      replyTo: email,
      subject: `New Message from ${name}`,
      html,
    })
    console.log('[contact] Resend response:', JSON.stringify(result, null, 2))

    if (result.error) {
      console.error('[contact] Resend returned error:', result.error)
      return Response.json({ success: false, error: result.error.message }, { status: 500 })
    }

    return Response.json({ success: true, id: result.data?.id })
  } catch (error) {
    console.error('[contact] Resend threw exception:', error.message || error)
    return Response.json({ success: false, error: error.message || 'Failed to send message' }, { status: 500 })
  }
}
