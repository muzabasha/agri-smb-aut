// Module 3 Comprehensive Handouts - Part 2
// Regression, Weather/Soil Data, Crop Health, CV Fundamentals

const module3HandoutsPart2 = {
    'm3-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Regression Techniques for Yield Forecasting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Apply polynomial regression for non-linear yield patterns</li>
                    <li>Use Regularization (Ridge/Lasso) to prevent overfitting</li>
                    <li>Compare model performance on agricultural datasets</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Polynomial Regression = Curves, not just Straight Lines</strong></p>
                    <p>Crop growth isn't a straight line. It starts slow, explodes during mid-season, and plateaus before harvest. A simple ruler (Linear Regression) can't measure this curve - you need a flexible tape measure (Polynomial)!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

# Generate S-shaped crop growth data
np.random.seed(42)
days = np.sort(np.random.uniform(0, 100, 50))[:, np.newaxis]
height = 100 / (1 + np.exp(-0.1 * (days - 50))) + np.random.normal(0, 2, (50, 1))

# === POLYNOMIAL REGRESSION ===
print("=== Modeling Growth Curve ===")

# Linear Model (Underfitting)
linear = LinearRegression().fit(days, height)
y_linear = linear.predict(days)

# Polynomial Model (Degree 3)
poly = make_pipeline(PolynomialFeatures(3), LinearRegression())
poly.fit(days, height)
y_poly = poly.predict(days)

# Plot
plt.scatter(days, height, color='black', label='Measurements')
plt.plot(days, y_linear, color='red', label='Linear (Too Simple)')
plt.plot(days, y_poly, color='green', linewidth=2, label='Polynomial (Good Fit)')
plt.title('Crop Growth Modeling')
plt.legend()
plt.show()

# === REGULARIZATION (Ridge vs Lasso) ===
print("\\n=== Regularization ===")
# Lasso shrinks coefficients to ZERO (feature selection)
lasso = Lasso(alpha=0.1)
lasso.fit(days, height)
print(f"Lasso Coeffs: {lasso.coef_}")
print("Notice how Lasso simplifies the model by shrinking weights!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Model Fertilizer Response</h3>
                    <p>Yield usually increases with fertilizer but drops if you over-fertilize (toxic). This is a curve!</p>
                    <ol>
                        <li>Create a dataset with fertilizer vs yield (parabolic shape).</li>
                        <li>Fit a Linear Regression (will likely fail).</li>
                        <li>Fit a Polynomial Regression (Degree 2).</li>
                        <li>Show that Degree 2 captures the "diminishing returns" effect.</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which regression type helps select features by making coefficients zero?</p>
                    <ul>
                        <li>A) Ridge Regression (L2)</li>
                        <li>B) Lasso Regression (L1)</li>
                        <li>C) Linear Regression</li>
                        <li>D) Polynomial Regression</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Lasso (L1 regularization) tends to shrink less important feature coefficients to exactly zero.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Real-world farming data is rarely linear</li>
                    <li>Use Polynomial Features to capture curves</li>
                    <li>Use Regularization to keep models stable</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Weather Data Integration</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Fetch weather data from APIs (OpenWeatherMap)</li>
                    <li>Preprocess timeseries weather data</li>
                    <li>Create derived features (Rolling averages, Lag features)</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Weather Data = The Mood of the Heavens</strong></p>
                    <p>Plants don't care about today's rain alone - they care about the "cumulative" rain over the last week. Integrating weather data means calculating these rolling summaries.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Mock daily weather data
dates = pd.date_range('2024-01-01', periods=20)
weather = pd.DataFrame({
    'date': dates,
    'temp_c': np.random.uniform(20, 35, 20),
    'rain_mm': [0, 0, 5, 20, 50, 10, 0, 0, 0, 0, 2, 5, 0, 0, 0, 20, 30, 5, 0, 0]
})

print("=== Raw Weather Data ===")
print(weather.head())

# === PREPROCESSING & FEATURE ENGINEERING ===
print("\\n=== Derived Features ===")

# Rolling Average (Smooth out daily noise)
weather['temp_7d_avg'] = weather['temp_c'].rolling(window=7).mean()

# Cumulative Rainfall (Soil moisture proxy)
weather['rain_3d_sum'] = weather['rain_mm'].rolling(window=3).sum()

# Lag Features (What happened yesterday affects today)
weather['rain_yesterday'] = weather['rain_mm'].shift(1)

print(weather.tail(5)) # Showing tail as rolling/lag creates NaNs at start

# === MERGING WITH CROP DATA ===
# Imagine we have crop observations on specific dates
crop_obs = pd.DataFrame({
    'date': pd.to_datetime(['2024-01-07', '2024-01-14']),
    'height_cm': [10, 15]
})

