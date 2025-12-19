// Handout Loader - Integrates all module handouts
// This file combines all handout parts and provides them to the lecture system

const HandoutLoader = {
    // All handouts combined from multiple files
    handouts: {},
    initialized: false,

    // Optimized Initialize - conditionally loads modules to prevent redundant merging
    init: function () {
        // Flags to track loaded modules (internal state)
        this.loadedModules = this.loadedModules || {};

        console.log('[HandoutLoader] Checking for new content...');
        let newContentAdded = false;

        // Combine Module 1 handouts
        if (!this.loadedModules.m1 && typeof module1Handouts !== 'undefined') {
            Object.assign(this.handouts, module1Handouts);
            this.loadedModules.m1 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m1p2 && typeof module1HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module1HandoutsPart2);
            this.loadedModules.m1p2 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m1p3 && typeof module1HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module1HandoutsPart3);
            this.loadedModules.m1p3 = true;
            newContentAdded = true;
        }

        // Combine Module 2 handouts
        if (!this.loadedModules.m2 && typeof module2Handouts !== 'undefined') {
            Object.assign(this.handouts, module2Handouts);
            this.loadedModules.m2 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m2p2 && typeof module2HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module2HandoutsPart2);
            this.loadedModules.m2p2 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m2p3 && typeof module2HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module2HandoutsPart3);
            this.loadedModules.m2p3 = true;
            newContentAdded = true;
        }

        // Combine Module 3 handouts
        if (!this.loadedModules.m3 && typeof module3Handouts !== 'undefined') {
            Object.assign(this.handouts, module3Handouts);
            this.loadedModules.m3 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m3p2 && typeof module3HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module3HandoutsPart2);
            this.loadedModules.m3p2 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m3p3 && typeof module3HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module3HandoutsPart3);
            this.loadedModules.m3p3 = true;
            newContentAdded = true;
        }


        // Combine Module 4 handouts
        if (!this.loadedModules.m4 && typeof module4Handouts !== 'undefined') {
            Object.assign(this.handouts, module4Handouts);
            this.loadedModules.m4 = true;
            newContentAdded = true;
        }
        if (!this.loadedModules.m4p2 && typeof module4HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module4HandoutsPart2);
            this.loadedModules.m4p2 = true;
            newContentAdded = true;
        }


        // Combine Module 5 handouts
        if (!this.loadedModules.m5 && typeof module5Handouts !== 'undefined') {
            Object.assign(this.handouts, module5Handouts);
            this.loadedModules.m5 = true;
            newContentAdded = true;
        }

        // Combine Activities
        if (!this.loadedModules.activities && typeof activitiesHandouts !== 'undefined') {
            Object.assign(this.handouts, activitiesHandouts);
            this.loadedModules.activities = true;
            newContentAdded = true;
        }

        this.initialized = true;
        if (newContentAdded) {
            console.log(`📚 HandoutLoader: Updated content. Total handouts: ${Object.keys(this.handouts).length}`);
        }
    },

    // Get handout by topic ID - auto-init if needed
    getHandout: function (topicId) {
        if (!this.initialized) this.init();
        const handout = this.handouts[topicId];
        if (handout) {
            console.log(`[HandoutLoader] Found handout for ${topicId}`);
            return handout;
        }
        console.log(`[HandoutLoader] No handout for ${topicId}, using placeholder`);
        return null; // Return null so fallback systems can be used
    },

    // Generate placeholder for missing handouts
    generatePlaceholder: function (topicId) {
        return `
            <div class="handout-premium">
                <div class="topic-header">
                    <h1>🌾 ${topicId.toUpperCase()}</h1>
                    <p class="duration">⏱️ Content being prepared</p>
                </div>
                <div class="learning-objectives">
                    <h2>📌 Coming Soon</h2>
                    <p>Comprehensive handout for this topic is being developed.</p>
                    <p>Check back soon for:</p>
                    <ul>
                        <li>🚜 Farming Analogy</li>
                        <li>📖 Core Concepts</li>
                        <li>💻 Python Code</li>
                        <li>🎯 Student Activity</li>
                        <li>📝 Quiz with Feedback</li>
                    </ul>
                </div>
            </div>
        `;
    },

    // Check if handout exists - auto-init if needed
    hasHandout: function (topicId) {
        if (!this.initialized) this.init();
        const has = topicId in this.handouts;
        console.log(`[HandoutLoader] hasHandout(${topicId}): ${has}`);
        return has;
    },

    // Get list of available handout IDs
    getAvailableHandouts: function () {
        if (!this.initialized) this.init();
        return Object.keys(this.handouts);
    },

    // Get handout count by module
    getModuleStats: function () {
        if (!this.initialized) this.init();
        const stats = { m1: 0, m2: 0, m3: 0, m4: 0, m5: 0 };
        for (const id of Object.keys(this.handouts)) {
            const module = id.substring(0, 2);
            if (stats[module] !== undefined) {
                stats[module]++;
            }
        }
        return stats;
    }
};

// Initialize immediately when script loads
HandoutLoader.init();

// Also run on DOMContentLoaded as backup  
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        HandoutLoader.init();
    });
}

// Export for use
if (typeof window !== 'undefined') {
    window.HandoutLoader = HandoutLoader;
}

