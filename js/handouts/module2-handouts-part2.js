// Module 2 Comprehensive Handouts - Part 2 (m2-t3, m2-t4, m2-t7 to m2-t13)
// Broadcasting, Stats, Data Analysis, Visualization

const module2HandoutsPart2 = {
    'm2-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Broadcasting and Advanced Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand NumPy broadcasting rules</li>
                    <li>Apply vectorization for efficient computation</li>
                    <li>Optimize performance with NumPy operations</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Broadcasting = One Tractor, Many Fields</strong></p>
                    <p>Instead of driving a tractor through each field row separately, broadcasting lets you apply an operation across all rows at once - like aerial spraying!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === BROADCASTING BASICS ===
print("=== Broadcasting Example ===")

# All plot yields
yields = np.array([2500, 2800, 3100, 2900, 2700])

# Add bonus to ALL yields (broadcasting scalar)
bonus = 200
adjusted_yields = yields + bonus  # 200 is broadcast to all elements
print(f"Original: {yields}")
print(f"With bonus: {adjusted_yields}")

# === BROADCASTING WITH ARRAYS ===
print("\\n=== 2D Broadcasting ===")

# Yields for 3 plots, 4 seasons
yields_2d = np.array([
    [2500, 2600, 2400, 2700],  # Plot A
    [2800, 2900, 2700, 3000],  # Plot B
    [2200, 2300, 2100, 2400]   # Plot C
])

# Seasonal adjustment factors (1D array)
season_factors = np.array([1.0, 1.1, 0.9, 1.2])

# Broadcasting: (3,4) * (4,) -> (3,4)
adjusted = yields_2d * season_factors
print(f"Original:\\n{yields_2d}")
print(f"Season factors: {season_factors}")
print(f"Adjusted:\\n{adjusted}")

# === VECTORIZATION ===
print("\\n=== Vectorized Operations ===")

# Slow way (avoid!)
def slow_calculation(data):
    result = []
    for x in data:
        result.append(x * 2 + 10)
    return result

# Fast way (vectorized)
def fast_calculation(data):
    return data * 2 + 10

data = np.random.rand(100000)

import time
start = time.time()
slow = slow_calculation(data)
print(f"Loop time: {time.time()-start:.4f}s")

start = time.time()
fast = fast_calculation(data)
print(f"Vectorized time: {time.time()-start:.4f}s")
print("Vectorization is ~100x faster!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Normalize Sensor Data</h3>
                    <p>Using broadcasting, normalize sensor readings to 0-1 range:</p>
                    <pre><code class="language-python">
sensors = np.array([
    [25, 30, 28, 32],  # Temperature
    [60, 70, 65, 80],  # Humidity
    [40, 50, 45, 55]   # Soil moisture
])
# Normalize each row using: (x - min) / (max - min)
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is broadcasting in NumPy?</p>
                    <ul>
                        <li>A) Sending data over network</li>
                        <li>B) Automatically expanding arrays for operations</li>
                        <li>C) Printing output to console</li>
                        <li>D) Saving arrays to files</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Broadcasting automatically expands smaller arrays to match larger ones for element-wise operations.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Broadcasting automatically expands arrays for operations</li>
                    <li>Vectorization is much faster than loops</li>
                    <li>Use NumPy operations instead of Python loops</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Statistical Functions</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Calculate descriptive statistics with NumPy</li>
                    <li>Understand correlation and covariance</li>
                    <li>Apply statistics to agricultural data analysis</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Statistics = Understanding Your Farm's Patterns</strong></p>
                    <ul>
                        <li>📊 <strong>Mean:</strong> Average yield across all plots</li>
                        <li>📊 <strong>Std:</strong> How much yields vary</li>
                        <li>📊 <strong>Correlation:</strong> Does more rain = more yield?</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === DESCRIPTIVE STATISTICS ===
print("=== Farm Yield Statistics ===")

