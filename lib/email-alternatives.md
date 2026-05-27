# Alternative Email Services

If you prefer not to use Resend, here are alternative email service configurations:

## Option 1: Formspree (Easiest)

### Setup
1. Go to https://formspree.io
2. Sign up for free account
3. Create a new form
4. Get your form endpoint

### Implementation
Replace the API route content in `app/api/submit-application/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to submit');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
```

## Option 2: EmailJS

### Setup
1. Go to https://www.emailjs.com
2. Sign up for free account
3. Add email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your Service ID, Template ID, and Public Key

### Implementation
Install EmailJS:
```bash
npm install @emailjs/browser
```

Update `components/sections/ApplicationForm.tsx`:

```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
try {
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      employmentStatus: formData.employmentStatus,
      monthlyIncome: formData.monthlyIncome,
      loanAmount: formData.loanAmount,
      loanPurpose: formData.loanPurpose,
      additionalNotes: formData.additionalNotes,
    },
    'YOUR_PUBLIC_KEY'
  );

  setIsSuccess(true);
  // WhatsApp redirect...
} catch (error) {
  setErrors({ submit: 'Failed to submit application. Please try again.' });
}
```

## Option 3: Nodemailer (Self-hosted)

### Setup
Install dependencies:
```bash
npm install nodemailer
```

### Implementation
Create `app/api/submit-application/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Loan Application - ${body.fullName}`,
      html: `
        <h2>New Loan Application</h2>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>State:</strong> ${body.state}</p>
        <p><strong>Employment:</strong> ${body.employmentStatus}</p>
        <p><strong>Monthly Income:</strong> $${body.monthlyIncome}</p>
        <p><strong>Loan Amount:</strong> $${body.loanAmount}</p>
        <p><strong>Purpose:</strong> ${body.loanPurpose}</p>
        ${body.additionalNotes ? `<p><strong>Notes:</strong> ${body.additionalNotes}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
```

Add to `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=miracleinvestment32@gmail.com
```

## Recommendation

**For beginners**: Use Formspree (no backend code needed)
**For flexibility**: Use Resend (best developer experience)
**For Gmail users**: Use EmailJS (easy Gmail integration)
**For full control**: Use Nodemailer (requires SMTP setup)
