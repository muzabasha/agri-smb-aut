// Module 1 Comprehensive Handouts - Part 3 (m1-t11 to m1-t19)
// Python Programming Topics

const module1HandoutsPart3 = {
    'm1-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Python Environment Setup</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Set up Google Colab for Python programming</li>
                    <li>Understand notebook interface and cells</li>
                    <li>Write and execute your first Python code</li>
                    <li>Save and share notebooks</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Python Setup = Preparing Your Land Before Sowing</strong></p>
                    <p>Before planting, you prepare the soil. Similarly, before coding, we prepare our environment. Google Colab is like a ready-to-use greenhouse - no installation needed!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Setting Up Google Colab</h2>
                
                <h3>Step 1: Access Colab</h3>
                <ol>
                    <li>Open browser and go to <code>colab.research.google.com</code></li>
                    <li>Sign in with your Google account</li>
                    <li>Click "New Notebook"</li>
                </ol>

                <h3>Step 2: Understanding the Interface</h3>
                <ul>
                    <li><strong>Code Cells:</strong> Where you write Python code</li>
                    <li><strong>Text Cells:</strong> For notes and documentation</li>
                    <li><strong>Run Button (▶):</strong> Executes the cell</li>
                    <li><strong>Shift+Enter:</strong> Run cell and move to next</li>
                </ul>

                <h3>Step 3: Your First Code</h3>
                <pre><code class="language-python">
# This is a comment - Python ignores it
print("Hello, Smart Farming!")

# Simple calculation
hectares = 5
yield_per_hectare = 2500
total_yield = hectares * yield_per_hectare
print(f"Total expected yield: {total_yield} kg")
                </code></pre>
            </div>

            <div class="code-section">
                <h2>💻 Practice Code</h2>
                <pre><code class="language-python">
# === WELCOME TO PYTHON FOR AGRICULTURE ===

# Print a welcome message
print("🌾 Welcome to Agricultural AI!")
print("=" * 40)

# Basic farm calculation
farm_name = "Green Valley Farm"
area_hectares = 10
crop = "Wheat"

print(f"Farm: {farm_name}")
print(f"Area: {area_hectares} hectares")
print(f"Crop: {crop}")

# Simple yield estimation
expected_yield = area_hectares * 3000  # 3000 kg/ha
print(f"Expected Yield: {expected_yield} kg")

# Check if Colab is working
import sys
print(f"\\n✅ Python version: {sys.version[:5]}")
print("🚀 Your environment is ready!")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Set Up Your First Notebook</h3>
                    <ol>
                        <li>Go to colab.research.google.com</li>
                        <li>Create a new notebook</li>
                        <li>Rename it to "My_Farm_Analysis"</li>
                        <li>Type the code above in a cell and run it</li>
                        <li>Modify the farm_name and area to match your farm</li>
                        <li>Share the notebook link with a classmate</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What keyboard shortcut runs a cell in Colab?</p>
                    <ul>
                        <li>A) Ctrl+C</li>
                        <li>B) Shift+Enter</li>
                        <li>C) Alt+R</li>
                        <li>D) Ctrl+S</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Shift+Enter runs the current cell and moves to the next one.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does the # symbol do in Python?</p>
                    <ul>
                        <li>A) Multiplies numbers</li>
                        <li>B) Creates a comment (ignored by Python)</li>
                        <li>C) Prints output</li>
                        <li>D) Saves the file</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - # starts a comment, which Python ignores. Use comments to explain your code!</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Google Colab is a free, browser-based Python environment</li>
                    <li>No installation required - works on any device</li>
                    <li>Notebooks combine code, text, and output</li>
                    <li>Use Shift+Enter to run cells</li>
                    <li>Start every project by testing your environment</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Variables and Data Types</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create and use variables in Python</li>
                    <li>Work with different data types: int, float, string, bool</li>
                    <li>Convert between data types</li>
                    <li>Apply proper variable naming conventions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Variables = Labeled Storage Containers</strong></p>
                    <p>Just as farmers use labeled containers for seeds, fertilizer, and harvest:</p>
                    <ul>
                        <li>📦 <code>wheat_seeds = 100</code> (container labeled "wheat_seeds" holding 100)</li>
                        <li>📦 <code>farm_name = "Green Farm"</code> (container holding a name)</li>
                        <li>📦 <code>is_organic = True</code> (container holding yes/no)</li>
                    </ul>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Data Types in Python</h2>
                
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Farm Example</th>
                    </tr>
                    <tr>
                        <td><code>int</code></td>
                        <td>Whole numbers</td>
                        <td><code>num_plots = 5</code></td>
                    </tr>
                    <tr>
                        <td><code>float</code></td>
                        <td>Decimal numbers</td>
                        <td><code>soil_ph = 6.5</code></td>
                    </tr>
                    <tr>
                        <td><code>str</code></td>
                        <td>Text (strings)</td>
                        <td><code>crop = "Rice"</code></td>
                    </tr>
                    <tr>
                        <td><code>bool</code></td>
                        <td>True/False</td>
                        <td><code>needs_water = True</code></td>
                    </tr>
                </table>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === VARIABLES AND DATA TYPES ===