yields = np.array([2500, 2800, 3100, 2600, 2900, 3200, 2400, 2700])

print(f"Yields: {yields}")
print(f"Mean: {np.mean(yields):.0f} kg/ha")
print(f"Median: {np.median(yields):.0f} kg/ha")
print(f"Std Dev: {np.std(yields):.0f} kg/ha")
print(f"Variance: {np.var(yields):.0f}")
print(f"Min: {np.min(yields)}, Max: {np.max(yields)}")
print(f"Range: {np.ptp(yields)} kg/ha")  # peak-to-peak

# Percentiles
print(f"25th percentile: {np.percentile(yields, 25):.0f}")
print(f"75th percentile: {np.percentile(yields, 75):.0f}")

# === CORRELATION ===
print("\\n=== Correlation Analysis ===")

rainfall = np.array([100, 150, 200, 120, 180, 220, 90, 160])
yields = np.array([2500, 2800, 3100, 2600, 2900, 3200, 2400, 2700])

correlation = np.corrcoef(rainfall, yields)
print(f"Rainfall: {rainfall}")
print(f"Yields: {yields}")
print(f"Correlation matrix:\\n{correlation}")
print(f"Correlation coefficient: {correlation[0,1]:.3f}")

if correlation[0,1] > 0.7:
    print("✅ Strong positive correlation: More rain → Higher yield")
elif correlation[0,1] > 0.3:
    print("📊 Moderate positive correlation")
else:
    print("⚠️ Weak correlation")

# === COVARIANCE ===
print("\\n=== Covariance ===")
covariance = np.cov(rainfall, yields)
print(f"Covariance matrix:\\n{covariance}")
print(f"Covariance: {covariance[0,1]:.0f}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Analyze Your Farm Data</h3>
                    <p>Calculate statistics for temperature, humidity, and yield data:</p>
                    <ol>
                        <li>Find mean and std for each variable</li>
                        <li>Calculate correlation between temperature and yield</li>
                        <li>Calculate correlation between humidity and yield</li>
                        <li>Which factor has stronger correlation with yield?</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> A correlation of 0.85 between rainfall and yield means:</p>
                    <ul>
                        <li>A) No relationship</li>
                        <li>B) Strong positive relationship</li>
                        <li>C) Strong negative relationship</li>
                        <li>D) Cannot determine</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 0.85 is close to 1, indicating strong positive correlation.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>NumPy provides fast statistical functions</li>
                    <li>Correlation measures relationship strength (-1 to 1)</li>
                    <li>Covariance shows direction of relationship</li>
                    <li>Use np.corrcoef() for correlation analysis</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t7': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Analysis and Visualization</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use describe() and info() for quick data analysis</li>
                    <li>Create basic plots from DataFrames</li>
                    <li>Identify patterns and outliers in farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Data Analysis = Reading Your Farm's Health Report</strong></p>
                    <p>Just as a doctor's report tells you about your health, describe() and info() tell you everything about your farm data at a glance!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create farm dataset
np.random.seed(42)
farm_data = pd.DataFrame({
    'plot': [f'Plot_{i}' for i in range(1, 21)],
    'area_ha': np.random.uniform(1, 5, 20),
    'yield_kg': np.random.normal(3000, 500, 20),
    'rainfall_mm': np.random.uniform(100, 300, 20),
    'fertilizer_kg': np.random.uniform(30, 80, 20),
    'crop': np.random.choice(['Wheat', 'Rice', 'Cotton'], 20)
})

# === QUICK DATA OVERVIEW ===
print("=== Data Overview with info() ===")
print(farm_data.info())

print("\\n=== Statistical Summary with describe() ===")
print(farm_data.describe())

# === BASIC PLOTTING FROM DATAFRAME ===
print("\\n=== Creating Visualizations ===")

