// App.js - Main application initialization with PERMANENT tab system

class App {
    constructor() {
        this.init();
    }

    init() {
        // Build sidebar navigation
        this.buildNavigation();

        // Setup theme toggle
        this.setupThemeToggle();

        // Setup PERMANENT tab system (event delegation)
        this.setupTabsPermanent();

        // Initialize progress UI
        progressTracker.updateUI();

        // Setup Mobile Menu
        this.setupMobileMenu();

        // Log initialization
        console.log('🌾 Agri-LMS initialized successfully!');
    }

    buildNavigation() {
        const navContainer = document.getElementById('courseNav');

        // Use comprehensive structure if available, otherwise fallback
        const structure = (typeof comprehensiveCourseStructure !== 'undefined')
            ? comprehensiveCourseStructure
            : courseContent;

        try {
            structure.modules.forEach(module => {
                const moduleDiv = document.createElement('div');
                moduleDiv.className = 'module-item';

                const moduleHeader = document.createElement('div');
                moduleHeader.className = 'module-header clickable-module';
                moduleHeader.innerHTML = `
                <div class="header-content">
                    <i class="fas ${module.icon || 'fa-book'}"></i>
                    <span>${module.title}</span>
                </div>
                <i class="fas fa-chevron-down toggle-icon"></i>
            `;

                // Module click to navigate to overview
                moduleHeader.addEventListener('click', () => {
                    window.location.hash = `module-${module.id}`;
                    moduleHeader.querySelector('.toggle-icon').classList.add('rotate');
                });

                moduleDiv.appendChild(moduleHeader);

                const topicList = document.createElement('ul');
                topicList.className = 'topic-list';

                module.topics.forEach(topic => {
                    if (topic.isActivity) return; // Skip activity markers

                    const topicItem = document.createElement('li');
                    topicItem.className = 'topic-item';

                    const topicLink = document.createElement('a');
                    topicLink.href = `#${topic.id}`;
                    topicLink.className = 'topic-link';
                    topicLink.setAttribute('data-topic', topic.id);

                    const progress = progressTracker.isComplete(topic.id);
                    if (progress) {
                        topicLink.classList.add('completed');
                    }

                    topicLink.innerHTML = `<span>${topic.title}</span>`;
                    topicItem.appendChild(topicLink);
                    topicList.appendChild(topicItem);
                });

                moduleDiv.appendChild(topicList);
                navContainer.appendChild(moduleDiv);
            });

            // Add Final Assessment Link explicitly
            const finalDiv = document.createElement('div');
            finalDiv.className = 'module-item final-assessment';
            finalDiv.innerHTML = `
                <div class="module-header clickable-module" onclick="window.location.hash='#final-exam'">
                    <div class="header-content">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Final Assessment</span>
                    </div>
                </div>
            `;
            navContainer.appendChild(finalDiv);
        } catch (err) {
            console.error('Error building navigation:', err);
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
        }
    }

    setupTabsPermanent() {
        console.log('[APP] Setting up PERMANENT tab system with event delegation...');

        // Wait for DOM to be ready
        const initTabs = () => {
            const topicContent = document.getElementById('topicContent');

            if (!topicContent) {
                console.warn('[APP] topicContent not found, will retry...');
                return;
            }

            // Use event delegation on topicContent (parent that never gets replaced)
            topicContent.addEventListener('click', function (e) {
                // Check if click was on a tab button
                const clickedTab = e.target.closest('.tab-btn');

                if (!clickedTab) return; // Not a tab click

                e.preventDefault();
                e.stopPropagation();

                const targetTabId = clickedTab.getAttribute('data-tab');
                console.log('[TAB] User clicked:', targetTabId);

                // Get all tab buttons and panels
                const allTabBtns = topicContent.querySelectorAll('.tab-btn');
                const allPanels = topicContent.querySelectorAll('.tab-panel');

                // Remove active from all tabs
                allTabBtns.forEach(btn => btn.classList.remove('active'));

                // Hide all panels
                allPanels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.style.display = 'none';
                });

                // Activate clicked tab
                clickedTab.classList.add('active');

                // Show target panel
                const targetPanel = document.getElementById(targetTabId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.style.display = 'block';
                    console.log('[TAB] ✓ Switched to:', targetTabId);
                } else {
                    console.error('[TAB] ✗ Panel not found:', targetTabId);
                }
            });

            console.log('[APP] ✓ PERMANENT tab system active (event delegation on topicContent)');
        };

        // Try immediately
        initTabs();

        // Also try after a short delay in case DOM isn't ready
        setTimeout(initTabs, 100);
    }

    setupMobileMenu() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const navLinks = document.querySelectorAll('.sidebar a'); // Close on link click

        if (!menuBtn || !sidebar || !overlay) {
            console.warn("Mobile menu elements not found");
            return;
        }

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close sidebar when clicking a nav link (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }

    static showToast(message, type = 'info') {
        const container = document.getElementById('toast-container') || document.body;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle'
        };

        toast.innerHTML = `
            <i class="fas ${icons[type] || 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.classList.add('hide');
            toast.addEventListener('animationend', () => toast.remove());
        }, 3000);
    }

    static celebrateCompletion() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }
}

// Make toast and celebration global
window.showToast = App.showToast;
window.celebrateCompletion = App.celebrateCompletion;


// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();

    // Make app globally accessible (but DON'T export reinitializeTabs - not needed anymore!)
    window.appInstance = app;

    console.log('[INIT] ✓ App initialized with permanent tab system');

    console.log('[INIT] ✓ App initialized with permanent tab system');
});
