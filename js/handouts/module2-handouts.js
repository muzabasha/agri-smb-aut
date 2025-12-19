// Module 2 Comprehensive Handouts - Part 1 (m2-t1 to m2-t13)
// NumPy, Pandas, and Visualization Topics

const module2Handouts = {
    'm2-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 NumPy: Arrays and Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create NumPy arrays from farm data</li>
                    <li>Perform array indexing and slicing</li>
                    <li>Apply mathematical operations on arrays</li>
                    <li>Understand array shapes and dimensions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>NumPy Arrays = Organized Seed Trays</strong></p>
                    <p>Just as a seed tray holds seeds in organized rows and columns, NumPy arrays hold numbers in structured formats for efficient processing.</p>
                    <p>Processing 1000 soil samples? NumPy does it in one operation instead of 1000 loops!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === CREATING ARRAYS ===
print("=== Creating NumPy Arrays ===")

# From list
yields = np.array([2500, 2800, 3100, 2900, 2700])
print(f"Yields: {yields}")
print(f"Type: {type(yields)}")

# Using arange (like range, but for arrays)
plot_numbers = np.arange(1, 6)
print(f"Plots: {plot_numbers}")

# Using linspace (evenly spaced)
temperatures = np.linspace(20, 35, 5)
print(f"Temperature range: {temperatures}")

# 2D Array (matrix) - farm grid
farm_grid = np.array([
    [2500, 2600, 2700],
    [2800, 2900, 3000],
    [2400, 2500, 2600]
])
print(f"\\nFarm Grid:\\n{farm_grid}")
print(f"Shape: {farm_grid.shape}")  # 3 rows, 3 columns

# === INDEXING AND SLICING ===
print("\\n=== Indexing and Slicing ===")

# Access elements
print(f"First yield: {yields[0]}")
print(f"Last yield: {yields[-1]}")
print(f"First 3 yields: {yields[:3]}")

# 2D indexing
print(f"Center plot yield: {farm_grid[1, 1]}")
print(f"First row: {farm_grid[0]}")
print(f"Last column: {farm_grid[:, -1]}")

# === ARRAY OPERATIONS ===
print("\\n=== Array Operations ===")

# Math on entire arrays (vectorized!)
yields_tons = yields / 1000
print(f"Yields in tons: {yields_tons}")

# Bonus calculation
bonus = np.where(yields > 2800, 500, 0)
print(f"Bonus per plot: {bonus}")

# Statistics
print(f"\\nTotal yield: {np.sum(yields)} kg")
print(f"Average: {np.mean(yields):.0f} kg")
print(f"Std Dev: {np.std(yields):.0f} kg")
print(f"Max: {np.max(yields)} kg, Min: {np.min(yields)} kg")

# Boolean filtering
high_yield_plots = yields[yields > 2700]
print(f"High yield plots (>2700): {high_yield_plots}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Analyze Soil Samples</h3>
                    <pre><code class="language-python">
import numpy as np

# 10 soil samples with pH values
soil_ph = np.array([6.2, 5.8, 7.1, 6.5, 5.5, 
                    6.8, 7.3, 6.0, 5.9, 6.7])

# Your tasks:
# 1. Find the mean pH
# 2. Count samples that are acidic (pH < 6.5)
# 3. Find which sample has the highest pH
# 4. Normalize pH to 0-1 range using (x - min)/(max - min)
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the main advantage of NumPy over Python lists?</p>
                    <ul>
                        <li>A) Easier syntax</li>
                        <li>B) Vectorized operations (faster)</li>
                        <li>C) More data types</li>
                        <li>D) Prettier output</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - NumPy performs operations on entire arrays at once, making it much faster than loops.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does <code>arr[1:4]</code> return?</p>
                    <ul>
                        <li>A) Elements at index 1, 2, 3, 4</li>
                        <li>B) Elements at index 1, 2, 3</li>
                        <li>C) Elements at index 0, 1, 2, 3</li>
                        <li>D) Error</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Slicing is exclusive of the end index (1 to 3 inclusive).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>NumPy arrays are faster and more memory-efficient than lists</li>
                    <li>Use np.array() to create arrays from lists</li>
                    <li>Indexing: [row, col] for 2D arrays</li>
                    <li>Vectorized operations apply to all elements at once</li>
                    <li>Built-in functions: sum, mean, std, max, min</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Matrix Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Perform matrix multiplication</li>
                    <li>Calculate transpose and determinant</li>
                    <li>Apply matrix operations to farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Matrix Operations = Combining Farm Data Layers</strong></p>
                    <p>Imagine overlaying soil maps with water maps and sunlight maps - matrix operations help combine these "layers" mathematically!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === MATRIX CREATION ===