# Histogram
farm_data['yield_kg'].hist(bins=10, edgecolor='black')
plt.title('Distribution of Crop Yields')
plt.xlabel('Yield (kg/ha)')
plt.ylabel('Frequency')
plt.show()

# Box plot by crop
farm_data.boxplot(column='yield_kg', by='crop')
plt.title('Yield by Crop Type')
plt.suptitle('')  # Remove automatic title
plt.ylabel('Yield (kg/ha)')
plt.show()

# Scatter plot
farm_data.plot.scatter(x='rainfall_mm', y='yield_kg', 
                        alpha=0.7, c='fertilizer_kg', 
                        cmap='viridis', colorbar=True)
plt.title('Rainfall vs Yield (color = fertilizer)')
plt.show()
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Explore a Farm Dataset</h3>
                    <ol>
                        <li>Load a CSV file with farm data</li>
                        <li>Run info() and describe()</li>
                        <li>Create histograms for numerical columns</li>
                        <li>Create box plots to compare crops</li>
                        <li>Identify any outliers or anomalies</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does describe() show?</p>
                    <ul>
                        <li>A) Only column names</li>
                        <li>B) Count, mean, std, min, max, quartiles</li>
                        <li>C) Only data types</li>
                        <li>D) Memory usage only</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - describe() provides comprehensive statistical summary.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>info() shows data types and memory usage</li>
                    <li>describe() provides statistical summary</li>
                    <li>DataFrame has built-in plotting methods</li>
                    <li>Visualizations help identify patterns quickly</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t8': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Filtering and Selection</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use Boolean indexing to filter data</li>
                    <li>Master loc and iloc for data selection</li>
                    <li>Apply query methods for complex filters</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Filtering = Sorting Seeds by Quality</strong></p>
                    <p>Just as you sort seeds by size, color, or quality - filtering lets you select exactly the data rows you need!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Create farm data
farm = pd.DataFrame({
    'plot': ['A', 'B', 'C', 'D', 'E', 'F'],
    'crop': ['Wheat', 'Rice', 'Wheat', 'Cotton', 'Rice', 'Wheat'],
    'yield_kg': [2500, 3200, 2800, 1800, 3100, 2600],
    'irrigated': [True, True, False, True, True, False]
})

print("=== Original Data ===")
print(farm)

# === BOOLEAN INDEXING ===
print("\\n=== Boolean Indexing ===")

# High yield plots
high_yield = farm[farm['yield_kg'] > 2700]
print("High yield plots (>2700):")
print(high_yield)

# Wheat plots
wheat = farm[farm['crop'] == 'Wheat']
print("\\nWheat plots:")
print(wheat)

# Multiple conditions
irrigated_wheat = farm[(farm['crop'] == 'Wheat') & (farm['irrigated'] == True)]
print("\\nIrrigated wheat:")
print(irrigated_wheat)

# === LOC AND ILOC ===
print("\\n=== loc (label-based) ===")
print(farm.loc[0:2, ['plot', 'yield_kg']])  # Rows 0-2, specific columns

print("\\n=== iloc (position-based) ===")
print(farm.iloc[0:2, 1:3])  # First 2 rows, columns 1-2

# === QUERY METHOD ===
print("\\n=== Query Method ===")
result = farm.query("yield_kg > 2500 and irrigated == True")
print(result)
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Filter Farm Data Challenge</h3>
                    <p>Given a farm dataset, filter to find:</p>
                    <ol>
                        <li>All plots with area > 2 hectares</li>
                        <li>Plots with yield below average</li>
                        <li>Irrigated plots with high yields</li>
                        <li>Top 3 performing plots</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What's the difference between loc and iloc?</p>
                    <ul>
                        <li>A) loc is faster</li>
                        <li>B) loc uses labels, iloc uses positions</li>
                        <li>C) They are the same</li>
                        <li>D) iloc only works on rows</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - loc is label-based, iloc is position-based (integer).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Boolean indexing: df[df['col'] > value]</li>
                    <li>loc: label-based selection</li>
                    <li>iloc: integer position-based selection</li>
                    <li>query(): string-based filtering for complex conditions</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t9': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Handling Missing Data</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Detect missing values in datasets</li>
                    <li>Apply strategies to fill missing data</li>
                    <li>Make decisions about dropping vs imputing</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Missing Data = Gaps in Farm Records</strong></p>
                    <p>Some days the sensor failed, some records got lost. We need to fill these gaps intelligently - like estimating missing rainfall from nearby stations!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Create data with missing values
