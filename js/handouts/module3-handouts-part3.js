// Module 3 Comprehensive Handouts - Part 3
// Advanced Models, Robotics, Weather & Market Analysis

const module3HandoutsPart3 = {
    'm3-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Image Classification with Pre-trained Models</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand Transfer Learning concepts</li>
                    <li>Use MobileNetV2 for crop disease classification</li>
                    <li>Fine-tune pre-trained models for agricultural data</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Transfer Learning = Hiring an Experienced Farm Manager</strong></p>
                    <p>Training a model from scratch is like hiring a novice and teaching them what a "leaf" is. Transfer Learning is like hiring an expert botanist who already knows plants generally; you just need to teach them your specific crop diseases!</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models

# === LOAD PRE-TRAINED MODEL ===
print("=== Loading MobileNetV2 ===")
# Include_top=False removes the final classification layer (which was for 1000 generic objects)
base_model = MobileNetV2(input_shape=(224, 224, 3),
                         include_top=False,
                         weights='imagenet')

# Freeze the base model (don't retrain the "expert" knowledge yet)
base_model.trainable = False

# === ADD CUSTOM LAYERS ===
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.2),
    layers.Dense(5, activation='softmax') # 5 crop disease classes
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model.summary()
print("\\nModel ready to learn your specific crops!")
                </code></pre>
            </div>
            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Compare Models</h3>
                    <p>Load ResNet50 and MobileNetV2 in Colab. Compare:</p>
                    <ol>
                        <li>Download size (Weights)</li>
                        <li>Number of parameters (model.summary())</li>
                        <li>Which one would run better on a farmer's smartphone?</li>
                    </ol>
                </div>
            </div>
        </div>
    `,

    'm3-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 PlantVillage Dataset Overview</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Explore the structure of agricultural datasets</li>
                    <li>Load and preprocess image data</li>
                    <li>Understand data augmentation</li>
                </ul>
            </div>
            <div class="core-concepts">
                <h2>📖 About the Dataset</h2>
                <p>The PlantVillage dataset is the "Hello World" of Agri-AI. It contains roughly 54,000 images across 38 classes (e.g., Apple Scab, Tomato Blight).</p>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import tensorflow as tf
import matplotlib.pyplot as plt

# === DATA AUGMENTATION ===
# Increase dataset size by creating variations
data_augmentation = tf.keras.Sequential([
  tf.keras.layers.RandomFlip("horizontal_and_vertical"),
  tf.keras.layers.RandomRotation(0.2),
])

print("Agumentation pipeline ready. This helps the model generalize better!")

# === LOADING DATA ===
# Assuming 'dataset/' directory structure
# train_ds = tf.keras.utils.image_dataset_from_directory(
#   'dataset/',
#   validation_split=0.2,
#   subset="training",
#   seed=123,
#   image_size=(224, 224),
#   batch_size=32)

print("Note: In Colab, we will download the dataset directly using kaggle API.")
                </code></pre>
            </div>
            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why do we use Data Augmentation?</p>
                    <ul>
                        <li>A) To fix broken images</li>
                        <li>B) To artifically increase dataset diversity and prevent overfitting</li>
                        <li>C) To reduce file size</li>
                        <li>D) To change the color of crops</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - It helps the model handle rotated or flipped versions of leaves it might see in real life.</p>
                    </details>
                </div>
            </div>
        </div>
    `,

    'm3-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Pest and Weed Detection (YOLO)</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Difference between Classification and Detection</li>
                    <li>How YOLO (You Only Look Once) works</li>
                    <li>Annotating data for detection</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Object Detection = The Scout with a Map</strong></p>
                    <p>Classification says "This field has weeds." Object Detection says "There is a weed at coordinate (X,Y) and a pest at (A,B)." This allows robots to spray <em>only</em> the target!</p>
                </div>
            </div>
             <div class="code-section">
                <h2>💻 Python Implementation (Concept)</h2>
                <pre><code class="language-python">
# Pseudo-code for YOLO usage (requires Ultralytics library)
# from ultralytics import YOLO

# Load a pre-trained YOLO model
# model = YOLO("yolov8n.pt")  # n for nano (fastest)

# Predict on an image
# results = model("field_image.jpg")

# for result in results:
    # boxes = result.boxes  # Bounding boxes
    # for box in boxes:
        # print(f"Detected {result.names[int(box.cls)]} with confidence {box.conf:.2f}")

