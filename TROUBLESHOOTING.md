# Troubleshooting Guide - SwiftFund USA

Common issues and their solutions.

## 🔧 Installation Issues

### Issue: "npm is not recognized"

**Symptoms:**
```
'npm' is not recognized as an internal or external command
```

**Solutions:**
1. Install Node.js from https://nodejs.org
2. Restart your terminal/computer
3. Verify installation: `node --version`
4. Check PATH environment variable includes Node.js

---

### Issue: "Cannot be loaded because running scripts is disabled"

**Symptoms:**
```
File cannot be loaded because running scripts is disabled on this system
```

**Solution (Windows PowerShell):**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Run PowerShell as Administrator if needed.

---

### Issue: "EACCES: permission denied"

**Symptoms:**
```
Error: EACCES: permission denied, mkdir
```

**Solutions:**

**Windows:**
```powershell
# Run terminal as Administrator
```

**Mac/Linux:**
```bash
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
```

---

### Issue: "Module not found" after installation

**Symptoms:**
```
Error: Cannot find module 'next'
```

**Solution:**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Windows:**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 🌐 Development Server Issues

### Issue: Port 3000 already in use

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution 1 - Use different port:**
```bash
npm run dev -- -p 3001
```

**Solution 2 - Kill process (Windows):**
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

**Solution 2 - Kill process (Mac/Linux):**
```bash
lsof -ti:3000 | xargs kill -9
```

---

### Issue: "Error: ENOENT: no such file or directory"

**Symptoms:**
```
Error: ENOENT: no such file or directory, open '.env'
```

**Solution:**
```bash
# Create .env file from example
cp .env.example .env

# Windows
copy .env.example .env
```

Then edit `.env` with your API keys.

---

### Issue: Page shows blank/white screen

**Symptoms:**
- Browser shows blank page
- No errors in terminal

**Solutions:**
1. Check browser console (F12) for errors
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode
4. Restart development server
5. Check if JavaScript is enabled

---

## 📧 Email/Form Issues

### Issue: Form submission fails silently

**Symptoms:**
- Form submits but nothing happens
- No success message
- No email received

**Solutions:**

1. **Check browser console (F12):**
   - Look for red error messages
   - Check Network tab for failed requests

2. **Verify .env file:**
   ```env
   RESEND_API_KEY=re_your_actual_key  # Must start with "re_"
   EMAIL_TO=miracleinvestment32@gmail.com
   EMAIL_FROM=onboarding@resend.dev
   ```

3. **Restart development server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

4. **Check Resend dashboard:**
   - Go to https://resend.com/emails
   - Check if emails are being sent
   - Look for error messages

---

### Issue: "Invalid API key" error

**Symptoms:**
```
Error: Invalid API key
```

**Solutions:**
1. Verify API key in Resend dashboard
2. Check `.env` file has correct key
3. Ensure no extra spaces in `.env`
4. Restart development server after changing `.env`
5. Create new API key if needed

---

### Issue: Email not received

**Symptoms:**
- Form submits successfully
- No email in inbox

**Solutions:**
1. **Check spam folder**
2. **Verify email address in `.env`**
3. **Check Resend dashboard:**
   - Go to https://resend.com/emails
   - See if email was sent
   - Check delivery status
4. **For custom domains:**
   - Verify domain in Resend
   - Add DNS records
   - Wait for verification

---

### Issue: Form validation not working

**Symptoms:**
- Can submit empty form
- No error messages

**Solutions:**
1. Check browser console for JavaScript errors
2. Clear browser cache
3. Verify `ApplicationForm.tsx` has validation logic
4. Check if form fields have `required` attribute

---

## 🎨 Styling Issues

### Issue: Tailwind styles not applying

**Symptoms:**
- Components look unstyled
- No colors or spacing

**Solutions:**
1. **Verify Tailwind is installed:**
   ```bash
   npm list tailwindcss
   ```

2. **Check `tailwind.config.ts` content paths:**
   ```typescript
   content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
   ]
   ```

3. **Restart development server**

4. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

### Issue: Animations not working

**Symptoms:**
- No fade-in or slide-up effects

**Solutions:**
1. Check `app/globals.css` has animation keyframes
2. Verify `tailwind.config.ts` has animation config
3. Clear browser cache
4. Check browser console for errors

---

## 🚀 Build/Deployment Issues

### Issue: Build fails with TypeScript errors

**Symptoms:**
```
Type error: Property 'X' does not exist on type 'Y'
```

**Solutions:**
1. **Fix TypeScript errors:**
   - Read error messages carefully
   - Add missing type definitions
   - Fix type mismatches

2. **Skip type checking (not recommended):**
   ```json
   // next.config.mjs
   typescript: {
     ignoreBuildErrors: true,
   }
   ```

---

### Issue: Build succeeds but site doesn't work

**Symptoms:**
- `npm run build` succeeds
- Production site shows errors

