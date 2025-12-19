// Module 2 Comprehensive Handouts - Part 3 (m2-t15 to m2-t20, m2-t22 to m2-t25)
// ML Core Concepts: Algorithms, Evaluation, and Tuning

const module2HandoutsPart3 = {
    'm2-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Supervised vs Unsupervised Learning</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Distinguish between supervised and unsupervised learning</li>
                    <li>Understand labeled vs unlabeled data</li>
                    <li>Identify when to use clustering vs classification</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Supervised = Teaching with Examples</strong></p>
                    <p>Like showing a new worker: "This is a weed, this is crop." You provide the answers (labels), and they learn.</p>
                    <hr>
                    <p><strong>Unsupervised = Sorting Without Knowing Types</strong></p>
                    <p>Like sorting a mixed basket of unknown fruits by size and color. You don't know the names, but you can group similar ones together!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.linear_model import LogisticRegression
import numpy as np

# === SUPERVISED LEARNING (Classification) ===
print("=== Supervised Learning: Crop Classification ===")
# Features: [Height, Color_Intensity]
X_train = [[10, 1], [12, 1], [30, 8], [32, 9]] 
# Labels: 0 = Weed, 1 = Crop
y_train = [0, 0, 1, 1] 

model = LogisticRegression()
model.fit(X_train, y_train)

new_plant = [[31, 8]]
prediction = model.predict(new_plant)
print(f"Prediction for new plant {new_plant}: {'Crop' if prediction[0]==1 else 'Weed'}")

# === UNSUPERVISED LEARNING (Clustering) ===
print("\\n=== Unsupervised Learning: Soil Zoning ===")
# Soil samples: [pH, Moisture] - No labels!
soil_samples = np.array([
    [5.5, 30], [5.7, 32], [5.6, 28], # Group 1
    [7.2, 50], [7.1, 55], [7.3, 52], # Group 2
    [6.5, 80], [6.4, 82], [6.6, 78]  # Group 3
])

kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(soil_samples)

print("Cluster labels assigned by AI:")
print(kmeans.labels_)
print("Notice how it grouped similar soil samples automatically!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Classify or Cluster?</h3>
                    <p>For each scenario, decide if it's Supervised or Unsupervised:</p>
                    <ol>
                        <li>Predicting next week's rainfall using past records.</li>
                        <li>Grouping customer reviews into topics automatically.</li>
                        <li>Detecting disease from labeled leaf photos.</li>
                        <li>Finding patterns in tractor movement data to optimize routes.</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which type of learning requires labeled data?</p>
                    <ul>
                        <li>A) Reinforcement Learning</li>
                        <li>B) Unsupervised Learning</li>
                        <li>C) Supervised Learning</li>
                        <li>D) Self-Supervised Learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Supervised learning relies on input-output pairs (labels).</p>
                    </details>
                </div>
            </div>
            
            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Supervised: Input -> Output maps (Requires labels)</li>
                    <li>Unsupervised: Finding hidden structures (No labels)</li>
                    <li>Classification/Regression are Supervised types</li>
                    <li>Clustering is the main Unsupervised type</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Train-Test Split and Validation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand why we split data</li>
                    <li>Implement train_test_split using Scikit-Learn</li>
                    <li>Concept of Validation set vs Test set</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Train-Test Split = Trial Plot vs Production</strong></p>
                    <p>You don't test a new fertilizer on your whole farm! You test it on a small "trial plot" (Training Set) first. If it works there, you verify it on another section (Test Set) before full rollout.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np

# Create synthetic dataset
data = pd.DataFrame({
    'feature1': np.random.rand(100),
    'feature2': np.random.rand(100),
    'target': np.random.randint(0, 2, 100)
})

X = data[['feature1', 'feature2']]
y = data['target']

# === TRAIN-TEST SPLIT ===
print("=== Splitting Data ===")
X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,    # 20% for testing
    random_state=42   # Reproducibility
)

