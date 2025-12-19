
const codeTemplates = {
    vision: (datasetName, classes) => `
# 📸 Computer Vision Project: ${datasetName}
import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt
import numpy as np

# 1. Dataset Simulation ("${datasetName}")
# Classes: ${classes.join(', ')}
num_classes = ${classes.length}
img_height, img_width = 128, 128

print(f"Loading {datasetName} dataset with compatible classes...")

# 2. Model Architecture (CNN)
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(img_height, img_width, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(num_classes, activation='softmax')
])

print("Model compiled successfully:")
model.summary()

# 3. Training Stub
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

print("Ready for training. Upload images to /content/dataset to begin.")
    `,

    iot: (projectName, sensors) => `
# 📡 IoT Data Analysis: ${projectName}
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

# 1. Simulate Sensor Data
# Sensors: ${sensors.join(', ')}
np.random.seed(42)
rows = 100
data = pd.DataFrame(np.random.rand(rows, ${sensors.length}), columns=[${sensors.map(s => `'${s}'`).join(', ')}])

# Add timestamp
data['Timestamp'] = pd.date_range(start='1/1/2024', periods=rows, freq='H')
data.set_index('Timestamp', inplace=True)

print(f"Simulated Data for {projectName}:")
print(data.head())

# 2. Visualization
plt.figure(figsize=(10, 6))
sns.lineplot(data=data)
plt.title(f"{projectName} - Sensor Readings Over Time")
plt.ylabel("Normalized Value")
plt.show()

# 3. Anomaly Detection (Simple Threshold)
threshold = 0.9
anomalies = data[data > threshold].count()
print("\\nPotential Anomalies Detected (Value > 0.9):")
print(anomalies)
    `,

    regression: (targetName, features) => `
# 📈 Predictive Modeling: ${targetName} Prediction
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 1. Simulate Data
# Features: ${features.join(', ')}
# Target: ${targetName}
np.random.seed(42)
n_samples = 200
X = pd.DataFrame(np.random.rand(n_samples, ${features.length}), columns=[${features.map(f => `'${f}'`).join(', ')}])
# Synthetic relationship
y = X.sum(axis=1) * 10 + np.random.normal(0, 1, n_samples)

print(f"Training model to predict '{targetName}' based on {features.length} features...")

# 2. Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Model Training
model = LinearRegression()
model.fit(X_train, y_train)

# 4. Evaluation
preds = model.predict(X_test)
print(f"\\nModel R² Score: {r2_score(y_test, preds):.2f}")
print("Success! Model is ready for new predictions.")
    `
};