data = pd.DataFrame({
    'plot': ['A', 'B', 'C', 'D', 'E'],
    'yield_kg': [2500, np.nan, 2800, np.nan, 2600],
    'rainfall': [150, 200, np.nan, 180, 170],
    'temperature': [28, 30, 29, np.nan, 27]
})

print("=== Data with Missing Values ===")
print(data)

# === DETECTING MISSING DATA ===
print("\\n=== Detecting Missing Values ===")
print("Is null?")
print(data.isnull())
print(f"\\nTotal missing per column:")
print(data.isnull().sum())

# === FILLING MISSING VALUES ===
print("\\n=== Filling Strategies ===")

# Fill with mean
data_mean = data.copy()
data_mean['yield_kg'] = data_mean['yield_kg'].fillna(data_mean['yield_kg'].mean())
print("Fill with mean:")
print(data_mean['yield_kg'])

# Fill with median
data_median = data.copy()
data_median['rainfall'] = data_median['rainfall'].fillna(data_median['rainfall'].median())

# Forward fill (use previous value)
data_ffill = data.copy()
data_ffill = data_ffill.fillna(method='ffill')
print("\\nForward fill:")
print(data_ffill)

# === DROPPING MISSING DATA ===
print("\\n=== Dropping Rows ===")
data_dropped = data.dropna()
print(f"Original rows: {len(data)}, After drop: {len(data_dropped)}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Clean a Messy Dataset</h3>
                    <ol>
                        <li>Load a dataset with missing values</li>
                        <li>Report % missing per column</li>
                        <li>Decide: drop or fill for each column</li>
                        <li>Apply appropriate filling strategy</li>
                        <li>Verify no missing values remain</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> When should you drop rows with missing data?</p>
                    <ul>
                        <li>A) Always</li>
                        <li>B) When very few rows are affected</li>
                        <li>C) Never</li>
                        <li>D) Only for numerical columns</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Drop when missing data is minimal. Otherwise, impute to avoid losing too much data.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>isnull() and isna() detect missing values</li>
                    <li>fillna() replaces missing with specified value</li>
                    <li>dropna() removes rows/columns with missing data</li>
                    <li>Choose strategy based on data importance and amount missing</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Aggregation and Grouping</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use groupby() for data aggregation</li>
                    <li>Apply multiple aggregation functions</li>
                    <li>Create pivot tables for analysis</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Groupby = Organizing Harvest by Category</strong></p>
                    <p>Just as you separate harvest by crop type to count each - groupby separates data to analyze each group!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Create farm data
farm = pd.DataFrame({
    'region': ['North', 'North', 'South', 'South', 'East', 'East'],
    'crop': ['Wheat', 'Rice', 'Wheat', 'Rice', 'Wheat', 'Rice'],
    'area_ha': [10, 8, 12, 6, 9, 7],
    'yield_kg': [25000, 32000, 28000, 24000, 22000, 28000]
})

print("=== Original Data ===")
print(farm)

# === BASIC GROUPBY ===
print("\\n=== Average Yield by Crop ===")
by_crop = farm.groupby('crop')['yield_kg'].mean()
print(by_crop)

# === MULTIPLE AGGREGATIONS ===
print("\\n=== Multiple Stats by Region ===")
by_region = farm.groupby('region').agg({
    'area_ha': 'sum',
    'yield_kg': ['mean', 'sum', 'count']
})
print(by_region)

