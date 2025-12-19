// Enhanced Lecture Content System - Full Coverage for All Modules
// Generates comprehensive handouts and presentations using topic metadata

class LectureSystem {
    constructor() {
        this.structure = (typeof comprehensiveCourseStructure !== 'undefined') ? comprehensiveCourseStructure : null;

        // Specific hand-crafted content for key topics (Module 1 foundation)
        this.specificContent = this.buildModule1SpecificContent();

        // Merge extended handouts from other modules if available
        if (typeof window !== 'undefined') {
            if (window.module2SpecificHandouts) {
                Object.assign(this.specificContent, window.module2SpecificHandouts);
                console.log('[LECTURE] ✓ Merged Module 2 extended handouts');
            }
            if (window.module3SpecificHandouts) {
                Object.assign(this.specificContent, window.module3SpecificHandouts);
                console.log('[LECTURE] ✓ Merged Module 3 extended handouts');
            }
            if (window.module4SpecificHandouts) {
                Object.assign(this.specificContent, window.module4SpecificHandouts);
                console.log('[LECTURE] ✓ Merged Module 4 extended handouts');
            }
        }
    }

    buildModule1SpecificContent() {
        return {
            'm1-t1': {
                handout: this.getM1T1Handout(),
                presentation: this.getM1T1Presentation()
            },
            'm1-t2': {
                handout: this.getM1T2Handout(),
                presentation: this.getGenericPresentation('m1-t2', 'Machine Learning Paradigms')
            }
        };
    }