print(f"Total samples: {len(data)}")
print(f"Training set: {len(X_train)} samples")
print(f"Testing set: {len(X_test)} samples")

# === TRAIN-VALIDATION-TEST SPLIT ===
print("\\n=== Train-Validation-Test Split ===")
# First split: Train (80%) + Others (20%)
X_train_full, X_temp, y_train_full, y_temp = train_test_split(X, y, test_size=0.2)
# Second split: Validation (10%) + Test (10%)
X_val, X_test_final, y_val, y_test_final = train_test_split(X_temp, y_temp, test_size=0.5)

print(f"Train: {len(X_train_full)}, Val: {len(X_val)}, Test: {len(X_test_final)}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Split Your Own Data</h3>
                    <p>Using the dataset provided in the lab:</p>
                    <ol>
                        <li>Perform a 70/30 split.</li>
                        <li>Perform an 80/20 split.</li>
                        <li>Check if the distribution of the target variable (mean value) is similar in both sets.</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why do we need a test set?</p>
                    <ul>
                        <li>A) To train the model faster</li>
                        <li>B) To evaluate performance on unseen data</li>
                        <li>C) To fix bugs in code</li>
                        <li>D) It's required by Python syntax</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - A test set simulates real-world performance on new data the model hasn't seen during training.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Never train on test data (Data Leakage)</li>
                    <li>Standard split: 80% Train, 20% Test</li>
                    <li>random_state ensures results are reproducible</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t17': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Cross-Validation Techniques</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the limitations of a single train-test split</li>
                    <li>Implement K-Fold Cross-Validation</li>
                    <li>Use Stratified K-Fold for imbalanced data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Cross-Validation = Multi-Season Testing</strong></p>
                    <p>Testing seeds in just one season might be lucky (good weather). Testing across 5 different seasons (folds) gives a much more reliable estimate of performance!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.model_selection import KFold, cross_val_score
from sklearn.linear_model import LinearRegression
import numpy as np

# Mock data
X = np.random.rand(50, 2)
y = 3 * X[:, 0] + 2 * X[:, 1] + np.random.normal(0, 0.1, 50)
model = LinearRegression()

# === K-FOLD CROSS-VALIDATION ===
print("=== K-Fold CV ===")
kf = KFold(n_splits=5, shuffle=True, random_state=42)

scores = cross_val_score(model, X, y, cv=kf, scoring='neg_mean_squared_error')
rmse_scores = np.sqrt(-scores)

print(f"RMSE Scores for each fold: {rmse_scores}")
print(f"Average RMSE: {np.mean(rmse_scores):.4f}")
print(f"Standard Deviation: {np.std(rmse_scores):.4f}")