# Integer (whole numbers)
num_hectares = 10
num_workers = 5
seeds_per_hectare = 25000

print(f"Total seeds needed: {num_hectares * seeds_per_hectare}")

# Float (decimal numbers)
soil_ph = 6.5
moisture_percent = 45.7
yield_per_hectare = 2750.5

print(f"Soil pH: {soil_ph}")

# String (text)
farm_name = "Sunrise Agricultural Farm"
crop_type = 'Wheat'  # Single or double quotes work
location = "Karnataka, India"

print(f"Welcome to {farm_name}!")

# Boolean (True/False)
is_irrigated = True
needs_fertilizer = False
is_harvest_ready = True

print(f"Irrigation available: {is_irrigated}")

# Checking data types
print("\\n=== Data Types ===")
print(f"num_hectares is: {type(num_hectares)}")
print(f"soil_ph is: {type(soil_ph)}")
print(f"farm_name is: {type(farm_name)}")
print(f"is_irrigated is: {type(is_irrigated)}")

# Type Conversion
rainfall_str = "125"  # This is text!
rainfall_int = int(rainfall_str)  # Convert to number
print(f"\\nRainfall: {rainfall_int + 10} mm (added 10)")

# Variable naming rules
crop_yield_2024 = 3000  # ✅ Good - descriptive, uses underscore
_private_data = 100     # ✅ OK - starts with underscore
# 2024_yield = 500      # ❌ Error - can't start with number
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Create Your Farm Profile</h3>
                    <p>Create variables for your farm (real or imaginary):</p>
                    <pre><code class="language-python">
# Fill in your farm details
farm_name = "___"           # String
owner_name = "___"          # String
total_area = ___            # Float (hectares)
num_plots = ___             # Integer
main_crop = "___"           # String
has_irrigation = ___        # Boolean (True/False)
avg_annual_rainfall = ___   # Float (mm)

# Print a summary
print(f"🌾 {farm_name}")
print(f"Owner: {owner_name}")
print(f"Area: {total_area} hectares in {num_plots} plots")
print(f"Main crop: {main_crop}")
print(f"Irrigated: {has_irrigation}")
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the type of: <code>temperature = 32.5</code>?</p>
                    <ul>
                        <li>A) int</li>
                        <li>B) float</li>
                        <li>C) str</li>
                        <li>D) bool</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 32.5 has a decimal point, making it a float.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Which variable name is INVALID in Python?</p>
                    <ul>
                        <li>A) crop_yield</li>
                        <li>B) _temp</li>
                        <li>C) 2024_harvest</li>
                        <li>D) soilPH</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Variable names cannot start with a number.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3:</strong> What does <code>int("50")</code> return?</p>
                    <ul>
                        <li>A) "50"</li>
                        <li>B) 50</li>
                        <li>C) Error</li>
                        <li>D) 50.0</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - int() converts the string "50" to the integer 50.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Variables store data with meaningful names</li>
                    <li>Python has 4 basic types: int, float, str, bool</li>
                    <li>Use <code>type()</code> to check a variable's type</li>
                    <li>Convert types with <code>int()</code>, <code>float()</code>, <code>str()</code></li>
                    <li>Use descriptive, lowercase names with underscores</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Operators and Expressions</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use arithmetic operators for farm calculations</li>
                    <li>Apply comparison operators for decision-making</li>
                    <li>Combine conditions with logical operators</li>
                    <li>Build complex expressions for agricultural analysis</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Operators = Farm Calculation Tools</strong></p>
                    <ul>
                        <li>➕ Addition: Total yield from all plots</li>
                        <li>➖ Subtraction: Profit after costs</li>
                        <li>✖️ Multiplication: Seeds needed per hectare × hectares</li>
                        <li>➗ Division: Average yield per plot</li>
                        <li>⚖️ Comparison: Is yield > target?</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === OPERATORS IN PYTHON ===

