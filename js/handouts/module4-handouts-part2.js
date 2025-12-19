// Module 4 Comprehensive Handouts - Part 2
// Execution: Cleaning, Modeling, Evaluation, Reporting

const module4HandoutsPart2 = {
    'm4-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Data Cleaning and Preprocessing</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Preprocessing = Seed Cleaning</strong></p>
                    <p>You never plant seeds straight from the sack if they are mixed with rocks and chaff. You clean, sort, and treat them first.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Handling Missing Values
df['moisture'].fillna(df['moisture'].mean(), inplace=True)

# Handling Outliers (Z-Score)
from scipy import stats
df = df[(np.abs(stats.zscore(df.select_dtypes(include=np.number))) < 3).all(axis=1)]

# Normalization
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
df_scaled = scaler.fit_transform(df)
                </code></pre>
            </div>
        </div>
    `,
    'm4-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Feature Engineering for Project</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Create domain-specific features (e.g., "Rain per Day" instead of "Total Rain")</li>
                    <li>Encode categoricals properly</li>
                    <li>Feature selection is critical</li>
                </ul>
            </div>
        </div>
    `,
    'm4-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Algorithm Selection Justification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Decision Framework</h2>
                <ul>
                    <li><strong>Structured Data?</strong> -> Random Forest, XGBoost</li>
                    <li><strong>Images?</strong> -> CNNs (ResNet, MobileNet)</li>
                    <li><strong>Time Series?</strong> -> LSTM, ARIMA</li>
                    <li><strong>Simple Baseline?</strong> -> Linear/Logistic Regression</li>
                </ul>
            </div>
        </div>
    `,
    'm4-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Model Development and Training</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Standard Training Loop
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

model = RandomForestClassifier()
model.fit(X_train, y_train)

y_pred_train = model.predict(X_train)
y_pred_test = model.predict(X_test)

print(f"Train Acc: {accuracy_score(y_train, y_pred_train):.2f}")
print(f"Test Acc: {accuracy_score(y_test, y_pred_test):.2f}")
                </code></pre>
            </div>
        </div>
    `,
    'm4-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Model Evaluation and Interpretability</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Evaluation = The Taste Test</strong></p>
                    <p>Yield (accuracy) isn't everything. Does the fruit taste good (precision)? Does it rot quickly (robustness)? Use multiple metrics (F1-score, Recall) to judge quality.</p>
                </div>
            </div>
        </div>
    `,
    'm4-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Final Project Presentation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="student-activity">
                <h2>🎯 Activity</h2>
                <div class="activity-box">
                    <h3>The Elevator Pitch</h3>
                    <p>Sell your project to a busy farmer in 60 seconds. Focus on VALUE ("It saves water"), not TECH ("It uses a neural network").</p>
                </div>
            </div>
        </div>
    `
};

// Fill gaps
const execTopics = ['m4-t15', 'm4-t17', 'm4-t19', 'm4-t20', 'm4-t21', 'm4-t22', 'm4-t23', 'm4-t24', 'm4-t25'];
execTopics.forEach((id, index) => {
    const titles = [
        "Hyperparameter Optimization", "Project Documentation",
        "Code Refactoring", "Final Submission",
        "API Development", "User Interface Design",
        "Project Documentation Prep", "Presentation Skills", "Final Viva"
    ];
    module4HandoutsPart2[id] = `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>${titles[index]}</h1>
                <p class="duration">⏱️ Finalizing Phase</p>
            </div>
            <div class="summary">
                <h2>📋 Key Steps</h2>
                <p>Ensure your work is reproducible, documented, and polished for submission.</p>
            </div>
        </div>
    `;
});

if (typeof window !== 'undefined') {
    window.module4HandoutsPart2 = module4HandoutsPart2;
}