# === STRATIFIED K-FOLD (Concept) ===
print("\\nNote: For classification with imbalanced classes (e.g., detecting rare diseases), use StratifiedKFold to ensure each fold has enough disease samples!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Compare Stability</h3>
                    <ol>
                        <li>Train a model with a single 80/20 split and record accuracy.</li>
                        <li>Run 10-Fold CV on the same model and record average accuracy.</li>
                        <li>Change the random seed for the single split (step 1) - does accuracy jump around?</li>
                        <li>Compare with the stability of the CV score.</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the main benefit of Cross-Validation?</p>
                    <ul>
                        <li>A) Faster training</li>
                        <li>B) More reliable performance estimate</li>
                        <li>C) Smaller model size</li>
                        <li>D) Uses less memory</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - It reduces the chance of "lucky" or "unlucky" data splits affecting evaluation.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>K-Fold splits data into K parts, training on K-1 and testing on 1, rotating K times</li>
                    <li>Provides a robust estimate of model accuracy</li>
                    <li>Essential for smaller datasets</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Overfitting and Underfitting (Bias vs Variance)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Diagnose overfitting (high variance) and underfitting (high bias)</li>
                    <li>Understand the Bias-Variance Tradeoff using the Bullseye Analogy</li>
                    <li>Analyze real-world agricultural scenarios for each case</li>
                    <li>Learn techniques to balance the two for the "Goldilocks" fit</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: The Bullseye Analogy</h2>
                <div class="analogy-box">
                    <p>Imagine your goal is to hit the center of a target (perfect prediction). Your shots are your model's predictions.</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <img src="assets/images/bias-variance.png" alt="Bias vs Variance Bullseye Diagram" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Figure 1: Visualizing Model Performance</p>
                    </div>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Understanding the Combinations</h2>
                
                <div class="concept-card" style="background: #f0fdf4; border-left: 5px solid #16a34a; padding: 15px; margin-bottom: 15px;">
                    <h3>1. Low Bias, Low Variance (Ideal Model) ✅</h3>
                    <p><strong>The Bullseye:</strong> Your shots are clustered tightly in the center.</p>
                    <p><strong>Scenario:</strong> A crop yield model that accurately predicts 3.5 tons/ha ± 0.1 tons for most fields, matching reality.</p>
                    <p><strong>Verdict:</strong> The model captures the true pattern and generalizes well to new data.</p>
                </div>

                <div class="concept-card" style="background: #eff6ff; border-left: 5px solid #3b82f6; padding: 15px; margin-bottom: 15px;">
                    <h3>2. High Bias, Low Variance (Underfitting) 📉</h3>
                    <p><strong>The "Stubborn" Miss:</strong> Your shots are clustered tightly, but far from the center.</p>
                    <p><strong>Scenario:</strong> A simple model assumes "Yield = 2 tons" for everyone, regardless of rain. It is consistent (Low Variance) but consistently wrong (High Bias).</p>
                    <p><strong>Verdict:</strong> The model is too simple. It fails to capture important relationships (like rain vs yield).</p>
                </div>

                <div class="concept-card" style="background: #fef2f2; border-left: 5px solid #ef4444; padding: 15px; margin-bottom: 15px;">
                    <h3>3. Low Bias, High Variance (Overfitting) 📈</h3>
                    <p><strong>The "Nervous" Scatter:</strong> Your shots are all over the place, centering on the target but with huge spread.</p>
                    <p><strong>Scenario:</strong> A complex model memorizes that "Field A had 3.21 tons because a bird flew over it." It works perfectly for Field A (Low Bias on training) but fails wildly for Field B (High Variance).</p>
                    <p><strong>Verdict:</strong> The model is too sensitive to noise. It memorizes the training data but fails to generalize.</p>
                </div>

                <div class="concept-card" style="background: #fff7ed; border-left: 5px solid #f97316; padding: 15px; margin-bottom: 15px;">
                    <h3>4. High Bias, High Variance (Worst Case) ❌</h3>
                    <p><strong>The Random Mess:</strong> Your shots are scattered and far from the center.</p>
                    <p><strong>Scenario:</strong> A model that guesses random numbers based on irrelevant features like "Farmer's shirt color".</p>
                    <p><strong>Verdict:</strong> The model is fundamentally broken or learning from garbage data.</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📊 Summary Matrix</h2>
                <table>
                    <tr>
                        <th>Problem</th>
                        <th>Bias</th>
                        <th>Variance</th>
                        <th>Training Error</th>
                        <th>Test Error</th>
                        <th>Solution</th>
                    </tr>
                    <tr>
                        <td><strong>Underfitting</strong></td>
                        <td>High</td>
                        <td>Low</td>
                        <td>High</td>
                        <td>High</td>
                        <td>Increase complexity, add features</td>
                    </tr>
                    <tr>
                        <td><strong>Overfitting</strong></td>
                        <td>Low</td>
                        <td>High</td>
                        <td>Extremely Low</td>
                        <td>High</td>
                        <td>Regularization, more data, simplify</td>
                    </tr>
                    <tr>
                        <td><strong>Good Fit</strong></td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Maintain & Monitor</td>
                    </tr>
                </table>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Visualizing Overfitting with Polynomial Regression
