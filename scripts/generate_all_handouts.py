"""
Complete Handout Generator for Agri-LMS
Generates ALL remaining handouts for Modules 1, 2, and 3
"""

# Module 1 Python Topics (7 topics)
MODULE_1_DATA = {
    'm1-t13': {'title': 'Operators & Expressions', 'analogy': 'Farm Calculations', 'desc': 'Like using + to add harvests, * for area'},
    'm1-t14': {'title': 'If-Else Control', 'analogy': 'Farm Decisions', 'desc': 'IF rain THEN skip watering ELSE water crops'},
    'm1-t15': {'title': 'For & While Loops', 'analogy': 'Checking Each Plant', 'desc': 'Walk through each row inspecting plants'},
    'm1-t16': {'title': 'Functions', 'analogy': 'Farming Recipes', 'desc': 'Write recipe once, use many times'},
    'm1-t17': {'title': 'Lists & Dictionaries', 'analogy': 'Farm Baskets & Labels', 'desc': 'List=basket, Dict=labeled storage'},
    'm1-t18': {'title': 'String Manipulation', 'analogy': 'Crop Labels', 'desc': 'Format names, combine text, clean data'},
    'm1-t19': {'title': 'File Handling', 'analogy': 'Farm Record Books', 'desc': 'Open diary, read/write entries, close book'}
}

# Module 2 Data Science Topics (21 topics)  
MODULE_2_DATA = {
    'm2-t2': {'title': 'NumPy Array Operations', 'analogy': 'Processing Tomato Batches'},
    'm2-t3': {'title': 'Broadcasting & Vectorization', 'analogy': 'Treating All Fields at Once'},
    'm2-t4': {'title': 'Statistical Functions', 'analogy': 'Farm Analytics Dashboard'},
    'm2-t6': {'title': 'DataFrame Operations', 'analogy': 'Farm Ledger Management'},
    'm2-t7': {'title': 'Data Cleaning', 'analogy': 'Removing Rotten Vegetables'},
    'm2-t8': {'title': 'Data Merging', 'analogy': 'Combining Farm Records'},
    'm2-t9': {'title': 'Data Visualization', 'analogy': 'Farm Progress Charts'},
    'm2-t10': {'title': 'Time Series', 'analogy': 'Tracking Daily Harvests'},
    'm2-t11': {'title': 'Matplotlib Basics', 'analogy': 'Drawing Farm Maps'},
    'm2-t12': {'title': 'Seaborn Styling', 'analogy': 'Beautiful Farm Reports'},
    'm2-t13': {'title': 'Linear Regression', 'analogy': 'Predicting Line of Best Fit'},
    'm2-t15': {'title': 'Classification Basics', 'analogy': 'Sorting Crops by Type'},
    'm2-t16': {'title': 'Decision Trees', 'analogy': 'Farmer Decision Flowchart'},
    'm2-t17': {'title': 'Random Forest', 'analogy': 'Asking 100 Village Elders'},
    'm2-t18': {'title': 'Model Evaluation', 'analogy': 'Testing Harvest Predictions'},
    'm2-t19': {'title': 'Cross-Validation', 'analogy': 'Testing on Different Fields'},
    'm2-t20': {'title': 'Feature Engineering', 'analogy': 'Choosing Best Crop Indicators'},
    'm2-t21': {'title': 'Overfitting', 'analogy': 'Memorizing vs Understanding'},
    'm2-t22': {'title': 'Regularization', 'analogy': 'Preventing Overconfidence'},
    'm2-t23': {'title': 'Gradient Descent', 'analogy': 'Walking Down Hill to Valley'},
    'm2-t24': {'title': 'Scikit-learn Pipeline', 'analogy': 'Assembly Line for Crops'}
}

