# 🚀 Quick Start Guide - SwiftFund USA

Get your landing page running in 5 minutes!

## Step 1: Install Node.js (if not installed)

Download from: https://nodejs.org (choose LTS version)

Verify installation:
```bash
node --version
npm --version
```

## Step 2: Install Dependencies

Open terminal in project folder and run:

```bash
npm install
```

This will install all required packages (~2-3 minutes).

## Step 3: Set Up Email Service

### Option A: Resend (Recommended)

1. Go to https://resend.com
2. Sign up (free tier: 100 emails/day)
3. Verify your email
4. Click "API Keys" → "Create API Key"
5. Copy the key (starts with `re_`)

### Option B: Formspree (Easier, No Code)

1. Go to https://formspree.io
2. Sign up (free tier: 50 submissions/month)
3. Create new form
4. Copy form ID
5. See `lib/email-alternatives.md` for setup

## Step 4: Configure Environment

Create `.env` file in project root:

```env
RESEND_API_KEY=re_paste_your_key_here
EMAIL_TO=miracleinvestment32@gmail.com
EMAIL_FROM=onboarding@resend.dev
WHATSAPP_NUMBER=15855149783
```

**Important**: Replace `re_paste_your_key_here` with your actual Resend API key!

## Step 5: Run Development Server

```bash
npm run dev
```

Open browser: http://localhost:3000

## Step 6: Test the Form

1. Fill out the application form
2. Click "Submit Application"
3. Check email at `miracleinvestment32@gmail.com`
4. Verify WhatsApp redirect

## Step 7: Deploy to Vercel

### Quick Deploy

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Add environment variables (same as `.env` file)
6. Click "Deploy"

Done! Your site will be live in ~2 minutes.

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` → `theme.extend.colors`

### Change Content
- Hero: `components/sections/HeroSection.tsx`
- Benefits: `components/sections/BenefitsSection.tsx`
- Testimonials: `components/sections/TestimonialsSection.tsx`

### Change Email Recipient
Edit `.env` → `EMAIL_TO=your-email@example.com`

### Change WhatsApp Number
Edit `.env` → `WHATSAPP_NUMBER=your_number_here`

## 🐛 Common Issues

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Form not submitting
- Check `.env` file exists
- Verify `RESEND_API_KEY` is correct
- Check browser console for errors

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

## 📞 Need Help?

1. Check `README.md` for detailed docs
2. Check `lib/email-alternatives.md` for other email options
3. Review error messages in browser console

## ✅ Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Resend account created
- [ ] API key added to `.env`
- [ ] Development server running
- [ ] Form tested successfully
- [ ] Ready to deploy!

---

**Next Steps**: Once everything works locally, deploy to Vercel for production!
