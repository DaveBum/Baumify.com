# 🚀 Quick Setup: Auto-Deploy to Cloudflare

## Follow These 5 Steps:

### 1️⃣ Go to Cloudflare
Visit: https://dash.cloudflare.com/

### 2️⃣ Create Pages Project
- Click **"Workers & Pages"**
- Click **"Create application"**
- Click **"Pages"** tab
- Click **"Connect to Git"**

### 3️⃣ Connect GitHub
- Authorize Cloudflare to access your GitHub
- Select the **"DaveBum/Baumify.com"** repository

### 4️⃣ Configure Build Settings
```
Project name: baumify
Production branch: main
Framework preset: Vite
Build command: npm install && npm run build
Build output directory: dist
```

**Add Environment Variable:**
```
NODE_VERSION = 22
```

### 5️⃣ Deploy!
Click **"Save and Deploy"**

---

## ✅ That's It!

Now every time you push to GitHub, Cloudflare will:
1. Detect the push
2. Build your site
3. Deploy automatically
4. Update baumify.com within 1-2 minutes

No GitHub Actions needed!
No API tokens needed!
Just push and deploy! 🎉

---

## 🔗 Custom Domain Setup

After first deployment:
1. Go to your project in Cloudflare Pages
2. Click **"Custom domains"**
3. Add `baumify.com` and `www.baumify.com`
4. Follow the DNS instructions

---

## 📝 Troubleshooting

**Build fails?**
- Make sure `NODE_VERSION = 22` is set in Environment Variables
- Check the build command is: `npm install && npm run build`
- Check the output directory is: `dist`

**Domain not working?**
- Make sure DNS is pointing to Cloudflare
- Wait a few minutes for DNS to propagate
- Check SSL/TLS settings in Cloudflare

---

**Need help?** Check the build logs in Cloudflare Pages dashboard.