print("=== Matrix Creation ===")

# Farm data: 3 plots, 4 factors each
# Columns: temp, rain, pH, fertilizer
farm_factors = np.array([
    [28, 150, 6.5, 50],
    [30, 120, 6.8, 45],
    [26, 180, 6.2, 60]
])
print(f"Farm Factors (3x4):\\n{farm_factors}")

# Weights for yield prediction
weights = np.array([[10], [5], [100], [20]])  # 4x1
print(f"\\nWeights (4x1):\\n{weights.flatten()}")

# === MATRIX MULTIPLICATION ===
print("\\n=== Matrix Multiplication ===")

# Predicted yields = factors @ weights + base
base_yield = 1000
predicted_yields = farm_factors @ weights + base_yield
print(f"Predicted Yields:\\n{predicted_yields.flatten()}")

# === TRANSPOSE ===
print("\\n=== Transpose ===")
print(f"Original shape: {farm_factors.shape}")
print(f"Transposed shape: {farm_factors.T.shape}")
print(f"Transposed:\\n{farm_factors.T}")

# === ELEMENT-WISE VS MATRIX OPERATIONS ===
print("\\n=== Element-wise vs Matrix ===")
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(f"A * B (element-wise):\\n{A * B}")
print(f"A @ B (matrix multiply):\\n{A @ B}")

# === PRACTICAL: NUTRIENT CALCULATION ===
print("\\n=== Fertilizer Mix Calculation ===")
# NPK requirements per crop (kg/ha)
npk_needs = np.array([
    [120, 60, 40],   # Wheat
    [100, 50, 50],   # Rice
    [80, 40, 30]     # Millet
])

# Area of each crop (hectares)
areas = np.array([[5], [3], [2]])  # Column vector

# Total NPK needed = crops × areas
total_npk = npk_needs.T @ areas
print(f"Total N needed: {total_npk[0][0]} kg")
print(f"Total P needed: {total_npk[1][0]} kg")
print(f"Total K needed: {total_npk[2][0]} kg")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Cost Calculator Using Matrices</h3>
                    <p>Create matrices for: inputs needed per crop, price per input, and area per crop.</p>
                    <p>Calculate total cost using matrix multiplication.</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> For A (3×4) and B (4×2), what is the shape of A @ B?</p>
                    <ul>
                        <li>A) 3×4</li>
                        <li>B) 4×4</li>
                        <li>C) 3×2</li>
                        <li>D) Error - incompatible</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - (3×4) @ (4×2) = (3×2). Inner dimensions must match.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>@ operator for matrix multiplication, * for element-wise</li>
                    <li>.T gives the transpose</li>
                    <li>Matrix ops are core to ML predictions</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t5': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Pandas: Introduction and Series</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand what Pandas is and why it's used</li>
                    <li>Create and manipulate Series objects</li>
                    <li>Access data using labels and positions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Pandas = Your Farm's Digital Ledger</strong></p>
                    <p>Excel on steroids! Pandas handles all your farm records - crops, yields, costs - with powerful analysis capabilities built in.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# === PANDAS SERIES ===
print("=== Creating Pandas Series ===")

# From list with default index
yields = pd.Series([2500, 2800, 3100, 2900])
print(yields)

