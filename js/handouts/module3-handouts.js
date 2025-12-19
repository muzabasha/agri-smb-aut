// Module 3 Comprehensive Handouts - AI/ML Applications in Agriculture
// Crop Prediction, Disease Detection, Soil Analysis, Weather Forecasting

const module3Handouts = {
    'm3-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Feature Engineering for Agricultural Data</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create meaningful features from raw agricultural data</li>
                    <li>Apply scaling and normalization techniques</li>
                    <li>Encode categorical variables effectively</li>
                    <li>Handle temporal and spatial features</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Feature Engineering = Preparing Ingredients Before Cooking</strong></p>
                    <p>Raw ingredients (data) need to be washed, chopped, and prepared. Similarly, raw farm data needs transformation to become useful for ML "recipes"!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder

# === CREATING FEATURES ===
print("=== Feature Engineering ===")

# Raw farm data
data = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=100, freq='D'),
    'temperature': np.random.uniform(20, 38, 100),
    'humidity': np.random.uniform(40, 90, 100),
    'rainfall': np.random.uniform(0, 50, 100),
    'crop_type': np.random.choice(['wheat', 'rice', 'cotton'], 100),
    'soil_type': np.random.choice(['clay', 'loamy', 'sandy'], 100)
})

# Create temporal features
print("Creating temporal features...")
data['month'] = data['date'].dt.month
data['day_of_year'] = data['date'].dt.dayofyear
data['is_monsoon'] = data['month'].isin([6, 7, 8, 9]).astype(int)

# Create aggregated features
print("Creating aggregated features...")
data['temp_humidity_ratio'] = data['temperature'] / data['humidity']
data['heat_index'] = 0.5 * (data['temperature'] + 61 + 
                            (data['temperature'] - 68) * 1.2)

# === SCALING ===
print("\\n=== Scaling Numerical Features ===")
scaler = StandardScaler()
numerical_cols = ['temperature', 'humidity', 'rainfall']
data[['temp_scaled', 'humidity_scaled', 'rain_scaled']] = scaler.fit_transform(
    data[numerical_cols]
)
print(f"Scaled temperature mean: {data['temp_scaled'].mean():.4f}")
print(f"Scaled temperature std: {data['temp_scaled'].std():.4f}")

# === ENCODING CATEGORICAL ===
print("\\n=== Encoding Categorical Variables ===")

# Label encoding (for ordinal)
le = LabelEncoder()
data['crop_encoded'] = le.fit_transform(data['crop_type'])
print(f"Crop encoding: {dict(zip(le.classes_, range(len(le.classes_))))}")

# One-hot encoding (for nominal)
soil_dummies = pd.get_dummies(data['soil_type'], prefix='soil')
data = pd.concat([data, soil_dummies], axis=1)
print(f"\\nOne-hot columns: {soil_dummies.columns.tolist()}")

print(f"\\nFinal feature count: {len(data.columns)}")
print(data.head())
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Engineer Features for Yield Prediction</h3>
                    <ol>
                        <li>Create a Growing Degree Days (GDD) feature</li>
                        <li>Create a water availability index (rain + irrigation)</li>
                        <li>One-hot encode crop varieties</li>
                        <li>Scale all numerical features</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why do we scale features before training ML models?</p>
                    <ul>
                        <li>A) To make data look prettier</li>
                        <li>B) To ensure all features contribute equally</li>
                        <li>C) To reduce file size</li>
                        <li>D) It's optional and rarely needed</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Scaling ensures features with different ranges contribute equally, preventing dominance by large-value features.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Feature engineering often matters more than model choice</li>
                    <li>Create domain-specific features (GDD, heat index)</li>
                    <li>Scale numerical features with StandardScaler</li>
                    <li>One-hot encode categorical variables</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Crop Yield Prediction Models</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Build yield prediction models using Random Forest</li>
                    <li>Implement Gradient Boosting for improved accuracy</li>
                    <li>Create ensemble models for robust predictions</li>
                    <li>Interpret model predictions for farm decisions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Yield Prediction = Harvest Crystal Ball</strong></p>
                    <p>Knowing your yield months before harvest helps with:</p>
                    <ul>
                        <li>📦 Storage planning</li>
                        <li>💰 Price negotiation</li>
                        <li>🚚 Logistics arrangement</li>
                        <li>📊 Financial planning</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# === CREATE DATASET ===