const module5Handouts = {
    // === Deployment ===
    'm5-t1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🚀 Project 1: Deploying AI Solutions</h1></div>
            <div class="summary"><h2>Project Goal</h2><p>Deploy a trained model using Streamlit (Python web app).</p></div>
            <div class="code-section"><h2>💻 Colab/Local Code</h2>
            <pre><code class="language-python">
# Install Streamlit
# !pip install streamlit

import streamlit as st
import pandas as pd
import numpy as np

st.title('🚜 Agri-AI Prediction System')

st.write("Enter farm details below to get a prediction.")

# Input
nitrogen = st.slider('Nitrogen Level', 0, 100, 50)
k = st.slider('Potassium Level', 0, 100, 50)
temp = st.number_input('Temperature (C)', value=25.0)

if st.button('Predict'):
    # Dummy prediction logic
    result = "High Yield 🌾" if (nitrogen + k) > 80 else "Average Yield"
    st.success(f"Prediction: {result}")

st.write("Deploy this script using 'streamlit run app.py'")
            </code></pre></div>
        </div>
    `,

    // === Bonus Projects (IoT) ===
    'm5-t2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>💧 Bonus Project 1: Smart Irrigation System</h1></div>
            <div class="summary"><h2>Project Goal</h2><p>Simulate an IoT system that decides when to water crops using Soil Moisture, Temperature, and Rainfall data.</p></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 💧 Smart Irrigation Logic Simulation
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# 1. Simulate Sensor Data (1000 readings)
np.random.seed(42)
n_samples = 1000
data = pd.DataFrame({
    'Soil_Moisture': np.random.uniform(10, 80, n_samples),  # %
    'Temperature': np.random.uniform(20, 40, n_samples),    # Celsius
    'Rainfall_Forecast': np.random.choice([0, 1], n_samples, p=[0.7, 0.3]) # 0=No, 1=Yes
})

# Define Logic: Water if Moisture < 30% AND No Rain Forecast
def needs_water(row):
    if row['Soil_Moisture'] < 30 and row['Rainfall_Forecast'] == 0:
        return 1 # Pump ON
    return 0 # Pump OFF

data['Pump_Status'] = data.apply(needs_water, axis=1)

print("=== 📊 Sensor Data Sample ===")
print(data.head())

# 2. Train AI Model to Learn this Logic
X = data[['Soil_Moisture', 'Temperature', 'Rainfall_Forecast']]
y = data['Pump_Status']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(X_train, y_train)

# 3. Evaluate
print("\\n=== 📈 Model Performance ===")
print(f"Accuracy: {model.score(X_test, y_test)*100:.2f}%")

# 4. Deployment Function
def smart_irrigation_controller(moisture, temp, rain_forecast):
    prediction = model.predict([[moisture, temp, rain_forecast]])[0]
    status = "ON 🌊" if prediction == 1 else "OFF 🛑"
    return f"Sensors: Moisture={moisture}%, Temp={temp}C, Rain={rain_forecast} -> Pump {status}"

# Test
print("\\n=== 🚜 Live Field Test ===")
print(smart_irrigation_controller(20, 35, 0)) # Dry, Hot, No Rain -> Should be ON
print(smart_irrigation_controller(45, 30, 0)) # Wet -> Should be OFF
            </code></pre></div>
        </div>
    `,

    // === API Project ===
    'm5-t3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🦠 Bonus Project 2: Crop Disease API</h1></div>
            <div class="summary"><h2>Project Goal</h2><p>Build a simple API using FastAPI to serve a Disease Detection Model.</p></div>
            <div class="code-section"><h2>💻 Colab Code (Simulation)</h2>
            <pre><code class="language-python">
# 🦠 Crop Disease API Simulation
# Note: In Colab, we simulate the API logic as FastAPI requires a running server.

import numpy as np

# 1. Mock Model (Simulating a trained CNN)
classes = {0: 'Healthy', 1: 'Early Blight', 2: 'Late Blight'}

def mock_predict(image_array):
    # Simulate prediction logic (random for demo)
    # In real app: model.predict(image_array)
    pred_idx = np.random.choice([0, 1, 2])
    confidence = np.random.uniform(0.85, 0.99)
    return classes[pred_idx], confidence

# 2. API Endpoint Logic
def predict_endpoint(file_name):
    print(f"📥 Received file: {file_name}")
    # Preprocessing steps would go here (resize, normalize)
    processed_image = np.zeros((224, 224, 3)) 
    
    # Inference
    label, conf = mock_predict(processed_image)
    
    # Response
    response = {
        "filename": file_name,
        "prediction": label,
        "confidence": f"{conf:.2%}",
        "recommendation": get_remedy(label)
    }
    return response

def get_remedy(disease):
    if disease == 'Healthy': return "Keep monitoring."
    if disease == 'Early Blight': return "Apply Copper-based fungicide."
    return "Remove infected plants immediately."

# 3. Test the 'API'
print("=== 🚀 API Test Request ===")
result = predict_endpoint("tomato_leaf_01.jpg")
print(result)
            </code></pre></div>
        </div>
    `,

    // === Market Dashboard ===
    'm5-t4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>💹 Bonus Project 3: Market Price Dashboard</h1></div>
            <div class="summary"><h2>Project Goal</h2><p>Visualize price trends using Plotly for interactive dashboards.</p></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 💹 Market Price Dashboard
import plotly.graph_objects as go
import pandas as pd
import numpy as np

# 1. Generate Mock Market Data
dates = pd.date_range(start='2024-01-01', periods=30)
prices_wheat = np.linspace(2000, 2400, 30) + np.random.normal(0, 50, 30)
prices_rice = np.linspace(3000, 2800, 30) + np.random.normal(0, 40, 30)

data = pd.DataFrame({'Date': dates, 'Wheat': prices_wheat, 'Rice': prices_rice})

# 2. Create Interactive Plot
fig = go.Figure()

# Add Wheat Line
fig.add_trace(go.Scatter(
    x=data['Date'], y=data['Wheat'],
    mode='lines+markers',
    name='Wheat (₹/Qtl)',
    line=dict(color='goldenrod', width=2)
))

# Add Rice Line
fig.add_trace(go.Scatter(
    x=data['Date'], y=data['Rice'],
    mode='lines+markers',
    name='Rice (₹/Qtl)',
    line=dict(color='mediumseagreen', width=2)
))

# Update Layout
fig.update_layout(
    title='🌾 Agricultural Market Price Trends (30 Days)',
    xaxis_title='Date',
    yaxis_title='Price per Quintal (₹)',
    template='plotly_white',
    hovermode='x unified'
)

# 3. Show (In Colab this is interactive!)
fig.show()
print("Interactive chart generated. Hover over points to see exact prices.")
            </code></pre></div>
        </div>
    `,

    // === Soil Nutrient Predictor ===
    'm5-t5': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🧪 Bonus Project 4: Soil Nutrient Predictor</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🧪 Soil Nutrient Prediction with Gradient Boosting
import pandas as pd
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error

# 1. Dataset: Soil Properties -> Nitrogen Content
# Features: pH, Organic Carbon (OC), Electrical Conductivity (EC)
np.random.seed(0)
n = 500
X = pd.DataFrame({
    'pH': np.random.uniform(5.5, 8.5, n),
    'OC': np.random.uniform(0.2, 1.5, n),
    'EC': np.random.uniform(0.1, 2.0, n)
})
# Target: Nitrogen (mg/kg) - simplified synthetic relationship
y = 100 + 10*X['OC'] - 5*abs(7-X['pH']) + np.random.normal(0, 5, n)

# 2. Train Model
model = GradientBoostingRegressor(n_estimators=100)
model.fit(X, y)

# 3. Predict for New Sample
new_sample = pd.DataFrame({'pH': [6.5], 'OC': [0.8], 'EC': [0.5]})
pred_n = model.predict(new_sample)[0]

print("=== 🌍 Soil Analysis Report ===")
print(f"Input: {new_sample.to_dict(orient='records')[0]}")
print(f"Predicted Nitrogen: {pred_n:.2f} mg/kg")
print(f"Interpretation: {'Low' if pred_n < 100 else 'Adequate'}")
            </code></pre></div>
        </div>
    `,

    'm5-t6': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🕸️ Bonus Project 5: Weed Detection System</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🕸️ Weed Detection logic (YOLO-style bounding box format)
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

# 1. Mock Image and Bounding Boxes
# Image size: 500x500
img = np.ones((500, 500, 3)) * 0.9 # Light gray background
# "Weeds" are green patches
img[100:150, 100:150] = [0, 0.5, 0] 
img[300:360, 400:450] = [0, 0.6, 0]

# Detected Boxes: [x_min, y_min, width, height, class, confidence]
detections = [
    [100, 100, 50, 50, 'Weed', 0.92],
    [300, 300, 50, 60, 'Weed', 0.88]
]

# 2. Visualization Function
fig, ax = plt.subplots(1)
ax.imshow(img)

for box in detections:
    x, y, w, h, label, conf = box
    # Create a Rectangle patch
    rect = patches.Rectangle((x, y), w, h, linewidth=2, edgecolor='red', facecolor='none')
    ax.add_patch(rect)
    plt.text(x, y-10, f"{label} {conf}", color='red', fontsize=12)

plt.title("Weed Detection Output")
plt.axis('off')
plt.show()

print("In a real YOLO deployment, this visualization helps verify detection accuracy.")
            </code></pre></div>
        </div>
    `,

    'm5-t7': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🍎 Bonus Project 6: Fruit Maturity Grading</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🍎 Fruit Maturity Grading using Color Analysis (HSV)
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import hsv_to_rgb

# 1. Define Color Ranges (HSV)
# Red = Ripe, Green = Unripe
def classify_fruit(hue_value):
    # Hue is 0-360 usually, normalized 0-1 here
    if hue_value < 0.1 or hue_value > 0.9: # Red-ish
        return "Ripe 😋"
    elif 0.2 < hue_value < 0.4: # Green-ish
        return "Unripe 🍏"
    else:
        return "Unknown"

# 2. Simulate Fruit Sensor Readings
cvar = np.random.rand() # Random hue
fruit_color = (cvar, 1, 1) # Full saturation/value

print("=== 🔍 Grading Station ===")
print(f"Measured Hue: {cvar:.2f}")
grade = classify_fruit(cvar)
print(f"Grade: {grade}")

# Visual
plt.imshow([[hsv_to_rgb(fruit_color)]])
plt.title(f"Fruit Color: {grade}")
plt.axis('off')
plt.show()
            </code></pre></div>
        </div>
     `,

    'm5-t8': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌡️ Bonus Project 7: Greenhouse Temp Control</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🌡️ PID Controller Simulation for Greenhouse
import matplotlib.pyplot as plt

# Parameters
target_temp = 25.0
current_temp = 18.0
Kp = 0.5  # Proportional Gain
Ki = 0.1  # Integral Gain
Kd = 0.05 # Derivative Gain

dt = 1 # Time step

history = []
integral = 0
prev_error = 0

print(f"Starting Temp: {current_temp}C, Target: {target_temp}C")

# Simulation Loop (20 steps)
for i in range(20):
    error = target_temp - current_temp
    integral += error * dt
    derivative = (error - prev_error) / dt
    
    # PID Output (Heater Power 0-100%)
    output = Kp*error + Ki*integral + Kd*derivative
    
    # Simulate System Response (Physics)
    # Heat increases temp, Heat loss cools it
    heat_gain = max(0, output) * 0.2
    heat_loss = 0.5 # Constant cooling
    current_temp += (heat_gain - heat_loss)
    
    history.append(current_temp)
    prev_error = error

plt.plot(history, 'b-o')
plt.axhline(y=target_temp, color='r', linestyle='--', label='Target')
plt.title("Greenhouse Temperature Control (PID)")
plt.xlabel("Time Steps")
plt.ylabel("Temperature (C)")
plt.legend()
plt.grid(True)
plt.show()
            </code></pre></div>
        </div>
     `,

    'm5-t9': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🤖 Bonus Project 8: Automated Fruit Picker Logic</h1></div>
             <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🤖 Robotic Arm Path Planning (Inverse Kinematics Logic)
import numpy as np
import matplotlib.pyplot as plt

# Goal: Move gripper (end effector) to Fruit at (x, y)
fruit_pos = np.array([2.0, 2.0])
arm_length_1 = 1.5
arm_length_2 = 1.5

def inverse_kinematics(x, y):
    # Geometric approach for 2-link planar arm
    d = np.sqrt(x**2 + y**2)
    
    if d > (arm_length_1 + arm_length_2):
        return None, None # Out of reach
        
    # Law of Cosines
    a1 = np.arctan2(y, x)
    a2 = np.arccos((d**2 - arm_length_1**2 - arm_length_2**2) / (2 * arm_length_1 * arm_length_2))
    
    # Angles (theta1, theta2)
    theta2 = np.pi - a2 # Elbow up solution
    beta = np.arccos((arm_length_1**2 + d**2 - arm_length_2**2) / (2 * arm_length_1 * d))
    theta1 = a1 - beta
    
    return theta1, theta2

t1, t2 = inverse_kinematics(fruit_pos[0], fruit_pos[1])

if t1 is not None:
    print(f"Fruit at {fruit_pos}")
    print(f"Calculated Angles -> Shoulder: {np.degrees(t1):.1f}°, Elbow: {np.degrees(t2):.1f}°")
    
    # Visualize
    elbow_x = arm_length_1 * np.cos(t1)
    elbow_y = arm_length_1 * np.sin(t1)
    # Check Tip
    tip_x = elbow_x + arm_length_2 * np.cos(t1 + t2) # Note: t2 is relative
    # Actually simple visualization logic simplified:
    x_coords = [0, elbow_x, fruit_pos[0]]
    y_coords = [0, elbow_y, fruit_pos[1]]
    
    plt.plot(x_coords, y_coords, 'o-', linewidth=4)
    plt.plot(fruit_pos[0], fruit_pos[1], 'r*', markersize=15, label='Fruit')
    plt.xlim(-1, 4); plt.ylim(-1, 4)
    plt.title("Robotic Arm Reaching Fruit")
    plt.legend()
    plt.grid()
    plt.show()
else:
    print("Fruit out of reach!")
            </code></pre></div>
        </div>
    `,

    'm5-t10': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🚁 Bonus Project 9: Drone Path Planning</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🚁 Drone Path Planning with A* Search
import heapq
import numpy as np
import matplotlib.pyplot as plt

# Grid: 0 = Free, 1 = Obstacle (Tree)
grid_size = 20
grid = np.zeros((grid_size, grid_size))
# Add Obstacles
grid[5:8, 5:8] = 1 
grid[12:15, 10:14] = 1

start = (0, 0)
goal = (18, 18)

def heuristic(a, b):
    return np.sqrt((b[0] - a[0])**2 + (b[1] - a[1])**2)

def astar(array, start, goal):
    neighbors = [(0,1),(0,-1),(1,0),(-1,0)]
    close_set = set()
    came_from = {}
    gscore = {start:0}
    fscore = {start:heuristic(start, goal)}
    oheap = []

    heapq.heappush(oheap, (fscore[start], start))
    
    while oheap:
        current = heapq.heappop(oheap)[1]

        if current == goal:
            data = []
            while current in came_from:
                data.append(current)
                current = came_from[current]
            return data

        close_set.add(current)
        for i, j in neighbors:
            neighbor = current[0] + i, current[1] + j            
            tentative_g_score = gscore[current] + 1
            if 0 <= neighbor[0] < array.shape[0]:
                if 0 <= neighbor[1] < array.shape[1]:
                    if array[neighbor[0]][neighbor[1]] == 1:
                        continue
                else: continue
            else: continue
                
            if neighbor in close_set and tentative_g_score >= gscore.get(neighbor, 0):
                continue
                
            if  tentative_g_score < gscore.get(neighbor, 0) or neighbor not in [i[1]for i in oheap]:
                came_from[neighbor] = current
                gscore[neighbor] = tentative_g_score
                fscore[neighbor] = tentative_g_score + heuristic(neighbor, goal)
                heapq.heappush(oheap, (fscore[neighbor], neighbor))
                
    return False

path = astar(grid, start, goal)
path = path + [start]
path = path[::-1]

# Visualization
path_x = [p[1] for p in path]
path_y = [p[0] for p in path]

plt.imshow(grid, cmap='Greys')
plt.plot(path_x, path_y, 'b-', linewidth=2, label='Drone Path')
plt.plot(start[1], start[0], 'go', label='Start')
plt.plot(goal[1], goal[0], 'r*', label='Goal')
plt.title("Drone Path Planning A*")
plt.legend()
plt.show()
            </code></pre></div>
        </div>
    `,

    'm5-t11': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🐄 Bonus Project 10: Livestock Health Monitor</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🐄 Livestock Activity Classification (Anomaly Detection)
import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

# 1. Simulate Accelerometer Data (Movement)
# Normal Cow behavior: Eating, Walking, Sleeping
np.random.seed(42)
normal_data = np.random.normal(loc=50, scale=10, size=(100, 1)) # Activity level ~50
# Sick Cow behavior: Low activity (Lethargic) or High (Agitated)
sick_data = np.concatenate([
    np.random.normal(loc=10, scale=2, size=(5, 1)), # very low
    np.random.normal(loc=90, scale=5, size=(5, 1))  # very high
])

X = np.concatenate([normal_data, sick_data])

# 2. Train Anomaly Detector (Unsupervised)
model = IsolationForest(contamination=0.1)
model.fit(X)

# 3. Predict
preds = model.predict(X) 
# 1 = Normal, -1 = Anomaly

data = pd.DataFrame(X, columns=['Activity_Level'])
data['Health_Status'] = ['Healthy' if p == 1 else 'Sick/Alert ⚠️' for p in preds]

print("=== 🩺 Herd Monitor Log ===")
print("Detected Sick Animals:")
print(data[data['Health_Status'].str.contains('Sick')])

# Visualize
plt.scatter(range(len(X)), X, c=preds, cmap='coolwarm')
plt.title("Livestock Activity Analysis (Blue=Sick, Red=Healthy)")
plt.ylabel("Activity Level")
plt.show()
            </code></pre></div>
        </div>
    `,

    'm5-t12': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌦️ Bonus Project 11: Weather Forecasting App</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. Simulate Time Series Data
dates = pd.date_range('2024-01-01', periods=100)
temp = 25 + np.sin(np.linspace(0, 10, 100))*5 + np.random.normal(0, 1, 100)
series = pd.Series(temp, index=dates)

# 2. Train ARIMA Model
model = ARIMA(series, order=(1, 1, 1))
model_fit = model.fit()

# 3. Forecast Next 7 Days
forecast = model_fit.forecast(steps=7)
print("=== 📅 7-Day Forecast ===")
print(forecast)

# Plot
plt.figure(figsize=(10, 5))
plt.plot(series, label='Historical')
plt.plot(forecast, color='red', label='Forecast')
plt.title("Local Temperature Forecast")
plt.legend()
plt.show()
            </code></pre></div>
        </div>
    `,

    'm5-t13': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🔄 Bonus Project 12: Crop Rotation Recommender</h1></div>
             <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🔄 Rule-Based Expert System for Crop Rotation
# Logic: Improve Soil Nitrogen (N) and manage pests

def recommend_next_crop(previous_crop, soil_nitrogen_level):
    previous_crop = previous_crop.lower()
    
    # Rule 1: Legumes fix Nitrogen
    if soil_nitrogen_level < 30: # Low
        return "Legumes (Soybean/Peas) 🥜 - To restore Nitrogen"
    
    # Rule 2: Prevent Pest Buildup (Don't repeat families)
    if previous_crop in ['corn', 'maize', 'wheat']: # Grass family
        return "Crop Rotation: Soybean or Sunflower 🌻 - Break pest cycle"
    
    if previous_crop in ['soybean', 'beans']: # Legume family
        return "Crop Rotation: Corn 🌽 - High Nitrogen consumer"
    
    return "Standard Rotation: Wheat 🌾"

print("=== 🧠 AI Agronomist ===")
scenario1 = recommend_next_crop("Corn", 20)
print(f"Prev: Corn, Soil N: Low -> Rec: {scenario1}")

scenario2 = recommend_next_crop("Soybean", 80)
print(f"Prev: Soybean, Soil N: High -> Rec: {scenario2}")
            </code></pre></div>
        </div>
    `,

    'm5-t14': `
        <div class="handout-premium">
             <div class="topic-header"><h1>💬 Bonus Project 13: Farmer Assistant Chatbot</h1></div>
             <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 💬 Simple Keyword-Based Chatbot Logic
import random

knowledge_base = {
    'blight': "Blight is a fungal disease. Use fungicides like Mancozeb and improve air circulation.",
    'market': "Current wheat prices are stable at ₹2200/quintal.",
    'weather': "Expect rain in 2 days. Hold irrigation.",
    'fertilizer': "For corn, apply Urea in split doses."
}

def farmer_bot_response(user_input):
    user_input = user_input.lower()
    
    # Intent Matching
    for key in knowledge_base:
        if key in user_input:
            return f"🤖 Bot: {knowledge_base[key]}"
            
    return "🤖 Bot: I'm not sure. Try asking about blight, market prices, or fertilizer."

# Chat Loop Simulation
print("=== 🗣️ Farmer Support Chat ===")
print(farmer_bot_response("My tomato plants have blight"))
print(farmer_bot_response("What is the fertilizer for corn?"))
print(farmer_bot_response("Hello"))
            </code></pre></div>
        </div>
    `,

    'm5-t15': `
        <div class="handout-premium">
             <div class="topic-header"><h1>🛰️ Bonus Project 14: Satellite Yield Estimation</h1></div>
             <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🛰️ Satellite Data Correlation Analysis
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Simulate Data: NDVI (Greenness) vs Actual Yield
data = pd.DataFrame({
    'NDVI_Avg': [0.2, 0.4, 0.5, 0.7, 0.8, 0.3, 0.6],
    'Rainfall_mm': [100, 200, 250, 300, 350, 120, 280],
    'Yield_Tons': [1.5, 3.0, 4.2, 5.8, 6.5, 2.0, 5.0]
})

print("=== 🛰️ Correlation Matrix ===")
corr = data.corr()
print(corr)

sns.heatmap(corr, annot=True, cmap='Greens')
plt.title("Correlation: Satellite Index (NDVI) vs Yield")
plt.show()

print("High correlation (near 1.0) means NDVI is a good predictor of Yield!")
            </code></pre></div>
        </div>
    `,
    'm5-t16': `
         <div class="handout-premium">
            <div class="topic-header"><h1>🚛 Bonus Project 15: Supply Chain Optimization</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🚛 Transport Cost Minimization (Linear Programming)
# install: pip install scipy
from scipy.optimize import linprog

# Goal: Minimize Shipping Cost
# Cost vector: [Truck_A_Cost, Truck_B_Cost]
c = [50, 40] 

# Constraints:
# 1. Total Capacity >= 100 tons (Negative for >= in linprog 'ub')
# -1*A + -1*B <= -100 
A = [[-1, -1]]
b = [-100]

# Bounds: A can carry 0-60, B can carry 0-80
x0_bounds = (0, 60)
x1_bounds = (0, 80)

res = linprog(c, A_ub=A, b_ub=b, bounds=[x0_bounds, x1_bounds], method='highs')

print("=== 📦 Optimized Logistics ===")
if res.success:
    print(f"Optimal Usage: Truck A = {res.x[0]:.0f} tons, Truck B = {res.x[1]:.0f} tons")
    print(f"Min Total Cost: \${res.fun:.2f}")
else:
    print("No solution found")
            </code></pre></div>
        </div>
    `,
    'm5-t17': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🏙️ Bonus Project 16: Hydroponics Monitoring</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🏙️ Hydroponic Nutrient Tank Simulation
import matplotlib.pyplot as plt
import numpy as np

# Ideal pH range: 5.5 - 6.5
# Simulate pH drift over 24 hours
time = np.arange(24)
# pH rises naturally due to anion uptake
ph_levels = 5.8 + 0.05 * time + np.random.normal(0, 0.02, 24)

# Thresholds
upper_limit = 6.5
lower_limit = 5.5

plt.plot(time, ph_levels, label='pH Level')
plt.axhline(y=upper_limit, color='r', linestyle='--', label='Max Limit')
plt.axhline(y=lower_limit, color='r', linestyle='--', label='Min Limit')

# Detect Alerts
alerts = np.where((ph_levels > upper_limit) | (ph_levels < lower_limit))[0]
if len(alerts) > 0:
    for t in alerts:
        plt.plot(t, ph_levels[t], 'rx', markersize=10)
    print(f"⚠️ ALERT: pH drift detected at hours: {alerts}")
else:
    print("✅ System Stable")

plt.title("Hydroponic pH Monitoring")
plt.xlabel("Hours")
plt.ylabel("pH")
plt.legend()
plt.show()
            </code></pre></div>
        </div>
    `,

    'm5-t18': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🦟 Bonus Project 17: Pest Count from Traps</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🦟 Automated Trap Counting (Blob Detection)
import matplotlib.pyplot as plt
import numpy as np
from skimage.feature import blob_dog

# 1. Simulate Trap Image (White background, black dots as bugs)
image = np.ones((200, 200))
# Bugs
for i in range(15):
    x, y = np.random.randint(0, 200, 2)
    s = np.random.randint(2, 5)
    image[x-s:x+s, y-s:y+s] = 0 # Black blob

# 2. Detect Blobs
blobs = blob_dog(image, max_sigma=10, threshold=0.1)
bug_count = len(blobs)

print(f"=== 📸 Trap Analysis ===")
print(f"Detected Pests: {bug_count}")

plt.imshow(image, cmap='gray')
plt.title(f"Pheromone Trap Image (Count: {bug_count})")
plt.axis('off')
plt.show()

if bug_count > 10:
    print("🚨 Threshold Exceeded! Spray Required.")
            </code></pre></div>
        </div>
    `,

    'm5-t19': `
        <div class="handout-premium">
            <div class="topic-header"><h1>💧 Bonus Project 18: Water Quality Indexer</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 💧 WQI (Water Quality Index) Calculation
# Formula: WQI = Σ (Qi * Wi) / Σ Wi

# Parameters: pH, Dissolved Oxygen (DO), Turbidity
data = {
    'pH': 7.2,    # Standard: 7, Weight: 4
    'DO': 6.5,    # Standard: 6, Weight: 3
    'Turbidity': 5.0 # Standard: 5, Weight: 2
}

standards = {'pH': 7.0, 'DO': 6.0, 'Turbidity': 5.0}
weights = {'pH': 4, 'DO': 3, 'Turbidity': 2}
ideal = {'pH': 7.0, 'DO': 14.6, 'Turbidity': 0}

# Calculate WQI
numerator = 0
denominator = 0

for param in data:
    val = data[param]
    si = standards[param]
    k = 1 # Proportional constant simplified
    
    # Quality Rating (Qi) simplified
    qi = 100 * (val / si) 
    
    numerator += qi * weights[param]
    denominator += weights[param]

wqi = numerator / denominator

print("=== 🚰 Water Quality Report ===")
print(f"Sensor Readings: {data}")
print(f"Calculated WQI: {wqi:.2f}")

if wqi < 50:
    print("Quality: Excellent ✨")
elif wqi < 100:
    print("Quality: Good ✅")
else:
    print("Quality: Poor ❌")
            </code></pre></div>
        </div>
    `,
    'm5-t20': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🧬 Bonus Project 19: Crop Scheduling Genetic Algo</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# 🧬 Genetic Algorithm for Crop Selection Optimization
# Goal: Maximize Profit given Constraints (Water, Cost)
import random
import pandas as pd
import numpy as np

# 1. Setup Data
crops = ['Wheat', 'Corn', 'Rice', 'Soybean', 'Tomato']
profits = [1000, 1500, 2000, 1200, 3000] # Profit per acre
water_req = [100, 150, 300, 120, 200]    # Liters per acre
max_acres = 100
max_water = 15000

# Chromosome: [Acres_Wheat, Acres_Corn, Acres_Rice, Acres_Soybean, Acres_Tomato]
def create_chromosome():
    # Randomly assign acres (some simple logic)
    return [random.randint(0, 30) for _ in range(5)]

def fitness(chrom):
    total_acres = sum(chrom)
    if total_acres > max_acres: return 0 # Penalty: Exceeded Land
    
    total_water = sum([c * w for c, w in zip(chrom, water_req)])
    if total_water > max_water: return 0 # Penalty: Exceeded Water
    
    total_profit = sum([c * p for c, p in zip(chrom, profits)])
    return total_profit

# 2. Genetic Algorithm
population_size = 50
generations = 100
population = [create_chromosome() for _ in range(population_size)]

for gen in range(generations):
    # Selection (Top 50%)
    population = sorted(population, key=lambda x: fitness(x), reverse=True)
    population = population[:population_size//2]
    
    # Crossover & Mutation (Repopulate)
    while len(population) < population_size:
        p1 = random.choice(population)
        p2 = random.choice(population)
        child = [(g1 + g2)//2 for g1, g2 in zip(p1, p2)] # Simple Average Crossover
        
        # Mutation
        if random.random() < 0.1:
            idx = random.randint(0, 4)
            child[idx] += random.randint(-5, 5)
            child[idx] = max(0, child[idx])
            
        population.append(child)

best_sol = sorted(population, key=lambda x: fitness(x), reverse=True)[0]

print("=== 🧬 Optimization Result ===")
print("Allocations (Acres):")
for crop, acre in zip(crops, best_sol):
    print(f"{crop}: {acre}")
    
print(f"\\nTotal Profit: {fitness(best_sol)}")
print(f"Total Water Used: {sum([c * w for c, w in zip(best_sol, water_req)])}/{max_water}")
            </code></pre></div>
        </div>
    `,
    'm5-t21': `
        <div class="handout-premium">
            <div class="topic-header"><h1>⚙️ Bonus Project 20: Equipment Maintenance Predictor</h1></div>
            <div class="code-section"><h2>💻 Colab Code</h2>
            <pre><code class="language-python">
# ⚙️ Predictive Maintenance for Tractors (Vibration Analysis)
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. Simulate Sensor Data
# Features: Vibration (Hz), Temperature (C), RPM
np.random.seed(42)
n_samples = 1000

# Healthy Machine
healthy = pd.DataFrame({
    'Vibration': np.random.normal(50, 5, 800),
    'Temperature': np.random.normal(70, 5, 800),
    'RPM': np.random.normal(2000, 100, 800),
    'Status': 0 # Healthy
})

# Faulty Machine
faulty = pd.DataFrame({
    'Vibration': np.random.normal(120, 20, 200),
    'Temperature': np.random.normal(95, 10, 200),
    'RPM': np.random.normal(1800, 300, 200),
    'Status': 1 # Faulty
})

data = pd.concat([healthy, faulty]).sample(frac=1).reset_index(drop=True)
X = data.drop('Status', axis=1)
y = data['Status']

# 2. Train Model
model = RandomForestClassifier()
model.fit(X, y)

# 3. Live Prediction
print("=== 🛠️ Diagnostic Tool ===")
readings = pd.DataFrame([{
    'Vibration': 115, 
    'Temperature': 92, 
    'RPM': 1850
}])

pred = model.predict(readings)[0]
prob = model.predict_proba(readings)[0][1]

print(f"Input Readings: {readings.to_dict(orient='records')[0]}")
print(f"Failure Probability: {prob:.2%}")
if pred == 1:
    print("🚨 ALERT: Maintenance Required Immediately!")
else:
    print("✅ System Healthy")
            </code></pre></div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.module5Handouts = module5Handouts;
}