# 1. ARITHMETIC OPERATORS
print("=== Arithmetic Operators ===")
hectares = 10
yield_per_ha = 2500
price_per_kg = 25

total_yield = hectares * yield_per_ha        # Multiplication
print(f"Total yield: {total_yield} kg")

revenue = total_yield * price_per_kg          # Revenue
costs = 150000                                # Costs
profit = revenue - costs                      # Subtraction
print(f"Profit: ₹{profit}")

avg_yield = total_yield / hectares            # Division
print(f"Average yield: {avg_yield} kg/ha")

remainder = total_yield % 3                   # Modulo (remainder)
power = 2 ** 10                               # Exponentiation
print(f"2^10 = {power}")

# 2. COMPARISON OPERATORS
print("\\n=== Comparison Operators ===")
target_yield = 25000
actual_yield = 27000

print(f"Exceeded target? {actual_yield > target_yield}")   # True
print(f"Met target exactly? {actual_yield == target_yield}")  # False
print(f"Below target? {actual_yield < target_yield}")      # False
print(f"At least target? {actual_yield >= target_yield}")  # True

# 3. LOGICAL OPERATORS
print("\\n=== Logical Operators ===")
soil_ph = 6.5
moisture = 45
temperature = 28

# Combine conditions with AND, OR, NOT
good_soil = (6.0 <= soil_ph <= 7.0)           # pH in range
good_moisture = (40 <= moisture <= 60)         # Moisture in range
good_conditions = good_soil and good_moisture  # Both must be true

print(f"Good soil pH: {good_soil}")
print(f"Good moisture: {good_moisture}")
print(f"Overall good conditions: {good_conditions}")

# OR - at least one must be true
needs_attention = (moisture < 30) or (temperature > 40)
print(f"Needs attention: {needs_attention}")

# NOT - inverts the condition
is_not_ready = not good_conditions
print(f"Not ready for planting: {is_not_ready}")

# 4. PRACTICAL FARM CALCULATION
print("\\n=== Farm Profitability Calculator ===")
area = 5  # hectares
yield_rate = 3000  # kg/ha
market_price = 30  # ₹/kg
input_cost = 40000  # ₹/hectare

total_revenue = area * yield_rate * market_price
total_cost = area * input_cost
net_profit = total_revenue - total_cost
profit_margin = (net_profit / total_revenue) * 100

print(f"Revenue: ₹{total_revenue:,}")
print(f"Costs: ₹{total_cost:,}")
print(f"Net Profit: ₹{net_profit:,}")
print(f"Profit Margin: {profit_margin:.1f}%")
print(f"Profitable? {net_profit > 0}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build a Fertilizer Calculator</h3>
                    <pre><code class="language-python">
# Calculate fertilizer needs based on soil test
nitrogen_required = 120  # kg/ha
phosphorus_required = 60
potassium_required = 40

urea_n_content = 0.46  # 46% nitrogen
dap_p_content = 0.46   # 46% phosphorus
mop_k_content = 0.60   # 60% potassium

# Calculate bags needed
urea_needed = nitrogen_required / urea_n_content
dap_needed = phosphorus_required / dap_p_content
mop_needed = potassium_required / mop_k_content

# Your task: Print the results!
# Also check if total cost is within budget of ₹10,000
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the result of <code>15 % 4</code>?</p>
                    <ul>
                        <li>A) 3.75</li>
                        <li>B) 3</li>
                        <li>C) 4</li>
                        <li>D) 1</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 15 ÷ 4 = 3 remainder 3. The % operator returns the remainder.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does <code>True and False</code> evaluate to?</p>
                    <ul>
                        <li>A) True</li>
                        <li>B) False</li>
                        <li>C) Error</li>
                        <li>D) None</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - AND requires both sides to be True. Since one is False, the result is False.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Arithmetic: +, -, *, /, //, %, **</li>
                    <li>Comparison: ==, !=, <, >, <=, >= (return True/False)</li>
                    <li>Logical: and, or, not (combine conditions)</li>
                    <li>Operators are the building blocks of all calculations</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Control Structures (If-Else)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Write if statements for simple decisions</li>
                    <li>Use if-else for two-way decisions</li>
                    <li>Chain conditions with elif</li>
                    <li>Create nested conditionals for complex logic</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>If-Else = Daily Farming Decisions</strong></p>
                    <p>Every day, farmers make decisions:</p>
                    <ul>
                        <li>IF rain is expected → DON'T irrigate</li>
                        <li>IF soil is dry → irrigate NOW</li>
                        <li>IF pest detected → apply treatment</li>
                        <li>ELSE → continue regular activities</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === CONTROL STRUCTURES: IF-ELSE ===

