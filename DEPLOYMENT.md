# GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Initialize Git Repository

```bash
cd "d:/Contribution_REVA_2026/GKVK Training Program/Hands_On/agri-lms"
git init
git add .
git commit -m "Initial commit - AI/ML Agriculture LMS"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `agri-ai-lms` (or your choice)
3. Description: "Interactive LMS for AI/ML in Agriculture"
4. Select "Public"
5. DO NOT initialize with README (we already have one)
6. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/agri-ai-lms.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" in left sidebar
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"

### 5. Access Your Site

Your site will be live at: `https://YOUR_USERNAME.github.io/agri-ai-lms/`

(It may take 1-2 minutes to deploy initially)

## Configuration File (Optional)

Create `.nojekyll` file in root to disable Jekyll processing:

```bash
echo "" > .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll for GitHub Pages"
git push
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file with your domain
2. Configure DNS settings at your domain registrar
3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

**Site not loading?**
- Check that index.html is in the root directory
- Ensure all file paths are relative (no absolute paths)
- Check browser console for errors

**CSS/JS not loading?**
- Verify paths are relative: `css/main.css` not `/css/main.css`
- Check file names match exactly (case-sensitive on GitHub Pages)

**404 on navigation?**
- This is normal for hash-based routing
- The app handles routing client-side

## Local Development

Just open `index.html` in any modern browser. No server needed!

## Updates

To update the live site:

```bash
git add .
git commit -m "Description of changes"
git push
```

Changes will be live within 1-2 minutes.

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/en/pages