print("=== Crop Yield Prediction ===")
np.random.seed(42)
n = 500

data = pd.DataFrame({
    'rainfall': np.random.uniform(200, 600, n),
    'temperature': np.random.uniform(22, 35, n),
    'fertilizer': np.random.uniform(30, 100, n),
    'soil_ph': np.random.uniform(5.5, 7.5, n),
    'irrigation': np.random.uniform(0, 100, n),
    'pest_pressure': np.random.uniform(0, 10, n)
})

# Generate realistic yield
data['yield'] = (
    5 * data['rainfall'] +
    -20 * data['temperature'] +
    15 * data['fertilizer'] +
    100 * data['soil_ph'] +
    10 * data['irrigation'] -
    50 * data['pest_pressure'] +
    np.random.normal(0, 200, n)
)

X = data.drop('yield', axis=1)
y = data['yield']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# === RANDOM FOREST ===
print("\\n=== Random Forest Model ===")
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

rf_pred = rf_model.predict(X_test)
rf_rmse = np.sqrt(mean_squared_error(y_test, rf_pred))
rf_r2 = r2_score(y_test, rf_pred)

print(f"RMSE: {rf_rmse:.2f}")
print(f"R² Score: {rf_r2:.4f}")

# Feature importance
print("\\nFeature Importance:")
for feat, imp in zip(X.columns, rf_model.feature_importances_):
    print(f"  {feat}: {imp:.3f}")

# === GRADIENT BOOSTING ===
print("\\n=== Gradient Boosting Model ===")
gb_model = GradientBoostingRegressor(n_estimators=100, random_state=42)
gb_model.fit(X_train, y_train)

gb_pred = gb_model.predict(X_test)
gb_rmse = np.sqrt(mean_squared_error(y_test, gb_pred))
gb_r2 = r2_score(y_test, gb_pred)

print(f"RMSE: {gb_rmse:.2f}")
print(f"R² Score: {gb_r2:.4f}")

# === ENSEMBLE (AVERAGE) ===
print("\\n=== Ensemble Prediction ===")
ensemble_pred = (rf_pred + gb_pred) / 2
ens_rmse = np.sqrt(mean_squared_error(y_test, ensemble_pred))
ens_r2 = r2_score(y_test, ensemble_pred)
print(f"Ensemble RMSE: {ens_rmse:.2f}")
print(f"Ensemble R²: {ens_r2:.4f}")

# === MAKE PREDICTION ===
print("\\n=== Predict for New Field ===")
new_field = pd.DataFrame({
    'rainfall': [350],
    'temperature': [28],
    'fertilizer': [60],
    'soil_ph': [6.8],
    'irrigation': [75],
    'pest_pressure': [2]
})