print("YOLO divides the image into a grid and predicts bounding boxes for each grid cell simultaneously.")
                </code></pre>
            </div>
        </div>
    `,

    'm3-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Soil Health Classification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Classify soil types (Loam, Clay, Sand)</li>
                    <li>Use SVM or Random Forest for classification</li>
                    <li>Feature selection for soil data</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pandas as pd

# Mock Data: Texture features
# Features: [Sand%, Silt%, Clay%, OrganicMatter%]
data = pd.DataFrame({
    'sand': [80, 10, 40, 30],
    'clay': [10, 80, 30, 30],
    'silt': [10, 10, 30, 40],
    'type': ['Sandy', 'Clay', 'Loam', 'Loam']
})

X = data[['sand', 'clay', 'silt']]
y = data['type']

# Train Model
clf = RandomForestClassifier(n_estimators=10)
clf.fit(X, y)

# Predict
new_soil = [[45, 25, 30]] # 45% Sand, 25% Clay, 30% Silt
print(f"Predicted Soil Type: {clf.predict(new_soil)[0]}")
                </code></pre>
            </div>
        </div>
    `,

    'm3-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Soil Property Prediction</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Goal</h2>
                <p>Predicting continuous values like pH and NPK levels using regression models. This is crucial for Determining variable rate fertilizer application.</p>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.linear_model import LinearRegression
import numpy as np

# Data: Electrical Conductivity (EC) vs Nitrogen
X_ec = np.array([[0.5], [1.0], [1.5], [2.0], [2.5]])
y_nitrogen = np.array([20, 45, 60, 85, 95])

model = LinearRegression()
model.fit(X_ec, y_nitrogen)

print(f"Prediction for EC=1.8: {model.predict([[1.8]])[0]:.1f} kg/ha N")
print("We use easy-to-measure proxies (like EC) to predict hard-to-measure nutrients!")
                </code></pre>
            </div>
        </div>
    `,

    'm3-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Nutrient Requirement Calculation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Automate NPK calculations</li>
                    <li>Balance soil supply vs crop demand</li>
                    <li>Generate fertilizer recommendations</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
def recommend_fertilizer(current_n, target_yield_tons):
    # Rule of thumb: Wheat needs 25kg N per ton of grain
    n_demand = target_yield_tons * 25
    
    # Soil efficiency (only 40% of soil N is available)
    available_n = current_n * 0.40
    
    deficit = n_demand - available_n
    
    if deficit <= 0:
        return "No N fertilizer needed.", 0
    else:
        # Urea is 46% Nitrogen
        urea_needed = deficit / 0.46
        return f"Apply {urea_needed:.1f} kg/ha of Urea", urea_needed

print(recommend_fertilizer(current_n=50, target_yield_tons=4))
                </code></pre>
            </div>
        </div>
    `,

    'm3-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Fertilizer Optimization Models</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Optimization = The Diet Plan</strong></p>
                    <p>You want to maximize yield (health) while minimizing cost (calories/money). Linear Programming finds the perfect mix of Urea, DAP, and Potash to hit nutrient targets cheaply.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from scipy.optimize import linprog

# Goal: Minimize Cost
# Fertilizer Costs ($/kg): Urea=0.5, DAP=0.8
c = [0.5, 0.8]

# Constraints (Must provide at least 100kg N, 50kg P)
# Urea: 46% N, 0% P
# DAP: 18% N, 46% P
# Inequality: -A_ub * x <= -b_ub (Scipy Form)
A = [[-0.46, -0.18],  # Nitrogen
     [-0.00, -0.46]]  # Phosphorus
b = [-100, -50]       # Requirements

bounds = [(0, None), (0, None)] # Cannot apply negative fertilizer

res = linprog(c, A_ub=A, b_ub=b, bounds=bounds, method='highs')

print(f"Optimal Urea: {res.x[0]:.1f} kg")
print(f"Optimal DAP: {res.x[1]:.1f} kg")
print(f"Total Cost: ${res.fun: .2f
}")
                </code></pre>
            </div>
        </div>
    `,
    'm3-t17': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Precision Irrigation Systems</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand soil moisture sensors</li>
                    <li>Automate irrigation scheduling based on data</li>
                    <li>Calculate water use efficiency</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Smart Irrigation = Drinking When Thirsty</strong></p>
                    <p>Old irrigation is like drinking 8 glasses of water at 8am regardless. Smart irrigation drinks sips exactly when the body (plant) needs it, saving water and preventing root rot.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Logic for Smart Irrigation Controller

def check_irrigation_need(soil_moisture_percent, crop_stage):
    """
    Decide if we need to water.
    Thresholds change based on crop stage.
    """
    thresholds = {
        'seeding': 60,    # Needs moist soil
        'vegetative': 50, # Moderate
        'flowering': 70,  # Critical Water Period
        'ripening': 30    # Needs dry soil
    }
    
    target = thresholds.get(crop_stage, 50)
    
    if soil_moisture_percent < target:
        return True, f"Moisture {soil_moisture_percent}% < Target {target}%. Pump ON."
    else:
        return False, f"Moisture {soil_moisture_percent}% >= Target {target}%. Pump OFF."

# Simulate
print(check_irrigation_need(45, 'flowering'))
print(check_irrigation_need(45, 'ripening'))
                </code></pre>
            </div>
        </div>
    `,

    'm3-t18': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Water Requirement Prediction (ET)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="core-concepts">
                <h2>📖 Evapotranspiration (ET)</h2>
                <p><strong>ETc = ETo × Kc</strong></p>
                <ul>
                    <li><strong>ETo:</strong> Reference ET (Weather dependent: Sun, Wind, Temp)</li>
                    <li><strong>Kc:</strong> Crop Coefficient (Crop dependent: Corn vs Cactus)</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