print("\\n=== Merged Data ===")
merged = pd.merge(crop_obs, weather, on='date', how='left')
print(merged)
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Calculate "Heat Stress"</h3>
                    <p>Crops suffer if temperature stays above 30°C for 3 consecutive days.</p>
                    <ol>
                        <li>Create a boolean column \`high_temp\` (temp > 30).</li>
                        <li>Use rolling window of size 3.</li>
                        <li>If sum of \`high_temp\` in window is 3, set \`heat_stress\` flag to True.</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why use rolling averages for weather data?</p>
                    <ul>
                        <li>A) To predict the future</li>
                        <li>B) To capture long-term trends and reduce daily noise</li>
                        <li>C) To save memory</li>
                        <li>D) APIs require it</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Plants respond to trends (accumulated moisture/heat), not just instantaneous values.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Raw weather data is noisy</li>
                    <li>Use rolling windows to capture trends</li>
                    <li>Shift/Lag data to model delayed effects</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t5': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Soil Data Integration</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Handle spatial soil data (Points vs Raster)</li>
                    <li>Interpolate point data to create soil maps</li>
                    <li>Use soil parameters (NPK, pH) in ML models</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Soil Data = The Foundation</strong></p>
                    <p>You only take soil samples at a few spots (Points), but you need to know the soil health of the whole field (Map). We use interpolation to "connect the dots"!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from scipy.interpolate import griddata
import matplotlib.pyplot as plt

# === SOIL SAMPLING POINTS ===
# Random sample points in a field (100x100m)
points = np.random.rand(15, 2) * 100 
# Nitrogen levels at those points
values = np.random.uniform(20, 60, 15)

# === INTERPOLATION (Krinking-like behavior) ===
# Create a grid for the whole field
grid_x, grid_y = np.mgrid[0:100:100j, 0:100:100j]

# Interpolate using cubic method
grid_z = griddata(points, values, (grid_x, grid_y), method='cubic')

# Plot
plt.figure(figsize=(8, 6))
plt.imshow(grid_z.T, extent=(0,100,0,100), origin='lower', cmap='YlGn')
plt.scatter(points[:,0], points[:,1], c='red', label='Sample Points')
plt.colorbar(label='Nitrogen Level')
plt.title('Interpolated Soil Nitrogen Map')
plt.legend()
plt.show()

print("Notice how we generated a full map from just 15 points!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Visualizing pH Levels</h3>
                    <p>You have 5 pH readings: (10,10)=6.5, (90,90)=7.2, (10,90)=5.5, (90,10)=6.8, (50,50)=6.0.</p>
                    <ol>
                        <li>Use `scipy.interpolate.griddata` to estimate pH at (30,30).</li>
                        <li>Visualize the gradient across the field.</li>
                        <li>Where would you apply lime (to raise pH)?</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What technique turns point data (samples) into a continuous surface (map)?</p>
                    <ul>
                        <li>A) Classification</li>
                        <li>B) Interpolation</li>
                        <li>C) Clustering</li>
                        <li>D) Sampling</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Interpolation estimates values between known points.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Soil samples are sparse (expensive to collect)</li>
                    <li>Interpolation fills the gaps</li>
                    <li>Soil maps guide Variable Rate Application (VRA)</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t6': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Crop Health Assessment</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Calculate Vegetation Indices (NDVI)</li>
                    <li>Interpret spectral signatures</li>
                    <li>Use thresholds to classify health status</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>NDVI = Plant Vital Signs Monitor</strong></p>
                    <p>Healthy plants reflect a lot of Near-Infrared (NIR) light but absorb Red light (for photosynthesis). Stressed plants do the opposite. NDVI measures this difference!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import matplotlib.pyplot as plt

# === SIMULATE SATELLITE BANDS ===
# Image size 10x10 pixels
# Healthy plants (High NIR, Low Red)
nir_band = np.random.uniform(0.6, 0.9, (10, 10))
red_band = np.random.uniform(0.05, 0.2, (10, 10))

# Add a "stressed" patch in the middle
nir_band[4:7, 4:7] = 0.3 # Low reflection
red_band[4:7, 4:7] = 0.4 # High absorption failure

# === CALCULATE NDVI ===
# NDVI = (NIR - Red) / (NIR + Red)
ndvi = (nir_band - red_band) / (nir_band + red_band)

print(f"Max NDVI: {np.max(ndvi):.2f}")
print(f"Min NDVI: {np.min(ndvi):.2f}")

# Visualize
plt.figure(figsize=(8, 6))
plt.imshow(ndvi, cmap='RdYlGn', vmin=-1, vmax=1)
plt.colorbar(label='NDVI')
plt.title('Crop Health Map (Green=Healthy, Red=Stressed)')
plt.show()

print("The center patch shows red/yellow, indicating stress!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Interpret NDVI Values</h3>
                    <ul>
                        <li><strong>> 0.6:</strong> Healthy, dense vegetation</li>
                        <li><strong>0.2 to 0.5:</strong> Sparse or stressed vegetation</li>
                        <li><strong>0 to 0.1:</strong> Soil, Rock</li>
                        <li><strong>< 0:</strong> Water</li>
                    </ul>
                    <p>Given an NDVI value of 0.05, what are you looking at?</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which light band is MOST reflected by healthy vegetation?</p>
                    <ul>
                        <li>A) Blue</li>
                        <li>B) Red</li>
                        <li>C) Near-Infrared (NIR)</li>
                        <li>D) Green</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Healthy cell structures reflect NIR strongly.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>NDVI is the gold standard for crop health</li>
                    <li>Requires multispectral data (NIR band)</li>
                    <li>Enables spotting stress before human eye can see it</li>
                </ul>
            </div>
        </div>
    `,


};

if (typeof window !== 'undefined') {
    window.module3HandoutsPart2 = module3HandoutsPart2;
}
