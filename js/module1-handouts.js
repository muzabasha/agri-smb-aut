// Module 1 Comprehensive Handouts - Topics m1-t2 through m1-t19
// This file contains all handout content to be integrated into lecture-content.js

const module1Handouts = {
    'm1-t2': {
        handout: `
            <h2>🧠 Machine Learning Paradigms - Three Ways Farmers Learn</h2>
            
            <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Funny Analogy</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Machine Learning is like <strong>three different ways a farmer learns</strong> to improve their harvest:
                </p>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #d97706;">👨‍🏫 Supervised Learning = Learning with a Teacher</h4>
                    <p>Like a young farmer learning from grandfather: "This is wheat, that is rice." Teacher shows examples with labels!</p>
                    
                    <h4 style="color: #d97706; margin-top: 20px;">🔍 Unsupervised Learning = Exploring Alone</h4>
                    <p>Like discovering that tomatoes naturally group by size without anyone telling you. Computer finds patterns itself!</p>
                    
                    <h4 style="color: #d97706; margin-top: 20px;">🎮 Reinforcement Learning = Trial and Error</h4>
                    <p>Like learning optimal irrigation: try more water → plants grow! Try less → plants wilt. Learn from rewards and punishments!</p>
                </div>
            </div>

            <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: "Three Farming Scenarios"</h3>
                <div style="background: white; padding: 20px; border-radius: 8px;">
                    <p><strong>Game Setup:</strong></p>
                    <ol style="line-height: 2;">
                        <li>🌾 <strong>Scenario 1 (Supervised):</strong> Students get labeled crop pictures and must sort new ones</li>
                        <li>🔍 <strong>Scenario 2 (Unsupervised):</strong> Students  get mixed seeds and must group them without labels</li>
                        <li>🎯 <strong>Scenario 3 (Reinforcement):</strong> Students water plants, get feedback (grow/wilt), adjust strategy</li>
                    </ol>
                    <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin-top: 15px;">
                        <strong>Purpose:</strong> Experience all 3 learning paradigms hands-on!
                    </div>
                </div>
            </div>

            <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Google Colab Demo</h3>
                <p><strong>Goal:</strong> Demonstrate supervised vs unsupervised learning</p>
                <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace;">
                    <div style="color: #9ca3af;"># Supervised Learning Example: Crop Classification</div>
                    <div style="color: #fbbf24;">crops = <span style="color: #60a5fa;">[</span><span style="color: #a78bfa;">"wheat"</span>, <span style="color: #a78bfa;">"rice"</span>, <span style="color: #a78bfa;">"wheat"</span><span style="color: #60a5fa;">]</span></div>
                    <div style="color: #fbbf24;">labels = <span style="color: #60a5fa;">[</span><span style="color: #34d399;">0</span>, <span style="color: #34d399;">1</span>, <span style="color: #34d399;">0</span><span style="color: #60a5fa;">]</span>  <span style="color: #9ca3af;"># 0=wheat, 1=rice</span></div>
                    <br>
                    <div style="color: #9ca3af;"># Unsupervised Example: Group by size automatically</div>
                    <div style="color: #f472b6;">from</div> <span style="color: #fbbf24;">sklearn.cluster</span> <span style="color: #f472b6;">import</span> <span style="color: #fbbf24;">KMeans</span><br>
                    <div style="color: #fbbf24;">tomato_sizes = <span style="color: #60a5fa;">[[</span>5<span style="color: #60a5fa;">], [</span>5.2<span style="color: #60a5fa;">], [</span>10<span style="color: #60a5fa;">], [</span>9.8<span style="color: #60a5fa;">]]</span></div>
                    <div style="color: #fbbf24;">clusters = KMeans<span style="color: #a78bfa;">(n_clusters=2)</span>.fit<span style="color: #a78bfa;">(tomato_sizes)</span></div>
                    <div style="color: #34d399;">print</div><span style="color: #a78bfa;">(clusters.labels_)</span>  <span style="color: #9ca3af;"># [0 0 1 1] - Auto-grouped!</span>
                </div>
            </div>

            <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Case Study</h3>
                <div style="background: white; padding: 20px; border-radius: 8px;">
                    <h4 style="color: #d97706;">Real System: Automated Crop Classification</h4>
                    <ul style="line-height: 1.8;">
                        <li>📸 <strong>Supervised:</strong> Farmers labeled 10,000 crop images → AI learned to classify new photos</li>
                        <li>🔍 <strong>Unsupervised:</strong> System grouped customers by buying patterns without labels  → found 5 farmer types</li>
                        <li>🎮 <strong>Reinforcement:</strong> Irrigation bot learned optimal watering by trying different amounts</li>
                    </ul>
                    <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                        <strong>Impact:</strong> 40% faster classification, 30% water savings!
                    </div>
                </div>
            </div>

            <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (12 min)</h3>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">⏱️ Intro (2 min)</h4>
                    <p style="font-style: italic;">"Imagine three farmers learning to farm. Each learns differently - that's ML paradigms!"</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">🎭 Analogies (4 min)</h4>
                    <p>Explain teacher/explorer/trial-error with farming examples</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">💻 Demo (4 min)</h4>
                    <p>Run both Colab code examples, show outputs</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">💬 Q&A (2 min)</h4>
                    <p><strong>Expected Q:</strong> "Which is best?"<br><strong>A:</strong> "Depends on problem! Have labels? Use supervised. No labels? Try unsupervised!"</p>
                </div>
            </div>

            <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #ec4899;">MCQs:</h4>
                    <ol>
                        <li>Supervised learning needs:
                            <br>a) Only input data
                            <br><strong style="color: #10b981;">b) Input data + labels ✔</strong>
                        </li>
                        <li style="margin-top: 15px;">Finding groups in data without labels is:
                            <br>a) Supervised learning
                            <br><strong style="color: #10b981;">b) Unsupervised learning ✔</strong>
                        </li>
                        <li style="margin-top: 15px;">Learning by rewards and punishments is:
                            <br><strong style="color: #10b981;">a) Reinforcement learning ✔</strong>
                            <br>b) Supervised learning
                        </li>
                    </ol>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #ec4899;">Short Answer:</h4>
                    <p>Explain supervised learning using a farming example.</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #ec4899;">Colab Task:</h4>
                    <p>Modify the clustering code to find 3 groups instead of 2.</p>
                </div>
            </div>

            <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                <ul style="line-height: 2;">
                    <li>📘 <a href="https://scikit-learn.org/stable/supervised_learning.html" target="_blank">Scikit-learn: Supervised Learning Guide</a></li>
                    <li>🎥 Video: "ML Paradigms Explained Simply"</li>
                    <li>💻 Interactive Demo: <a href="https://playground.tensorflow.org" target="_blank">TensorFlow Playground</a></li>
                </ul>
            </div>

            <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 12px; text-align: center;">
                <h3 style="margin: 0 0 15px 0;">🎓 Ready for More!</h3>
                <p>You now understand the 3 main ways machines learn - just like farmers learn!</p>
            </div>
        `,
        presentation: `<div class="slides-container" style="background: #1e3a8a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;">
            <h1>🧠 ML Paradigms: 3 Ways to Learn</h1>
        </div>`
    }
};

// Export for integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = module1Handouts;
}