import numpy as np
import matplotlib.pyplot as plt
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Generate noisy non-linear data
np.random.seed(42)
X = np.sort(np.random.rand(20))
y = np.cos(1.5 * np.pi * X) + np.random.normal(0, 0.1, 20)
X = X[:, np.newaxis]

# Model 1: Underfit (Degree 1 - Line) -> High Bias
model1 = LinearRegression().fit(X, y)

# Model 2: Good Fit (Degree 4) -> Balanced
model4 = make_pipeline(PolynomialFeatures(4), LinearRegression()).fit(X, y)

# Model 3: Overfit (Degree 15) -> High Variance
model15 = make_pipeline(PolynomialFeatures(15), LinearRegression()).fit(X, y)

print("Degree 1 (Underfit): Too simple, misses the curve.")
print("Degree 4 (Good): Captures the cosine wave.")
print("Degree 15 (Overfit): Wiggles to hit every single noise point.")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Fix the Overfit</h3>
                    <p>You have a Decision Tree that is 100% accurate on training data but 60% on test data.</p>
                    <ol>
                        <li>Reduce max_depth of the tree.</li>
                        <li>Increase min_samples_split.</li>
                        <li>Observe how test accuracy improves as training accuracy drops slightly (better generalization).</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> If your model does great on training data but fails on real-world data, it is:</p>
                    <ul>
                        <li>A) Underfitting (High Bias)</li>
                        <li>B) Overfitting (High Variance)</li>
                        <li>C) Perfectly fit</li>
                        <li>D) Broken</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Overfitting (High Variance). It has learned the "noise" of the training data.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li><strong>Bias:</strong> Error from erroneous assumptions (Simplicity).</li>
                    <li><strong>Variance:</strong> Error from sensitivity to small fluctuations (Complexity).</li>
                    <li><strong>Tradeoff:</strong> You must balance bias and variance to minimize total error.</li>
                    <li>More data helps reduce variance (overfitting).</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Hyperparameter Tuning</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Difference between parameters and hyperparameters</li>
                    <li>Grid Search vs Random Search</li>
                    <li>Using GridSearchCV in Scikit-Learn</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Hyperparameter Tuning = Calibrating Your Sprayer</strong></p>
                    <p>The sprayer (model) works, but you need to tweak the nozzle pressure (learning rate) and speed (batch size) to get perfect coverage. You run test strips with different settings to find the "sweet spot".</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestRegressor
import numpy as np

# Mock Data
X = np.random.rand(100, 5)
y = np.sum(X, axis=1)

# Define Model
rf = RandomForestRegressor(random_state=42)

# Define Hyperparameter Grid
param_grid = {
    'n_estimators': [50, 100, 200],  # Number of trees
    'max_depth': [None, 10, 20],     # Tree depth
    'min_samples_split': [2, 5]      # Minimum samples to split
}

# === GRID SEARCH ===
print("=== Starting Grid Search ===")
grid_search = GridSearchCV(
    estimator=rf, 
    param_grid=param_grid, 
    cv=3,                 # 3-Fold Cross-Validation
    scoring='neg_mean_squared_error',
    verbose=1
)

grid_search.fit(X, y)

