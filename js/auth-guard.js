import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check Auth State
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Not logged in
        console.log("User not logged in. Redirecting to login...");

        // Store current URL to redirect back after login (optional, implemented simply here)
        sessionStorage.setItem('redirect_after_login', window.location.href);

        // If we are not already on the login page, redirect
        if (!window.location.href.includes('login.html')) {
            window.location.href = 'login.html';
        }
    } else {
        // User is logged in
        console.log("User logged in:", user.email);

        // If we are on login page, redirect to index
        if (window.location.href.includes('login.html')) {
            window.location.href = 'index.html';
        }

        // Expose user globally for other scripts
        window.currentUser = user;
    }
});

export { auth };