# 1. Simple IF statement
print("=== Simple IF ===")
soil_moisture = 25  # percentage

if soil_moisture < 30:
    print("⚠️ Soil is dry! Irrigation needed.")

# 2. IF-ELSE (two options)
print("\\n=== IF-ELSE ===")
temperature = 38

if temperature > 35:
    print("🔥 High temperature alert!")
    print("   Consider shade nets for sensitive crops.")
else:
    print("✅ Temperature is normal.")

# 3. IF-ELIF-ELSE (multiple options)
print("\\n=== IF-ELIF-ELSE ===")
soil_ph = 5.5

if soil_ph < 5.5:
    print("⚠️ Soil is too acidic")
    print("   Recommendation: Add lime")
elif soil_ph > 7.5:
    print("⚠️ Soil is too alkaline")
    print("   Recommendation: Add sulfur")
else:
    print("✅ Soil pH is in optimal range (5.5-7.5)")

# 4. Crop Recommendation System
print("\\n=== Crop Recommendation System ===")
rainfall = 150  # mm average
soil_type = "loamy"

if rainfall > 200 and soil_type == "clay":
    crop = "Rice"
elif rainfall > 100 and soil_type in ["loamy", "sandy loam"]:
    crop = "Wheat"
elif rainfall < 80:
    crop = "Millet (drought resistant)"
else:
    crop = "Mixed vegetables"

print(f"Recommended crop: {crop}")

# 5. Nested IF (decisions within decisions)
print("\\n=== Irrigation Decision System ===")
moisture = 35
rain_forecast = True
last_irrigation_days = 3

if moisture < 40:
    if rain_forecast:
        print("💧 Moisture low, but rain expected")
        print("   Action: Wait for rain")
    else:
        if last_irrigation_days > 2:
            print("💧 Irrigate now!")
        else:
            print("💧 Check again tomorrow")
else:
    print("✅ Moisture adequate, no irrigation needed")

# 6. Grade Crop Quality
print("\\n=== Crop Quality Grading ===")
weight = 85  # grams per fruit
blemishes = 0
color_score = 9  # out of 10

if weight >= 80 and blemishes == 0 and color_score >= 8:
    grade = "A (Premium)"
elif weight >= 60 and blemishes <= 2 and color_score >= 6:
    grade = "B (Standard)"
elif weight >= 40:
    grade = "C (Processing)"
else:
    grade = "Reject"

print(f"Crop Grade: {grade}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build a Pest Alert System</h3>
                    <pre><code class="language-python">
# Create a pest alert system based on conditions
temperature = 28
humidity = 75
has_recent_rain = True

# Your task: Write if-elif-else to determine pest risk
# - High risk: temp > 25 AND humidity > 70 AND recent rain
# - Medium risk: humidity > 60 OR temp > 30
# - Low risk: otherwise

# Print appropriate alert message for each risk level
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What keyword checks additional conditions after if?</p>
                    <ul>
                        <li>A) else if</li>
                        <li>B) elif</li>
                        <li>C) elseif</li>
                        <li>D) otherwise</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Python uses 'elif' (short for else-if).</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What is required after if/elif/else conditions in Python?</p>
                    <ul>
                        <li>A) Semicolon ;</li>
                        <li>B) Colon :</li>
                        <li>C) Curly braces {}</li>
                        <li>D) Nothing</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Python uses a colon : and indentation (spaces) for code blocks.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>if executes code when condition is True</li>
                    <li>else handles the alternative case</li>
                    <li>elif checks additional conditions in sequence</li>
                    <li>Indentation (4 spaces) defines code blocks</li>
                    <li>Conditions can be combined with and/or</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Loops (For and While)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use for loops to iterate over sequences</li>
                    <li>Use while loops for condition-based repetition</li>
                    <li>Control loop flow with break and continue</li>
                    <li>Apply loops to process agricultural data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Loops = Repetitive Farm Tasks</strong></p>
                    <ul>
                        <li>🔁 <strong>FOR loop:</strong> "For each of my 10 plots, check soil moisture"</li>
                        <li>🔁 <strong>WHILE loop:</strong> "While soil is dry, keep irrigating"</li>
                    </ul>
                    <p>Loops automate repetitive work!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === LOOPS IN PYTHON ===

