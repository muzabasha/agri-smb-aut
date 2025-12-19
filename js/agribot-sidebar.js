
// AgriBot Sidebar Logic
const commonQuestions = [
    "What is AI in Agriculture?",
    "How does crop rotation work?",
    "Explain NDVI.",
    "What is precision farming?",
    "How to detect tomato blight?",
    "What is supervised learning?",
    "Explain Linear Regression.",
    "Code for Smart Irrigation?",
    "What is IoT in farming?",
    "How to use Google Colab?",
    "Explain CNNs for plant disease.",
    "Difference between AI and ML?"
];

function initAgriBotSidebar() {
    // Create Sidebar Elements
    const sidebar = document.createElement('div');
    sidebar.className = 'agribot-sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h3>🤖 Common Queries</h3>
            <button class="close-sidebar-btn">&times;</button>
        </div>
        <ul class="common-questions-list">
            ${commonQuestions.map(q => `
                <li class="question-item" onclick="askAgriBot('${q}')">
                    <i class="fas fa-question-circle"></i> ${q}
                </li>
            `).join('')}
        </ul>
    `;

    // Create Toggle Button
    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'agribot-sidebar-btn';
    toggleBtn.innerHTML = '<i class="fas fa-robot"></i> Ask Tutor';
    toggleBtn.onclick = () => {
        sidebar.classList.add('open');
        toggleBtn.style.left = '-50px'; // Hide button
    };

    // Close Logic
    const closeBtn = sidebar.querySelector('.close-sidebar-btn');
    closeBtn.onclick = () => {
        sidebar.classList.remove('open');
        toggleBtn.style.left = '0';
    };

    document.body.appendChild(sidebar);
    document.body.appendChild(toggleBtn);
}

// Function to feed question to Chatbot (assuming chatbot.js exposes a way or we target the input)
window.askAgriBot = function (question) {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    if (chatInput && sendBtn) {
        chatInput.value = question;
        sendBtn.click();

        // Close sidebar on mobile, keep on desktop? Let's keep smooth.
        // Optional: document.querySelector('.agribot-sidebar').classList.remove('open');
    } else {
        alert("Chatbot not active on this page!");
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAgriBotSidebar);
} else {
    initAgriBotSidebar();
}