    getM1T1Handout() {
        return `
            <div class="handout-premium" style="font-family: 'Segoe UI', sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px;">
                
                <!-- Hero Header -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);">
                    <div style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9; margin-bottom: 10px;">Module 1: AI Fundamentals</div>
                    <h1 style="margin: 0; font-size: 2.8em; font-weight: 800;">🤖 Introduction to Artificial Intelligence</h1>
                    <p style="font-size: 1.2em; margin-top: 15px; opacity: 0.95;">The Smart Scarecrow That Learned How To Farm</p>
                </div>

                <!-- Farming Analogy Section -->
                <div style="background: #fef3c7; padding: 30px; border-radius: 12px; margin: 25px 0; border-left: 6px solid #f59e0b; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);">
                    <h2 style="color: #92400e; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.5em;">🎭</span> The Farming Analogy
                    </h2>
                    <p style="font-size: 1.15em; line-height: 1.8; color: #78350f;">
                        Imagine you have a <strong>traditional scarecrow</strong> in your field. It just stands there, arms spread wide, hoping to scare birds. 
                        Now imagine a <strong>SMART Scarecrow</strong> that:
                    </p>
                    <ul style="font-size: 1.1em; line-height: 2; color: #78350f; margin: 20px 0;">
                        <li>📊 <strong>Observes patterns</strong> - Notices when birds come (morning vs evening)</li>
                        <li>🧭 <strong>Learns directions</strong> - Figures out which side they fly from</li>
                        <li>🔊 <strong>Adjusts volume</strong> - Discovers how loud to shout</li>
                        <li>⏰ <strong>Optimizes timing</strong> - Perfect moments to wave its arms</li>
                        <li>📈 <strong>Gets better daily</strong> - Becomes more effective each season</li>
                    </ul>
                    <div style="background: #fbbf24; color: #1f2937; padding: 20px; border-radius: 10px; margin-top: 20px; text-align: center; font-weight: 600; font-size: 1.3em;">
                        💡 This is Artificial Intelligence → A system that learns from experience
                    </div>
                </div>

                <!-- Learning Objectives -->
                <div style="background: #dbeafe; padding: 30px; border-radius: 12px; margin: 25px 0; border-left: 6px solid #3b82f6;">
                    <h2 style="color: #1e40af; margin-top: 0;">🎯 What You'll Learn</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-top: 20px;">
                        <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #93c5fd;">
                            <h4 style="color: #1e3a8a; margin: 0 0 10px 0;">✓ What is AI?</h4>
                            <p style="margin: 0; color: #475569;">Understanding intelligent systems that mimic human decision-making</p>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #93c5fd;">
                            <h4 style="color: #1e3a8a; margin: 0 0 10px 0;">✓ Types of AI</h4>
                            <p style="margin: 0; color: #475569;">Narrow AI (farming robots) vs General AI (human-like thinking)</p>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #93c5fd;">
                            <h4 style="color: #1e3a8a; margin: 0 0 10px 0;">✓ AI vs ML vs DL</h4>
                            <p style="margin: 0; color: #475569;">The relationship: AI contains ML, ML contains Deep Learning</p>
                        </div>
                    </div>
                </div>

                <!-- Core Concept Explanation -->
                <div style="background: white; padding: 30px; border-radius: 12px; margin: 25px 0; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h2 style="color: #1e293b; border-bottom: 3px solid #06b6d4; padding-bottom: 10px;">📖 Understanding AI in Agriculture</h2>
                    
                    <h3 style="color: #0f766e; margin-top: 30px;">1️⃣ What is Artificial Intelligence?</h3>
                    <p style="font-size: 1.1em; line-height: 1.8; color: #334155;">
                        AI is the science of making machines <strong>smart</strong>. In farming terms, it's like giving your tractor a brain 
                        so it can drive itself, or teaching your irrigation system to know exactly when crops need water.
                    </p>
                    <div style="background: #f0fdfa; padding: 20px; border-left: 4px solid #14b8a6; margin: 20px 0; border-radius: 4px;">
                        <strong style="color: #115e59;">Real Example:</strong> A drone that flies over your field and automatically detects 
                        diseased plants without you telling it what disease looks like!
                    </div>

                    <h3 style="color: #0f766e; margin-top: 30px;">2️⃣ Types of AI in Farming</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                        <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 10px;">
                            <h4 style="margin: 0 0 10px 0; color: #92400e;">🔹 Narrow AI (What We Use)</h4>
                            <p style="margin: 0; color: #78350f;">Specialized for ONE task - like a robot that only picks tomatoes perfectly</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #dbeafe, #bfdbfe); padding: 20px; border-radius: 10px;">
                            <h4 style="margin: 0 0 10px 0; color: #1e3a8a;">🔹 General AI (Future)</h4>
                            <p style="margin: 0; color: #1e40af;">Thinks like humans - could manage an entire farm independently (doesn't exist yet!)</p>
                        </div>
                    </div>

                    <h3 style="color: #0f766e; margin-top: 30px;">3️⃣ AI vs ML vs Deep Learning</h3>
                    <div style="position: relative; padding: 40px; background: linear-gradient(to bottom, #f8fafc, #e2e8f0); border-radius: 12px; margin: 20px 0;">
                        <div style="text-align: center;">
                            <div style="background: #667eea; color: white; padding: 20px; border-radius: 12px; display: inline-block; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                                <h4 style="margin: 0; font-size: 1.3em;">Artificial Intelligence</h4>
                                <p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.9;">Making machines smart (The Umbrella)</p>
                            </div>
                            <div style="margin: 0 auto; width: 2px; height: 30px; background: #94a3b8;"></div>
                            <div style="background: #06b6d4; color: white; padding: 18px; border-radius: 10px; display: inline-block; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);">
                                <h4 style="margin: 0; font-size: 1.2em;">Machine Learning</h4>
                                <p style="margin: 5px 0 0 0; font-size: 0.85em; opacity: 0.9;">Learning from data (Subset of AI)</p>
                            </div>
                            <div style="margin: 0 auto; width: 2px; height: 30px; background: #94a3b8;"></div>
                            <div style="background: #10b981; color: white; padding: 16px; border-radius: 8px; display: inline-block; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.4);">
                                <h4 style="margin: 0; font-size: 1.1em;">Deep Learning</h4>
                                <p style="margin: 5px 0 0 0; font-size: 0.8em; opacity: 0.9;">Neural networks (Subset of ML)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Code Demo -->
                <div style="background: #1e293b; color: #e2e8f0; padding: 30px; border-radius: 12px; margin: 25px 0;">
                    <h2 style="color: #fbbf24; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                        💻 Your First AI Code - Smart Scarecrow Logic
                    </h2>
                    <p style="margin-bottom: 20px; color: #cbd5e1;">Copy this into Google Colab and run it! The computer will make a "smart decision".</p>
                    <div style="background: #0f172a; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 0.95em; overflow-x: auto; border: 1px solid #334155;">
<pre style="margin: 0; color: #e2e8f0;"><span style="color: #fbbf24;"># Smart Scarecrow Decision System</span>
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">"🤖 Welcome to Smart Scarecrow AI!"</span>)

<span style="color: #fbbf24;"># Input: Get bird speed from sensor</span>
bird_speed = <span style="color: #60a5fa;">float</span>(<span style="color: #a78bfa;">input</span>(<span style="color: #34d399;">"Enter bird flying speed (m/s): "</span>))

<span style="color: #fbbf24;"># AI Decision Logic</span>
<span style="color: #f472b6;">if</span> bird_speed > <span style="color: #fbbf24;">5</span>:
    decision = <span style="color: #34d399;">"RAISE ARMS & SHOUT! Fast bird detected!"</span>
    threat_level = <span style="color: #34d399;">"HIGH"</span>
<span style="color: #f472b6;">elif</span> bird_speed > <span style="color: #fbbf24;">2</span>:
    decision = <span style="color: #34d399;">"Wave arms gently"</span>
    threat_level = <span style="color: #fbbf24;">"MEDIUM"</span>
<span style="color: #f472b6;">else</span>:
    decision = <span style="color: #34d399;">"Just watch, no action needed"</span>
    threat_level = <span style="color: #10b981;">"LOW"</span>

<span style="color: #fbbf24;"># Output the AI decision</span>
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"</span><span style="color: #60a5fa;">\\n</span><span style="color: #34d399;">🧠 AI Decision: {decision}"</span>)
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"⚠️  Threat Level: {threat_level}"</span>)</pre>
                    </div>
                    <div style="background: #14b8a6; color: white; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong>🎯 Try it!</strong> Enter different speeds: 1, 3, 6. See how the AI "thinks" differently!
                    </div>
                </div>

                <!-- Real-World Application -->
                <div style="background: linear-gradient(135deg, #dcfce7, #bbf7d0); padding: 30px; border-radius: 12px; margin: 25px 0; border-left: 6px solid #10b981;">
                    <h2 style="color: #065f46; margin-top: 0;">🌾 How This Helps Real Farmers</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
                        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <div style="font-size: 2.5em; margin-bottom: 10px;">🚜</div>
                            <h4 style="color: #047857; margin: 0 0 10px 0;">Autonomous Tractors</h4>
                            <p style="margin: 0; color: #065f46;">AI drives tractors in perfect lines, saving fuel and time</p>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <div style="font-size: 2.5em; margin-bottom: 10px;">💧</div>
                            <h4 style="color: #047857; margin: 0 0 10px 0;">Smart Irrigation</h4>
                            <p style="margin: 0; color: #065f46;">AI predicts when to water, reducing waste by 40%</p>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <div style="font-size: 2.5em; margin-bottom: 10px;">🦠</div>
                            <h4 style="color: #047857; margin: 0 0 10px 0;">Disease Detection</h4>
                            <p style="margin: 0; color: #065f46;">AI spots plant diseases 10x faster than human eye</p>
                        </div>
                    </div>
                </div>

                <!-- Summary & Next Steps -->
                <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 35px; border-radius: 12px; margin: 30px 0 0 0; text-align: center;">
                    <h2 style="color: #fbbf24; margin-top: 0;">✨ Key Takeaways</h2>
                    <p style="font-size: 1.2em; line-height: 1.8; margin: 20px 0;">
                        You've learned that <strong>AI is like a smart farming assistant</strong> that gets better with experience. 
                        It's already transforming agriculture through autonomous machines, smart irrigation, and disease detection.
                    </p>
                    <div style="background: rgba(251, 191, 36, 0.2); padding: 20px; border-radius: 10px; margin-top: 25px; border: 2px dashed #fbbf24;">
                        <h3 style="color: #fbbf24; margin: 0 0 15px 0;">📚 Next Steps</h3>
                        <div style="text-align: left; display: inline-block;">
                            <p style="margin: 8px 0;">1️⃣ Click the <strong>Slides</strong> tab to see visual explanation</p>
                            <p style="margin: 8px 0;">2️⃣ Go to <strong>Lab</strong> and run the Smart Scarecrow code</p>
                            <p style="margin: 8px 0;">3️⃣ Try the <strong>Activity</strong> to design your own AI system</p>
                            <p style="margin: 8px 0;">4️⃣ Take the <strong>Quiz</strong> to test your understanding</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getM1T1Presentation() {
        return `
            <div class="slides-container" style="position: relative; height: 450px; overflow: hidden; background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 12px; color: white; font-family: 'Segoe UI', sans-serif; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
                
                <!-- Slide 1: Title -->
                <div class="slide active" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    <div style="background: rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 25px; margin-bottom: 20px; font-size: 0.9em; letter-spacing: 2px; text-transform: uppercase;">
                        Module 1: AI Fundamentals
                    </div>
                    <h1 style="font-size: 3em; margin: 0; font-weight: 900; text-shadow: 0 4px 10px rgba(0,0,0,0.3);">🤖 Artificial Intelligence</h1>
                    <p style="font-size: 1.4em; margin-top: 15px; opacity: 0.95;">

The Smart Scarecrow Revolution</p>
                </div>

                <!-- Slide 2: The Farming Analogy -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:flex-start; height:100%; padding: 50px; background: linear-gradient(135deg, #fbbf24, #f59e0b);">
                    <h2 style="font-size: 2.2em; color: #78350f; margin: 0 0 25px 0;">🎭 The Smart Scarecrow</h2>
                    <div style="background: rgba(255,255,255,0.95); padding: 25px; border-radius: 12px; color: #1f2937;">
                        <p style="font-size: 1.3em; margin: 0 0 20px 0; line-height: 1.6;">Traditional scarecrow: Just stands there 🙍</p>
                        <p style="font-size: 1.4em; margin: 0; font-weight: 700; color: #92400e;">Smart AI Scarecrow: Learns & Adapts! 🧠</p>
                        <ul style="font-size: 1.2em; margin: 20px 0 0 0; line-height: 2;">
                            <li>📊 Observes bird patterns</li>
                            <li>🔊 Adjusts scare tactics</li>
                            <li>📈 Gets better every day</li>
                        </ul>
                    </div>
                </div>

                <!-- Slide 3: AI Hierarchy -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; padding: 40px; background: linear-gradient(135deg, #06b6d4, #0891b2);">
                    <h2 style="font-size: 2.2em; margin: 0 0 30px 0;">🔍 AI vs ML vs DL</h2>
                    <div style="display: flex; flex-direction: column; gap: 15px; width: 80%;">
                        <div style="background: #667eea; padding: 20px; border-radius: 10px; font-size: 1.3em; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                            <strong>AI</strong> - Making machines smart
                        </div>
                        <div style="background: #06b6d4; padding: 18px; border-radius: 10px; font-size: 1.2em; text-align: center; margin-left: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                            <strong>ML</strong> - Learning from data
                        </div>
                        <div style="background: #10b981; padding: 16px; border-radius: 10px; font-size: 1.1em; text-align: center; margin-left: 80px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                            <strong>DL</strong> - Neural networks
                        </div>
                    </div>
                </div>

                <!-- Slide 4: Real Applications -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; padding: 40px; background: linear-gradient(135deg, #10b981, #059669);">
                    <h2 style="font-size: 2.2em; margin: 0 0 30px 0;">🌾 AI in Agriculture</h2>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%;">
                        <div style="background: rgba(255,255,255,0.95); color: #1f2937; padding: 25px; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3em; margin-bottom: 10px;">🚜</div>
                            <h3 style="margin: 0; color: #047857;">Autonomous Tractors</h3>
                        </div>
                        <div style="background: rgba(255,255,255,0.95); color: #1f2937; padding: 25px; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3em; margin-bottom: 10px;">💧</div>
                            <h3 style="margin: 0; color: #047857;">Smart Irrigation</h3>
                        </div>
                        <div style="background: rgba(255,255,255,0.95); color: #1f2937; padding: 25px; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3em; margin-bottom: 10px;">🦠</div>
                            <h3 style="margin: 0; color: #047857;">Disease Detection</h3>
                        </div>
                        <div style="background: rgba(255,255,255,0.95); color: #1f2937; padding: 25px; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3em; margin-bottom: 10px;">📈</div>
                            <h3 style="margin: 0; color: #047857;">Yield Prediction</h3>
                        </div>
                    </div>
                </div>

                <!-- Slide Controls -->
                <div class="slide-controls" style="position:absolute; bottom: 20px; width: 100%; display: flex; justify-content: center; gap: 15px; z-index: 100;">
                    <button onclick="
                        const container = this.closest('.slides-container');
                        const slides = container.querySelectorAll('.slide');
                        let active = Array.from(slides).findIndex(s => s.style.display !== 'none');
                        slides[active].style.display = 'none';
                        active = (active - 1 + slides.length) % slides.length;
                        slides[active].style.display = 'flex';
                    " style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); color: white; padding: 10px 20px; cursor: pointer; border-radius: 30px; font-size: 1em; font-weight: 600; transition: all 0.3s;">
                        ← Previous
                    </button>
                    <button onclick="
                        const container = this.closest('.slides-container');
                        const slides = container.querySelectorAll('.slide');
                        let active = Array.from(slides).findIndex(s => s.style.display !== 'none');
                        slides[active].style.display = 'none';
                        active = (active + 1) % slides.length;
                        slides[active].style.display = 'flex';
                    " style="background: rgba(251,191,36,0.9); backdrop-filter: blur(10px); border: 2px solid #fbbf24; color: #1f2937; padding: 10px 20px; cursor: pointer; border-radius: 30px; font-size: 1em; font-weight: 700; transition: all 0.3s;">
                        Next →
                    </button>
                </div>
            </div>
        `;
    }

    getM1T2Handout() {
        return `
            <div class="handout-premium" style="font-family: 'Segoe UI', sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px;">
                
                <div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px;">
                    <div style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9; margin-bottom: 10px;">Module 1: AI Fundamentals</div>
                    <h1 style="margin: 0; font-size: 2.8em; font-weight: 800;">🧠 Machine Learning Paradigms</h1>
                    <p style="font-size: 1.2em; margin-top: 15px; opacity: 0.95;">Three Ways a Farmer Learns</p>
                </div>

                <div style="background: #fef3c7; padding: 30px; border-radius: 12px; margin: 25px 0; border-left: 6px solid #f59e0b;">
                    <h2 style="color: #92400e; margin-top: 0;">🎭 The Farming Analogy</h2>
                    <p style="font-size: 1.15em; line-height: 1.8; color: #78350f;">
                        Imagine three different farmers learning to grow better crops:
                    </p>
                    
                    <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0;">
                        <h3 style="color: #d97706; margin: 0 0 15px 0;">👨‍🏫 Farmer 1: Supervised Learning (Teacher Present)</h3>
                        <p style="margin: 0; line-height: 1.8;">
                            A young farmer learns from grandpa: "This is wheat, that is rice, here's corn." 
                            <strong>Someone labels everything</strong> while teaching.
                        </p>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0;">
                        <h3 style="color: #d97706; margin: 0 0 15px 0;">🔍 Farmer 2: Unsupervised Learning (Exploring Alone)</h3>
                        <p style="margin: 0; line-height: 1.8;">
                            A farmer notices tomatoes naturally group by size without anyone telling them. 
                            <strong>Computer finds patterns itself</strong>.
                        </p>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0;">
                        <h3 style="color: #d97706; margin: 0 0 15px 0;">🎮 Farmer 3: Reinforcement Learning (Trial & Error)</h3>
                        <p style="margin: 0; line-height: 1.8;">
                            A farmer tries different fertilizer amounts. <strong>Good harvest = reward, bad harvest = lesson learned</strong>. 
                            Gets better through experience.
                        </p>
                    </div>
                </div>

                <div style="background: white; padding: 30px; border-radius: 12px; margin: 25px 0; border: 1px solid #e2e8f0;">
                    <h2 style="color: #1e293b; border-bottom: 3px solid #06b6d4; padding-bottom: 10px;">📖 Deep Dive into ML Paradigms</h2>
                    
                    <h3 style="color: #0e7490; margin-top: 30px;">1️⃣ Supervised Learning - Learning with Labels</h3>
                    <p style="font-size: 1.1em; line-height: 1.8;">
                        You show the computer <strong>examples with answers</strong>. Like showing it 1000 photos: 
                        "This is a healthy plant, this is diseased." It learns the pattern.
                    </p>
                    <div style="background: #cffafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                        <strong style="color: #155e75;">Agricultural Example:</strong> 
                        Training a model to predict crop yield by showing it past data: 
                        rainfall, temperature, fertilizer → actual yield
                    </div>

                    <h3 style="color: #0e7490; margin-top: 30px;">2️⃣ Unsupervised Learning - Finding Hidden Patterns</h3>
                    <p style="font-size: 1.1em; line-height: 1.8;">
                        You give the computer <strong>data without labels</strong>. It discovers groups or patterns you didn't know existed.
                    </p>
                    <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                        <strong style="color: #115e59;">Agricultural Example:</strong> 
                        Analyzing soil samples and discovering they naturally cluster into 3 groups - 
                        you just learned your farm has 3 distinct soil types!
                    </div>

                    <h3 style="color: #0e7490; margin-top: 30px;">3️⃣ Reinforcement Learning - Learning by Doing</h3>
                    <p style="font-size: 1.1em; line-height: 1.8;">
                        The AI <strong>tries different actions and learns from results</strong>. 
                        Good outcome = do more of that. Bad outcome = avoid that.
                    </p>
                    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                        <strong style="color: #92400e;">Agricultural Example:</strong> 
                        A robot learning to harvest strawberries - tries different grip strengths, 
                        gets rewarded for picking without damage
                    </div>
                </div>

                <div style="background: #1e293b; color: white; padding: 30px; border-radius: 12px; margin: 25px 0;">
                    <h2 style="color: #fbbf24; margin-top: 0;">💻 Code Example: Supervised Learning</h2>
                    <pre style="background: #0f172a; padding: 20px; border-radius: 8px; overflow-x: auto; color: #e2e8f0; font-size: 0.95em;"><span style="color: #fbbf24;"># Training data: Hours of sleep vs Crop yield</span>
farm_worker_sleep = [<span style="color: #60a5fa;">8, 7, 6, 5, 9</span>]
crop_efficiency = [<span style="color: #60a5fa;">95, 88, 75, 60, 98</span>]

<span style="color: #fbbf24;"># Simple supervised learning rule</span>
<span style="color: #f472b6;">if</span> sleep_hours >= <span style="color: #60a5fa;">8</span>:
    <span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">"Prediction: High efficiency!"</span>)
<span style="color: #f472b6;">else</span>:
    <span style="color: #a78bfa;">print</span>(<span style="color: #fbbf24;">"Warning: Low efficiency expected"</span>)</pre>
                </div>

                <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 35px; border-radius: 12px; text-align: center;">
                    <h2 style="color: #fbbf24; margin-top: 0;">✨ Summary</h2>
                    <p style="font-size: 1.2em; line-height: 1.8;">
                        You've learned the <strong>three main ways machines learn</strong>: 
                        with a teacher (supervised), finding patterns alone (unsupervised), 
                        and through trial-error (reinforcement).
                    </p>
                </div>
            </div>
        `;
    }

    getModuleTitle(moduleId) {
        if (!this.structure) return "Course Module";
        const idNum = parseInt(moduleId.replace('m', ''));
        const mod = this.structure.modules.find(m => m.id === idNum);
        return mod ? mod.title : "Agri-LMS Module";
    }

    getTopic(topicId) {
        let topic = { id: topicId, title: "Topic " + topicId, subtopics: [] };
        if (this.structure) {
            for (const m of this.structure.modules) {
                const found = m.topics.find(t => t.id === topicId);
                if (found) { topic = found; break; }
            }
        }
        return topic;
    }

    getContent(topicId) {
        const specific = this.specificContent[topicId];
        if (specific) return specific;

        const topic = this.getTopic(topicId);

        // Module 5 projects
        if (topicId.startsWith('m5')) {
            return {
                handout: this.generateModule5Handout(topic),
                presentation: this.generateModule5Presentation(topic)
            };
        }

        // All other modules - dynamic generation
        return {
            handout: this.generateComprehensiveHandout(topic),
            presentation: this.generateGenericPresentation(topicId, topic.title)
        };
    }

    generateComprehensiveHandout(topic) {
        const moduleId = topic.id.split('-')[0];
        const moduleTitle = this.getModuleTitle(moduleId);

        const subtopicsList = topic.subtopics && topic.subtopics.length > 0
            ? topic.subtopics.map(s => `<li style="margin: 8px 0;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 8px;"></i>${s}</li>`).join('')
            : '<li>Core Concepts</li>';

        const subsections = topic.subtopics && topic.subtopics.length > 0
            ? topic.subtopics.map((s, index) => `
                <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #06b6d4; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                    <h3 style="color: #0e7490; margin: 0 0 15px 0;">${index + 1}. ${s}</h3>
                    <p style="color: #475569; line-height: 1.8; font-size: 1.05em;">
                        Understanding <strong>${s}</strong> is crucial for mastering ${topic.title}. 
                        In agricultural applications, this concept enables you to build more intelligent and efficient systems 
                        that can analyze data, make predictions, and optimize farming operations.
                    </p>
                    <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin-top: 12px; border-left: 3px solid #38bdf8;">
                        <strong style="color: #075985;">Key Insight:</strong> 
                        <span style="color: #0c4a6e;">Think of ${s} as a specialized tool in your precision farming toolkit.</span>
                    </div>
                </div>`).join('')
            : '<p style="color: #64748b;">Content is being developed with agricultural focus...</p>';

        return `
            <div class="handout-container" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px;">
                
                <div style="background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 8px 25px rgba(14, 165, 233, 0.3);">
                    <div style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.85em; opacity: 0.9; margin-bottom: 10px;">${moduleTitle}</div>
                    <h1 style="margin: 0; font-size: 2.5em; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                        <i class="fas fa-leaf" style="margin-right: 15px;"></i>${topic.title}
                    </h1>
                </div>

                <div style="background: linear-gradient(to right, #f0fdf4, #dcfce7); padding: 30px; border-radius: 12px; border-left: 6px solid #10b981; margin-bottom: 30px;">
                    <h2 style="color: #166534; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-bullseye"></i> Learning Objectives
                    </h2>
                    <ul style="list-style: none; padding-left: 0; font-size: 1.05em; line-height: 2;">
                        ${subtopicsList}
                    </ul>
                </div>

                <div style="background: #fffbeb; padding: 30px; border-radius: 12px; border-left: 6px solid #fbbf24; margin-bottom: 30px;">
                    <h2 style="color: #92400e; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-tractor"></i> Agricultural Analogy
                    </h2>
                    <p style="font-size: 1.15em; line-height: 1.8; color: #78350f;">
                        Think of <strong>${topic.title}</strong> like a modern farming tool that automates a specific task on your farm. 
                        Just as a combine harvester revolutionized crop harvesting by combining multiple operations, 
                        this concept streamlines the data processing pipeline in agricultural AI systems.
                    </p>
                    <div style="background: rgba(251, 191, 36, 0.2); padding: 20px; border-radius: 8px; margin-top: 15px; font-style: italic; color: #92400e;">
                        "Smart farming requires smart tools. <strong>${topic.title}</strong> is one of those tools that helps you make data-driven decisions for better yields."
                    </div>
                </div>

                <div style="margin: 30px 0;">
                    <h2 style="color: #1e293b; border-bottom: 3px solid #06b6d4; padding-bottom: 10px; margin-bottom: 25px;">
                        <i class="fas fa-book-open"></i> Detailed Exploration
                    </h2>
                    ${subsections}
                </div>

                <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 35px; border-radius: 12px; text-align: center; margin-top: 40px;">
                    <h2 style="color: #fbbf24; margin-top: 0; display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <i class="fas fa-star"></i> Key Takeaway
                    </h2>
                    <p style="font-size: 1.2em; line-height: 1.8; margin: 20px 0;">
                        Mastering <strong>${topic.title}</strong> equips you with essential skills for building intelligent agricultural systems. 
                        These concepts form the foundation of modern AgriTech solutions.
                    </p>
                    <div style="background: rgba(251, 191, 36, 0.15); padding: 25px; border-radius: 10px; margin-top: 25px; border: 2px dashed #f59e0b;">
                        <h3 style="color: #fbbf24; margin: 0 0 15px 0;"><i class="fas fa-route"></i> Next Steps</h3>
                        <div style="text-align: left; display: inline-block; font-size: 1.05em;">
                            <p style="margin: 10px 0;"><strong>1.</strong> Review the <strong>Slides</strong> tab for visual summary</p>
                            <p style="margin: 10px 0;"><strong>2.</strong> Practice with the <strong>Lab</strong> exercises</p>
                            <p style="margin: 10px 0;"><strong>3.</strong> Complete the <strong>Activity</strong> for hands-on experience</p>
                            <p style="margin: 10px 0;"><strong>4.</strong> Test your knowledge with the <strong>Quiz</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateGenericPresentation(topicId, title) {
        const moduleId = topicId.split('-')[0];
        const moduleTitle = this.getModuleTitle(moduleId);

        return `
            <div class="slides-container" style="position: relative; height: 450px; overflow: hidden; background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 12px; color: white; font-family: 'Segoe UI', sans-serif;">
                
                <div class="slide active" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 40px; background: linear-gradient(135deg, #0ea5e9, #0284c7);">
                    <div style="background: rgba(255,255,255,0.25); padding: 8px 20px; border-radius: 25px; margin-bottom: 20px; font-size: 0.85em; letter-spacing: 2px; backdrop-filter: blur(10px);">
                        ${moduleTitle}
                    </div>
                    <h1 style="font-size: 2.8em; margin: 0; font-weight: 900; line-height: 1.2;">${title}</h1>
                    <p style="font-size: 1.3em; margin-top: 20px; opacity: 0.9;">Key Concepts & Applications</p>
                </div>

                <div class="slide-controls" style="position:absolute; bottom: 20px; width: 100%; display: flex; justify-content: center; gap: 15px;">
                    <button onclick="alert('Navigate through slides in the full version!')" style="background: rgba(251,191,36,0.9); border: none; color: #1f2937; padding: 10px 25px; cursor: pointer; border-radius: 30px; font-weight: 700; font-size: 1em;">
                        Explore Slides
                    </button>
                </div>
            </div>
        `;
    }

    generateModule5Handout(topic) {
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px;">
                    <h1 style="margin: 0; font-size: 2.5em;">🏆 ${topic.title}</h1>
                    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; display: inline-block; margin-top: 15px; font-size: 0.9em;">Bonus Project - Module 5</span>
                </div>
                <div style="background: white; border: 2px solid #c4b5fd; padding: 30px; border-radius: 12px;">
                    <h2 style="color: #6d28d9;">Project Overview</h2>
                    <p style="font-size: 1.1em; line-height: 1.8;">
                        This hands-on project challenges you to build a real-world agricultural AI application. 
                        You'll apply everything you've learned to create a functional prototype.
                    </p>
                    <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #8b5cf6;">
                        <h3 style="color: #6d28d9; margin-top: 0;">🎯 Objectives</h3>
                        <ul style="line-height: 2; color: #5b21b6;">
                            ${topic.subtopics ? topic.subtopics.map(s => `<li>${s}</li>`).join('') : '<li>Build, test, and deploy your solution</li>'}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    generateModule5Presentation(topic) {
        return `
            <div class="slides-container" style="height: 450px; background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 40px;">
                <div>
                    <h1 style="font-size: 3em; margin: 0;">🏆 ${topic.title}</h1>
                    <p style="font-size: 1.4em; margin-top: 20px; opacity: 0.95;">Bonus Project Briefing</p>
                </div>
            </div>
        `;
    }
}

const lectureSystem = new LectureSystem();
window.courseContent = lectureSystem;
console.log('[INIT] Enhanced LectureSystem loaded with comprehensive Module 1 content');

window.lectureSystem = lectureSystem;
