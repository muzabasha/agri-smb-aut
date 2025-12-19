"""
Handout Generator for Agri-LMS
Automatically generates comprehensive 7-part educational handouts with farming analogies
"""

import json
import re

# Topic metadata and farming analogies
TOPIC_DATA = {
    'm1-t13': {
        'title': 'Operators & Expressions',
        'analogy': 'Farm Calculations',
        'analogy_desc': 'Operators are like tools for farm math: + for adding harvests, - for expenses, * for area calculations, / for per-acre yield',
        'activity': 'Calculate Farm Metrics',
        'activity_desc': 'Students solve: Field area (50m × 40m), Profit (income - expenses), Yield per acre',
        'code_demo': '''# Farm calculations
field_length = 50  # meters
field_width = 40
area = field_length * field_width  # 2000 sq m

harvest = 4500  # kg
expenses = 15000  # rupees
income = 60000
profit = income - expenses  # 45000 rupees

yield_per_sqm = harvest / area''',
        'case_study': 'Farmer tracks expenses vs income using Python operators, discovers which crop is most profitable',
        'mcq': 'Which operator calculates area?',
        'mcq_answer': 'b) * (multiplication)'
    },
    'm1-t14': {
        'title': 'Control Structures (If-Else)',
        'analogy': 'Farm Decisions',
        'analogy_desc': 'If-else is like making farming decisions: IF rain expected THEN skip watering ELSE water the crops',
        'activity': 'Decision Tree Game',
        'activity_desc': 'Students create decision flowchart: Check soil moisture → If dry, water → Else, skip',
        'code_demo': '''# Smart irrigation decision
soil_moisture = 25  # percent

if soil_moisture < 30:
    print("Soil is dry - Water the crops!")
    water_amount = 100  # liters
elif soil_moisture < 60:
    print("Soil is okay - Light watering")
    water_amount = 50
else:
    print("Soil is moist - Skip watering")
    water_amount = 0''',
        'case_study': 'Automated irrigation system uses if-else to save 40% water by watering only when needed',
        'mcq': 'What does elif mean?',
        'mcq_answer': 'c) Else if (another condition)'
    },
    'm1-t15': {
        'title': 'Loops (For & While)',
        'analogy': 'Checking Each Plant',
        'analogy_desc': 'Loops are like walking through each row of crops to inspect them one by one',
        'activity': 'Field Inspection Simulation',
        'activity_desc': 'Students loop through 10 plants, checking if each needs water (random moisture levels)',
        'code_demo': '''# Inspect all tomato plants
plants = ['Plant-1', 'Plant-2', 'Plant-3', 'Plant-4', 'Plant-5']

for plant in plants:
    print(f"Checking {plant}...")
    
# Water until tank is full
water_level = 0
while water_level < 100:
    water_level += 10
    print(f"Filling tank: {water_level}%")''',
        'case_study': 'Drone uses for-loop to inspect each field section, identifies 5 diseased areas automatically',
        'mcq': 'Which loop inspects each item?',
        'mcq_answer': 'a) for loop'
    },
    'm1-t16': {
        'title': 'Functions & Modularity',
        'analogy': 'Farming Recipes',
        'analogy_desc': 'Functions are like pickle recipes: write once (recipe), use many times (make pickle anytime)',
        'activity': 'Create Reusable Functions',
        'activity_desc': 'Students write functions: calculate_area(), find_profit(), check_harvest_ready()',
        'code_demo': '''# Reusable farm functions
def calculate_yield_per_acre(total_yield, acres):
    return total_yield / acres

def is_harvest_ready(days_since_planting, crop_type):
    harvest_days = {'wheat': 120, 'rice': 150, 'maize': 90}
    return days_since_planting >= harvest_days[crop_type]

# Use the functions
yield_per_acre = calculate_yield_per_acre(4500, 2.5)
ready = is_harvest_ready(125, 'wheat')
print(f"Yield: {yield_per_acre} kg/acre, Ready: {ready}")''',
        'case_study': 'Farm management app uses 50+ functions for different calculations, easy to maintain and update',
        'mcq': 'What does return do?',
        'mcq_answer': 'b) Sends result back to caller'
    },
    'm1-t17': {
        'title': 'Lists, Tuples & Dictionaries',
        'analogy': 'Farm Storage Types',
        'analogy_desc': 'List = changeable basket of crops, Tuple = sealed shipment box, Dictionary = labeled storage with crop names as keys',
        'activity': 'Organize Farm Inventory',
        'activity_desc': 'Students create list of crops, tuple of fixed prices, dictionary mapping crops to yields',
        'code_demo': '''# Farm data structures
crops_list = ['Wheat', 'Rice', 'Maize']  # Can add more
crops_list.append('Barley')

harvest_tuple = (4.5, 6.2, 5.8)  # Fixed record

crop_yields = {
    'Wheat': 4.5,
    'Rice': 6.2,
    'Maize': 5.8
}
print(f"Rice yield: {crop_yields['Rice']} tons")''',
        'case_study': 'Farm uses dictionary to quickly look up optimal planting dates for 20 different crops',
        'mcq': 'Which is unchangeable?',
        'mcq_answer': 'b) Tuple'
    },
    'm1-t18': {
        'title': 'String Manipulation',
        'analogy': 'Crop Name Labels',
        'analogy_desc': 'Strings are like crop labels: can combine (join names), split (separate words), change case (uppercase for signs)',
        'activity': 'Format Farm Reports',
        'activity_desc': 'Students manipulate strings: Create labels, format prices, clean sensor data',
        'code_demo': '''# Working with crop names
crop = "  organic wheat  "
clean_crop = crop.strip().title()  # "Organic Wheat"

# Create farm ID
farm_name = "Gopal"
crop_type = "Rice"
farm_id = f"{farm_name}-{crop_type}-2024"  # "Gopal-Rice-2024"

# Check if keyword in notes
notes = "Heavy rain expected tomorrow"
if "rain" in notes.lower():
    print("Rain alert!")''',
        'case_study': 'Farm system processes 1000+ crop names daily, automatically formats and validates them',
        'mcq': 'What does .lower() do?',
        'mcq_answer': 'a) Converts to lowercase'
    },
    'm1-t19': {
        'title': 'File Handling Basics',
        'analogy': 'Farm Record Books',
        'analogy_desc': 'File operations are like farm diary: open book, read entries, write new records, close book',
        'activity': 'Read & Write Farm Data',
        'activity_desc': 'Students create harvest log file, write daily records, read past entries',
        'code_demo': '''# Write farm log
with open('harvest_log.txt', 'w') as file:
    file.write("Date,Crop,Yield\\n")
    file.write("2024-01-15,Wheat,450\\n")
    file.write("2024-01-16,Rice,620\\n")

# Read farm log
with open('harvest_log.txt', 'r') as file:
    for line in file:
        print(line.strip())

# Append new entry
with open('harvest_log.txt', 'a') as file:
    file.write("2024-01-17,Maize,580\\n")''',
        'case_study': 'Farm tracks 5 years of yield data in CSV files, analyzes trends to optimize planting',
        'mcq': 'Which mode appends to file?',
        'mcq_answer': 'c) "a" mode'
    }
}

