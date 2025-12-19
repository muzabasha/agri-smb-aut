// TODO: REPLACE WITH YOUR FIREBASE CONFIGURATION
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Add a Web App
// 4. Copy the "firebaseConfig" object and paste it below
// 5. Enable "Authentication" in the console (Google and Email/Password providers)
// 6. Enable "Firestore Database" in the console

export const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Check if config is still default
if (firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
    console.warn("⚠️ Firebase Config is missing! Please update js/firebase-config.js with your credentials.");
    alert("⚠️ Firebase Configuration Missing! \n\nPlease update 'js/firebase-config.js' with your Firebase project credentials to make Login and Dashboard work.");
}