prediction = rf_model.predict(new_field)
print(f"Predicted yield: {prediction[0]:.0f} kg/ha")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build Your Yield Predictor</h3>
                    <ol>
                        <li>Download real crop data (Kaggle or govt sources)</li>
                        <li>Create a Random Forest model</li>
                        <li>Tune hyperparameters (n_estimators, max_depth)</li>
                        <li>Compare with Gradient Boosting</li>
                        <li>Create a simple prediction function</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is an ensemble model?</p>
                    <ul>
                        <li>A) A very large single model</li>
                        <li>B) Combination of multiple models</li>
                        <li>C) A model that only works on images</li>
                        <li>D) A model without training</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Ensemble models combine predictions from multiple models for better accuracy.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Random Forest: Many decision trees voting together</li>
                    <li>Gradient Boosting: Trees learning from previous errors</li>
                    <li>Ensemble: Combine models for robust predictions</li>
                    <li>Feature importance reveals what matters most</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t7': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Plant Disease Detection Basics</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify common crop diseases and symptoms</li>
                    <li>Understand visual detection methods</li>
                    <li>Learn how AI enables automated detection</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>AI Disease Detection = Expert Doctor in Your Pocket</strong></p>
                    <p>Just as you'd show a doctor your symptoms, you can show AI a photo of a sick plant. The AI has "seen" millions of diseased leaves and instantly recognizes patterns!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Common Crop Diseases</h2>
                
                <h3>1. Leaf Diseases</h3>
                <table>
                    <tr>
                        <th>Disease</th>
                        <th>Symptoms</th>
                        <th>Crops Affected</th>
                    </tr>
                    <tr>
                        <td>Leaf Blight</td>
                        <td>Brown/yellow spots, wilting</td>
                        <td>Wheat, Rice, Tomato</td>
                    </tr>
                    <tr>
                        <td>Powdery Mildew</td>
                        <td>White powdery coating</td>
                        <td>Vegetables, Grapes</td>
                    </tr>
                    <tr>
                        <td>Rust</td>
                        <td>Orange/brown pustules</td>
                        <td>Wheat, Beans</td>
                    </tr>
                    <tr>
                        <td>Bacterial Spot</td>
                        <td>Dark water-soaked spots</td>
                        <td>Tomato, Pepper</td>
                    </tr>
                </table>

                <h3>2. How AI Detection Works</h3>
                <ol>
                    <li>📸 <strong>Capture:</strong> Take photo of affected leaf</li>
                    <li>🔍 <strong>Preprocess:</strong> Resize, normalize image</li>
                    <li>🧠 <strong>Analyze:</strong> CNN extracts visual features</li>
                    <li>📊 <strong>Classify:</strong> Match to known disease patterns</li>
                    <li>💊 <strong>Recommend:</strong> Suggest treatment</li>
                </ol>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Basic structure for disease detection pipeline

import numpy as np

# Simulated disease detection system
class SimpleDiseaseDetector:
    """Rule-based disease detection (before we learn CNNs)"""
    
    def __init__(self):
        self.diseases = {
            'healthy': {'color': 'green', 'spots': 0},
            'blight': {'color': 'brown', 'spots': 'many'},
            'rust': {'color': 'orange', 'spots': 'pustules'},
            'mildew': {'color': 'white', 'spots': 'coating'}
        }
    
    def analyze_leaf(self, dominant_color, spot_count, spot_type):
        """Simple rule-based analysis"""
        
        if dominant_color == 'green' and spot_count < 5:
            return 'healthy', 1.0
        
        if dominant_color in ['brown', 'yellow'] and spot_count > 20:
            return 'blight', 0.8
        
        if spot_type == 'pustules':
            return 'rust', 0.85
        
        if spot_type == 'powdery':
            return 'mildew', 0.9
        
        return 'unknown', 0.5
    
    def get_treatment(self, disease):
        treatments = {
            'healthy': 'No action needed',
            'blight': 'Apply fungicide, remove affected leaves',
            'rust': 'Apply sulfur-based fungicide',
            'mildew': 'Improve air circulation, apply neem oil',
            'unknown': 'Consult agricultural officer'
        }
        return treatments.get(disease, 'Unknown')

# Use the detector
detector = SimpleDiseaseDetector()

# Analyze sample leaves
samples = [
    ('green', 2, 'none'),
    ('brown', 30, 'spots'),
    ('orange', 15, 'pustules'),
    ('white', 10, 'powdery')
]

