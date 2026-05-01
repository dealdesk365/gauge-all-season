import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !message || (!email && !phone)) {
      return NextResponse.json(
        { error: "Please fill in your name, a way to reach you, and a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "noreply@gaugesallseason.com",
      to: "gcclouthier@gmail.com",
      replyTo: email || undefined,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto;">
          <div style="background: #0d1f30; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #f97316; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 14px;">Gauge's All Season Services</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              ${email ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #111827;">${email}</td></tr>` : ""}
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0; color: #111827;">${phone}</td></tr>` : ""}
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message:</p>
              <p style="color: #111827; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            ${email ? `<div style="margin-top: 20px;"><a href="mailto:${email}" style="background: #f97316; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Reply to ${name}</a></div>` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Gauge Contact] Error:", err);
    return NextResponse.json({ error: "Failed to send message. Please call or text instead." }, { status: 500 });
  }
}