# 1. FOR loop with range
print("=== Checking 5 Plots ===")
for plot_num in range(1, 6):
    print(f"Checking Plot {plot_num}...")

# 2. FOR loop with list
print("\\n=== Processing Crops ===")
crops = ["Wheat", "Rice", "Cotton", "Sugarcane"]
for crop in crops:
    print(f"  Processing: {crop}")

# 3. FOR loop with index (enumerate)
print("\\n=== Crop Inventory ===")
for index, crop in enumerate(crops, start=1):
    print(f"  {index}. {crop}")

# 4. Processing farm data
print("\\n=== Plot Yields Analysis ===")
plot_yields = [2500, 2800, 2200, 3100, 2600]
total = 0

for yield_kg in plot_yields:
    total += yield_kg  # Add each yield to total

average = total / len(plot_yields)
print(f"Total yield: {total} kg")
print(f"Average yield: {average} kg")

# 5. WHILE loop - condition-based
print("\\n=== Irrigation Simulation ===")
soil_moisture = 20  # Starting moisture

while soil_moisture < 50:
    print(f"Moisture: {soil_moisture}% - Irrigating...")
    soil_moisture += 10  # Each irrigation adds 10%

print(f"✅ Target reached! Moisture: {soil_moisture}%")

# 6. BREAK - exit loop early
print("\\n=== Pest Search ===")
plants = ["healthy", "healthy", "infected", "healthy", "healthy"]

for i, status in enumerate(plants):
    print(f"Checking plant {i+1}: {status}")
    if status == "infected":
        print("⚠️ ALERT! Infected plant found. Stopping search.")
        break

# 7. CONTINUE - skip current iteration
print("\\n=== Process Only Good Yields ===")
yields = [2500, -1, 2800, 0, 3000]  # -1 and 0 are errors

for y in yields:
    if y <= 0:
        print(f"  Skipping invalid value: {y}")
        continue
    print(f"  Processing valid yield: {y} kg")

# 8. Nested loops - multiple dimensions
print("\\n=== Field Inspection Grid ===")
for row in range(1, 4):
    for col in range(1, 4):
        print(f"  Inspecting Row {row}, Col {col}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build a Harvest Tracker</h3>
                    <pre><code class="language-python">
# Track daily harvest for a week
daily_harvest = []

# Use a while loop to collect 7 days of data
day = 1
while day <= 7:
    # Simulate harvest (replace with input() for real data)
    harvest = day * 100  # Example data
    daily_harvest.append(harvest)
    print(f"Day {day}: Harvested {harvest} kg")
    day += 1

# Use a for loop to find best and worst days
best_day = 1
worst_day = 1
# Your task: Complete this logic!
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> How many times does this loop run? <code>for i in range(5):</code></p>
                    <ul>
                        <li>A) 4 times</li>
                        <li>B) 5 times</li>
                        <li>C) 6 times</li>
                        <li>D) Infinite</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - range(5) gives 0,1,2,3,4 = 5 iterations.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does 'break' do in a loop?</p>
                    <ul>
                        <li>A) Pauses the loop</li>
                        <li>B) Exits the loop immediately</li>
                        <li>C) Skips to next iteration</li>
                        <li>D) Restarts the loop</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - break exits the entire loop immediately.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>for loops iterate over sequences (lists, ranges)</li>
                    <li>while loops repeat while condition is True</li>
                    <li>break exits the loop; continue skips to next iteration</li>
                    <li>Loops are essential for processing multiple data points</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Functions and Modularity</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Define and call functions</li>
                    <li>Use parameters and return values</li>
                    <li>Understand variable scope</li>
                    <li>Write reusable code for farm calculations</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Functions = Specialized Farm Equipment</strong></p>
                    <p>Just as you have different tools for different jobs:</p>
                    <ul>
                        <li>🚜 <code>plow(field)</code> - Tractor plows any field you specify</li>
                        <li>💧 <code>irrigate(plot, duration)</code> - Irrigates with specified time</li>
                        <li>📊 <code>calculate_yield(area, rate)</code> - Computes yield</li>
                    </ul>
                    <p>Functions are reusable "tools" in your code!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === FUNCTIONS IN PYTHON ===