print("=== Disease Detection Results ===")
for color, spots, spot_type in samples:
    disease, confidence = detector.analyze_leaf(color, spots, spot_type)
    treatment = detector.get_treatment(disease)
    print(f"\\n🌿 Analysis:")
    print(f"   Disease: {disease} (confidence: {confidence:.0%})")
    print(f"   Treatment: {treatment}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Disease Identification Practice</h3>
                    <ol>
                        <li>Visit PlantVillage website or use Plantix app</li>
                        <li>Study 5 different crop diseases</li>
                        <li>Document: Disease name, symptoms, affected crops</li>
                        <li>Take photos of any plants around you and try detection</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What type of AI is typically used for image-based disease detection?</p>
                    <ul>
                        <li>A) Linear Regression</li>
                        <li>B) Convolutional Neural Networks (CNN)</li>
                        <li>C) Decision Trees</li>
                        <li>D) K-Means Clustering</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - CNNs are specialized for image analysis and pattern recognition.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Early detection prevents major crop losses</li>
                    <li>AI can detect diseases from leaf photos</li>
                    <li>CNNs are the core technology for image-based detection</li>
                    <li>Apps like Plantix make this accessible to all farmers</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t8': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Computer Vision Fundamentals</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand how computers "see" images (Pixels & Channels)</li>
                    <li>Learn basic operations with OpenCV (Load, Resize, Blur)</li>
                    <li>Understand Color Spaces (RGB vs HSV) for object detection</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Computer Vision = The Digital Agronomist's Eye</strong></p>
                    <p>To a computer, an image of a farm field isn't "crops and soil"—it's a giant spreadsheet of numbers (pixels). By analyzing these numbers, we can teach the computer to spot weeds just like a farmer spots them by their distinct green color against brown soil.</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Key Concepts</h2>
                <div class="concept-card" style="margin-bottom: 20px;">
                    <h3>1. What is an Image?</h3>
                    <p>An image is a grid of pixels. In color images, each pixel has 3 values: <strong>Red, Green, Blue (RGB)</strong>. Each value ranges from 0 (Black) to 255 (Bright).</p>
                </div>
                
                <div class="concept-card">
                    <h3>2. OpenCV Library</h3>
                    <p><strong>OpenCV</strong> is the most popular library for Computer Vision. It helps us manipulate these pixel grids to extract useful information.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import cv2
import numpy as np
import matplotlib.pyplot as plt

# === 1. CREATING A SYNTHETIC IMAGE ===
print("=== Creating and Processing Images ===")

# Create a black image (100x100 pixels, 3 channels for RGB)
# Note: OpenCV uses BGR format mainly
image = np.zeros((100, 100, 3), dtype=np.uint8)

# Draw a brown rectangle (representing Soil)
# BGR for Brown: (30, 70, 120) roughly
cv2.rectangle(image, (0, 0), (100, 100), (30, 70, 120), -1)

# Draw a green circle (representing a Crop)
cv2.circle(image, (50, 50), 30, (0, 255, 0), -1)

print(f"Image Shape: {image.shape} (Height, Width, Channels)")

# === 2. COLOR SPACE CONVERSION ===
print("\\n=== Converting Color Spaces ===")
# Convert BGR to RGB for plotting with Matplotlib
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# Convert to Grayscale (Simpler, just light intensity)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Convert to HSV (Hue, Saturation, Value) - Best for color detection
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

print("Converted to RGB, Grayscale, and HSV.")

# === 3. SEGMENTATION (WEED DETECTION) ===
print("\\n=== Simple Color Segmentation ===")
# We want to isolate the Green plant from the Brown soil.
# HSV is robust for this. Green hue is around 60.

# Define range of Green color in HSV
lower_green = np.array([35, 50, 50])
upper_green = np.array([85, 255, 255])

# Create a mask: White (255) where green matches, Black (0) otherwise
mask = cv2.inRange(hsv, lower_green, upper_green)

# Calculate area (pixels)
plant_area = np.sum(mask > 0)
total_area = mask.size
coverage = (plant_area / total_area) * 100

print(f"Plant Pixels Detected: {plant_area}")
print(f"Field Coverage: {coverage:.2f}%")