# With custom index (plot names)
yields = pd.Series(
    [2500, 2800, 3100, 2900],
    index=['Plot_A', 'Plot_B', 'Plot_C', 'Plot_D'],
    name='Yield_kg'
)
print(f"\\nYields with labels:\\n{yields}")

# From dictionary
soil_ph = pd.Series({
    'Field_1': 6.5,
    'Field_2': 7.1,
    'Field_3': 5.8,
    'Field_4': 6.8
})
print(f"\\nSoil pH:\\n{soil_ph}")

# === ACCESSING DATA ===
print("\\n=== Accessing Data ===")
print(f"Plot_B yield: {yields['Plot_B']}")
print(f"First yield: {yields.iloc[0]}")
print(f"Last two: {yields.iloc[-2:]}")

# Boolean selection
high_yield = yields[yields > 2700]
print(f"\\nHigh yields (>2700):\\n{high_yield}")

# === SERIES OPERATIONS ===
print("\\n=== Operations ===")
print(f"Mean yield: {yields.mean():.0f}")
print(f"Total yield: {yields.sum()}")

# Apply function
yields_tons = yields / 1000
print(f"\\nIn tons:\\n{yields_tons}")

# Modify with condition
bonus = yields.apply(lambda x: 500 if x > 2800 else 0)
print(f"\\nBonus:\\n{bonus}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Monthly Rainfall Analysis</h3>
                    <pre><code class="language-python">
# Create a Series for monthly rainfall
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
rainfall = [20, 15, 30, 45, 80, 200, 
            350, 300, 150, 60, 25, 10]

# Create Series and find:
# 1. Monsoon months (rainfall > 100)
# 2. Average monthly rainfall
# 3. Month with maximum rainfall
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is a Pandas Series?</p>
                    <ul>
                        <li>A) A 2D table</li>
                        <li>B) A 1D labeled array</li>
                        <li>C) A Python list</li>
                        <li>D) A database</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - A Series is a one-dimensional labeled array.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Pandas is the go-to library for data analysis</li>
                    <li>Series = 1D labeled array (like a column)</li>
                    <li>Access by label or position (.loc vs .iloc)</li>
                    <li>Built-in statistics: mean(), sum(), max(), etc.</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t6': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 DataFrames Manipulation</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create DataFrames from various sources</li>
                    <li>Select, add, and remove columns</li>
                    <li>Filter and sort data</li>
                    <li>Apply operations across rows and columns</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>DataFrame = Complete Farm Record Book</strong></p>
                    <p>A DataFrame is like a spreadsheet with your entire farm data - plots as rows, measurements as columns. Query any combination instantly!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd

# === CREATING DATAFRAMES ===
print("=== Creating DataFrames ===")

# From dictionary
farm_data = pd.DataFrame({
    'plot': ['A', 'B', 'C', 'D', 'E'],
    'area_ha': [2.5, 3.0, 1.8, 2.2, 2.8],
    'crop': ['Wheat', 'Rice', 'Wheat', 'Cotton', 'Rice'],
    'yield_kg': [2500, 3200, 2800, 1800, 3100],
    'irrigated': [True, True, False, True, True]
})
print(farm_data)

# === SELECTING DATA ===
print("\\n=== Selecting Columns ===")
print(farm_data['crop'])
print(farm_data[['plot', 'yield_kg']])

# === FILTERING ROWS ===
print("\\n=== Filtering ===")
wheat_plots = farm_data[farm_data['crop'] == 'Wheat']
print(f"Wheat plots:\\n{wheat_plots}")

high_yield = farm_data[farm_data['yield_kg'] > 2700]
print(f"\\nHigh yield plots:\\n{high_yield}")

# Multiple conditions
irrigated_wheat = farm_data[
    (farm_data['crop'] == 'Wheat') & 
    (farm_data['irrigated'] == True)
]
print(f"\\nIrrigated wheat:\\n{irrigated_wheat}")

