// Module 4 Comprehensive Handouts - Capstone Project Guide
// From Problem Definition to EDA

const module4Handouts = {
    'm4-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Leading a Project: Problem Definition</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify valid agricultural problems for AI solutions</li>
                    <li>Scope a project to be manageable (MVP)</li>
                    <li>Define success criteria (Metrics)</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Defining the Problem = Checking the Soil</strong></p>
                    <p>Before you plant (build a model), you check if the soil (problem) is viable. Is it worth growing crops here? Or are you just planting seeds in gravel?</p>
                </div>
            </div>
            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>A good problem is specific: "Predict tomato blight" vs "Help farmers"</li>
                    <li>Define "Success": Accuracy > 90%? Run on a phone?</li>
                    <li>Don't boil the ocean - start small.</li>
                </ul>
            </div>
        </div>
    `,
    'm4-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Agricultural Problem Identification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Analyze stakeholder (farmer) needs</li>
                    <li>Assess impact vs effort</li>
                    <li>Understand common pain points (water, pests, labor)</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Stakeholder Analysis = Listening to the Elders</strong></p>
                    <p>You might think a drone is cool, but if the farmer just wants a better way to check soil moisture without walking, the drone is overkill. Build what they need, not what looks cool.</p>
                </div>
            </div>
            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Interview Simulation</h3>
                    <p>Roleplay: One student is a farmer with a pest problem. The other is an AI engineer. Ask questions to find the root cause using the "5 Whys" technique.</p>
                </div>
            </div>
        </div>
    `,
    'm4-t9': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Data Collection Strategy</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Primary vs Secondary Data</li>
                    <li>Designing a data collection protocol</li>
                    <li>Ensuring data quality and diversity</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Data Collection = Harvesting</strong></p>
                    <p>If you harvest sloppy (mix weeds with crop), your final product is bad. If you harvest only from the sunny side of the field (bias), you don't know the true yield.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Simulating Data Collection Checklist
def check_data_quality(df):
    report = {
        'total_rows': len(df),
        'missing_values': df.isnull().sum().to_dict(),
        'duplicates': df.duplicated().sum(),
        'negative_values': (df.select_dtypes(include=np.number) < 0).sum().to_dict()
    }
    return report

# Mock collected data
data = pd.DataFrame({
    'ph': [6.5, 7.0, -1.0, 6.8, np.nan], # -1 is error, nan is missing
    'moisture': [30, 32, 28, 105, 30]    # 105 is likely error (>100%)
})

print(check_data_quality(data))
                </code></pre>
            </div>
        </div>
    `,
    'm4-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Exploratory Data Analysis (EDA)</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use Pandas and Seaborn for EDA</li>
                    <li>Detect outliers and anomalies</li>
                    <li>Visualize distributions and correlations</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>EDA = Walking the Fields</strong></p>
                    <p>Before you make a plan for the season, you walk every row. You look for wet spots, rocky patches, or sick plants. EDA is "walking" through your data rows.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Load dataset
df = sns.load_dataset('iris') # Proxy for crop data

# 1. Distribution
sns.histplot(df['sepal_length'], kde=True)
plt.title('Distribution of Sepal Length')
plt.show()

# 2. Pairplot (Relationships)
sns.pairplot(df, hue='species')
plt.show()

# 3. Correlation Map
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Feature Correlations')
plt.show()
                </code></pre>
            </div>
        </div>
    `,

    'm4-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Literature Review Methodology</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Find credible sources (Google Scholar, arXiv)</li>
                    <li>Synthesize existing research on Agri-AI</li>
                    <li>Identify "Research Gaps" to solve</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Literature Review = Asking the Neighbors</strong></p>
                    <p>Before trying a new crop variety, you ask other farmers what worked for them. You don't want to repeat their mistakes (e.g., planting rice in sandy soil). Research is just learning from others' experiments.</p>
                </div>
            </div>
            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Mini-Review</h3>
                    <p>Find 3 papers on "Deep Learning for Tomato Disease". Comparison table columns: Algorithm Used, Dataset Size, Accuracy Achieved, Limitations.</p>
                </div>
            </div>
        </div>
    `,
    'm4-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Dataset Selection & Sources</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Known repositories (Kaggle, UCI, PlantVillage)</li>
                    <li>Evaluating dataset quality (Resolution, Labels, Balance)</li>
                    <li>Licensing (Creative Commons, Open Source)</li>
                </ul>
            </div>
            <div class="summary">
                <h2>📋 Top Agri-Datasets</h2>
                <ul>
                    <li><strong>PlantVillage:</strong> Leaf diseases (Classification)</li>
                    <li><strong>Global Wheat Head:</strong> Object Detection</li>
                    <li><strong>Crop Recommendation:</strong> Soil/Climate data (Tabular)</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t5': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Feasibility Analysis</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>
            <div class="core-concepts">
                <h2>📖 Technical vs Economic Feasibility</h2>
                <p><strong>Technical:</strong> Can we build it? (Do we have data? GPU? Skills?)</p>
                <p><strong>Economic:</strong> Should we build it? (Does it crave money? Is the ROI positive?)</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Feasibility = Can I afford this tractor?</strong></p>
                    <p>A giant combine harvester is "technically" great, but on a 1-acre farm, it's "economically" a disaster. Same with using a supercomputer for a simple regression task.</p>
                </div>
            </div>
        </div>
    `,

    'm4-t6': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Project Timeline Planning</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create a Gantt Chart</li>
                    <li>Set Milestones (Data Ready, Prototype, Final)</li>
                    <li>Buffer for debugging time</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import matplotlib.pyplot as plt

# Simple Gantt Chart Data
tasks = pd.DataFrame([
    {'Task': 'Literature Review', 'Start': 1, 'Duration': 2},
    {'Task': 'Data Collection', 'Start': 3, 'Duration': 3},
    {'Task': 'Preprocessing', 'Start': 6, 'Duration': 2},
    {'Task': 'Model Training', 'Start': 8, 'Duration': 5},
    {'Task': 'Evaluation', 'Start': 13, 'Duration': 2}
])

plt.barh(y=tasks['Task'], width=tasks['Duration'], left=tasks['Start'], color='skyblue')
plt.xlabel('Weeks')
plt.title('Project Timeline')
plt.grid(axis='x')
plt.show()
                </code></pre>
            </div>
        </div>
    `,

    'm4-t7': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Resource Allocation (Compute & Tools)</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>
            <div class="summary">
                <h2>📋 Essential Tools</h2>
                <ul>
                    <li><strong>Coding:</strong> VS Code, Jupyter, Google Colab (Free GPU!)</li>
                    <li><strong>Version Control:</strong> Git & GitHub</li>
                    <li><strong>Tracking:</strong> Trello / Jira</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Allocation = Assigning the Oxen</strong></p>
                    <p>You don't use your best ox for light cart duty. Similarly, don't waste GPU hours on data cleaning that the CPU can handle.</p>
                </div>
            </div>
        </div>
    `,

    'm4-t8': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Team Collaboration Best Practices</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Version Control (Git Commit/Push/Pull)</li>
                    <li>Code Comments and Documentation</li>
                    <li>Dividing tasks (Data Lead, Model Lead, Frontend Lead)</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Git Basics</h2>
                <pre><code class="language-bash">
# 1. Clone repo
git clone https://github.com/agri-lms/project.git

# 2. Create branch
git checkout -b feature-model-v1

# 3. Save changes
git add model.py
git commit -m "Added Random Forest baseline"

# 4. Share
git push origin feature-model-v1
                </code></pre>
            </div>
        </div>
    `,
};

if (typeof window !== 'undefined') {
    window.module4Handouts = module4Handouts;
}