# 1. Simple function
def greet_farmer():
    """A simple greeting function"""
    print("🌾 Welcome to Smart Farm Management!")

greet_farmer()  # Call the function

# 2. Function with parameters
def calculate_yield(hectares, yield_per_ha):
    """Calculate total yield"""
    total = hectares * yield_per_ha
    print(f"Total yield: {total} kg")

calculate_yield(5, 3000)
calculate_yield(10, 2500)

# 3. Function with return value
def calculate_profit(revenue, costs):
    """Calculate and return profit"""
    profit = revenue - costs
    return profit

my_profit = calculate_profit(500000, 350000)
print(f"My profit: ₹{my_profit}")

# 4. Function with default parameters
def fertilizer_recommendation(crop, area, organic=False):
    """Recommend fertilizer amount"""
    base_rate = {"wheat": 100, "rice": 120, "cotton": 80}
    rate = base_rate.get(crop.lower(), 100)
    
    if organic:
        rate = rate * 1.5  # Organic needs more
        source = "organic compost"
    else:
        source = "urea"
    
    amount = area * rate
    return f"{amount} kg of {source}"

print(fertilizer_recommendation("wheat", 5))
print(fertilizer_recommendation("rice", 3, organic=True))

# 5. Multiple return values
def analyze_soil(ph, nitrogen, phosphorus):
    """Analyze soil and return recommendations"""
    
    ph_status = "optimal" if 6.0 <= ph <= 7.0 else "needs adjustment"
    nitrogen_status = "good" if nitrogen > 50 else "low"
    
    return ph_status, nitrogen_status

ph_result, n_result = analyze_soil(6.5, 40, 30)
print(f"pH: {ph_result}, Nitrogen: {n_result}")

# 6. Complete Farm Calculator Function
def farm_economics(area, crop, yield_rate, price, cost_per_ha):
    """
    Complete farm economics calculator.
    
    Parameters:
        area: Farm size in hectares
        crop: Crop name
        yield_rate: kg per hectare
        price: ₹ per kg
        cost_per_ha: ₹ cost per hectare
    
    Returns:
        Dictionary with economic analysis
    """
    total_yield = area * yield_rate
    revenue = total_yield * price
    total_cost = area * cost_per_ha
    profit = revenue - total_cost
    profit_margin = (profit / revenue) * 100 if revenue > 0 else 0
    
    return {
        "crop": crop,
        "area": area,
        "yield": total_yield,
        "revenue": revenue,
        "cost": total_cost,
        "profit": profit,
        "margin": round(profit_margin, 1)
    }

# Use the function
result = farm_economics(
    area=10, 
    crop="Wheat", 
    yield_rate=3000, 
    price=25, 
    cost_per_ha=40000
)

print("\\n=== Farm Economics Report ===")
for key, value in result.items():
    print(f"  {key}: {value}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Build Your Function Library</h3>
                    <p>Create these farm utility functions:</p>
                    <pre><code class="language-python">
# 1. Water requirement calculator
def water_requirement(crop, area, days):
    # Return liters needed based on crop type
    pass

# 2. Seed calculator
def seed_calculator(crop, area, spacing):
    # Return number of seeds needed
    pass

# 3. Harvest date predictor
def predict_harvest(planting_date, crop):
    # Return expected harvest date
    pass
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What keyword defines a function in Python?</p>
                    <ul>
                        <li>A) function</li>
                        <li>B) def</li>
                        <li>C) func</li>
                        <li>D) define</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 'def' is the keyword to define functions.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does 'return' do in a function?</p>
                    <ul>
                        <li>A) Prints output</li>
                        <li>B) Exits the program</li>
                        <li>C) Sends a value back to the caller</li>
                        <li>D) Repeats the function</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - return sends a value back and exits the function.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Functions are reusable blocks of code</li>
                    <li>Use 'def' to define, parentheses for parameters</li>
                    <li>'return' sends values back to caller</li>
                    <li>Default parameters make functions flexible</li>
                    <li>Good functions do one thing well</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t17': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Lists, Tuples, and Dictionaries</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create and manipulate lists</li>
                    <li>Understand tuple immutability</li>
                    <li>Use dictionaries for key-value storage</li>
                    <li>Choose the right collection for farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Collections = Farm Storage Systems</strong></p>
                    <ul>
                        <li>📋 <strong>List:</strong> Flexible seed bags - add, remove, rearrange</li>
                        <li>🔒 <strong>Tuple:</strong> Sealed packages - can't modify (GPS coordinates)</li>
                        <li>🏷️ <strong>Dictionary:</strong> Labeled containers - find by name instantly</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === LISTS ===