# === GROUPBY MULTIPLE COLUMNS ===
print("\\n=== By Region AND Crop ===")
multi_group = farm.groupby(['region', 'crop'])['yield_kg'].sum()
print(multi_group)

# === PIVOT TABLE ===
print("\\n=== Pivot Table ===")
pivot = farm.pivot_table(
    values='yield_kg', 
    index='region', 
    columns='crop', 
    aggfunc='sum'
)
print(pivot)
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Analyze Farm Performance by Group</h3>
                    <ol>
                        <li>Group by crop type: find average yield</li>
                        <li>Group by region: find total area and yield</li>
                        <li>Create pivot: regions as rows, crops as columns</li>
                        <li>Find best performing region-crop combination</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does groupby() return?</p>
                    <ul>
                        <li>A) A single value</li>
                        <li>B) A GroupBy object for aggregation</li>
                        <li>C) A filtered DataFrame</li>
                        <li>D) A sorted DataFrame</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - groupby() returns a GroupBy object that you can then apply aggregation functions to.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>groupby() splits data into groups</li>
                    <li>Apply functions: mean(), sum(), count(), etc.</li>
                    <li>agg() for multiple functions at once</li>
                    <li>pivot_table() for cross-tabulation</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Advanced Chart Types</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create histograms for distribution analysis</li>
                    <li>Use box plots to identify outliers</li>
                    <li>Build heatmaps for correlation visualization</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Advanced Charts = Detailed Farm Maps</strong></p>
                    <ul>
                        <li>📊 <strong>Histogram:</strong> Distribution of yields across plots</li>
                        <li>📦 <strong>Box Plot:</strong> Comparing crops, finding outliers</li>
                        <li>🗺️ <strong>Heatmap:</strong> Correlation between all factors</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Create data
np.random.seed(42)
yields = np.random.normal(3000, 500, 100)
crops = ['Wheat']*30 + ['Rice']*35 + ['Cotton']*35
crop_yields = {
    'Wheat': np.random.normal(2800, 400, 30),
    'Rice': np.random.normal(3500, 500, 35),
    'Cotton': np.random.normal(2000, 300, 35)
}

# === HISTOGRAM ===
plt.figure(figsize=(10, 4))
plt.hist(yields, bins=15, edgecolor='black', color='skyblue')
plt.title('Distribution of Crop Yields')
plt.xlabel('Yield (kg/ha)')
plt.ylabel('Frequency')
plt.axvline(np.mean(yields), color='red', linestyle='--', label='Mean')
plt.legend()
plt.show()

# === BOX PLOT ===
plt.figure(figsize=(10, 5))
data = [crop_yields['Wheat'], crop_yields['Rice'], crop_yields['Cotton']]
plt.boxplot(data, labels=['Wheat', 'Rice', 'Cotton'])
plt.title('Yield Comparison by Crop (Box Plot)')
plt.ylabel('Yield (kg/ha)')
plt.grid(True, alpha=0.3)
plt.show()

# === HEATMAP ===
# Correlation matrix
df = pd.DataFrame({
    'Rainfall': np.random.uniform(100, 300, 50),
    'Temperature': np.random.uniform(20, 35, 50),
    'Fertilizer': np.random.uniform(30, 80, 50),
    'Yield': np.random.uniform(2000, 4000, 50)
})
corr = df.corr()

plt.figure(figsize=(8, 6))
plt.imshow(corr, cmap='coolwarm', aspect='auto')
plt.colorbar(label='Correlation')
plt.xticks(range(len(corr.columns)), corr.columns, rotation=45)
plt.yticks(range(len(corr.columns)), corr.columns)
plt.title('Correlation Heatmap')

# Add values
for i in range(len(corr)):
    for j in range(len(corr)):
        plt.text(j, i, f'{corr.iloc[i,j]:.2f}', ha='center', va='center')