# Visualize (simulated via text since we can't show plot here)
# In lab: plt.imshow(mask, cmap='gray')
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build a "Digital Weed Spotter"</h3>
                    <p>Using Google Colab and OpenCV:</p>
                    <ol>
                        <li>Upload a photo of a plant on soil.</li>
                        <li>Convert it to <strong>HSV</strong> color space.</li>
                        <li>Experiment with <code>cv2.inRange()</code> values to create a mask that shows <strong>only</strong> the green plant parts.</li>
                        <li>Count the white pixels in your mask to estimate the plant's size!</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> In an RGB image, what does the value (255, 0, 0) represent?</p>
                    <ul>
                        <li>A) Pure Green</li>
                        <li>B) Pure Blue</li>
                        <li>C) Pure Red</li>
                        <li>D) Black</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - RGB stands for Red, Green, Blue. The first channel is Red.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Why do we use HSV instead of RGB for color detection?</p>
                    <ul>
                        <li>A) It uses fewer bytes</li>
                        <li>B) It separates Color (Hue) from Brightness (Value)</li>
                        <li>C) It is the default for cameras</li>
                        <li>D) It looks better</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - HSV makes it easier to track a color (like green) even if shadows make it darker or lighter.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Images are 3D arrays of numbers (Height, Width, Channels).</li>
                    <li><strong>OpenCV</strong> is the essential library for computer vision in Python.</li>
                    <li><strong>HSV</strong> color space is superior for detecting objects by color (like crops vs soil).</li>
                    <li>Thresholding (Masking) is the simplest form of object detection.</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t9': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 CNN Introduction</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand how CNNs process images</li>
                    <li>Learn about convolutional and pooling layers</li>
                    <li>Build a simple CNN architecture</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>CNN = Experienced Crop Inspector</strong></p>
                    <p>A human expert scans leaves looking for patterns - edges, spots, colors. A CNN does the same, but processes millions of images to learn every possible disease pattern!</p>
                    <ul>
                        <li>🔍 <strong>Convolutional Layer:</strong> Searches for specific patterns (edges, spots)</li>
                        <li>📉 <strong>Pooling Layer:</strong> Summarizes findings (zoom out)</li>
                        <li>🧠 <strong>Dense Layer:</strong> Makes final decision (healthy/diseased)</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import tensorflow as tf
from tensorflow.keras import layers, models

# === BUILD CNN FOR CROP DISEASE DETECTION ===
print("=== Building CNN Model ===")

def create_crop_disease_cnn(input_shape=(224, 224, 3), num_classes=10):
    """
    Create a CNN for crop disease classification.
    
    Architecture:
    - 3 Convolutional blocks (Conv + Pool)
    - Flatten and Dense layers
    - Output layer for classification
    """
    
    model = models.Sequential([
        # First Conv Block
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        
        # Second Conv Block
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Third Conv Block
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Flatten and Dense
        layers.Flatten(),
        layers.Dropout(0.5),  # Prevent overfitting
        layers.Dense(128, activation='relu'),
        
        # Output
        layers.Dense(num_classes, activation='softmax')
    ])
    
    return model

# Create model
model = create_crop_disease_cnn(num_classes=5)  # 5 disease classes

# Compile
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Show architecture
model.summary()

# === UNDERSTANDING LAYERS ===
print("\\n=== Layer Explanation ===")
print("Conv2D: Detects patterns (edges, textures, spots)")
print("MaxPooling2D: Reduces size, keeps important features")
print("Flatten: Converts 2D to 1D for classification")
print("Dense: Makes final classification decision")
print("Softmax: Outputs probabilities for each class")

# === TRAINING (conceptual) ===
print("\\n=== Training Workflow ===")
print("""
1. Load images: train_data = load_images('dataset/')
2. Preprocess: normalize, resize to 224x224
3. Train: model.fit(train_data, epochs=20)
4. Evaluate: model.evaluate(test_data)
5. Predict: model.predict(new_leaf_image)
""")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Visualize CNN Layers</h3>
                    <p>Use this code to understand what each layer "sees":</p>
                    <pre><code class="language-python">