print("=== LISTS (Mutable, Ordered) ===")

# Create a list
crops = ["Wheat", "Rice", "Cotton"]
yields = [2500, 3200, 1800]

# Access elements
print(f"First crop: {crops[0]}")
print(f"Last yield: {yields[-1]}")

# Modify list
crops.append("Sugarcane")      # Add to end
crops.insert(1, "Maize")       # Insert at position
crops.remove("Cotton")         # Remove by value
print(f"Updated crops: {crops}")

# List operations
all_yields = yields + [2000, 2500]  # Combine lists
print(f"Total yield: {sum(all_yields)} kg")
print(f"Average: {sum(all_yields)/len(all_yields):.0f} kg")

# === TUPLES ===
print("\\n=== TUPLES (Immutable, Ordered) ===")

# Create tuple - fixed data
farm_location = (12.9716, 77.5946)  # GPS coordinates
crop_cycle = ("Sow", "Grow", "Harvest", "Rest")

print(f"Farm coordinates: {farm_location}")
print(f"Crop cycle steps: {crop_cycle}")

# Tuple unpacking
lat, lon = farm_location
print(f"Latitude: {lat}, Longitude: {lon}")

# Tuples can't be changed (this would error):
# farm_location[0] = 13.0  # TypeError!

# === DICTIONARIES ===
print("\\n=== DICTIONARIES (Key-Value Pairs) ===")

# Create dictionary
soil_test = {
    "pH": 6.5,
    "nitrogen": 80,
    "phosphorus": 40,
    "potassium": 120,
    "organic_matter": 2.5
}

print(f"Soil pH: {soil_test['pH']}")
print(f"Nitrogen level: {soil_test['nitrogen']} kg/ha")

# Add/update entries
soil_test["zinc"] = 2.0
soil_test["pH"] = 6.8  # Update existing

# Iterate through dictionary
print("\\nComplete Soil Report:")
for nutrient, value in soil_test.items():
    print(f"  {nutrient}: {value}")

# Nested dictionary - farm database
farm_data = {
    "plot_1": {
        "area": 2.5,
        "crop": "Wheat",
        "yield": 3000
    },
    "plot_2": {
        "area": 1.8,
        "crop": "Rice",
        "yield": 4500
    }
}

print(f"\\nPlot 1 crop: {farm_data['plot_1']['crop']}")
print(f"Plot 2 yield: {farm_data['plot_2']['yield']} kg/ha")

# Calculate total farm production
total_production = 0
for plot, data in farm_data.items():
    production = data["area"] * data["yield"]
    total_production += production
    print(f"{plot}: {production} kg")

print(f"Total farm production: {total_production} kg")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Create a Crop Database</h3>
                    <pre><code class="language-python">
# Build a dictionary of crops with their properties
crop_database = {
    "wheat": {
        "water_needs": "medium",
        "season": "rabi",
        "days_to_harvest": 120
    },
    # Add 3 more crops with their properties!
}

# Write code to:
# 1. List all crop names
# 2. Find crops with "low" water needs
# 3. Calculate average days to harvest
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which collection can't be modified after creation?</p>
                    <ul>
                        <li>A) List</li>
                        <li>B) Dictionary</li>
                        <li>C) Tuple</li>
                        <li>D) Set</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Tuples are immutable (cannot be changed).</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> How do you access a dictionary value?</p>
                    <ul>
                        <li>A) dict.0</li>
                        <li>B) dict["key"]</li>
                        <li>C) dict(key)</li>
                        <li>D) dict->key</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Use square brackets with the key name.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Lists: ordered, mutable, use for changeable sequences</li>
                    <li>Tuples: ordered, immutable, use for fixed data</li>
                    <li>Dictionaries: key-value pairs, fast lookups</li>
                    <li>Choose based on: mutability needs and access pattern</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 String Manipulation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Apply common string methods</li>
                    <li>Format strings for reports</li>
                    <li>Parse and clean text data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>String Manipulation = Processing Farm Labels</strong></p>
                    <p>Cleaning crop names, formatting reports, parsing sensor data - all involve text processing!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === STRING MANIPULATION ===

