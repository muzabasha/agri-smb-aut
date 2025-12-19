// Module 1 Comprehensive Handouts - AI Fundamentals & Python Programming
// Generated for Agri-LMS - Complete with Farming Analogies, Code, Activities & Quizzes

const module1Handouts = {
    'm1-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Introduction to Artificial Intelligence</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Define Artificial Intelligence and its key characteristics</li>
                    <li>Distinguish between AI, Machine Learning, and Deep Learning</li>
                    <li>Identify types of AI systems and their applications</li>
                    <li>Understand how AI is transforming agriculture</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Think of AI as a Super-Experienced Farm Manager:</strong></p>
                    <p>Imagine you have a farm manager who has worked on thousands of farms, remembers every weather pattern, every pest outbreak, every successful harvest. This manager can instantly recall what worked and what didn't across all those experiences.</p>
                    <p>That's what AI does - it learns from vast amounts of data (like thousands of farm seasons) and uses that knowledge to make smart decisions for YOUR farm!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Core Concepts</h2>
                
                <h3>1. What is Artificial Intelligence?</h3>
                <p>Artificial Intelligence (AI) is the simulation of human intelligence by machines. It enables computers to:</p>
                <ul>
                    <li><strong>Learn</strong> from data (like recognizing crop diseases from photos)</li>
                    <li><strong>Reason</strong> through problems (like deciding optimal planting time)</li>
                    <li><strong>Perceive</strong> the environment (like detecting soil moisture levels)</li>
                    <li><strong>Take actions</strong> (like triggering irrigation systems)</li>
                </ul>

                <h3>2. AI vs ML vs Deep Learning</h3>
                <div class="concept-comparison">
                    <table>
                        <tr>
                            <th>Concept</th>
                            <th>Definition</th>
                            <th>Farm Example</th>
                        </tr>
                        <tr>
                            <td><strong>AI</strong></td>
                            <td>Broad field of smart machines</td>
                            <td>Smart irrigation system that knows when to water</td>
                        </tr>
                        <tr>
                            <td><strong>Machine Learning</strong></td>
                            <td>AI that learns from data</td>
                            <td>System that learns your crop patterns over seasons</td>
                        </tr>
                        <tr>
                            <td><strong>Deep Learning</strong></td>
                            <td>ML using neural networks</td>
                            <td>App that identifies plant diseases from photos</td>
                        </tr>
                    </table>
                </div>

                <h3>3. Types of AI</h3>
                <ul>
                    <li><strong>Narrow AI (Weak AI):</strong> Specialized in one task - like crop disease detection</li>
                    <li><strong>General AI (Strong AI):</strong> Human-like intelligence - still theoretical</li>
                    <li><strong>Super AI:</strong> Beyond human intelligence - science fiction for now</li>
                </ul>
            </div>

            <div class="code-section">
                <h2>💻 Python Demonstration</h2>
                <p>Let's create a simple AI-like decision system for irrigation:</p>
                <pre><code class="language-python">
# Simple AI Decision System for Irrigation
# This demonstrates how AI "thinks" about farming decisions

def irrigation_advisor(soil_moisture, temperature, forecast_rain):
    """
    A rule-based AI system for irrigation decisions.
    This mimics how AI processes multiple factors.
    
    Parameters:
    - soil_moisture: percentage (0-100)
    - temperature: degrees Celsius
    - forecast_rain: True/False
    """
    
    # AI "reasoning" - considering multiple factors
    if soil_moisture < 30:
        if forecast_rain:
            return "⏳ Wait - Rain expected. Soil is dry but rain will help."
        else:
            return "💧 IRRIGATE NOW - Soil critically dry, no rain expected."
    
    elif soil_moisture < 60:
        if temperature > 35:
            return "💧 IRRIGATE - High temp causing rapid evaporation."
        else:
            return "✅ OKAY - Moisture adequate for now."
    
    else:
        return "🛑 NO IRRIGATION NEEDED - Soil has enough moisture."

# Test the AI advisor
print("=== Smart Irrigation Advisor ===")
print(irrigation_advisor(25, 32, False))  # Dry soil, no rain
print(irrigation_advisor(25, 32, True))   # Dry soil, rain coming
print(irrigation_advisor(45, 38, False))  # Medium moisture, hot day
print(irrigation_advisor(75, 28, False))  # Good moisture
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Activity: AI in Your Farm Survey</h3>
                    <p><strong>Duration:</strong> 20 minutes</p>
                    <p><strong>Instructions:</strong></p>
                    <ol>
                        <li>List 5 decisions you make regularly on a farm (or imagine if you don't have one)</li>
                        <li>For each decision, identify what information (data) you need</li>
                        <li>Think: Could a computer make this decision if given the same data?</li>
                        <li>Classify each as "Easy for AI" or "Needs Human Judgment"</li>
                    </ol>
                    <p><strong>Example Table:</strong></p>
                    <table>
                        <tr>
                            <th>Decision</th>
                            <th>Data Needed</th>
                            <th>AI Feasibility</th>
                        </tr>
                        <tr>
                            <td>When to irrigate</td>
                            <td>Soil moisture, weather forecast</td>
                            <td>Easy for AI ✅</td>
                        </tr>
                        <tr>
                            <td>Which crop to plant</td>
                            <td>Soil type, market prices, water availability</td>
                            <td>Easy for AI ✅</td>
                        </tr>
                        <tr>
                            <td>Negotiating with buyers</td>
                            <td>Market trends, relationships</td>
                            <td>Needs Human 👨‍🌾</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the main characteristic that defines Artificial Intelligence?</p>
                    <ul>
                        <li>A) It uses electricity to function</li>
                        <li>B) It simulates human intelligence in machines</li>
                        <li>C) It is always connected to the internet</li>
                        <li>D) It replaces all human workers</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - AI is defined by its ability to simulate human intelligence, including learning, reasoning, and problem-solving.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> An app that identifies plant diseases by analyzing leaf photos is an example of:</p>
                    <ul>
                        <li>A) General AI</li>
                        <li>B) Deep Learning</li>
                        <li>C) Super AI</li>
                        <li>D) Manual computation</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Image recognition typically uses Deep Learning (neural networks) to analyze visual patterns in photos.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3:</strong> Which type of AI exists today and is used in agriculture?</p>
                    <ul>
                        <li>A) Super AI</li>
                        <li>B) General AI</li>
                        <li>C) Narrow AI</li>
                        <li>D) Conscious AI</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Narrow AI (also called Weak AI) is specialized for specific tasks and is what we use today, like crop disease detection or yield prediction.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>AI enables machines to learn, reason, and make decisions like humans</li>
                    <li>Machine Learning is a subset of AI that learns from data</li>
                    <li>Deep Learning uses neural networks for complex tasks like image recognition</li>
                    <li>Current AI in agriculture is "Narrow AI" - specialized for specific tasks</li>
                    <li>AI can help farmers make better decisions by processing vast amounts of data</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Machine Learning Paradigms</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the three main types of machine learning</li>
                    <li>Identify when to use each learning paradigm</li>
                    <li>Apply ML paradigms to agricultural problems</li>
                    <li>Compare supervised vs unsupervised learning with real examples</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Learning to Farm - Three Different Ways:</strong></p>
                    <p><strong>🏫 Supervised Learning:</strong> Like learning from an experienced farmer who shows you examples: "This leaf is healthy, this one has blight." You learn from labeled examples.</p>
                    <p><strong>🔍 Unsupervised Learning:</strong> Like sorting seeds yourself without anyone telling you the categories. You discover patterns: "These seeds look similar, let me group them together."</p>
                    <p><strong>🎮 Reinforcement Learning:</strong> Like training a puppy to herd sheep. Good behavior (sheep in pen) = treat. Bad behavior (sheep escape) = no treat. Learning through trial and error!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Core Concepts</h2>
                
                <h3>1. Supervised Learning</h3>
                <p>Learning from labeled data - you provide input-output pairs.</p>
                <div class="example-box">
                    <strong>Agricultural Applications:</strong>
                    <ul>
                        <li>🌿 <strong>Crop Disease Classification:</strong> Input = leaf image, Output = disease name</li>
                        <li>📊 <strong>Yield Prediction:</strong> Input = weather + soil data, Output = expected yield</li>
                        <li>💰 <strong>Price Forecasting:</strong> Input = historical prices, Output = future price</li>
                    </ul>
                </div>

                <h3>2. Unsupervised Learning</h3>
                <p>Finding hidden patterns in unlabeled data - the algorithm discovers structure.</p>
                <div class="example-box">
                    <strong>Agricultural Applications:</strong>
                    <ul>
                        <li>🗺️ <strong>Soil Zoning:</strong> Cluster similar soil regions automatically</li>
                        <li>👥 <strong>Farm Segmentation:</strong> Group farms by characteristics</li>
                        <li>🌡️ <strong>Anomaly Detection:</strong> Find unusual sensor readings</li>
                    </ul>
                </div>

                <h3>3. Reinforcement Learning</h3>
                <p>Learning through interaction - agents take actions and receive rewards.</p>
                <div class="example-box">
                    <strong>Agricultural Applications:</strong>
                    <ul>
                        <li>🤖 <strong>Autonomous Tractors:</strong> Learn optimal routes through fields</li>
                        <li>💧 <strong>Smart Irrigation:</strong> Learn best watering schedules</li>
                        <li>🌱 <strong>Robotic Harvesting:</strong> Learn to pick fruits without damage</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Demonstrating ML Paradigms with Agricultural Examples

