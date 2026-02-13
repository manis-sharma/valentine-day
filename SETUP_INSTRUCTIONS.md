# 🚀 Complete Setup Instructions for Valentine's Day Website

## Step 1: Create GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process
4. Verify your email

---

## Step 2: Create Your Repository

### Option A: Use This Template (Recommended)
1. Click the **"Use this template"** button at the top of this repository
2. Name your repository: `valentine-day`
3. Make it **Public** (required for free GitHub Pages)
4. Click **"Create repository from template"**

### Option B: Manual Upload
1. Click **"+"** in top right → **"New repository"**
2. Repository name: `valentine-day`
3. Description: `💌 Valentine's Day Love Letter Website`
4. Make it **Public**
5. Click **"Create repository"**
6. Upload all files from the downloaded folder

---

## Step 3: Enable GitHub Pages

1. Go to your repository
2. Click **Settings** (⚙️ icon)
3. Scroll down and click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 2-5 minutes for deployment

Your site will be live at: `https://YOUR-USERNAME.github.io/valentine-day/`

---

## Step 4: Update Your GitHub Username in Files

**Important**: Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username in these files:

### Files to Update:

1. **index.html** - Update meta tags (lines 10-20):
   ```html
   <meta property="og:url" content="https://YOUR-USERNAME.github.io/valentine-day/">
   <meta property="og:image" content="https://YOUR-USERNAME.github.io/valentine-day/preview.png">
   <meta name="twitter:url" content="https://YOUR-USERNAME.github.io/valentine-day/">
   <link rel="canonical" href="https://YOUR-USERNAME.github.io/valentine-day/">
   ```

2. **README.md** - Update demo link (line 13):
   ```markdown
   **✨ Live Demo:** `https://YOUR-USERNAME.github.io/valentine-day/`
   ```

3. **sitemap.xml** - Update URLs (lines 6, 18):
   ```xml
   <loc>https://YOUR-USERNAME.github.io/valentine-day/</loc>
   ```

4. **robots.txt** - Update sitemap location (line 6):
   ```
   Sitemap: https://YOUR-USERNAME.github.io/valentine-day/sitemap.xml
   ```

---

## Step 5: Customize Your Content

### 🖼️ Add Your Photos

1. Upload your photos to [Imgur](https://imgur.com) or use GitHub:
   - Create a folder called `images` in your repository
   - Upload your 4 photos
   - Get the URL: `https://YOUR-USERNAME.github.io/valentine-day/images/photo1.jpg`

2. Edit `index.html` and find the "Our Memories" section
3. Replace the placeholder image URLs:
   ```html
   <img class="polaroid-image" src="YOUR-PHOTO-URL-HERE" alt="Memory 1">
   ```

### ✍️ Personalize the Love Letter

1. Find the "My Letter" section in `index.html`
2. Replace "Manish" with your loved one's name
3. Edit the letter content:
   ```html
   <p>Dear [Your Love's Name],</p>
   <p>Your personalized message here...</p>
   ```

### 💕 Customize "Why I Love You"

1. Find the "Why I Love You" section
2. Edit the 5 reasons:
   ```html
   <div class="reason-title">Your Custom Reason</div>
   <div class="reason-description">Your custom description</div>
   ```

### 🎨 Change Colors (Optional)

1. Find the `<style>` section in `index.html`
2. Search for color codes like `#667eea` and `#764ba2`
3. Replace with your preferred colors

---

## Step 6: Add Repository Details on GitHub

1. Go to your repository page
2. Click **About** ⚙️ (gear icon) at top right
3. **Description**: `💌 Beautiful interactive Valentine's Day love letter website with envelope animations, polaroid gallery & romantic designs. Perfect gift for your loved one! Free template for couples 💕`
4. **Website**: Check the box and enter `https://YOUR-USERNAME.github.io/valentine-day/`
5. **Topics**: Add these tags (from GITHUB_TOPICS.txt):
   ```
   valentine, valentines-day, love-letter, romantic-website, 
   valentine-gift, html-css-javascript, github-pages, 
   polaroid-gallery, romance, free-template, anniversary
   ```
6. Click **Save changes**

---

## Step 7: Submit to Search Engines (Optional)

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property: `https://YOUR-USERNAME.github.io/valentine-day/`
3. Verify ownership (use HTML file method)
4. Submit your sitemap: `https://YOUR-USERNAME.github.io/valentine-day/sitemap.xml`

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your site
3. Verify ownership
4. Submit sitemap

---

## Step 8: Share Your Love Letter

Once everything is set up, share your website:

### Direct Link
```
https://YOUR-USERNAME.github.io/valentine-day/
```

### Create QR Code
1. Go to [QR Code Generator](https://www.qr-code-generator.com/)
2. Enter your website URL
3. Download and print the QR code
4. Give it to your loved one!

### Social Media
Share on:
- Facebook
- Instagram (link in bio)
- Twitter
- WhatsApp

---

## Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check that repository is Public
- Verify branch is set to `main` or `master`
- Clear browser cache (Ctrl+F5)

### Images Not Showing?
- Check image URLs are correct
- Make sure images are publicly accessible
- Use direct image links (ending in .jpg, .png, etc.)

### Changes Not Appearing?
- Wait a few minutes for GitHub Pages to rebuild
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)

---

## Need Help?

1. Check the [Issues](https://github.com/YOUR-USERNAME/valentine-day/issues) page
2. Create a new issue with:
   - What you're trying to do
   - What's happening instead
   - Screenshots if possible
3. Community members will help!

---

## 🎉 You're Done!

Your romantic Valentine's Day website is now live! Share it with your loved one and watch their face light up! 💕

**Pro Tip**: Send the link a few days before Valentine's Day to build anticipation! 💌

---

**Happy Valentine's Day! 💖**