# Basic string operations
crop_name = "  Wheat  "
print(f"Original: '{crop_name}'")
print(f"Stripped: '{crop_name.strip()}'")
print(f"Upper: '{crop_name.strip().upper()}'")
print(f"Lower: '{crop_name.strip().lower()}'")

# String formatting
area = 10.5
yield_kg = 2750.75
report = f"Farm Report: {area} hectares, yield: {yield_kg:.1f} kg"
print(report)

# Split and join
sensor_data = "25.5,60.2,6.8,120"
values = sensor_data.split(",")
print(f"Parsed values: {values}")

crops_list = ["Wheat", "Rice", "Cotton"]
crops_string = ", ".join(crops_list)
print(f"Combined: {crops_string}")

# Search and replace
message = "The wheat yield was excellent"
if "wheat" in message:
    print("Found wheat!")
new_message = message.replace("wheat", "rice")
print(new_message)

# Clean messy data
messy_input = "  WHEAT , 2500KG  "
clean = messy_input.strip().lower().replace("kg", "").replace(",", "")
print(f"Cleaned: {clean}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Parse Sensor Log</h3>
                    <p>Parse this sensor log line and extract values:</p>
                    <pre><code class="language-python">
log = "2024-01-15|TEMP:28.5|HUMIDITY:65|MOISTURE:45"
# Extract date, temperature, humidity, moisture
                    </code></pre>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does "hello".upper() return?</p>
                    <ul>
                        <li>A) "hello"</li>
                        <li>B) "HELLO"</li>
                        <li>C) "Hello"</li>
                        <li>D) Error</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - upper() converts all characters to uppercase.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>strip() removes whitespace, split() breaks strings</li>
                    <li>f-strings provide easy formatting</li>
                    <li>String methods are essential for data cleaning</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 File Handling Basics</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Read data from files</li>
                    <li>Write results to files</li>
                    <li>Work with CSV files for farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>File Handling = Farm Record Books</strong></p>
                    <p>Just as farmers keep logbooks, Python keeps data in files - read past records, write new observations!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === FILE HANDLING ===

# Writing to a file
with open("farm_log.txt", "w") as file:
    file.write("Farm Daily Log\\n")
    file.write("Date: 2024-01-15\\n")
    file.write("Temperature: 28°C\\n")
    file.write("Moisture: 45%\\n")

print("✅ Log file created!")

# Reading from a file
with open("farm_log.txt", "r") as file:
    content = file.read()
    print("File contents:")
    print(content)

# Working with CSV (most common for farm data)
import csv

# Write CSV
crops_data = [
    ["Crop", "Area", "Yield"],
    ["Wheat", 5, 2500],
    ["Rice", 3, 3200],
    ["Cotton", 2, 1800]
]

with open("crops.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(crops_data)

print("✅ CSV file created!")

# Read CSV
with open("crops.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Using pandas (recommended for larger files)
# import pandas as pd
# df = pd.read_csv("crops.csv")
# print(df)
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Create a Harvest Logger</h3>
                    <ol>
                        <li>Create a function to log daily harvest to a file</li>
                        <li>Add date, crop, and quantity to each entry</li>
                        <li>Create another function to read and summarize the log</li>
                    </ol>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does the 'w' mode do when opening a file?</p>
                    <ul>
                        <li>A) Read only</li>
                        <li>B) Write (creates or overwrites)</li>
                        <li>C) Append</li>
                        <li>D) Execute</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 'w' opens for writing, creating or overwriting the file.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Use 'with' statement for auto file closing</li>
                    <li>Modes: 'r' (read), 'w' (write), 'a' (append)</li>
                    <li>CSV is ideal for tabular farm data</li>
                    <li>pandas library simplifies large file handling</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module1HandoutsPart3 = module1HandoutsPart3;
}