# 1. SUPERVISED LEARNING - Crop Classification
print("=== Supervised Learning Example ===")

# Training data: [temperature, rainfall] -> crop_suitable
training_data = [
    ([25, 100], "rice"),      # Warm, wet = rice
    ([30, 50], "wheat"),      # Warm, moderate = wheat
    ([20, 150], "rice"),      # Cool, very wet = rice
    ([35, 30], "millet"),     # Hot, dry = millet
]

def simple_crop_classifier(temp, rain):
    """Simple supervised learning model"""
    if rain > 100:
        return "rice"
    elif temp > 32 and rain < 40:
        return "millet"
    else:
        return "wheat"

# Test prediction
print(f"Temp=28, Rain=120mm -> {simple_crop_classifier(28, 120)}")

# 2. UNSUPERVISED LEARNING - Soil Clustering
print("\\n=== Unsupervised Learning Example ===")

soil_samples = [
    {"pH": 6.5, "nitrogen": 80, "organic": 3.2},
    {"pH": 6.8, "nitrogen": 75, "organic": 3.0},
    {"pH": 5.2, "nitrogen": 40, "organic": 1.5},
    {"pH": 5.0, "nitrogen": 35, "organic": 1.2},
    {"pH": 7.5, "nitrogen": 90, "organic": 4.0},
]