print(f"\\nBest Parameters: {grid_search.best_params_}")
print(f"Best RMSE: {np.sqrt(-grid_search.best_score_):.4f}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Tune a KNN Model</h3>
                    <p>Use k-Nearest Neighbors (KNeighborsClassifier) and tune 'n_neighbors' (k).</p>
                    <ol>
                        <li>Try k values from 1 to 30.</li>
                        <li>Plot the Cross-Validation error for each k.</li>
                        <li>Find the optimal k that minimizes error ("Elbow Method").</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which parameter is NOT learned by the model during training?</p>
                    <ul>
                        <li>A) Weights (Slopes)</li>
                        <li>B) Bias (Intercept)</li>
                        <li>C) Hyperparameters (e.g., Learning Rate)</li>
                        <li>D) None of the above</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Hyperparameters are set BEFORE training.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Model Parameters: Learned from data (weights)</li>
                    <li>Hyperparameters: Settings for the algorithm (depth, k, learning rate)</li>
                    <li>GridSearch tries every combination (thorough but slow)</li>
                    <li>RandomSearch tries random combinations (faster, often good enough)</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t20': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Scikit-Learn Library Basics</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the unified API of Scikit-Learn</li>
                    <li>Estimators vs Transformers vs Predictors</li>
                    <li>Building basic Pipelines</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Scikit-Learn (sklearn) = The Universal Farm Tool Attachment</strong></p>
                    <p>Whether you attach a plow, seeder, or harvester, they all connect to the tractor (Python) the same way (fit/predict). Consistent and interchangeable!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# The inconsistent 3-Step Pattern of Scikit-Learn
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
import numpy as np

# Data
X = np.array([[100], [200], [300], [400]]) # Rainfall
y = np.array([20, 45, 55, 80])             # Yield

# === 1. TRANSFORMER (Data Prep) ===
scaler = StandardScaler()
scaler.fit(X)             # Learn parameters (mean, std)
X_scaled = scaler.transform(X) # Apply transformation
print(f"Scaled X:\\n{X_scaled}")

# === 2. ESTIMATOR (Model) ===
model = LinearRegression()
model.fit(X_scaled, y)    # Train

# === 3. PREDICTOR ===
new_data = np.array([[250]])
new_scaled = scaler.transform(new_data) # MUST scale new data too!
pred = model.predict(new_scaled)
print(f"Prediction for 250mm: {pred[0]:.0f}")

# === PIPELINE (Automation) ===
print("\\n=== Using Pipeline ===")
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LinearRegression())
])

pipe.fit(X, y) # Handles scaling automatically!
print(f"Pipeline Prediction: {pipe.predict(new_data)[0]:.0f}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build a Processing Pipeline</h3>
                    <p>Create a pipeline that:</p>
                    <ol>
                        <li>Imputes missing values (SimpleImputer).</li>
                        <li>Scales features (StandardScaler).</li>
                        <li>Trains a DecisionTreeRegressor.</li>
                    </ol>
                    <p>Train it on a dummy farm dataset.</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which method is used to train a model in Scikit-Learn?</p>
                    <ul>
                        <li>A) train()</li>
                        <li>B) fit()</li>
                        <li>C) learn()</li>
                        <li>D) run()</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - .fit(X, y) is the standard training method.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li><strong>fit()</strong>: Learn from data</li>
                    <li><strong>transform()</strong>: Modify data (prep)</li>
                    <li><strong>predict()</strong>: Predict output</li>
                    <li><strong>Pipeline</strong>: Chains steps together to prevent data leakage</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t22': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Regression Model Evaluation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Calculate MAE, MSE, RMSE, and R²</li>
                    <li>Interpret metrics in agricultural context</li>
                    <li>Compare model performance</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Evaluation Metrics = Weighing the Harvest</strong></p>
                    <ul>
                        <li><strong>MAE:</strong> On average, I'm off by 50kg per acre.</li>
                        <li><strong>RMSE:</strong> Penalizes big mistakes heavily (like losing a whole field).</li>
                        <li><strong>R²:</strong> I can explain 85% of the yield variations (weather, soil), but 15% is still a mystery.</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# True Yields vs Predicted Yields
y_true = [3000, 2500, 4000, 3200, 2800]
y_pred = [3100, 2400, 3800, 3250, 2900]

# === MAE (Mean Absolute Error) ===
# interpretable: "Average error in kg"
mae = mean_absolute_error(y_true, y_pred)
print(f"MAE: {mae:.0f} kg")

