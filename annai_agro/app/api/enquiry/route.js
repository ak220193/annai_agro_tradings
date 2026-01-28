import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Check if variables are loading from .env
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
       console.error("CRITICAL: Environment variables are missing!");
       return NextResponse.json({ error: "Server configuration missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Force a connection test
    try {
      await transporter.verify();
      console.log("✅ Zoho Connection: Success");
    } catch (connError) {
      console.error("❌ Zoho Connection Failed:", connError.message);
      return NextResponse.json({ error: "SMTP Connection Failed" }, { status: 500 });
    }

    // 2. Attempt to send
    const info = await transporter.sendMail({
      from: `"Annai Agro Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, 
      replyTo: body.email,
      subject: `Inquiry: ${body.subject}`,
      html: `<h3>New Inquiry</h3><p>Name: ${body.name}</p><p>${body.message}</p>`,
    });

    console.log("🚀 Mail Sent ID:", info.messageId);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("🔥 Global API Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}