# === ADDING COLUMNS ===
print("\\n=== Adding Columns ===")
farm_data['yield_per_ha'] = farm_data['yield_kg'] / farm_data['area_ha']
farm_data['total_yield'] = farm_data['yield_kg'] * farm_data['area_ha']
print(farm_data)

# === SORTING ===
print("\\n=== Sorting ===")
sorted_df = farm_data.sort_values('yield_kg', ascending=False)
print(sorted_df)

# === BASIC STATISTICS ===
print("\\n=== Statistics ===")
print(f"Total area: {farm_data['area_ha'].sum():.1f} ha")
print(f"Average yield: {farm_data['yield_kg'].mean():.0f} kg")
print(f"\\nSummary:\\n{farm_data.describe()}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build a Farm Dashboard</h3>
                    <ol>
                        <li>Create a DataFrame with 10 plots</li>
                        <li>Add columns: crop, area, yield, irrigation_cost</li>
                        <li>Calculate profit per plot (assume price ₹25/kg)</li>
                        <li>Find top 3 profitable plots</li>
                        <li>Find average profit by crop type</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> How do you select multiple columns in Pandas?</p>
                    <ul>
                        <li>A) df['col1', 'col2']</li>
                        <li>B) df[['col1', 'col2']]</li>
                        <li>C) df.select('col1', 'col2')</li>
                        <li>D) df.cols(['col1', 'col2'])</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Use double brackets with a list of column names.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>DataFrame = 2D table with labeled rows and columns</li>
                    <li>Select: df['col'] or df[['col1', 'col2']]</li>
                    <li>Filter: df[condition]</li>
                    <li>Add column: df['new'] = values</li>
                    <li>describe() gives quick statistics</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Matplotlib: Basic Plotting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create line plots for time series data</li>
                    <li>Build scatter plots for relationships</li>
                    <li>Make bar charts for comparisons</li>
                    <li>Customize plots with labels and colors</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Visualizations = Farm Maps & Charts</strong></p>
                    <p>Just as a picture is worth a thousand words, a good chart reveals patterns invisible in raw numbers!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt
import numpy as np

# === LINE PLOT ===
print("Creating line plot...")
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
rainfall = [20, 25, 40, 80, 150, 300]

plt.figure(figsize=(10, 5))
plt.plot(months, rainfall, marker='o', color='blue', linewidth=2)
plt.title('Monthly Rainfall - 2024', fontsize=14)
plt.xlabel('Month')
plt.ylabel('Rainfall (mm)')
plt.grid(True, alpha=0.3)
plt.show()

# === SCATTER PLOT ===
print("Creating scatter plot...")
fertilizer = np.array([20, 30, 40, 50, 60, 70, 80])
yield_kg = np.array([2000, 2200, 2600, 2900, 3100, 3200, 3150])

plt.figure(figsize=(10, 5))
plt.scatter(fertilizer, yield_kg, c='green', s=100, alpha=0.7)
plt.title('Fertilizer vs Yield Relationship')
plt.xlabel('Fertilizer (kg/ha)')
plt.ylabel('Yield (kg/ha)')

# Add trend line
z = np.polyfit(fertilizer, yield_kg, 1)
p = np.poly1d(z)
plt.plot(fertilizer, p(fertilizer), "r--", label='Trend')
plt.legend()
plt.show()

# === BAR CHART ===
print("Creating bar chart...")
crops = ['Wheat', 'Rice', 'Cotton', 'Sugarcane']
yields = [2800, 3500, 1500, 8000]
colors = ['gold', 'lightgreen', 'lightblue', 'coral']

plt.figure(figsize=(10, 5))
plt.bar(crops, yields, color=colors, edgecolor='black')
plt.title('Crop Yields Comparison')
plt.xlabel('Crop')
plt.ylabel('Yield (kg/ha)')

# Add value labels
for i, v in enumerate(yields):
    plt.text(i, v + 100, str(v), ha='center')
plt.show()

