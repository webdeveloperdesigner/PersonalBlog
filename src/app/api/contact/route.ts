import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Engine 1: Web3Forms (Sole Primary Engine)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (web3formsKey) {
      try {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            from_name: 'Vivek Portfolio System',
            subject: `⚡ Portfolio Inquiry from ${name}`,
            name,
            email,
            replyto: email,
            company: company || 'Not specified',
            message
          })
        });

        const rawText = await web3Res.text();
        let web3Data: any = {};
        try {
          web3Data = JSON.parse(rawText);
        } catch {
          console.warn('Web3Forms returned non-JSON response (Cloudflare block).');
        }

        if (web3Data.success) {
          return NextResponse.json({ success: true, method: 'web3forms' });
        }
      } catch (e) {
        console.warn('Web3Forms server API delivery failed...', e);
      }
    }

    /*
    // PAUSED: Direct Gmail SMTP Engine (Nodemailer)
    // PAUSED: FormSubmit Relay Engine
    */

    return NextResponse.json(
      { success: false, error: 'The contact form is temporarily unavailable. Please reach out directly via email at vivekxdev01@gmail.com for an instant response.' },
      { status: 500 }
    );

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