# Visualize what convolutional filters detect
# Run in Colab with PlantVillage dataset
# See how early layers detect edges
# Later layers detect complex patterns
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does a convolutional layer do?</p>
                    <ul>
                        <li>A) Classifies images</li>
                        <li>B) Detects patterns like edges and textures</li>
                        <li>C) Reduces image size</li>
                        <li>D) Stores images</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Convolutional layers use filters to detect patterns in images.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>CNNs are designed specifically for image data</li>
                    <li>Conv layers detect features, Pooling reduces size</li>
                    <li>Deeper layers detect more complex patterns</li>
                    <li>Transfer learning (pretrained models) is recommended</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Time Series Analysis Fundamentals</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand time series components</li>
                    <li>Check for stationarity</li>
                    <li>Apply decomposition techniques</li>
                    <li>Prepare data for forecasting</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Time Series = The Farm's Diary</strong></p>
                    <p>Your farm data has patterns that repeat over time:</p>
                    <ul>
                        <li>📈 <strong>Trend:</strong> Yields improving over years</li>
                        <li>🔄 <strong>Seasonality:</strong> Monsoon rains every year</li>
                        <li>📊 <strong>Noise:</strong> Random daily variations</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose

# === CREATE TIME SERIES DATA ===
print("=== Agricultural Time Series ===")

# 3 years of monthly data
dates = pd.date_range('2021-01-01', periods=36, freq='M')

# Create realistic yield pattern
np.random.seed(42)
trend = np.linspace(2000, 2400, 36)  # Increasing trend
seasonality = 300 * np.sin(np.linspace(0, 6*np.pi, 36))  # Seasonal pattern
noise = np.random.normal(0, 100, 36)  # Random noise

yields = trend + seasonality + noise

ts_data = pd.Series(yields, index=dates, name='monthly_yield')
print(ts_data.head(12))

# === DECOMPOSITION ===
print("\\n=== Decomposing Time Series ===")
decomposition = seasonal_decompose(ts_data, period=12)

# Visualize components
fig, axes = plt.subplots(4, 1, figsize=(12, 10))

decomposition.observed.plot(ax=axes[0], title='Original')
decomposition.trend.plot(ax=axes[1], title='Trend')
decomposition.seasonal.plot(ax=axes[2], title='Seasonality')
decomposition.resid.plot(ax=axes[3], title='Residual (Noise)')

plt.tight_layout()
plt.show()

# === STATIONARITY CHECK ===
print("\\n=== Checking Stationarity ===")
from statsmodels.tsa.stattools import adfuller

result = adfuller(ts_data.dropna())
print(f'ADF Statistic: {result[0]:.4f}')
print(f'p-value: {result[1]:.4f}')

if result[1] < 0.05:
    print("✅ Series is stationary")
else:
    print("⚠️ Series is non-stationary - needs differencing")
    
# Make stationary by differencing
ts_diff = ts_data.diff().dropna()
result2 = adfuller(ts_diff)
print(f'After differencing p-value: {result2[1]:.4f}')
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Analyze Weather Time Series</h3>
                    <ol>
                        <li>Download temperature data for your region</li>
                        <li>Decompose into trend, seasonality, residual</li>
                        <li>Identify: Is there a warming trend?</li>
                        <li>What's the seasonal pattern?</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What are the three components of a time series?</p>
                    <ul>
                        <li>A) Mean, Median, Mode</li>
                        <li>B) Trend, Seasonality, Noise</li>
                        <li>C) X, Y, Z</li>
                        <li>D) Past, Present, Future</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Time series can be decomposed into trend, seasonality, and noise (residual).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Time series have trend, seasonality, and noise</li>
                    <li>Decomposition separates these components</li>
                    <li>Stationarity is required for many models</li>
                    <li>Differencing can make series stationary</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module3Handouts = module3Handouts;
}