# === MULTIPLE PLOTS ===
print("Creating subplot...")
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Left plot
axes[0].plot(months, rainfall, 'b-o')
axes[0].set_title('Rainfall')
axes[0].set_ylabel('mm')

# Right plot
axes[1].bar(crops, yields, color=colors)
axes[1].set_title('Yields')
axes[1].set_ylabel('kg/ha')

plt.tight_layout()
plt.show()
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Create Your Farm Dashboard</h3>
                    <ol>
                        <li>Create a 2x2 subplot figure</li>
                        <li>Top-left: Line plot of monthly temperatures</li>
                        <li>Top-right: Bar chart of crop revenues</li>
                        <li>Bottom-left: Scatter of irrigation vs yield</li>
                        <li>Bottom-right: Pie chart of land use</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which function creates a line plot in Matplotlib?</p>
                    <ul>
                        <li>A) plt.bar()</li>
                        <li>B) plt.scatter()</li>
                        <li>C) plt.plot()</li>
                        <li>D) plt.line()</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - plt.plot() creates line plots by default.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>plt.plot() for lines, plt.scatter() for points, plt.bar() for bars</li>
                    <li>Always add title, xlabel, ylabel for clarity</li>
                    <li>Use subplots() for multiple charts</li>
                    <li>Save with plt.savefig('filename.png')</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 ML Workflow Introduction</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the complete ML workflow</li>
                    <li>Define problems appropriately for ML</li>
                    <li>Plan data preparation strategies</li>
                    <li>Evaluate and iterate on models</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>ML Workflow = Crop Production Cycle</strong></p>
                    <ol>
                        <li>🌱 <strong>Define Problem:</strong> What crop to grow?</li>
                        <li>🧪 <strong>Collect Data:</strong> Soil tests, weather records</li>
                        <li>🚜 <strong>Prepare Data:</strong> Clear field, prepare soil</li>
                        <li>🌾 <strong>Train Model:</strong> Plant and nurture</li>
                        <li>📊 <strong>Evaluate:</strong> Measure yield</li>
                        <li>🔄 <strong>Iterate:</strong> Improve next season</li>
                    </ol>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Complete ML Workflow Example: Yield Prediction

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# === STEP 1: DEFINE PROBLEM ===
print("=== Step 1: Problem Definition ===")
print("Goal: Predict crop yield based on input factors")
print("Type: Regression (predicting continuous value)")

# === STEP 2: COLLECT DATA ===
print("\\n=== Step 2: Data Collection ===")
np.random.seed(42)
n_samples = 100

data = pd.DataFrame({
    'rainfall': np.random.uniform(100, 400, n_samples),
    'temperature': np.random.uniform(20, 35, n_samples),
    'fertilizer': np.random.uniform(30, 100, n_samples),
    'soil_ph': np.random.uniform(5.5, 7.5, n_samples),
})

# Generate yield based on factors (with noise)
data['yield'] = (
    10 * data['rainfall'] + 
    -50 * data['temperature'] + 
    15 * data['fertilizer'] + 
    200 * data['soil_ph'] + 
    np.random.normal(0, 100, n_samples)
)
print(f"Dataset shape: {data.shape}")
print(data.head())

# === STEP 3: PREPARE DATA ===
print("\\n=== Step 3: Data Preparation ===")
X = data[['rainfall', 'temperature', 'fertilizer', 'soil_ph']]
y = data['yield']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")

# === STEP 4: TRAIN MODEL ===
print("\\n=== Step 4: Model Training ===")
model = LinearRegression()
model.fit(X_train, y_train)
print("Model trained successfully!")

# === STEP 5: EVALUATE ===
print("\\n=== Step 5: Evaluation ===")
y_pred = model.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.2f} kg")
print(f"R² Score: {r2:.4f}")

