# Complete Deployment Guide: Agri-LMS with Firebase & Vercel

This guide provides a complete walkthrough to deploy the **Agri-LMS** application. It has been updated to fix routing issues on Vercel.

---

## 🚀 Critical Fix: Do NOT use firebase.json
We intentionally **removed `firebase.json`** from the project because it conflicts with Vercel's routing, causing the "Green Loader Loop". Vercel needs to handle its own routing via `vercel.json`.

---

## 1. Firebase Configuration (One-Time Setup)

### Step 1.1: Create & Config Project
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Project: **`agri-smb-lu`**.
3. **Authentication**:
   - Enable **Email/Password**.
   - Enable **Google**.
   - **IMPORTANT**: Go to **Settings** > **Authorized domains** > Add **`agri-smb-aut.vercel.app`**.
4. **Firestore Database**:
   - Create Database in **Production Mode**.
   - **Rules** (Copy & Paste):
     ```javascript
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /users/{userId} {
           allow read, write: if request.auth != null && 
                              (request.auth.uid == userId || request.auth.token.email == 'muza.basha@gmail.com');
         }
         match /users/{document=**} {
           allow read: if request.auth != null && request.auth.token.email == 'muza.basha@gmail.com';
         }
       }
     }
     ```
   - Click **Publish**.

---

## 2. Deploying to Vercel

### Step 2.1: Initial Deploy
1. **Push Code**: Run the Git commands below to push the latest fixes.
2. Vercel automatically deploys when you push to `main`.

### Step 2.2: Verify Fixes
1. Visit **[https://agri-smb-aut.vercel.app](https://agri-smb-aut.vercel.app)**.
2. **Hard Refresh** (`Ctrl + F5`) to clear old cache.
3. If you aren't logged in, it should redirect to **Login** within 4 seconds.
4. If it takes too long, click the **Green Manual Login Button**.

---

## 3. How to Update (Git Workflow)

Whenever you make changes, use these exact commands in your terminal:

```bash
# 1. Stage all changes (including deletions like firebase.json)
git add .

# 2. Commit
git commit -m "Update project and deploy fixes"

# 3. Push to make live
git push origin main
```

---

## 4. Troubleshooting

- **Login Page Loops to Loader?**
  - Make sure `firebase.json` is DELETED from your repo.
  - Make sure `vercel.json` has `rewrites` for `/login` -> `/login.html`.
  
- **"Authorized Domain" Error?**
  - You missed Step 1.1 -> Authorized Domains in Firebase Console.

- **Admin Dashboard Empty?**
  - Sign in with **`muza.basha@gmail.com`**. Only this email is Admin.
