// Quality Assurance Agent - Content Auditor
// Verifies that all topics have relevant comprehensive content

class ContentAuditor {
    constructor() {
        this.results = {
            total: 0,
            passed: 0,
            failed: 0,
            warnings: 0,
            details: []
        };
    }

    // Helper to strip HTML and get text
    getText(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    // Generate keywords from title
    getKeywords(title) {
        // Remove common words
        const stopWords = ['a', 'an', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'and', 'or', 'basics', 'introduction', 'bonus', 'project'];
        return title.toLowerCase()
            .replace(/[-_:]/g, ' ')
            .split(' ')
            .filter(w => w.length > 3 && !stopWords.includes(w));
    }

    async audit() {
        console.clear();
        console.log("%c🕵️ Content Auditor Agent Starting...", "color: #00bcd4; font-size: 16px; font-weight: bold;");

        if (typeof comprehensiveCourseStructure === 'undefined') {
            console.error("❌ Course structure not found!");
            return;
        }

        // Ensure handouts are loaded
        if (typeof HandoutLoader !== 'undefined') {
            HandoutLoader.init();
        }

        this.results = { total: 0, passed: 0, failed: 0, warnings: 0, details: [] };
        const modules = comprehensiveCourseStructure.modules;

        for (const module of modules) {
            console.groupCollapsed(`%c📂 Checking ${module.title}`, "color: #ff9800");

            for (const topic of module.topics) {
                this.results.total++;
                const status = this.checkTopic(topic);
                this.results.details.push(status);

                if (status.success) {
                    this.results.passed++;
                    console.log(`%c✔ ${topic.id}: Passed`, "color: #4caf50");
                } else {
                    this.results.failed++;
                    console.error(`%c✘ ${topic.id}: Failed - ${status.reason}`, "color: #f44336");
                }
            }
            console.groupEnd();
        }

        this.printSummary();
    }

    checkTopic(topic) {
        const id = topic.id;
        let content = "";

        // Fetch Content
        if (typeof HandoutLoader !== 'undefined' && HandoutLoader.hasHandout(id)) {
            content = HandoutLoader.getHandout(id);
        } else {
            return { id, success: false, reason: "No Handout Found" };
        }

        const textContent = this.getText(content).toLowerCase();
        const keywords = this.getKeywords(topic.title);

        // 1. Check Keywords
        const matches = keywords.filter(k => textContent.includes(k));
        const matchRatio = matches.length / keywords.length;

        if (keywords.length > 0 && matches.length === 0) {
            return { id, success: false, reason: `No keywords matched. Expected: ${keywords.join(', ')}` };
        }

        // 2. Check Code (if technical topic)
        const hasCode = content.includes('<code');
        const isTechnical = !topic.title.toLowerCase().includes('career') && !topic.title.toLowerCase().includes('intro');

        if (isTechnical && !hasCode) {
            // Warning only, strictly not a failure? User wants "ready to run code".
            // Let's mark as warning if possible, but simplest is Success/Fail.
            // We'll require code for specific Modules.
            if (id.startsWith('m2') || id.startsWith('m3') || id.startsWith('m4') || id.startsWith('m5')) {
                return { id, success: false, reason: "Missing Code Section" };
            }
        }

        return { id, success: true, keywords: matches };
    }

    printSummary() {
        console.log("%c📊 Audit Summary", "font-size: 14px; font-weight: bold; margin-top: 20px;");
        console.table({
            'Total Topics': this.results.total,
            'Passed': this.results.passed,
            'Failed': this.results.failed,
            'Success Rate': `${((this.results.passed / this.results.total) * 100).toFixed(1)}%`
        });

        if (this.results.failed === 0) {
            console.log("%c✨ All systems go! Calibration complete.", "color: #4caf50; font-size: 16px;");
        } else {
            console.log("%c⚠️ Some topics need attention. See logs above.", "color: #ffeb3b; font-size: 16px;");
            // List failures
            console.table(this.results.details.filter(d => !d.success));
        }
    }
}

// Attach to window
window.ContentAuditor = new ContentAuditor();
console.log("%c🕵️ Type 'window.ContentAuditor.audit()' to run the check.", "color: #00bcd4");