def simple_soil_clustering(samples):
    """Group soils by pH level (simple clustering)"""
    clusters = {"acidic": [], "neutral": [], "alkaline": []}
    
    for i, sample in enumerate(samples):
        if sample["pH"] < 6.0:
            clusters["acidic"].append(f"Sample_{i}")
        elif sample["pH"] < 7.2:
            clusters["neutral"].append(f"Sample_{i}")
        else:
            clusters["alkaline"].append(f"Sample_{i}")
    
    return clusters

clusters = simple_soil_clustering(soil_samples)
print("Soil Clusters:", clusters)

# 3. REINFORCEMENT LEARNING - Irrigation Simulation
print("\\n=== Reinforcement Learning Concept ===")

class SimpleIrrigationAgent:
    """Learns irrigation timing through rewards"""
    
    def __init__(self):
        self.q_values = {"morning": 0, "afternoon": 0, "evening": 0}
        self.learning_rate = 0.1
    
    def get_action(self):
        # Choose best known action
        return max(self.q_values, key=self.q_values.get)
    
    def learn(self, action, reward):
        # Update knowledge based on reward
        self.q_values[action] += self.learning_rate * reward
        print(f"  Irrigated in {action}: reward = {reward}")

# Simulate learning
agent = SimpleIrrigationAgent()
rewards = {"morning": 10, "afternoon": -5, "evening": 8}

print("Learning optimal irrigation time...")
for episode in range(5):
    for time_slot, reward in rewards.items():
        agent.learn(time_slot, reward)

