import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check Auth State
// Check Auth State
// Check Auth State
console.log("Auth Guard: Initializing SPA Mode...");

// Fallback safety: If Firebase takes too long (>4s), show Login Form
const authTimeout = setTimeout(() => {
    const loader = document.getElementById('app-loader');
    if (loader && loader.style.display !== 'none') {
        console.warn("Auth Guard: Timeout. Showing Login Form SPA...");
        document.getElementById('app-loader').style.display = 'none';
        document.getElementById('login-container').style.display = 'flex';
    }
}, 4000);

onAuthStateChanged(auth, (user) => {
    clearTimeout(authTimeout);
    console.log("Auth Guard: State changed. User:", user ? user.email : "null");

    const loader = document.getElementById('app-loader');
    const loginContainer = document.getElementById('login-container');
    const appContent = document.getElementById('app-content');

    if (!user) {
        // Not logged in -> Show Login Container
        if (loader) loader.style.display = 'none';
        if (appContent) appContent.style.display = 'none';
        if (loginContainer) loginContainer.style.display = 'flex';
    } else {
        // User logged in -> Show App Content
        if (loader) loader.style.display = 'none';
        if (loginContainer) loginContainer.style.display = 'none';
        if (appContent) appContent.style.display = 'block';

        // Expose user globally
        window.currentUser = user;
    }
});

// Attach Google Sign In Logic
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const provider = new GoogleAuthProvider();

// Wait for DOM to be ready to attach listener, or use event delegation
// We use a global listener because the button might be injected later or exist in DOM
document.addEventListener('click', async (e) => {
    // Check if clicked element is the google button or inside it
    const btn = e.target.closest('#spa-google-btn');
    if (btn) {
        console.log("Google Sign In Clicked");
        try {
            await signInWithPopup(auth, provider);
            // Auth State Observer will handle the UI update automatically
        } catch (error) {
            console.error("Sign in error:", error);
            const errDiv = document.getElementById('login-error-msg');
            if (errDiv) {
                errDiv.textContent = error.message;
                errDiv.style.display = 'block';
            }
        }
    }
});

export { auth };