# === MSE & RMSE (Root Mean Squared Error) ===
# RMSE is in same units as target (kg) and penalizes big errors
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
print(f"RMSE: {rmse:.0f} kg")

# === R² (Coefficient of Determination) ===
# 0 to 1 scale. 1 = Perfect fit.
r2 = r2_score(y_true, y_pred)
print(f"R² Score: {r2:.3f}")

if r2 > 0.8:
    print("✅ Excellent model!")
elif r2 > 0.5:
    print("⚠️ Decent model, room for improvement.")
else:
    print("❌ Poor model - need better features.")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Evaluate Predictions</h3>
                    <p>You have two models predicting corn price:</p>
                    <ul>
                        <li>Model A: Errors [-10, +10, -10, +10]</li>
                        <li>Model B: Errors [0, 0, 0, +40]</li>
                    </ul>
                    <p>Calculate MAE and RMSE for both. Why is RMSE much higher for Model B? Which model would you prefer if large errors are disastrous?</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which metric is easiest to explain to a non-technical farmer?</p>
                    <ul>
                        <li>A) Mean Squared Error</li>
                        <li>B) Log Loss</li>
                        <li>C) Mean Absolute Error (MAE)</li>
                        <li>D) Huber Loss</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - MAE tells you the average error in actual units (e.g., "We are usually off by 50kg").</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Use <strong>MAE</strong> for interpretation</li>
                    <li>Use <strong>RMSE</strong> if big errors are dangerous</li>
                    <li>Use <strong>R²</strong> to see "how much of the pattern" you captured</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t23': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Logistic Regression</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand Logistic Regression for Classification</li>
                    <li>Sigmoid Function intuition</li>
                    <li>Confusion Matrix and Accuracy</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Logistic Regression = Yes/No Decisions</strong></p>
                    <p>Despite the name "Regression", used for Classification.</p>
                    <p>Example: Will this crop succumb to frost? (Yes/No). It gives a probability: "80% chance of frost damage".</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
import matplotlib.pyplot as plt
import numpy as np

# Data: [Temperature, Humidity]
# Target: 0 = Healthy, 1 = Diseased
X = [[25, 40], [24, 42], [28, 80], [30, 85], [22, 45], [29, 82]]
y = [0, 0, 1, 1, 0, 1]

# Train
model = LogisticRegression()
model.fit(X, y)

# Predict Probability
new_day = [[29, 78]] # Warm and humid
prob = model.predict_proba(new_day)
print(f"Probability of Disease: {prob[0][1]:.2%}")

# Confusion Matrix
y_pred = model.predict(X)
cm = confusion_matrix(y, y_pred)
print(f"Confusion Matrix:\\n{cm}")
print("(True Neg  False Pos)")
print("(False Neg True Pos)")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Predict Seed Germination</h3>
                    <p>Dataset: [Soil Moisture, Seed Age]. Target: Germinated (1) vs Rot/Fail (0).</p>
                    <ol>
                        <li>Train Logistic Regression.</li>
                        <li>Predict outcome for a seed with 60% moisture and 2 years age.</li>
                        <li>Interpret the coefficients: Does age negatively affect germination?</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What function squashes the output between 0 and 1 in Logistic Regression?</p>
                    <ul>
                        <li>A) ReLU</li>
                        <li>B) Sigmoid</li>
                        <li>C) Tanh</li>
                        <li>D) Linear</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - The Sigmoid function (S-curve) maps any number to a probability (0-1).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Used for Binary Classification (0 or 1)</li>
                    <li>Outputs probabilities via Sigmoid function</li>
                    <li>Linear decision boundary</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t24': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Decision Trees for Classification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand tree structure (Nodes, Leaves, Branches)</li>
                    <li>Splitting criteria (Gini, Entropy)</li>
                    <li>Visualizing decision trees</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Decision Tree = Crop Diagnostic Chart</strong></p>
                    <p>Like a troubleshooting flowchart:</p>
                    <ol>
                        <li>Are leaves yellow? (Yes/No)</li>
                        <li>--> Yes: Are spots present? (Yes/No)</li>
                        <li>----> Yes: <strong>Fungal Disease</strong></li>
                        <li>----> No: <strong>Nutrient Deficiency</strong></li>
                    </ol>
                    <p>It breaks complex decisions into simple questions.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Data: [Leaf_Yellowing (0/1), Spots (0/1), Insects (0/1)]