# Module 3 Agriculture AI Topics (20 topics)
MODULE_3_DATA = {
    'm3-t1': {'title': 'Image Processing Basics', 'analogy': 'Looking at Crop Photos'},
    'm3-t3': {'title': 'Regression Models', 'analogy': 'Predicting by Line Trend'},
    'm3-t4': {'title': 'Polynomial Regression', 'analogy': 'Curved Growth Patterns'},
    'm3-t5': {'title': 'Logistic Regression', 'analogy': 'Yes/No Crop Decisions'},
    'm3-t6': {'title': 'K-Nearest Neighbors', 'analogy': 'Ask Your 5 Nearest Neighbors'},
    'm3-t8': {'title': 'Support Vector Machines', 'analogy': 'Finding Best Boundary Line'},
    'm3-t10': {'title': 'Neural Network Basics', 'analogy': 'Brain of Smart Scarecrow'},
    'm3-t11': {'title': 'Image Classification', 'analogy': 'Recognizing Crop Types'},
    'm3-t12': {'title': 'Object Detection', 'analogy': 'Spotting Pests in Field'},
    'm3-t13': {'title': 'Transfer Learning', 'analogy': 'Learning from Experienced Farmers'},
    'm3-t14': {'title': 'Data Augmentation', 'analogy': 'Creating More Training Scenarios'},
    'm3-t15': {'title': 'Model Fine-Tuning', 'analogy': 'Adjusting for Local Conditions'},
    'm3-t16': {'title': 'Clustering', 'analogy': 'Grouping Similar Fields'},
    'm3-t17': {'title': 'Dimensionality Reduction', 'analogy': 'Simplifying Complex Data'},
    'm3-t18': {'title': 'Ensemble Methods', 'analogy': 'Combining Expert Opinions'},
    'm3-t19': {'title': 'LSTM Networks', 'analogy': 'Remembering Past Seasons'},
    'm3-t21': {'title': 'Forecasting Methods', 'analogy': 'Predicting Future Harvests'},
    'm3-t22': {'title': 'Anomaly Detection', 'analogy': 'Spotting Unusual Patterns'},
    'm3-t23': {'title': 'Recommendation Systems', 'analogy': 'Suggesting Best Crops'},
    'm3-t24': {'title': 'Model Deployment', 'analogy': 'Taking AI to Real Farm'}
}

def generate_quick_handout(topic_id, data):
    """Generate handout with minimal data"""
    return f'''
            '{topic_id}': {{
                handout: `
                    <h2>🌾 {data['title']} - {data.get('analogy', 'Farming Concept')}</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 Farming Analogy</h3>
                        <p style="font-size: 1.1em;">{data.get('desc', 'Explained through relatable farming scenario')}</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 Activity</h3>
                        <p>Hands-on exercise applying {data['title']} to agriculture</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 Colab Demo</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # {data['title']} example<br>
                            # Practical Python code here
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 Case Study</h3>
                        <p>Real-world agricultural application of {data['title']}</p>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 Faculty Script (12 min)</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <strong>Intro (2 min):</strong> Explain farming analogy<br>
                            <strong>Content (8 min):</strong> Teach {data['title']}<br>
                            <strong>Wrap (2 min):</strong> Q&A and recap
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 Assessments</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <strong>MCQ:</strong> Test knowledge of {data['title']}<br>
                            <strong>Task:</strong> Practice coding exercise
                        </div>
                    </div>

                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #075985; margin-top: 0;">🔗 Resources</h3>
                        <ul>
                            <li>📘 Documentation links</li>
                            <li>🎥 Tutorial videos</li>
                        </ul>
                    </div>
                `
            }},'''

# Generate all
print("// ========== MODULE 1 REMAINING (7 topics) ==========")
for tid in sorted(MODULE_1_DATA.keys()):
    print(generate_quick_handout(tid, MODULE_1_DATA[tid]))

print("\\n// ========== MODULE 2 REMAINING (21 topics) ==========")
for tid in sorted(MODULE_2_DATA.keys()):
    print(generate_quick_handout(tid, MODULE_2_DATA[tid]))

print("\\n// ========== MODULE 3 REMAINING (20 topics) ==========")
for tid in sorted(MODULE_3_DATA.keys()):
    print(generate_quick_handout(tid, MODULE_3_DATA[tid]))

print(f"\\n// Total generated: {len(MODULE_1_DATA) + len(MODULE_2_DATA) + len(MODULE_3_DATA)} topics")
