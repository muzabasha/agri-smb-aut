
const activitiesHandouts = {
    // --- MODULE 1 ACTIVITIES ---
    'm1-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🛠️ Activity: Google Colab Setup</h1></div>
            <div class="summary"><h2>Project Goal</h2><p>Set up your cloud coding environment.</p></div>
            <div class="code-section"><h2>💻 Setup Instructions</h2>
            <pre><code class="language-python">
# 1. Go to colab.research.google.com
# 2. Click "New Notebook"
# 3. Type the following and press Play (Shift+Enter):

print("Google Colab is Ready!")
import numpy as np
print(f"NumPy Version: {np.__version__}")

# If you see the version number, you are all set!
            </code></pre></div>
        </div>
    `,
    'm1-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🐍 Activity: Python Exercises</h1></div>
            <div class="code-section"><h2>💻 Practice Code</h2>
            <pre><code class="language-python">
# Task 1: Calculate Farm Area
length = 50
width = 30
area = length * width
print(f"Farm Area: {area} sqm")

# Task 2: Check Temperature
temp = 35
if temp > 30:
    print("Warning: High Heat")
else:
    print("Temperature Normal")
            </code></pre></div>
        </div>
    `,
    'm1-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📊 Activity: Agri Data Analysis</h1></div>
            <div class="code-section"><h2>💻 Analysis Script</h2>
            <pre><code class="language-python">
import pandas as pd
data = {'Crop': ['Wheat', 'Rice', 'Maize'], 'Yield': [4.5, 6.0, 5.5]}
df = pd.DataFrame(data)
print("Highest Yield:", df['Yield'].max())
print("Average Yield:", df['Yield'].mean())
            </code></pre></div>
        </div>
    `,
    'm1-activity4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📈 Activity: Visualization</h1></div>
            <div class="code-section"><h2>💻 Plotting Logic</h2>
            <pre><code class="language-python">
import matplotlib.pyplot as plt
months = ['Jan', 'Feb', 'Mar']
rain = [10, 20, 5]
plt.bar(months, rain, color='blue')
plt.title('Rainfall (mm)')
plt.show()
            </code></pre></div>
        </div>
    `,

    // --- MODULE 2 ACTIVITIES ---
    'm2-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🧪 Activity: NumPy Soil Data</h1></div>
            <div class="code-section"><h2>💻 Array Operations</h2>
            <pre><code class="language-python">
import numpy as np
soil_ph = np.array([6.5, 7.1, 5.8, 6.2])
print("Acidic Soils:", soil_ph[soil_ph < 6.0])
print("Mean pH:", np.mean(soil_ph))
            </code></pre></div>
        </div>
    `,
    'm2-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📉 Activity: Linear Regression</h1></div>
            <div class="code-section"><h2>💻 Yield Prediction</h2>
            <pre><code class="language-python">
from sklearn.linear_model import LinearRegression
X = [[10], [20], [30]] # Fertilizer
y = [15, 25, 35]       # Yield
model = LinearRegression().fit(X, y)
print("Predicted Yield for 40kg:", model.predict([[40]])[0])
            </code></pre></div>
        </div>
    `,
    'm2-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🏷️ Activity: Classification</h1></div>
            <div class="code-section"><h2>💻 Crop Type</h2>
            <pre><code class="language-python">
from sklearn.tree import DecisionTreeClassifier
# 0=Dry, 1=Wet
X = [[0], [0], [1], [1]]
y = ['Wheat', 'Wheat', 'Rice', 'Rice']
clf = DecisionTreeClassifier().fit(X, y)
print("Crop for Wet Soil:", clf.predict([[1]])[0])
            </code></pre></div>
        </div>
    `,
    'm2-activity4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>⚖️ Activity: Model Eval</h1></div>
            <div class="code-section"><h2>💻 Accuracy Check</h2>
            <pre><code class="language-python">
from sklearn.metrics import accuracy_score
y_true = [0, 1, 1, 0]
y_pred = [0, 1, 0, 0]
print(f"Accuracy: {accuracy_score(y_true, y_pred)*100}%")
            </code></pre></div>
        </div>
    `,

    // --- MODULE 3 ACTIVITIES ---
    'm3-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌾 Activity: Crop Yield System</h1></div>
            <div class="code-section"><h2>💻 Random Forest</h2>
            <pre><code class="language-python">
from sklearn.ensemble import RandomForestRegressor
import numpy as np
X_train = np.random.rand(100, 3) # Rain, Temp, Soil
y_train = np.random.rand(100) * 10
rf = RandomForestRegressor().fit(X_train, y_train)
print("System Ready. Prediction:", rf.predict([[0.5, 0.5, 0.5]])[0])
            </code></pre></div>
        </div>
    `,
    'm3-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🍃 Activity: Disease Detection</h1></div>
            <div class="code-section"><h2>💻 Simple CNN</h2>
            <pre><code class="language-python">
import tensorflow as tf
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(64,64,3)),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
print("CNN Architecture Built")
            </code></pre></div>
        </div>
    `,
    'm3-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🏜️ Activity: Soil Health</h1></div>
            <div class="code-section"><h2>💻 Clustering</h2>
            <pre><code class="language-python">
from sklearn.cluster import KMeans
soil_data = [[10, 5], [12, 6], [50, 20]]
km = KMeans(n_clusters=2).fit(soil_data)
print("Zone Labels:", km.labels_)
            </code></pre></div>
        </div>
    `,
    'm3-activity4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌦️ Activity: Weather Forecasting</h1></div>
            <div class="code-section"><h2>💻 ARIMA Forecast</h2>
            <pre><code class="language-python">
from statsmodels.tsa.arima.model import ARIMA
history = [20, 22, 21, 23, 25]
model = ARIMA(history, order=(1,1,0)).fit()
print("Next Day Temp:", model.forecast()[0])
            </code></pre></div>
        </div>
    `,

    // --- MODULE 4 ACTIVITIES ---
    'm4-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📝 Activity: Capstone Planning</h1></div>
            <div class="summary"><h2>Documentation</h2><p>Draft your problem statement.</p></div>
            <div class="code-section"><h2>💻 Template</h2>
            <pre><code class="language-markdown">
# Project Title: [Name]
## Problem
Farmers in [Region] face [Issue].
## Solution
An AI model using [Algorithm] to predict [Target].
            </code></pre></div>
        </div>
    `,
    'm4-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🛠️ Activity: Dev & Testing</h1></div>
            <div class="code-section"><h2>💻 Test Script</h2>
            <pre><code class="language-python">
def test_model(model, data):
    try:
        pred = model.predict(data)
        assert pred >= 0
        print("✅ Test Passed")
    except:
        print("❌ Test Failed")
            </code></pre></div>
        </div>
    `,
    'm4-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🎤 Activity: Final Presentation</h1></div>
            <div class="summary"><h2>Slide Structure</h2>
            <ul>
                <li>Slide 1: Problem & Impact</li>
                <li>Slide 2: Data & Methodology</li>
                <li>Slide 3: Results & Demo</li>
                <li>Slide 4: Future Work</li>
            </ul>
            </div>
            <div class="code-section"><h2>💻 Demo Launcher</h2>
            <pre><code class="language-python">
print("Starting Demo...")
# Simulate app launch
import time
for i in range(3):
    print("Loading modules...")
    time.sleep(1)
print("App Running on localhost:8501")
            </code></pre></div>
        </div>
    `
};
if (typeof window !== 'undefined') {
    window.activitiesHandouts = activitiesHandouts;
}
