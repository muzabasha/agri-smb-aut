// Progress.js - Track user progress through the course

class ProgressTracker {
    constructor() {
        this.storageKey = 'agri_lms_progress';
        this.progress = this.loadLocal();
        this.initCloudSync();
    }

    loadLocal() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {
            completedTopics: [],
            currentTopic: null,
            startDate: new Date().toISOString()
        };
    }

    async initCloudSync() {
        try {
            const { getAuth, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js");
            const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
            const { firebaseConfig } = await import("./firebase-config.js");

            // Ensure app is initialized
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);

            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    this.currentUser = user;
                    // Initial sync from cloud
                    await this.syncFromCloud();
                }
            });
        } catch (e) {
            console.error("Firebase module load failed", e);
        }
    }

    async syncFromCloud() {
        if (!this.currentUser) return;

        try {
            const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
            const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
            const { firebaseConfig } = await import("./firebase-config.js");

            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            const userRef = doc(db, "users", this.currentUser.uid);
            const docSnap = await getDoc(userRef);

            if (docSnap.exists()) {
                const cloudData = docSnap.data();
                if (cloudData.completedTopics && Array.isArray(cloudData.completedTopics)) {
                    // Merge unique topics
                    const combined = new Set([...this.progress.completedTopics, ...cloudData.completedTopics]);
                    this.progress.completedTopics = Array.from(combined);
                    this.saveLocal();
                    this.updateUI();
                }
            }
        } catch (e) {
            console.error("Error syncing from cloud:", e);
        }
    }

    async syncToCloud() {
        if (!this.currentUser) return;

        try {
            const { getFirestore, doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
            const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
            const { firebaseConfig } = await import("./firebase-config.js");

            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            const userRef = doc(db, "users", this.currentUser.uid);
            const percentage = this.getCompletionPercentage();

            await setDoc(userRef, {
                completedTopics: this.progress.completedTopics,
                lastActive: new Date(),
                progress: percentage,
                email: this.currentUser.email,
                displayName: this.currentUser.displayName
            }, { merge: true });

        } catch (e) {
            // console.error("Error syncing to cloud:", e);
        }
    }

    saveLocal() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
    }

    save() {
        this.saveLocal();
        this.syncToCloud();

        if (this.onSaveCallback) {
            // this.onSaveCallback(this.progress); 
        }
    }

    setOnSaveCallback(callback) {
        // this.onSaveCallback = callback;
    }

    markComplete(topicId) {
        if (!this.progress.completedTopics.includes(topicId)) {
            this.progress.completedTopics.push(topicId);
            this.save();
            this.updateUI();
        }
    }

    isComplete(topicId) {
        return this.progress.completedTopics.includes(topicId);
    }

    setCurrentTopic(topicId) {
        this.progress.currentTopic = topicId;
        this.save();
    }

    getTotalTopics() {
        if (typeof window.comprehensiveCourseStructure !== 'undefined') {
            let count = 0;
            window.comprehensiveCourseStructure.modules.forEach(module => {
                count += module.topics.length;
            });
            return count;
        }
        return 15;
    }

    getCompletionPercentage() {
        const totalTopics = this.getTotalTopics();
        return totalTopics > 0 ? Math.round((this.progress.completedTopics.length / totalTopics) * 100) : 0;
    }

    updateUI() {
        const percentage = this.getCompletionPercentage();
        const progressFill = document.getElementById('overallProgress');
        const progressText = document.getElementById('progressText');

        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${percentage}% Complete`;

        document.querySelectorAll('.topic-link').forEach(link => {
            const topicId = link.getAttribute('data-topic');
            if (this.isComplete(topicId)) {
                link.classList.add('completed');
            } else {
                link.classList.remove('completed');
            }
        });

        document.dispatchEvent(new CustomEvent('progressUpdated', { detail: this.progress }));
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.progress = {
                completedTopics: [],
                currentTopic: null,
                startDate: new Date().toISOString()
            };
            this.save();
            this.updateUI();
        }
    }
}

const progressTracker = new ProgressTracker();
window.progressTracker = progressTracker;