X = [
    [1, 1, 0], # Disease A
    [1, 0, 0], # Nutrient Def
    [0, 0, 1], # Insect Attack
    [0, 0, 0]  # Healthy
]
y = ['Fungus', 'Nutrient', 'Insect', 'Healthy']

clf = DecisionTreeClassifier()
clf.fit(X, y)

# Predict
symptom = [[1, 0, 0]] # Yellow leaves, no spots
print(f"Diagnosis: {clf.predict(symptom)[0]}")

# Visualize
plt.figure(figsize=(10,6))
plot_tree(clf, feature_names=['Yellow', 'Spots', 'Insects'], class_names=clf.classes_, filled=True)
plt.show()
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build an Irrigation Decision Tree</h3>
                    <p>Target: Turn Pump ON (1) or OFF (0).</p>
                    <p>Features: Soil Dry? (1/0), Rain Forecast? (1/0), Electricity Available? (1/0).</p>
                    <p>Train a tree and visualize the rules it creates. Are they logical?</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What creates a new branch in a Decision Tree?</p>
                    <ul>
                        <li>A) A mathematical formula</li>
                        <li>B) splitting data based on a feature value</li>
                        <li>C) Random chance</li>
                        <li>D) User input</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - The tree splits data to minimize impurity (mix of classes) in the resulting groups.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Easy to interpret and explain</li>
                    <li>Prone to overfitting (limit max_depth!)</li>
                    <li>Non-linear decision boundaries</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t25': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Feature Importance Analysis</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Extract feature importance from tree-based models</li>
                    <li>Interpret importance scores</li>
                    <li>Select relevant features for efficiency</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Feature Importance = What Really Matters?</strong></p>
                    <p>You track 50 variables (moon phase, wind, humidity, tractor speed...). The model tells you: "Humidity and Soil Type determine 90% of your yield. Ignore the moon phase."</p>
                    <p>Focus your effort on managing what matters.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.ensemble import RandomForestRegressor
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Data
data = pd.DataFrame({
    'Rainfall': [100, 150, 200, 100],
    'Fertilizer': [50, 50, 50, 150],
    'Worker_Name_ID': [1, 2, 1, 3], # Irrelevant feature
    'Yield': [2000, 2500, 3000, 3500] 
})

X = data.drop('Yield', axis=1)
y = data['Yield']

model = RandomForestRegressor()
model.fit(X, y)

# Get Importance
importances = model.feature_importances_
feature_names = X.columns

# Plot
plt.figure(figsize=(8,4))
sns.barplot(x=importances, y=feature_names)
plt.title("What affects Yield the most?")
plt.xlabel("Importance Score")
plt.show()

print("Notice how Worker ID likely has low importance compared to physical factors.")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Dimensionality Reduction</h3>
                    <p>Train a model with 10 features (generate random noise for 5 of them). Check feature importance. Remove the 5 lowest-importance features and re-train. Does performance stay the same?</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why remove low-importance features?</p>
                    <ul>
                        <li>A) To make the model train faster</li>
                        <li>B) To reduce noise and overfitting</li>
                        <li>C) To simplify data collection</li>
                        <li>D) All of the above</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: D</strong> - All correspond to valid benefits of feature selection.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Tree models provide built-in importance mechanics</li>
                    <li>Use this to simplify models</li>
                    <li>High importance = Key driver of the outcome</li>
                </ul>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.module2HandoutsPart3 = module2HandoutsPart3;
}