plt.tight_layout()
plt.show()
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Create a Complete Dashboard</h3>
                    <ol>
                        <li>Histogram: yield distribution</li>
                        <li>Box plot: compare 3 regions</li>
                        <li>Heatmap: all variable correlations</li>
                        <li>Arrange as 2x2 subplot grid</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What do the whiskers on a box plot represent?</p>
                    <ul>
                        <li>A) Mean and median</li>
                        <li>B) Minimum and maximum (or 1.5×IQR)</li>
                        <li>C) Standard deviation</li>
                        <li>D) Mode values</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Whiskers extend to min/max or 1.5× the interquartile range.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Histograms show data distribution</li>
                    <li>Box plots compare groups and show outliers</li>
                    <li>Heatmaps visualize relationships between all variables</li>
                    <li>Use subplots to create dashboards</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Seaborn: Statistical Visualization</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create beautiful statistical plots with Seaborn</li>
                    <li>Use distribution and relationship plots</li>
                    <li>Apply Seaborn for agricultural data insights</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Seaborn = Professional Farm Reports</strong></p>
                    <p>While Matplotlib is like hand-drawing charts, Seaborn produces publication-quality visualizations automatically!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Set style
sns.set_theme(style="whitegrid")

# Create data
np.random.seed(42)
farm = pd.DataFrame({
    'crop': np.random.choice(['Wheat', 'Rice', 'Cotton'], 100),
    'region': np.random.choice(['North', 'South', 'East'], 100),
    'yield_kg': np.random.normal(3000, 600, 100),
    'rainfall': np.random.uniform(100, 300, 100),
    'fertilizer': np.random.uniform(30, 80, 100)
})

# === DISTRIBUTION PLOTS ===
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

# Histogram with KDE
sns.histplot(farm['yield_kg'], kde=True, ax=axes[0])
axes[0].set_title('Yield Distribution')

# Violin plot
sns.violinplot(x='crop', y='yield_kg', data=farm, ax=axes[1])
axes[1].set_title('Yield by Crop (Violin)')
plt.tight_layout()
plt.show()

# === RELATIONSHIP PLOTS ===
# Scatter with regression
sns.lmplot(x='rainfall', y='yield_kg', hue='crop', data=farm, height=5)
plt.title('Rainfall vs Yield by Crop')
plt.show()

# Pair plot
sns.pairplot(farm[['yield_kg', 'rainfall', 'fertilizer', 'crop']], hue='crop')
plt.show()

# === CATEGORICAL PLOTS ===
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

sns.boxplot(x='region', y='yield_kg', hue='crop', data=farm, ax=axes[0])
axes[0].set_title('Yield by Region and Crop')

sns.barplot(x='crop', y='yield_kg', data=farm, ci=95, ax=axes[1])
axes[1].set_title('Average Yield by Crop (95% CI)')
plt.tight_layout()
plt.show()
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Create Beautiful Farm Reports</h3>
                    <ol>
                        <li>Create a pairplot of all numerical variables</li>
                        <li>Make a violin plot comparing yields</li>
                        <li>Build a regression plot (lmplot)</li>
                        <li>Create a heatmap of correlations with sns.heatmap</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does sns.lmplot() add to a scatter plot?</p>
                    <ul>
                        <li>A) Colors</li>
                        <li>B) A regression line with confidence interval</li>
                        <li>C) 3D effect</li>
                        <li>D) Animation</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - lmplot adds a linear regression line with shaded confidence interval.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Seaborn creates beautiful statistical plots</li>
                    <li>histplot, violinplot for distributions</li>
                    <li>lmplot for regression visualization</li>
                    <li>pairplot for exploring all relationships</li>
                </ul>
            </div>
        </div>
    `
};

// Export
if (typeof window !== 'undefined') {
    window.module2HandoutsPart2 = module2HandoutsPart2;
}
