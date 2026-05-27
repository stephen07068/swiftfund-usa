import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'whatsappNumber', 'state', 'employmentStatus', 'monthlyIncome', 'loanAmount', 'loanPurpose'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Format the email content
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #2563eb; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Loan Application</h1>
              <p>SwiftFund USA</p>
            </div>
            <div class="content">
              <p><strong>Submitted:</strong> ${timestamp}</p>
              
              <div class="field">
                <span class="label">Full Name</span>
                <div class="value">${body.fullName}</div>
              </div>
              
              <div class="field">
                <span class="label">Email Address</span>
                <div class="value">${body.email}</div>
              </div>
              
              <div class="field">
                <span class="label">Phone Number</span>
                <div class="value">${body.phone}</div>
              </div>
              
              <div class="field">
                <span class="label">WhatsApp Number</span>
                <div class="value">${body.whatsappNumber}</div>
              </div>
              
              <div class="field">
                <span class="label">State</span>
                <div class="value">${body.state}</div>
              </div>
              
              <div class="field">
                <span class="label">Employment Status</span>
                <div class="value">${body.employmentStatus}</div>
              </div>
              
              <div class="field">
                <span class="label">Monthly Income</span>
                <div class="value">$${parseFloat(body.monthlyIncome).toLocaleString()}</div>
              </div>
              
              <div class="field">
                <span class="label">Loan Amount Requested</span>
                <div class="value">$${parseFloat(body.loanAmount).toLocaleString()}</div>
              </div>
              
              <div class="field">
                <span class="label">Loan Purpose</span>
                <div class="value">${body.loanPurpose}</div>
              </div>
              
              ${body.additionalNotes ? `
              <div class="field">
                <span class="label">Additional Notes</span>
                <div class="value">${body.additionalNotes}</div>
              </div>
              ` : ''}
              
              <div class="footer">
                <p>This application was submitted through SwiftFund USA's secure online form.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    console.log('Attempting to send email to:', process.env.EMAIL_TO);
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'miracleinvestment32@gmail.com',
      subject: `New Loan Application - ${body.fullName}`,
      html: emailHtml,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