**Solutions:**
1. **Test production build locally:**
   ```bash
   npm run build
   npm start
   ```

2. **Check environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Verify all variables are set
   - Redeploy after adding variables

3. **Check Vercel deployment logs:**
   - Go to Deployments tab
   - Click on deployment
   - Check build logs for errors

---

### Issue: "Module not found" in production

**Symptoms:**
- Works locally
- Fails in production

**Solutions:**
1. **Check import paths:**
   - Use `@/` alias for imports
   - Ensure case-sensitive paths (Linux is case-sensitive)

2. **Verify all dependencies in `package.json`:**
   ```bash
   npm install --save missing-package
   ```

3. **Clear Vercel cache and redeploy**

---

## 🔒 Environment Variable Issues

### Issue: Environment variables not working

**Symptoms:**
- `process.env.VARIABLE_NAME` is undefined
- API calls fail

**Solutions:**

1. **For local development:**
   - Ensure `.env` file exists in root
   - Restart development server after changes
   - Check for typos in variable names

2. **For production (Vercel):**
   - Add variables in Vercel dashboard
   - Go to Project Settings → Environment Variables
   - Redeploy after adding variables

3. **Check variable naming:**
   - Server-side: Any name works
   - Client-side: Must start with `NEXT_PUBLIC_`

---

### Issue: API key exposed in browser

**Symptoms:**
- Can see API key in browser console
- Security warning

**Solution:**
- **Never use API keys in client components**
- Keep API calls in API routes (`app/api/`)
- Use server-side only variables

---

## 📱 Mobile/Responsive Issues

### Issue: Mobile menu not working

**Symptoms:**
- Hamburger icon doesn't open menu
- Menu doesn't close

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify `Navbar.tsx` has click handlers
3. Test in different browsers
4. Clear browser cache

---

### Issue: Layout broken on mobile

**Symptoms:**
- Horizontal scrolling
- Elements overflow
- Text too small

**Solutions:**
1. **Check responsive classes:**
   - Use `md:` and `lg:` prefixes
   - Test at different breakpoints

2. **Add viewport meta tag** (should be in `layout.tsx`):
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

3. **Test in browser dev tools:**
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test different screen sizes

---

## 🔗 WhatsApp Redirect Issues

### Issue: WhatsApp redirect not working

**Symptoms:**
- Success screen shows but no redirect
- WhatsApp doesn't open

**Solutions:**
1. **Check WhatsApp number format:**
   ```env
   WHATSAPP_NUMBER=15855149783  # No + or spaces
   ```

2. **Verify redirect code in `ApplicationForm.tsx`:**
   ```typescript
   window.location.href = `https://wa.me/${number}?text=${message}`;
   ```

3. **Test WhatsApp link manually:**
   - Open: https://wa.me/15855149783
   - Should open WhatsApp

4. **Check browser console for errors**

---

## 🐛 General Debugging Tips

### Enable Detailed Error Messages

**In development:**
- Errors show automatically
- Check browser console (F12)
- Check terminal output

**In production:**
- Check Vercel logs
- Add console.log statements
- Use Vercel Analytics

---

### Clear All Caches

```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Clear node_modules
rm -rf node_modules
npm install

# Restart development server
npm run dev
```

**Windows:**
```powershell
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm cache clean --force
npm install
npm run dev
```

---

### Check Browser Console

1. Open browser (Chrome/Edge/Firefox)
2. Press F12 or right-click → Inspect
3. Go to Console tab
4. Look for red error messages
5. Read error messages carefully

---

### Check Network Requests

1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit form
4. Look for failed requests (red)
5. Click on request to see details

---

## 📞 Getting Help

### Before Asking for Help

1. ✅ Check this troubleshooting guide
2. ✅ Read error messages carefully
3. ✅ Check browser console
4. ✅ Try clearing caches
5. ✅ Search error message online

### Information to Provide

When asking for help, include:
- Error message (full text)
- What you were trying to do
- What you expected to happen
- What actually happened
- Browser and OS version
- Node.js version (`node --version`)
- Steps to reproduce

### Useful Commands for Debugging

```bash
# Check versions
node --version
npm --version

# Check installed packages
npm list

# Check for outdated packages
npm outdated

# Verify Next.js installation
npm list next

# Check environment
npm run env
```

---

## ✅ Quick Fixes Checklist

Try these in order:

- [ ] Restart development server
- [ ] Clear browser cache
- [ ] Check browser console for errors
- [ ] Verify `.env` file exists and is correct
- [ ] Delete `node_modules` and reinstall
- [ ] Delete `.next` folder
- [ ] Update all packages: `npm update`
- [ ] Try different browser
- [ ] Restart computer

---

**Still having issues?**
- Review README.md for detailed setup
- Check QUICK_START.md for simplified guide
- Review WINDOWS_SETUP.md (Windows users)
- Check official Next.js docs: https://nextjs.org/docs
- Check Resend docs: https://resend.com/docs
