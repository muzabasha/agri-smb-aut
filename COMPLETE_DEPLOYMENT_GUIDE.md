# Complete Deployment Guide: Agri-LMS with Firebase & Vercel

This guide provides a complete walkthrough to deploy the **Agri-LMS** application with fully functional Authentication (Google Sign-In) and Backend Data Storage (Firestore).

---

## 1. Firebase Configuration (One-Time Setup)

Before the app works on the internet, you must configure the backend services in the Firebase Console.

### Step 1.1: Create Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and name it **`agri-smb-lu`**.
3. Disable Google Analytics (optional, for simplicity) and click **Create Project**.

### Step 1.2: Enable Authentication
1. In the left sidebar, go to **Build** > **Authentication**.
2. Click **Get Started**.
3. Select the **Sign-in method** tab.
4. **Email/Password**: Click it, toggle **Enable** to ON, and save.
5. **Google**: Click it, toggle **Enable** to ON, select your support email, and save.
6. **IMPORTANT**: Click the **Settings** tab (next to Sign-in method).
   - Scroll to **Authorized domains**.
   - Click **Add domain**.
   - Enter your Vercel domain: **`agri-smb-aut.vercel.app`**
   - Click **Add**.

### Step 1.3: Enable Database
1. In the left sidebar, go to **Build** > **Firestore Database**.
2. Click **Create Database**.
3. Select **Production Mode**.
4. Choose a location (e.g., `asia-south1` or `us-central1`).
5. Click **Create**.

### Step 1.4: Set Security Rules
1. Go to the **Rules** tab in Firestore Database.
2. Replace the existing code with the following to allow Admin access:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // User Data: Users can read/write their own data
       match /users/{userId} {
         allow read, write: if request.auth != null && 
                            (request.auth.uid == userId || request.auth.token.email == 'muza.basha@gmail.com');
       }
       // Admin Dashboard: Admin can list all users
       match /users/{document=**} {
         allow read: if request.auth != null && request.auth.token.email == 'muza.basha@gmail.com';
       }
     }
   }
   ```
3. Click **Publish**.

---

## 2. Project Code Configuration (Already Completed)

The codebase has already been configured with your keys.
- **File**: `js/firebase-config.js` contains your API Key (`AIzaSy...`) and Project ID (`agri-smb-lu`).
- **File**: `vercel.json` is configured for deployment.
- **File**: `index.html` and `login.html` have fallback buttons to ensure access even on slow connections.

---

## 3. Deployment to Vercel

### Option A: Automatic (Git Connected) - Recommended
Since your code is already on GitHub, Vercel will deploy automatically.
1. Any time you run `git push`, Vercel updates the site.
2. Visit **[https://agri-smb-aut.vercel.app](https://agri-smb-aut.vercel.app)**.

### Option B: Manual Setup (If not yet connected)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select the **`agri-smb-aut`** repository.
4. Click **Import**.
5. Keep all settings default.
6. Click **Deploy**.

---

## 4. How to Update Your Project (Git Commands)

Whenever you make changes to the code on your computer, follow these steps to save them and update the live website.

### Step 4.1: Open Terminal
Open your terminal or command prompt in the project folder:
`D:\Contribution_REVA_2026\GKVK Training Program\Hands_On\agri-lms`

### Step 4.2: Run Git Commands
Copy and run these commands one by one:

1. **Stage all changes:**
   ```bash
   git add .
   ```

2. **Commit changes (save them with a message):**
   ```bash
   git commit -m "Describe your update here (e.g. Updated module 1 content)"
   ```

3. **Push to GitHub (triggers Vercel deployment):**
   ```bash
   git push origin main
   ```

### Step 4.3: Verify
Wait about 30 seconds, then visit your site: https://agri-smb-aut.vercel.app

---

## 5. Usage & Verification

1. **Student Login**: 
   - Go to the site.
   - Click "Continue with Google".
   - Use any Gmail account.
   - User is redirected to the main Learning Page.
   - Progress is automatically saved to the cloud.

2. **Admin Login**:
   - Go to the site.
   - Click "Continue with Google".
   - Use **`muza.basha@gmail.com`**.
   - You will be redirected to the **Admin Dashboard** (`admin-dashboard.html`) to view student progress.

3. **Troubleshooting**:
   - **White Screen?** Click the "Taking too long? Click here to Login" button that appears after 3 seconds.
   - **Login Error?** Check the "Authorized domains" setting in Firebase Console (Step 1.2).
