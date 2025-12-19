// Dashboard.js - Progress monitoring and analytics

class Dashboard {
    constructor() {
        this.courseStructure = comprehensiveCourseStructure;
        this.progressData = this.loadProgress();
        this.init();
    }

    loadProgress() {
        if (window.progressTracker) {
            return window.progressTracker.progress;
        }
        const saved = localStorage.getItem('agri_lms_progress');
        return saved ? JSON.parse(saved) : {
            completedTopics: [],
            quizScores: {}
        };
    }

    refresh() {
        this.progressData = this.loadProgress();
        this.init();
    }

    init() {
        this.calculateStats();
        this.renderModuleProgress();
        this.renderAllTopics();
        this.renderQuizPerformance();
        this.setupFilters();
    }

    // ... rest of methods ...

    calculateStats() {
        // ... (existing implementation) ...
        const allTopics = [];
        let totalHours = 0;
        let completedHours = 0;

        // Gather all topics
        this.courseStructure.modules.forEach(module => {
            module.topics.forEach(topic => {
                allTopics.push({
                    ...topic,
                    moduleId: module.id,
                    moduleName: module.title
                });
                totalHours += topic.duration;

                if (this.progressData.completedTopics.includes(topic.id)) {
                    completedHours += topic.duration;
                }
            });
        });

        const completedCount = this.progressData.completedTopics.length;
        const percentage = Math.round((completedCount / allTopics.length) * 100);
        const remainingHours = totalHours - completedHours;

        // Update UI
        const completedTopicsEl = document.getElementById('completedTopics');
        if (completedTopicsEl) completedTopicsEl.textContent = completedCount;

        const totalTopicsEl = document.getElementById('totalTopics');
        if (totalTopicsEl) totalTopicsEl.textContent = allTopics.length;

        const timeSpentEl = document.getElementById('timeSpent');
        if (timeSpentEl) timeSpentEl.textContent = completedHours;

        const timeRemainingEl = document.getElementById('timeRemaining');
        if (timeRemainingEl) timeRemainingEl.textContent = remainingHours;

        const overallPercentageEl = document.getElementById('overallPercentage');
        if (overallPercentageEl) overallPercentageEl.textContent = `${percentage}%`;
    }
    // ...

    renderModuleProgress() {
        const container = document.getElementById('moduleProgress');
        container.innerHTML = '';

        this.courseStructure.modules.forEach(module => {
            const completed = module.topics.filter(t =>
                this.progressData.completedTopics.includes(t.id)
            ).length;
            const total = module.topics.length;
            const percentage = Math.round((completed / total) * 100);
            const completedHours = module.topics
                .filter(t => this.progressData.completedTopics.includes(t.id))
                .reduce((sum, t) => sum + t.duration, 0);

            const moduleBar = document.createElement('div');
            moduleBar.className = 'module-bar';
            moduleBar.innerHTML = `
                <div class="module-header">
                    <span class="module-title">${module.title}</span>
                    <span class="module-stats">${completed}/${total} topics | ${completedHours}/${module.totalHours}hrs</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${percentage}%;">
                        ${percentage}%
                    </div>
                </div>
            `;
            container.appendChild(moduleBar);
        });
    }

    renderAllTopics() {
        const container = document.getElementById('allTopics');
        container.innerHTML = '';

        this.courseStructure.modules.forEach(module => {
            module.topics.forEach(topic => {
                const isCompleted = this.progressData.completedTopics.includes(topic.id);
                const topicItem = document.createElement('div');
                topicItem.className = `topic-item ${isCompleted ? 'completed' : ''} ${topic.isActivity ? 'activity' : ''}`;
                topicItem.setAttribute('data-status', isCompleted ? 'completed' : 'pending');
                topicItem.setAttribute('data-type', topic.isActivity ? 'activity' : 'topic');

                topicItem.innerHTML = `
                    <div class="topic-status ${isCompleted ? 'complete' : 'pending'}">
                        ${isCompleted ? '<i class="fas fa-check"></i>' : '<i class="far fa-circle"></i>'}
                    </div>
                    <div class="topic-info">
                        <div class="topic-name">${topic.title}</div>
                        <div class="topic-module">${module.title}</div>
                    </div>
                    <div class="topic-duration">
                        <i class="fas fa-clock"></i> ${topic.duration}hr${topic.duration > 1 ? 's' : ''}
                    </div>
                `;
                container.appendChild(topicItem);
            });
        });
    }

    renderQuizPerformance() {
        const container = document.getElementById('quizStats');
        container.innerHTML = '';

        if (!this.progressData.quizScores || Object.keys(this.progressData.quizScores).length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No quiz attempts yet. Start taking quizzes to see your performance!</p>';
            return;
        }

        // Show latest quiz scores
        Object.entries(this.progressData.quizScores).slice(-6).forEach(([topicId, scoreData]) => {
            // Find topic name
            let topicName = topicId;
            this.courseStructure.modules.forEach(module => {
                const topic = module.topics.find(t => t.id === topicId);
                if (topic) topicName = topic.title;
            });

            const card = document.createElement('div');
            card.className = 'quiz-stat-card';
            card.innerHTML = `
                <div class="quiz-score">${scoreData.percentage}%</div>
                <div class="quiz-topic">${topicName}</div>
                <div class="quiz-details">${scoreData.score}/${scoreData.total} correct</div>
            `;
            container.appendChild(card);
        });
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const topics = document.querySelectorAll('.topic-item');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                topics.forEach(topic => {
                    const status = topic.getAttribute('data-status');
                    const type = topic.getAttribute('data-type');

                    if (filter === 'all') {
                        topic.style.display = 'flex';
                    } else if (filter === 'completed') {
                        topic.style.display = status === 'completed' ? 'flex' : 'none';
                    } else if (filter === 'pending') {
                        topic.style.display = status === 'pending' ? 'flex' : 'none';
                    } else if (filter === 'activity') {
                        topic.style.display = type === 'activity' ? 'flex' : 'none';
                    }
                });
            });
        });
    }
}

// Initialize dashboard when DOM is ready
// Initialize dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new Dashboard();
});

// Allow external refresh
function initDashboard() {
    if (window.dashboard) {
        window.dashboard.refresh();
    } else {
        window.dashboard = new Dashboard();
    }
}
