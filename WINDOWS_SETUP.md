# Windows Setup Guide - SwiftFund USA

Complete guide for setting up the project on Windows.

## Prerequisites Installation

### 1. Install Node.js

1. Go to https://nodejs.org
2. Download the **LTS version** (recommended)
3. Run the installer
4. Check "Automatically install necessary tools" during installation
5. Restart your computer

**Verify Installation:**
Open Command Prompt or PowerShell:
```powershell
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x and 10.x.x).

### 2. Install Git (Optional, for version control)

1. Go to https://git-scm.com/download/win
2. Download and run installer
3. Use default settings

## Project Setup

### Step 1: Navigate to Project Folder

Open Command Prompt or PowerShell:

```powershell
cd "C:\Users\YourUsername\Desktop\LOAN WEBSITE"
```

Or simply:
1. Open the project folder in File Explorer
2. Type `cmd` in the address bar
3. Press Enter

### Step 2: Install Dependencies

```powershell
npm install
```

**If you see errors about execution policy:**

Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try `npm install` again.

### Step 3: Create Environment File

**Option A: Using Command Prompt**
```cmd
copy .env.example .env
```

**Option B: Using PowerShell**
```powershell
Copy-Item .env.example .env
```

**Option C: Manually**
1. Open `.env.example` in Notepad
2. Save As → `.env` (make sure "All Files" is selected, not "Text Documents")

### Step 4: Edit Environment File

Open `.env` in Notepad or VS Code and add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_key_here
EMAIL_TO=miracleinvestment32@gmail.com
EMAIL_FROM=onboarding@resend.dev
WHATSAPP_NUMBER=15855149783
```

**Get Resend API Key:**
1. Go to https://resend.com
2. Sign up (free)
3. Go to API Keys
4. Create new key
5. Copy and paste into `.env`

### Step 5: Run Development Server

```powershell
npm run dev
```

Open browser: http://localhost:3000

## Common Windows Issues

### Issue 1: "npm is not recognized"

**Solution:**
1. Reinstall Node.js
2. Make sure to check "Add to PATH" during installation
3. Restart computer

### Issue 2: "Cannot be loaded because running scripts is disabled"

**Solution:**
Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue 3: Port 3000 already in use

**Solution:**
```powershell
npm run dev -- -p 3001
```

Or kill the process using port 3000:
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Issue 4: "ENOENT: no such file or directory"

**Solution:**
Make sure you're in the correct directory:
```powershell
cd path\to\swiftfund-usa
```

### Issue 5: Long path names error

**Solution:**
Enable long paths in Windows:
1. Run Command Prompt as Administrator
2. Execute:
```cmd
reg add HKLM\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f
```
3. Restart computer

### Issue 6: Antivirus blocking npm

**Solution:**
Temporarily disable antivirus or add exception for:
- Node.js installation folder
- Project folder
- npm cache folder (`C:\Users\YourUsername\AppData\Roaming\npm-cache`)

## Using Different Terminals

### Command Prompt (cmd)
```cmd
cd C:\path\to\project
npm install
npm run dev
```

### PowerShell
```powershell
cd C:\path\to\project
npm install
npm run dev
```

### Git Bash (if installed)
```bash
cd /c/path/to/project
npm install
npm run dev
```

### VS Code Terminal
1. Open project folder in VS Code
2. Terminal → New Terminal
3. Run commands as normal

## Recommended: Use VS Code

### Install VS Code
1. Download from https://code.visualstudio.com
2. Install with default settings

### Open Project in VS Code
1. Open VS Code
2. File → Open Folder
3. Select your project folder
4. Terminal → New Terminal (Ctrl + `)

### Recommended Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Building for Production

### Create Production Build
```powershell
npm run build
```

### Test Production Build Locally
```powershell
npm start
```

## Deploying to Vercel

### Option 1: Vercel Dashboard (Easiest)

1. Create GitHub account (if you don't have one)
2. Install GitHub Desktop: https://desktop.github.com
3. Create new repository and push your code
4. Go to https://vercel.com
5. Sign up with GitHub
6. Click "New Project"
7. Import your repository
8. Add environment variables:
   - `RESEND_API_KEY`
   - `EMAIL_TO`
   - `EMAIL_FROM`
   - `WHATSAPP_NUMBER`
9. Click "Deploy"

### Option 2: Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login
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

## File Permissions

If you get permission errors:

1. Right-click project folder
2. Properties → Security
3. Edit → Add your user
4. Give "Full Control"
5. Apply to all subfolders

## Firewall Issues

If localhost doesn't work:

1. Windows Security → Firewall & network protection
2. Allow an app through firewall
3. Add Node.js
4. Allow for Private and Public networks

## Clean Installation

If nothing works, try clean install:

```powershell
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

## Getting Help

### Check Logs
Look for error messages in:
- Terminal output
- Browser console (F12)
- Network tab (F12 → Network)

### Common Error Messages

**"Module not found"**
→ Run `npm install`

**"Port already in use"**
→ Use different port: `npm run dev -- -p 3001`

**"Cannot find module 'next'"**
→ Delete node_modules and reinstall

**"EACCES: permission denied"**
→ Run terminal as Administrator

## Success Checklist

- [ ] Node.js installed and verified
- [ ] Project folder opened in terminal
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created and configured
- [ ] Resend API key added
- [ ] Development server running (`npm run dev`)
- [ ] Browser showing site at localhost:3000
- [ ] Form submission tested
- [ ] Email received
- [ ] WhatsApp redirect working

## Next Steps

Once everything works:
1. Test all features thoroughly
2. Customize content and styling
3. Deploy to Vercel
4. Configure custom domain (optional)
5. Set up monitoring and analytics

---

**Need More Help?**
- Check README.md for detailed documentation
- Review QUICK_START.md for simplified guide
- Check Node.js documentation: https://nodejs.org/docs
- Check Next.js documentation: https://nextjs.org/docs