# === STEP 6: USE MODEL ===
print("\\n=== Step 6: Make Predictions ===")
new_field = [[250, 28, 60, 6.5]]  # New field data
prediction = model.predict(new_field)
print(f"Predicted yield for new field: {prediction[0]:.0f} kg/ha")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Design Your ML Project</h3>
                    <p>Choose an agricultural problem and document:</p>
                    <ol>
                        <li>Problem statement (what to predict)</li>
                        <li>Data sources needed</li>
                        <li>Features (X) and target (y)</li>
                        <li>Evaluation metric to use</li>
                        <li>How you would use the predictions</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the first step in an ML workflow?</p>
                    <ul>
                        <li>A) Train model</li>
                        <li>B) Collect data</li>
                        <li>C) Define the problem</li>
                        <li>D) Evaluate results</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Always start by clearly defining what problem you're solving.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>ML is a cycle: Define → Collect → Prepare → Train → Evaluate → Deploy</li>
                    <li>Problem definition guides everything else</li>
                    <li>Data quality is more important than model complexity</li>
                    <li>Always evaluate on unseen test data</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t21': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Linear Regression Concepts</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand linear regression fundamentals</li>
                    <li>Implement simple and multiple regression</li>
                    <li>Interpret coefficients for farm insights</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Linear Regression = Finding the Recipe</strong></p>
                    <p>If yield = a×rainfall + b×fertilizer + c, regression finds the exact values of a, b, c from your historical data!</p>
                    <p>It's like discovering the formula that nature uses on your farm.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# === SIMPLE LINEAR REGRESSION ===
print("=== Simple Linear Regression ===")
print("Predicting yield from fertilizer only")

# Data
fertilizer = np.array([20, 30, 40, 50, 60, 70, 80, 90, 100]).reshape(-1, 1)
yield_kg = np.array([1800, 2100, 2400, 2650, 2850, 3000, 3100, 3150, 3180])

# Train model
model = LinearRegression()
model.fit(fertilizer, yield_kg)

print(f"Intercept (base yield): {model.intercept_:.0f} kg")
print(f"Coefficient: {model.coef_[0]:.1f} kg per kg fertilizer")
print(f"Interpretation: Each kg of fertilizer adds {model.coef_[0]:.1f} kg yield")

# Predict
new_fert = [[55]]
pred = model.predict(new_fert)
print(f"\\nPredicted yield at 55kg fertilizer: {pred[0]:.0f} kg")

# === MULTIPLE LINEAR REGRESSION ===
print("\\n=== Multiple Linear Regression ===")

# Multiple features
data = pd.DataFrame({
    'rainfall': [150, 200, 180, 250, 300, 190, 220, 280],
    'fertilizer': [40, 50, 45, 60, 70, 55, 65, 75],
    'temperature': [28, 30, 29, 27, 26, 28, 27, 25],
    'yield': [2200, 2600, 2400, 2900, 3200, 2700, 2850, 3100]
})

X = data[['rainfall', 'fertilizer', 'temperature']]
y = data['yield']

model_multi = LinearRegression()
model_multi.fit(X, y)

print("Feature Importance (Coefficients):")
for feature, coef in zip(X.columns, model_multi.coef_):
    print(f"  {feature}: {coef:.2f}")

# Predict for new conditions
new_conditions = [[230, 58, 27]]
prediction = model_multi.predict(new_conditions)
print(f"\\nPredicted yield: {prediction[0]:.0f} kg/ha")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build Your Yield Predictor</h3>
                    <ol>
                        <li>Create data with 3 input features</li>
                        <li>Train a linear regression model</li>
                        <li>Interpret: which factor matters most?</li>
                        <li>Make predictions for different scenarios</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> In y = 1500 + 15x, what does 15 represent?</p>
                    <ul>
                        <li>A) Base yield</li>
                        <li>B) Increase in y per unit increase in x</li>
                        <li>C) Total prediction</li>
                        <li>D) Error term</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - The coefficient (15) shows how much y changes when x increases by 1.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Linear regression finds the best-fit line through data</li>
                    <li>Coefficients show feature importance</li>
                    <li>Multiple regression handles many factors</li>
                    <li>Interpret coefficients for actionable insights</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module2Handouts = module2Handouts;
}
