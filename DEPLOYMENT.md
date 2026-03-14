# DEPLOYMENT GUIDE - Attention Intelligence Website

**Goal:** Deploy landing page + privacy policy to Vercel (free hosting)

---

## 🚀 OPTION 1: Deploy via Vercel Dashboard (EASIEST)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `attention-intelligence-web`
3. Description: "Landing page for Attention Intelligence Chrome extension"
4. Privacy: Public (or Private, your choice)
5. Click "Create repository"

### Step 2: Upload Files to GitHub

**From your computer:**
```bash
cd /path/to/attention-intelligence-web
git init
git add .
git commit -m "Initial commit - landing page + privacy policy"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/attention-intelligence-web.git
git push -u origin main
```

**Or upload via GitHub web interface:**
1. Click "uploading an existing file"
2. Drag the entire `attention-intelligence-web` folder
3. Commit changes

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/signup
2. Sign up with GitHub (easiest)
3. Click "Add New" → "Project"
4. Import `attention-intelligence-web` repository
5. Framework: Next.js (auto-detected)
6. Click "Deploy"
7. Wait 2-3 minutes
8. Done! You get a free URL: `https://attention-intelligence-web.vercel.app`

---

## 🚀 OPTION 2: Deploy via Vercel CLI (FOR DEVELOPERS)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

Enter your email → Check email for verification link

### Step 3: Deploy

```bash
cd /path/to/attention-intelligence-web
vercel
```

Follow prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- Project name? `attention-intelligence-web`
- In which directory is your code? **.**
- Want to override settings? **N**

Deploy command:
```bash
vercel --prod
```

---

## 🌐 CUSTOM DOMAIN (Optional)

### Option A: Buy Domain + Connect to Vercel

1. Buy domain from:
   - Namecheap: ~$12/year for .com
   - GoDaddy: ~$15/year for .com  
   - Google Domains: ~$12/year for .com

2. In Vercel dashboard:
   - Go to your project
   - Settings → Domains
   - Add `attentionintelligence.com`
   - Follow DNS instructions

3. Update nameservers at domain registrar:
   - Copy Vercel nameservers
   - Paste in domain registrar settings
   - Wait 24-48 hours for DNS propagation

### Option B: Use Free Vercel Subdomain

Just use: `https://attention-intelligence-web.vercel.app`

**Pros:**
- Free
- Works immediately
- HTTPS included
- Good enough for Chrome Web Store

**Cons:**
- Longer URL
- Can't customize domain

---

## 📋 AFTER DEPLOYMENT CHECKLIST

### 1. Test the Site

Visit your Vercel URL and check:
- [ ] Landing page loads
- [ ] All sections visible (Hero, Features, How It Works, etc.)
- [ ] Privacy policy page works (`/privacy`)
- [ ] Links work
- [ ] Mobile responsive

### 2. Copy Privacy Policy URL

You need this for Chrome Web Store:

**Format:**
- Vercel subdomain: `https://attention-intelligence-web.vercel.app/privacy`
- Custom domain: `https://attentionintelligence.com/privacy`

**Save this URL!** You'll paste it in Chrome Web Store submission.

### 3. Update "Add to Chrome" Links

After Chrome Web Store approval:

1. Edit `app/page.tsx`
2. Find all `href="#"` (there are 3)
3. Replace with: `https://chrome.google.com/webstore/detail/YOUR-EXTENSION-ID`
4. Commit and push (auto-deploys to Vercel)

---

## 🔧 TROUBLESHOOTING

### Build Fails

**Error:** `Module not found`
**Fix:** Make sure all files are uploaded, especially:
- `package.json`
- `next.config.js`
- `tailwind.config.ts`
- `tsconfig.json`

### Page Not Found (404)

**Error:** Privacy policy shows 404
**Fix:** Make sure `app/privacy/page.tsx` exists

### Styling Broken

**Error:** No CSS styles
**Fix:** 
1. Check `app/globals.css` exists
2. Check `tailwind.config.ts` has correct content paths

### Slow Build

Normal. First build takes 3-5 minutes. Subsequent builds: 1-2 minutes.

---

## 📊 VERCEL FREE TIER LIMITS

**What you get for FREE:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Automatic preview deployments
- Custom domains (unlimited)

**Limits:**
- 100 GB bandwidth (enough for 100,000+ visitors/month)
- 100 builds/day (more than enough)

**You won't hit limits** unless you go viral (which would be a good problem).

---

## 🎯 RECOMMENDED APPROACH

**For Launch (March 20):**

1. **Use Vercel free subdomain** (don't buy domain yet)
   - Deploy today
   - Get privacy policy URL
   - Submit to Chrome Web Store

2. **After Chrome approval** (March 16-18):
   - Consider buying custom domain
   - Update store listing with new domain
   - Or keep free subdomain (works fine)

3. **Why wait on domain?**
   - Chrome review takes 1-3 days
   - No need to rush on domain
   - Free subdomain works for submission
   - Can always upgrade later

---

## 📝 DEPLOYMENT SUMMARY

**Fastest path to deployment:**

1. Create GitHub repo (5 min)
2. Upload files (2 min)
3. Deploy to Vercel (3 min)
4. Copy privacy policy URL (1 min)
5. **Total: 11 minutes**

**Privacy policy URL will be:**
`https://attention-intelligence-web.vercel.app/privacy`

**Use this URL in Chrome Web Store submission.**

---

## 🚀 READY TO DEPLOY?

**Follow Option 1 (Vercel Dashboard) if you:**
- Want easiest method
- Prefer visual interface
- Don't use command line much

**Follow Option 2 (Vercel CLI) if you:**
- Comfortable with terminal
- Want faster deployments
- Plan to update site frequently

---

**Next step after deployment:**
Take screenshots of extension → Write Chrome Web Store description → Submit!