print(f"Best learned time: {agent.get_action()}")
                </code></pre>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Activity: Classify the ML Problem</h3>
                    <p><strong>Duration:</strong> 15 minutes</p>
                    <p>For each agricultural problem below, identify the ML paradigm:</p>
                    <ol>
                        <li>Predicting tomorrow's crop price based on historical data</li>
                        <li>Grouping farmers into segments without predefined categories</li>
                        <li>Training a drone to navigate through orchards</li>
                        <li>Classifying soil samples as "fertile" or "infertile"</li>
                        <li>Finding unusual patterns in sensor data</li>
                    </ol>
                    <details>
                        <summary>Show Answers</summary>
                        <ol>
                            <li>Supervised Learning (Regression)</li>
                            <li>Unsupervised Learning (Clustering)</li>
                            <li>Reinforcement Learning</li>
                            <li>Supervised Learning (Classification)</li>
                            <li>Unsupervised Learning (Anomaly Detection)</li>
                        </ol>
                    </details>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> A model that learns from photos labeled "healthy crop" or "diseased crop" uses:</p>
                    <ul>
                        <li>A) Unsupervised Learning</li>
                        <li>B) Supervised Learning</li>
                        <li>C) Reinforcement Learning</li>
                        <li>D) No learning at all</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Supervised Learning uses labeled data (input-output pairs) to train models.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Automatically grouping farm plots based on soil characteristics without predefined categories is:</p>
                    <ul>
                        <li>A) Supervised Learning</li>
                        <li>B) Reinforcement Learning</li>
                        <li>C) Unsupervised Learning</li>
                        <li>D) Semi-supervised Learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Unsupervised Learning discovers patterns and groupings in unlabeled data.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3:</strong> An autonomous tractor that learns the best field navigation by receiving positive feedback when it avoids obstacles uses:</p>
                    <ul>
                        <li>A) Supervised Learning</li>
                        <li>B) Unsupervised Learning</li>
                        <li>C) Deep Learning</li>
                        <li>D) Reinforcement Learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: D</strong> - Reinforcement Learning involves agents learning through rewards and penalties from their actions.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li><strong>Supervised Learning:</strong> Learns from labeled examples (input → output)</li>
                    <li><strong>Unsupervised Learning:</strong> Discovers hidden patterns in unlabeled data</li>
                    <li><strong>Reinforcement Learning:</strong> Learns through trial, error, and rewards</li>
                    <li>Most agricultural AI applications use Supervised Learning</li>
                    <li>Choosing the right paradigm depends on your data and problem type</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 History and Evolution of AI/ML</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Trace the major milestones in AI development</li>
                    <li>Understand the "AI winters" and recent resurgence</li>
                    <li>Appreciate how agriculture has adopted AI over time</li>
                    <li>Recognize key figures who shaped the field</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>AI's Growth is Like Crop Development:</strong></p>
                    <p>🌱 <strong>1950s-60s:</strong> Seeds planted (early ideas)</p>
                    <p>🥀 <strong>1970s-80s:</strong> First drought (AI Winter - funding cuts)</p>
                    <p>🌿 <strong>1990s:</strong> Recovery with new varieties (new algorithms)</p>
                    <p>🌾 <strong>2010s+:</strong> Bumper harvest! (Deep Learning revolution)</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 AI Timeline</h2>
                
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>🎯 1950 - The Birth</h3>
                        <p>Alan Turing proposes the "Turing Test" - can machines think?</p>
                    </div>
                    <div class="timeline-item">
                        <h3>💡 1956 - AI Gets Its Name</h3>
                        <p>Dartmouth Conference - "Artificial Intelligence" term coined by John McCarthy</p>
                    </div>
                    <div class="timeline-item">
                        <h3>❄️ 1974-1980 - First AI Winter</h3>
                        <p>Overpromised, underdelivered. Funding cuts worldwide.</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🔧 1980s - Expert Systems</h3>
                        <p>Rule-based AI for specific domains (including early agricultural advisors)</p>
                    </div>
                    <div class="timeline-item">
                        <h3>❄️ 1987-1993 - Second AI Winter</h3>
                        <p>Expert systems too expensive and brittle</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🏆 1997 - Deep Blue</h3>
                        <p>IBM's computer beats world chess champion Kasparov</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🚀 2012 - Deep Learning Breakthrough</h3>
                        <p>AlexNet wins ImageNet competition - neural networks are back!</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🌾 2020+ - AI in Every Field</h3>
                        <p>Agricultural AI becomes accessible to farmers worldwide</p>
                    </div>
                </div>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Research Activity: AI in Your Country's Agriculture</h3>
                    <p>Find one AI application currently used in Indian agriculture. Document:</p>
                    <ul>
                        <li>What problem does it solve?</li>
                        <li>What technology does it use?</li>
                        <li>How has it helped farmers?</li>
                    </ul>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Who coined the term "Artificial Intelligence"?</p>
                    <ul>
                        <li>A) Alan Turing</li>
                        <li>B) John McCarthy</li>
                        <li>C) Geoffrey Hinton</li>
                        <li>D) Elon Musk</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - John McCarthy coined the term at the 1956 Dartmouth Conference.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What event in 2012 marked the beginning of the modern AI boom?</p>
                    <ul>
                        <li>A) Creation of ChatGPT</li>
                        <li>B) Deep Blue beats Kasparov</li>
                        <li>C) AlexNet wins ImageNet</li>
                        <li>D) First smartphone launched</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - AlexNet's victory showed deep neural networks could outperform traditional methods in image recognition.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>AI has had cycles of hype and disappointment ("AI Winters")</li>
                    <li>Modern AI success is driven by big data, computing power, and better algorithms</li>
                    <li>Deep Learning (2012+) revolutionized image and speech recognition</li>
                    <li>Agricultural AI is now practical and accessible to farmers</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 AI/ML Applications in Agriculture</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify major AI/ML applications in modern agriculture</li>
                    <li>Understand precision farming concepts</li>
                    <li>Explore real-world case studies of agricultural AI</li>
                    <li>Evaluate potential benefits and challenges</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>AI is Your Farm's Digital Workforce:</strong></p>
                    <ul>
                        <li>👁️ <strong>The Scout:</strong> Drones + AI detect problems early</li>
                        <li>🧠 <strong>The Analyst:</strong> ML predicts yields and prices</li>
                        <li>💧 <strong>The Manager:</strong> Smart systems optimize resources</li>
                        <li>🤖 <strong>The Worker:</strong> Robots harvest and weed</li>
                    </ul>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Key Applications</h2>
                
                <h3>1. Precision Farming</h3>
                <div class="app-card">
                    <p><strong>What:</strong> Using data to manage crops at micro-level</p>
                    <p><strong>How:</strong> GPS, sensors, drones, and AI algorithms</p>
                    <p><strong>Benefit:</strong> 20-30% reduction in input costs</p>
                    <pre><code class="language-python">