def generate_handout(topic_id, data):
    """Generate comprehensive 7-part handout for a topic"""
    
    template = f'''
            '{topic_id}': {{
                handout: `
                    <h2>🌾 {data['title']} - {data['analogy']}</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Farming Analogy</h3>
                        <p style="font-size: 1.1em;">{data['analogy_desc']}</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: {data['activity']}</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Hands-on Exercise:</strong></p>
                            <p>{data['activity_desc']}</p>
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab Demo</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
{data['code_demo'].replace(chr(10), '<br>')}
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Agriculture Case Study</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Real-World Example:</strong></p>
                            <p>{data['case_study']}</p>
                            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                                <strong>Impact:</strong> Practical Python in agriculture!
                            </div>
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (12 min)</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <strong>Intro (2 min):</strong> Explain analogy with farm example<br>
                            <strong>Concept (6 min):</strong> Teach {data['title']} with live coding<br>
                            <strong>Demo (3 min):</strong> Run Colab examples<br>
                            <strong>Wrap (1 min):</strong> Recap and Q&A
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <strong>MCQ:</strong> {data['mcq']} <strong style="color: #10b981;">{data['mcq_answer']} ✔</strong><br>
                            <strong>Coding Task:</strong> Write your own version of the demo code<br>
                            <strong>Challenge:</strong> Apply to solve a real farm problem
                        </div>
                    </div>

                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                        <ul>
                            <li>📘 <a href="https://www.w3schools.com/python/">W3Schools Python Tutorial</a></li>
                            <li>🎥 Video: "{data['title']} for Beginners"</li>
                            <li>💻 Practice: Python exercises on relevant topic</li>
                        </ul>
                    </div>
                `
            }},'''
    
    return template

# Generate all handouts
print("// AUTO-GENERATED HANDOUTS - Module 1 Remaining Topics\\n")
print("// Generated by template_generator.py\\n")

for topic_id in sorted(TOPIC_DATA.keys()):
    handout = generate_handout(topic_id, TOPIC_DATA[topic_id])
    print(handout)

print("\\n// ===== END OF GENERATED HANDOUTS =====\\n")
print(f"// Total topics generated: {len(TOPIC_DATA)}")
print("// Copy and paste into lecture-content.js after m1-t12")
