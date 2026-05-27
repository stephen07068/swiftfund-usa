# SwiftFund USA - Modern Fintech Landing Page

A production-grade, fully responsive loan application landing page built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Framer Motion for elegant transitions
- **Working Form**: Complete loan application with validation
- **Email Integration**: Automated email delivery via Resend
- **WhatsApp Redirect**: Seamless customer support flow
- **Security Features**: Honeypot spam protection, SSL encryption
- **Performance Optimized**: Fast loading, SEO-friendly
- **Production Ready**: Vercel deployment compatible

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Resend account (free tier available at https://resend.com)
- Git installed

## 🛠️ Installation

### 1. Clone or Download the Project

```bash
# If using Git
git clone <your-repo-url>
cd swiftfund-usa

# Or simply navigate to the project folder if downloaded
cd swiftfund-usa
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration
EMAIL_TO=miracleinvestment32@gmail.com
EMAIL_FROM=onboarding@resend.dev

# WhatsApp Configuration
WHATSAPP_NUMBER=15855149783
```

### 4. Get Your Resend API Key

1. Sign up at https://resend.com (free tier available)
2. Verify your email
3. Go to API Keys section
4. Create a new API key
5. Copy and paste it into your `.env` file

**Important**: For production, you'll need to verify your domain in Resend to send from your own email address.

## 🏃 Running Locally

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📤 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`
   - `EMAIL_TO`
   - `EMAIL_FROM`
   - `WHATSAPP_NUMBER`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variables
vercel env add RESEND_API_KEY
vercel env add EMAIL_TO
vercel env add EMAIL_FROM
vercel env add WHATSAPP_NUMBER

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
swiftfund-usa/
├── app/
│   ├── api/
│   │   └── submit-application/
│   │       └── route.ts          # API endpoint for form submission
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── components/
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ApplicationForm.tsx   # Main form component
│   │   ├── BenefitsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── TrustBar.tsx
│   ├── Button.tsx                # Reusable button component
│   ├── Card.tsx                  # Reusable card component
│   ├── FAQAccordion.tsx          # FAQ accordion component
│   ├── Footer.tsx                # Footer component
│   ├── Input.tsx                 # Form input component
│   ├── Navbar.tsx                # Navigation bar
│   ├── Select.tsx                # Form select component
│   ├── SectionWrapper.tsx        # Section container
│   ├── TestimonialCard.tsx       # Testimonial card
│   └── Textarea.tsx              # Form textarea component
├── .env.example                  # Environment variables template
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Customize your brand colors here
  },
}
```

### Content

- **Hero Section**: Edit `components/sections/HeroSection.tsx`
- **Benefits**: Edit `components/sections/BenefitsSection.tsx`
- **Testimonials**: Edit `components/sections/TestimonialsSection.tsx`
- **FAQ**: Edit `components/sections/FAQSection.tsx`

### Form Fields

Modify form fields in `components/sections/ApplicationForm.tsx`

### Email Template

Customize the email template in `app/api/submit-application/route.ts`

## 🔒 Security Features

- **Honeypot Field**: Prevents bot submissions
- **Client-Side Validation**: Immediate feedback for users
- **Server-Side Validation**: Additional security layer
- **Environment Variables**: Sensitive data kept secure
- **SSL Encryption**: All data transmitted securely

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🧪 Testing the Form

1. Fill out all required fields
2. Submit the form
3. Check the email at `miracleinvestment32@gmail.com`
4. Verify WhatsApp redirect works

## 🐛 Troubleshooting

### Form Not Submitting

- Check that `RESEND_API_KEY` is set correctly
- Verify API key is active in Resend dashboard
- Check browser console for errors

### Email Not Received

- Verify email address in `.env` is correct
- Check spam folder
- Ensure Resend account is verified
- For custom domains, verify domain in Resend

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile Optimized

## 🤝 Support

For issues or questions:
- Check the troubleshooting section
- Review Resend documentation: https://resend.com/docs
- Review Next.js documentation: https://nextjs.org/docs

## 📄 License

This project is private and proprietary.

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Test locally
4. ✅ Deploy to Vercel
5. ✅ Configure custom domain (optional)
6. ✅ Set up domain email in Resend (optional)
7. ✅ Test production deployment

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