# Variable Rate Application Example
def calculate_fertilizer(soil_zones):
    """AI determines different fertilizer rates per zone"""
    recommendations = {}
    for zone, nitrogen_level in soil_zones.items():
        if nitrogen_level < 30:
            recommendations[zone] = "High fertilizer (100 kg/ha)"
        elif nitrogen_level < 60:
            recommendations[zone] = "Medium fertilizer (60 kg/ha)"
        else:
            recommendations[zone] = "Low fertilizer (30 kg/ha)"
    return recommendations

zones = {"Zone_A": 25, "Zone_B": 55, "Zone_C": 75}
print(calculate_fertilizer(zones))
                    </code></pre>
                </div>

                <h3>2. Crop Disease Detection</h3>
                <div class="app-card">
                    <p><strong>What:</strong> Identifying diseases from leaf images</p>
                    <p><strong>How:</strong> Deep Learning (CNN) analyzes photos</p>
                    <p><strong>Apps:</strong> Plantix, PlantVillage, Agrio</p>
                </div>

                <h3>3. Yield Prediction</h3>
                <div class="app-card">
                    <p><strong>What:</strong> Forecasting harvest quantity</p>
                    <p><strong>Inputs:</strong> Weather, soil, satellite imagery</p>
                    <p><strong>Accuracy:</strong> Up to 90% with good data</p>
                </div>

                <h3>4. Smart Irrigation</h3>
                <div class="app-card">
                    <p><strong>What:</strong> AI-controlled watering</p>
                    <p><strong>How:</strong> Soil sensors + weather data + ML</p>
                    <p><strong>Saves:</strong> 30-50% water usage</p>
                </div>
            </div>

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Case Study Analysis</h3>
                    <p>Visit one of these AI agriculture apps (or watch demo videos):</p>
                    <ul>
                        <li>Plantix (Disease Detection)</li>
                        <li>CropIn (Farm Management)</li>
                        <li>Fasal (IoT + AI Platform)</li>
                    </ul>
                    <p>Answer: What AI technique does it use? What problem does it solve?</p>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Precision farming helps farmers by:</p>
                    <ul>
                        <li>A) Applying same treatment to entire field</li>
                        <li>B) Using uniform irrigation everywhere</li>
                        <li>C) Treating different zones based on their specific needs</li>
                        <li>D) Ignoring soil variation</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Precision farming applies variable treatments based on specific zone characteristics.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Which technology enables smartphone apps to identify plant diseases from photos?</p>
                    <ul>
                        <li>A) GPS</li>
                        <li>B) Bluetooth</li>
                        <li>C) Deep Learning / CNN</li>
                        <li>D) 5G networks</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Convolutional Neural Networks (Deep Learning) analyze image patterns to identify diseases.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>AI applications span from planting to harvesting to market</li>
                    <li>Precision farming can reduce costs by 20-30%</li>
                    <li>Disease detection apps bring expert knowledge to every farmer</li>
                    <li>Smart irrigation saves water while improving yields</li>
                    <li>The key challenge is data collection and connectivity</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module1Handouts = module1Handouts;
}
