# 🚀 DEPLOYING AGRI-LMS TO VERCEL
**Status:** Recommended for Static Sites
**Difficulty:** Easy (No configuration needed usually)

---

## ⚡ OPTION 1: Automatic GitHub Deployment (Recommended)

1. **Push your latest code to GitHub:**
   (I will handle this step for you in a moment)

2. **Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Login with GitHub

3. **Import Project:**
   - Click "Add New..." -> "Project"
   - Select your `agri-lms` repository from the list
   - Click "Import"

4. **Configure & Deploy:**
   - Framework Preset: Leave as "Other" (or it automagically detects Static)
   - Root Directory: `./` (Default)
   - Build Command: (Leave Empty)
   - Output Directory: (Leave Empty)
   - Click **DEPLOY**

---

## 💻 OPTION 2: Vercel CLI (Command Line)

If you prefer deploying directly from your computer without GitHub sync (useful for testing):

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   Run this command in the project folder:
   ```powershell
   vercel --prod
   ```
   - Follow the prompts (Keep pressing Enter for defaults)

---

## ✨ WHY VERCEL?

- **Zero Config:** Automatically detects static HTML/JS sites.
- **Global CDN:** Extremely fast loading times globally.
- **Automatic HTTPS:** Secure by default.
- **Deployment Previews:** Every pull request gets a preview URL.

---

## ✅ VERIFICATION AFTER DEPLOY

Once deployed, you will get a URL like `agri-lms.vercel.app`.

Test the following:
1. **Homepage:** Check if the farm animation loads.
2. **Login:** Verify `login.html` access if auth is enabled.
3. **Topics:** Navigate to `#m1-t1` and check if handouts load.

---

**Last Updated:** 2025-12-14
