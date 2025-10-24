# Cloudflare Pages Auto-Deployment Setup Guide

## Step 1: Get Your Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Use the **"Edit Cloudflare Workers"** template or create a custom token with these permissions:
   - Account > Cloudflare Pages > Edit
4. Copy the generated API token (you'll only see it once!)

## Step 2: Get Your Cloudflare Account ID

1. Go to https://dash.cloudflare.com/
2. Select your account
3. Your Account ID is in the URL or on the right sidebar
4. Copy the Account ID (looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

## Step 3: Add Secrets to GitHub

1. Go to your GitHub repository: https://github.com/DaveBum/Baumify.com
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these two secrets:

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [paste your API token from Step 1]

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: [paste your Account ID from Step 2]

## Step 4: Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com/
2. Go to **Workers & Pages**
3. Click **"Create application"** → **"Pages"** → **"Connect to Git"**
4. Select your **Baumify.com** repository
5. Configure build settings:
   - **Project name:** `baumify` (must match the workflow file!)
   - **Production branch:** `main`
   - **Build command:** `bun run build`
   - **Build output directory:** `dist`
6. Click **"Save and Deploy"**

## Step 5: Connect Your Domain

1. In Cloudflare Pages, go to your project settings
2. Go to **Custom domains**
3. Click **"Set up a custom domain"**
4. Enter `baumify.com` and `www.baumify.com`
5. Follow the DNS instructions to point your domain to Cloudflare Pages

## How It Works

Now whenever you push to GitHub:
1. ✅ GitHub Actions will automatically build your site
2. ✅ Deploy to Cloudflare Pages
3. ✅ Your site at baumify.com will update within 1-2 minutes!

## Alternative: Direct Cloudflare Git Integration (Simpler)

If you don't want to use GitHub Actions, you can let Cloudflare handle everything:

1. In Cloudflare Pages, connect your GitHub repo directly
2. Cloudflare will automatically detect pushes and rebuild
3. No need for the GitHub Actions workflow
4. Same result, less configuration!

## Verify Deployment

After setup, check:
- GitHub Actions: https://github.com/DaveBum/Baumify.com/actions
- Cloudflare Pages: https://dash.cloudflare.com/ → Workers & Pages → baumify

---

## Favicon Cache Issue Fix

The favicon is now properly set up with:
- ✅ Fresh files regenerated from logo.png
- ✅ Timestamp-based cache busting
- ✅ All PNG format (no ICO issues)
- ✅ Cache-Control headers in HTML

**To see the new favicon immediately:**
1. Open Chrome DevTools (Cmd+Option+I)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
4. Or open in incognito mode

The favicon will update automatically on the live site once deployed!