def calculate_water_need_mm(eto_mm, kc):
    return eto_mm * kc

# Example: Hot day (ETo=6mm), Corn in mid-season (Kc=1.2)
water_needed = calculate_water_need_mm(6, 1.2)
print(f"Water needed today: {water_needed} mm")

# Convert mm to Liters per Hectare (1 mm = 10,000 L/ha)
liters_needed = water_needed * 10000
print(f"Total volume: {liters_needed:,.0f} Liters/ha")
                </code></pre>
            </div>
        </div>
    `,

    'm3-t20': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 ARIMA Models for Weather Prediction</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Forecasting = Looking at the horizon</strong></p>
                    <p>Predicting prices or storms allows the farmer to harvest early or hold stock. It converts uncertainty into calculated risk.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd
import numpy as np

# Mock Temperature Data (Time Series)
data = [20, 21, 22, 23, 22, 21, 20, 19, 18, 19, 21, 23]

# Fit ARIMA(1,1,1) Model
model = ARIMA(data, order=(1, 1, 1))
model_fit = model.fit()

# Forecast next 3 days
forecast = model_fit.forecast(steps=3)
print(f"Next 3 days temp forecast: {forecast}")
                </code></pre>
            </div>
        </div>
    `,
    
    'm3-t21': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Weather Pattern Recognition</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify seasonal patterns vs anomalies</li>
                    <li>Detect drought onset signals</li>
                    <li>Use clustering (K-Means) for climate zones</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.cluster import KMeans
import numpy as np

# Data: [AnnualRainfall, AvgTemperature]
regions = np.array([
    [1200, 25], [1100, 24], # Wet & Warm (Tropical)
    [300, 35], [250, 34],   # Dry & Hot (Arid)
    [800, 15], [750, 14]    # Moderate & Cool (Temperate)
])

kmeans = KMeans(n_clusters=3, random_state=0).fit(regions)

print("Cluster Centers (Climate Types):")
# 0: Temperate, 1: Arid, 2: Tropical (Order may vary)
print(kmeans.cluster_centers_)
                </code></pre>
            </div>
        </div>
    `,

    'm3-t22': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Crop Price Forecasting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Goal</h2>
                <p>Help farmers sell at the right time by predicting market trends using historical price data.</p>
            </div>
             <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Simple Moving Average (SMA) Strategy
prices = pd.Series([20, 22, 24, 25, 24, 22, 20, 18, 19, 21]) # Daily prices

w = 3 # 3-day window
sma = prices.rolling(w).mean()

print(f"Price Today: {prices.iloc[-1]}")
print(f"3-Day SMA: {sma.iloc[-1]:.2f}")

if prices.iloc[-1] < sma.iloc[-1]:
    print("Trend is DOWN -> Consider selling now.")
else:
    print("Trend is UP -> Hold for better price.")
                </code></pre>
            </div>
        </div>
    `,
    
    'm3-t23': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Demand Prediction Models</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand seasonality in food demand</li>
                    <li>Predict peak demand periods (festivals, seasons)</li>
                    <li>Optimize supply chain logistics</li>
                </ul>
            </div>
             <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Demand Prediction = Planting for the Future Plate</strong></p>
                    <p>Farmers plant today for a market 3 months away. Knowing that tomato demand peaks in summer helps them time their harvest perfectly.</p>
                </div>
            </div>
        </div>
    `,

    'm3-t24': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Agricultural Market Insights</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Markets are driven by Supply (Weather/Yield) and Demand (Pop/Trends)</li>
                    <li>Global events (Export bans, wars) cause volatility</li>
                    <li>Data-driven farmers don't gamble; they manage risk.</li>
                </ul>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.module3HandoutsPart3 = module3HandoutsPart3;
}
