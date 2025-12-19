// Activity-Content.js - Student Activity and Knowledge Transfer Instructions

class ActivitySystem {
    constructor() {
        this.structure = (typeof comprehensiveCourseStructure !== 'undefined') ? comprehensiveCourseStructure : null;
    }

    getActivity(topicId) {
        // 1. Check for specific activity
        if (this.specificActivities[topicId]) {
            return this.specificActivities[topicId];
        }

        // 2. Generate dynamic activity
        return this.generateDynamicActivity(topicId);
    }

    generateDynamicActivity(topicId) {
        // Parse metadata
        let title = "Topic Activity";
        let subtopics = [];

        if (this.structure) {
            for (const module of this.structure.modules) {
                const topic = module.topics.find(t => t.id === topicId);
                if (topic) {
                    title = topic.title;
                    subtopics = topic.subtopics || [];
                    break;
                }
            }
        }

        // Create Generic Task if no specific one exists
        return `
            <div class="activity-container">
                <div class="activity-header">
                    <h3><i class="fas fa-bolt"></i> Activity: ${title} Knowledge Check</h3>
                    <p>Standard synthesis task for this topic.</p>
                </div>
                <div class="activity-step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                        <h4>Concept Definition</h4>
                        <p>Explain the core concept of <strong>${title}</strong> in your own words.</p>
                    </div>
                </div>
                <div class="activity-step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                        <h4>Practical Application</h4>
                        <p>Describe one way you would use this to solve a problem on a real farm.</p>
                    </div>
                </div>
            </div>
        `;
    }

    get specificActivities() {
        // Helper for generating consistent QA checklists for projects
        const getActTemplate = (title, icon, rules) => `
            <div class="activity-container">
                <div class="activity-header">
                    <h3><i class="fas ${icon}"></i> QA: ${title}</h3>
                    <p>Verify system functionality with these test cases.</p>
                </div>
                <div class="activity-step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                        <h4>Mandatory Test Cases</h4>
                        <ul class="checklist">
                            ${rules.map((r, i) => `<li><input type="checkbox" /> <strong>TC-${(i + 1).toString().padStart(2, '0')}:</strong> ${r}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="activity-step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                        <h4>Test Log</h4>
                        <textarea placeholder="Paste results here..." style="width:100%; height:80px; padding:10px; border:1px solid #ddd; border-radius:4px;"></textarea>
                    </div>
                </div>
            </div>`;

        const projectSpecs = {
            'm5-t2': { t: "Smart Irrigation", i: "fa-water", r: ["Low Moisture = Pump ON", "High Moisture = Pump OFF", "Sensor Disconnect = Error Alert"] },
            'm5-t3': { t: "Crop Disease API", i: "fa-server", r: ["Valid Image = JSON Resp", "Invalid File = 400 Error", "Response time < 200ms"] },
            'm5-t4': { t: "Market Dashboard", i: "fa-chart-line", r: ["CSV Loads 100% rows", "Date Filter Works", "Price Chart Renders"] },
            'm5-t5': { t: "Soil Nutrient Pred", i: "fa-table", r: ["Model MSE < 0.2", "Input Out-of-bounds Handling", "Feature Importance Plot Loads"] },
            'm5-t6': { t: "Weed Detection", i: "fa-eye", r: ["Weed Bounding Box present", "Confidence> 0.5", "Video Stream FPS> 15"] },
            'm5-t7': { t: "Maturity Grading", i: "fa-apple-alt", r: ["Red Apple = Ripe", "Green Apple = Raw", "Bad Lighting Handling"] },
            'm5-t8': { t: "Greenhouse Control", i: "fa-thermometer-half", r: ["Temp < Setpoint = Heater ON", "Temp> Setpoint = Fan ON", "PID Adjustment Stable"] },
            'm5-t9': { t: "Fruit Picker Arm", i: "fa-robot", r: ["Inverse Kinematics Valid", "Target Reached within 1cm", "Gripper Force Safe"] },
            'm5-t10': { t: "Drone Path Plan", i: "fa-plane", r: ["No Obstacle Collision", "Path Found < 1sec wait", "Battery suffiecient calculated"] },
            'm5-t11': { t: "Livestock Health", i: "fa-heartbeat", r: ["Anomaly Detected for High HR", "Normal Activity = Safe", "False Positive Rate < 5%"] },
            'm5-t12': { t: "Weather App", i: "fa-cloud-sun", r: ["API Key Loaded Securely", "Forecast displays 7 days", "Rain Alert triggers Notification"] },
            'm5-t13': { t: "Rotation Rec", i: "fa-sync", r: ["Wheat -> Legume Rule Valid", "Display Nitrogen Benefit", "UI clear for farmers"] },
            'm5-t14': { t: "Farmer Chatbot", i: "fa-comments", r: ["Greeting Response Valid", "Agri-Context maintained", "No hallucinations for chemical dosage"] },
            'm5-t15': { t: "Satellite Yield", i: "fa-satellite", r: ["Load TIF image success", "NDVI Map Generated", "Yield Estimate within specific range"] },
            'm5-t16': { t: "Supply Chain Opt", i: "fa-truck", r: ["Transport Cost Minimized", "Constraint Satisfied (Capacity)", "Route Map Displayed"] },
            'm5-t17': { t: "Hydroponics Monitor", i: "fa-fill-drip", r: ["pH < 5.5 = Add Base Alert", "EC stable", "Twin Visual matches Data"] },
            'm5-t18': { t: "Pest Counting", i: "fa-bug", r: ["Count Accuracy +/- 2", "Density map colored", "Threshold alert email"] },
            'm5-t19': { t: "Water Quality Index", i: "fa-tint", r: ["WQI Formula Calculation correct", "Report PDF Generated", "Standard range verification"] },
            'm5-t20': { t: "Crop Sched Genetic", i: "fa-dna", r: ["Fitness Score Improves over Gen", "Schedule Constraint valid", "Timeline Visualization"] },
            'm5-t21': { t: "Equip Maintenance", i: "fa-cogs", r: ["High Variation = Anomaly", "Dashboard Status Update", "Log File Analysis"] }
        };

        const projectActivities = {};
        Object.keys(projectSpecs).forEach(key => {
            projectActivities[key] = getActTemplate(projectSpecs[key].t, projectSpecs[key].i, projectSpecs[key].r);
        });

        return {
            // --- MODULE 1: AI Fundamentals Activities ---
            'm1-t1': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-gamepad"></i> Activity: The Smart Scarecrow Game</h3>
                        <p>Simulate how AI learns from feedback.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Setup</h4>
                            <p><strong>Roles:</strong></p>
                            <ul>
                                <li>👥 <strong>Crops:</strong> Students stand still.</li>
                                <li>🤖 <strong>Scarecrow (AI):</strong> One student stands guard.</li>
                                <li>🐦 <strong>Crows:</strong> Other students try to sneak past.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Action</h4>
                            <p>The Scarecrow must shout to scare crows. If they shout too late, the crow wins. If they shout when no crow is there, they waste energy.</p>
                            <p><strong>Goal:</strong> Adapt your timing based on the crows' speed!</p>
                        </div>
                    </div>
                </div>`,
            'm1-t2': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-layer-group"></i> Activity: Three Farming Scenarios</h3>
                        <p>Experience Supervised, Unsupervised, and Reinforcement learning.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Scenario 1: Supervised</h4>
                            <p>Teacher holds up photos of crops and names them ("Wheat", "Rice"). Students memorize and identify new photos.</p>
                        </div>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Scenario 2: Unsupervised</h4>
                            <p>Teacher gives students a mixed bag of seeds (no labels). Students must sort them into groups based on shape/color alone.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t3': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-history"></i> Activity: AI Timeline Game</h3>
                        <p>Reconstruct the history of AI.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Sort the Cards</h4>
                            <p>Arragne the following events in order:</p>
                            <ul>
                                <li>Deep Blue beats Kasparov (1997)</li>
                                <li>Turing Test Proposed (1950)</li>
                                <li>ChatGPT Released (2022)</li>
                            </ul>
                        </div>
                    </div>
                </div>`,
            'm1-t4': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-puzzle-piece"></i> Activity: Problem-Solution Match</h3>
                        <p>Match the farm problem to the AI solution.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Matching Pairs</h4>
                            <ul>
                                <li>🐛 <strong>Pests eating crops</strong> → 📸 Computer Vision Trap</li>
                                <li>🌧️ <strong>Unpredictable rain</strong> → 🔮 Weather Forecasting Model</li>
                                <li>💧 <strong>Water wastage</strong> → 🧠 Smart Irrigation System</li>
                            </ul>
                        </div>
                    </div>
                </div>`,
            'm1-t5': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-user-tie"></i> Activity: AgriTech Job Roleplay</h3>
                        <p>Explore careers in AI Agriculture.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Choose a Role</h4>
                            <p><strong>Data Scientist:</strong> "I look at this spreadsheet to find why yield is low."</p>
                            <p><strong>IoT Engineer:</strong> "I build the sensors that go into the soil."</p>
                        </div>
                    </div>
                </div>`,
            'm1-t6': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-calculator"></i> Activity: Farm Math Challenge</h3>
                        <p>Apply math to farming.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Calculate</h4>
                            <p>Field is 50m x 40m. What is the Area?</p>
                            <p>Harvests: 200kg, 250kg, 180kg. What is the Average?</p>
                        </div>
                    </div>
                </div>`,
            'm1-t7': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-pie"></i> Activity: The Bean Counter</h3>
                        <p>Understanding Average vs Median.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Count & Calculate</h4>
                            <p><strong>Step 1:</strong> Count beans in your bag.</p>
                            <p><strong>Step 2:</strong> Calculate the Class Average (Mean).</p>
                            <p><strong>Step 3:</strong> Line up to find the Median (Middle Person).</p>
                        </div>
                    </div>
                </div>`,
            'm1-t8': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-th"></i> Activity: Field Matrix</h3>
                        <p>Visualizing data grids.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>The Human Matrix</h4>
                            <p>Form a grid (Rows x Columns). Each student is a data point.</p>
                            <p><strong>Transpose:</strong> Rotate the group 90 degrees!</p>
                        </div>
                    </div>
                </div>`,
            'm1-t9': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-boxes"></i> Activity: Barn Cleanup</h3>
                        <p>Sorting Structured vs Unstructured Data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Sort the Items</h4>
                            <ul>
                                <li><strong>Structured:</strong> Eggs in a crate (Excel).</li>
                                <li><strong>Unstructured:</strong> Pile of Hay (Images/Text).</li>
                                <li><strong>Semi-Structured:</strong> Labeled Sacks (JSON).</li>
                            </ul>
                        </div>
                    </div>
                </div>`,
            'm1-t10': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-wifi"></i> Activity: Human Sensor Network</h3>
                        <p>Simulate IoT data collection.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Pulse Check</h4>
                            <p>Students act as sensors. Every 5 seconds, check your pulse/heart-rate.</p>
                            <p>Send the data to the "Cloud" (Teacher). What happens if one student falls asleep (Sensor Failure)?</p>
                        </div>
                    </div>
                </div>`,
            'm1-t11': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-keyboard"></i> Activity: Hello Farm</h3>
                        <p>Your first step in the Cloud Tractor.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Run Code</h4>
                            <p>Open Google Colab.</p>
                            <p>Type <code>print("Hello Farm")</code> and press Play.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t12': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-box"></i> Activity: The Box Game</h3>
                        <p>Understanding Variables.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Label & Store</h4>
                            <p>Take a box. Label it "Harvest". Put 50 items inside.</p>
                            <p>Now change the value: Take out 50, put in 60.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t13': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-plus-circle"></i> Activity: Farm Logic</h3>
                        <p>Operators in Action.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Evaluate</h4>
                            <p>Is <strong>Soil Dry</strong> AND <strong>No Rain</strong>? -> Water ON.</p>
                            <p>Is <strong>Pest Count> 10</strong>? -> Spray ON.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t14': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-code-branch"></i> Activity: If This Then That</h3>
                        <p>Simon Says for Logic.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Follow the Rules</h4>
                            <p><strong>IF</strong> teacher raises Left Hand -> Clap.</p>
                            <p><strong>ELIF</strong> teacher raises Right Hand -> Stomp.</p>
                            <p><strong>ELSE</strong> -> Freeze.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t15': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-sync"></i> Activity: The Bucket Line</h3>
                        <p>Looping Constructs.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>While Loop</h4>
                            <p>Pass the bucket <strong>WHILE</strong> it has water.</p>
                            <p>Stop when empty.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t16': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-cogs"></i> Activity: The Human Machine</h3>
                        <p>Function Inputs and Outputs.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Def Adder(a, b)</h4>
                            <p>One student is the "Machine". Give them two numbers (Inputs).</p>
                            <p>They shout back the Sum (Return Value).</p>
                        </div>
                    </div>
                </div>`,
            'm1-t17': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-list-ol"></i> Activity: Warehouse Hunt</h3>
                        <p>Lists vs Dictionaries.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Find the Item</h4>
                            <p><strong>List:</strong> Go to Aisle 1 (Index 0).</p>
                            <p><strong>Dictionary:</strong> Look up "Apples" in the catalog to find location.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t18': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-font"></i> Activity: Label Fixer</h3>
                        <p>String Manipulation.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Spot Difference</h4>
                            <p>Is "Rice" the same as "rice "?</p>
                            <p>Clean the labels: Upper Case and Trim Spaces.</p>
                        </div>
                    </div>
                </div>`,
            'm1-t19': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-book"></i> Activity: The Farm Diary</h3>
                        <p>File I/O.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Log It</h4>
                            <p>Write a log entry on paper (Write).</p>
                            <p>Hand it to a neighbor to read back (Read).</p>
                        </div>
                    </div>
                </div>`,

            // --- MODULE 2: Data Science Activities ---
            'm2-t1': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-bolt"></i> Activity: The Speed Test</h3>
                        <p>Lists vs NumPy.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Compare Speed</h4>
                            <p><strong>Manual:</strong> Add 2 to ten numbers one by one.</p>
                            <p><strong>NumPy:</strong> Everyone add 2 at the same time!</p>
                        </div>
                    </div>
                </div>`,
            'm2-t2': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-border-all"></i> Activity: Plantation Grid</h3>
                        <p>Matrix Operations.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Transpose</h4>
                            <p>Arrange yourselves in a Grid.</p>
                            <p>Swap Rows and Columns (Rotate).</p>
                        </div>
                    </div>
                </div>`,
            'm2-t7': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-search"></i> Activity: The Monthly Report</h3>
                        <p>Quick Data Analysis.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Describe It</h4>
                            <p>You have 30 days of harvest logs. Don't read them all.</p>
                            <p>Find the <strong>Min</strong> (Worst Day), <strong>Max</strong> (Best Day), and <strong>Average</strong>.</p>
                        </div>
                    </div>
                </div>`,
            'm2-t8': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-filter"></i> Activity: The Sieve</h3>
                        <p>Advanced Filtering.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Sift the Soil</h4>
                            <p>Imagine pouring soil through a mesh.</p>
                            <p><strong>Rule:</strong> Only rocks> 2cm stay.</p>
                            <p><strong>Code:</strong> <code>df[df['size']> 2]</code></p>
                        </div>
                    </div>
                </div>`,
            'm2-t9': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-eraser"></i> Activity: The Smudged Logbook</h3>
                        <p>Handling Missing Data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Fix the Hole</h4>
                            <p>Rain smeared the ink on Tuesday's entry.</p>
                            <p><strong>Option A:</strong> Tear out the page (Drop).</p>
                            <p><strong>Option B:</strong> Write in the average of Mon and Wed (Impute).</p>
                        </div>
                    </div>
                </div>`,
            'm2-t10': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-boxes"></i> Activity: Fruit Bins</h3>
                        <p>Grouping and Aggregation.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Group & Weigh</h4>
                            <p><strong>Step 1:</strong> Put all Apples in Bin A, Oranges in Bin B.</p>
                            <p><strong>Step 2:</strong> Weigh Bin A (Sum).</p>
                            <p><strong>Step 3:</strong> Count fruits in Bin B (Count).</p>
                        </div>
                    </div>
                </div>`,
            'm2-t11': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-area"></i> Activity: The Field Map</h3>
                        <p>Introduction to Matplotlib.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Draw the Growth</h4>
                            <p>Plant grows 1cm per day.</p>
                            <p>Draw a line on graph paper connecting Day 1 (1cm) to Day 10 (10cm).</p>
                        </div>
                    </div>
                </div>`,
            'm2-t12': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-bar"></i> Activity: Sorting by Size</h3>
                        <p>Distribution Analysis.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Build a Histogram</h4>
                            <p>Sort 20 potatoes into bins: Small, Medium, Large.</p>
                            <p>Count piles. Is it a "Bell Curve"? (Most in Medium).</p>
                        </div>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Spot Difference</h4>
                            <p>Check the <strong>Box Plot</strong>.</p>
                            <p>Is there a dot far away? That's a mutant potato (Outlier)!</p>
                        </div>
                    </div>
                </div>`,
            'm2-t13': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-palette"></i> Activity: The Landscape Artist</h3>
                        <p>Heatmaps (Correlation).</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Color Code</h4>
                            <p>Red = Hot/Dry (Bad). Blue = Wet/Cool (Good).</p>
                            <p>Paint a grid of your field.</p>
                        </div>
                    </div>
                     <div class="activity-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Correlation</h4>
                            <p>If Rain goes UP and Yield goes UP... they are "Friends" (Positive Correlation +1).</p>
                            <p>If Pests go UP and Yield goes DOWN... they are "Enemies" (Negative Correlation -1).</p>
                        </div>
                    </div>
                </div>`,
            'm2-t14': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-recycle"></i> Activity: The Farming Cycle</h3>
                        <p>Machine Learning Workflow.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>The 4 Seasons</h4>
                            <ol>
                                <li><strong>Spring (Prep):</strong> Clean the soil (Data Cleaning).</li>
                                <li><strong>Summer (Grow):</strong> Train the plants (Model Training).</li>
                                <li><strong>Autumn (Test):</strong> Check fruit quality (Evaluation).</li>
                                <li><strong>Winter (Plan):</strong> Predict next year (Prediction).</li>
                            </ol>
                        </div>
                    </div>
                </div>`,
            'm2-t15': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chalkboard-teacher"></i> Activity: The Classroom</h3>
                        <p>Supervised vs Unsupervised.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Teacher or Explorer?</h4>
                            <p><strong>Supervised:</strong> Teacher shows flashcards ("This is a Cow").</p>
                            <p><strong>Unsupervised:</strong> You go to a new planet and group animals by Number of Legs.</p>
                        </div>
                    </div>
                </div>`,
            // --- MODULE 3: AI Applications ---
            'm3-t1': `
            <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-flask"></i> Activity: The Master Chef</h3>
                        <p>Feature Engineering.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Prep Ingredients</h4>
                            <p>Raw potato (Raw Data) vs Mashed Potato (Feature).</p>
                            <p>Create a new feature: <strong>"Growth Rate"</strong> = Height / Age.</p>
                        </div>
                    </div>
                    </div>
                </div>`,
            'm3-t2': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-tree"></i> Activity: The Council of Wise Farmers</h3>
                        <p>Random Forest.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Vote</h4>
                            <p>One farmer guesses the yield (Decision Tree). Likely wrong.</p>
                            <p>100 farmers guess (Random Forest). The average is usually right!</p>
                        </div>
                    </div>
                </div> `,
            'm3-t3': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-ruler-combined"></i> Activity: The Rubber Band</h3>
                        <p>Regression Types.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Fit</h4>
                            <p><strong>Linear:</strong> A stiff stick.</p>
                            <p><strong>Polynomial:</strong> A flexible wire.</p>
                            <p>Don't bend it too much (Overfitting) or it breaks!</p>
                        </div>
                    </div>
                </div> `,
            'm3-t4': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-cloud-sun-rain"></i> Activity: The Almanac</h3>
                        <p>Weather Data Integration.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Look Skyward</h4>
                            <p>Get today's temperature.</p>
                            <p>Combine it with soil moisture. Does it predict Rain?</p>
                        </div>
                    </div>
                </div> `,
            'm3-t5': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-layer-group"></i> Activity: Soil Layers</h3>
                        <p>Soil Data Integration.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Dig Deeper</h4>
                            <p>Topsoil (Nitrogen), Subsoil (Moisture).</p>
                            <p>Map these layers to a 3D array.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t6': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-heartbeat"></i> Activity: Leaf Pulse</h3>
                        <p>Crop Health Assessment.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>NDVI Check</h4>
                            <p>Near-Infrared light bounces off healthy leaves.</p>
                            <p><strong>Activity:</strong> Use a red filter (cellphone app) to see "plant stress".</p>
                        </div>
                    </div>
                </div> `,
            'm3-t7': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-virus"></i> Activity: The Plant Doctor</h3>
                        <p>Disease Detection.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Diagnose</h4>
                            <p>Look at photos of leaves.</p>
                            <p>Spot: <strong>Rust</strong> (Orange spots) vs <strong>Blight</strong> (Black rot).</p>
                        </div>
                    </div>
                </div> `,
            'm3-t8': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-eye"></i> Activity: Pixel Peeping</h3>
                        <p>Computer Vision Basics.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Zoom In</h4>
                            <p>Draw a smiley face on graph paper.</p>
                            <p>Turn it into numbers (0=White, 1=Black).</p>
                            <p>This is how computers "see".</p>
                        </div>
                    </div>
                </div> `,
            'm3-t9': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-border-none"></i> Activity: The Sliding Window</h3>
                        <p>CNN Convolutions.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Scan</h4>
                            <p>Cut out a small square hole in paper (Filter).</p>
                            <p>Slide it over a large image. Look for "Vertical Lines" only.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t10': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-brain"></i> Activity: The Veteran Farmer</h3>
                        <p>Transfer Learning.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Reuse Knowledge</h4>
                            <p>You know how to grow Tomatoes (ImageNet Model).</p>
                            <p>Can you learn to grow Peppers? Yes, it's 90% the same skill!</p>
                        </div>
                    </div>
                </div> `,
            'm3-t11': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-database"></i> Activity: The Library</h3>
                        <p>PlantVillage Dataset.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Organize</h4>
                            <p>Sort 1000 photos into folders: "Healthy", "Sick".</p>
                            <p>Check for duplicates or blurry photos (Preprocessing).</p>
                        </div>
                    </div>
                </div> `,
            'm3-t12': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-crosshairs"></i> Activity: Spot the Bug</h3>
                        <p>Object Detection (YOLO).</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Fast Scan</h4>
                            <p>Look at a busy field photo.</p>
                            <p>Draw a box around every weed you see in 5 seconds.</p>
                            <p><strong>YOLO:</strong> You Only Look Once!</p>
                        </div>
                    </div>
                </div> `,
            'm3-t13': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-map-marked-alt"></i> Activity: Zoning the Field</h3>
                        <p>Soil Clustering.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Group Them</h4>
                            <p>You have 50 soil samples. Don't treat the whole field the same.</p>
                            <p>Group them into 3 Zones: Sandy, Clay, Loam (K-Means).</p>
                        </div>
                    </div>
                </div> `,
            'm3-t14': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-vial"></i> Activity: The Soil Lab</h3>
                        <p>Property Prediction.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Predict pH</h4>
                            <p>You know the Nitrogen and Carbon levels.</p>
                            <p>Can you guess the pH without a meter? (Regression).</p>
                        </div>
                    </div>
                </div> `,
            'm3-t15': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-calculator"></i> Activity: The Diet Plan</h3>
                        <p>Nutrient Calculation.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Feed the Crop</h4>
                            <p>Target: 150kg N/ha. Current: 100kg N/ha.</p>
                            <p>Gap: 50kg. How many bags of Urea (46% N) do you need?</p>
                        </div>
                    </div>
                </div> `,
            'm3-t16': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-wallet"></i> Activity: The Thrifty Farmer</h3>
                        <p>Optimization.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Maximize ROI</h4>
                            <p>Fertilizer A is cheap but weak. Fertilizer B is strong but expensive.</p>
                            <p>Find the perfect mix to get max yield for min cost.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t17': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-tint"></i> Activity: Smart Valve</h3>
                        <p>Precision Irrigation.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Decision Logic</h4>
                            <p><strong>If</strong> Soil Moisture < 30% <strong>AND</strong> Rain Forecast = 0%...</p>
                            <p><strong>Then</strong> Open Valve.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t18': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-sun"></i> Activity: The Thirsty Plant</h3>
                        <p>Evapotranspiration.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Water Loss</h4>
                            <p>Sun + Wind = Water Loss.</p>
                            <p>Calculate how much water the crop "sweated" today.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t19': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-calendar-alt"></i> Activity: The Calendar</h3>
                        <p>Time Series Decomposition.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Unpack the Box</h4>
                            <p>A Time Series is a box containing 3 things:</p>
                            <p>1. <strong>Trend:</strong> Going up or down over years?</p>
                            <p>2. <strong>Seasonality:</strong> Repeating pattern (Winter/Summer)?</p>
                            <p>3. <strong>Noise:</strong> Random bumps.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t20': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-line"></i> Activity: The Forward Look</h3>
                        <p>ARIMA Forecasting.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Predict Tomorrow</h4>
                            <p>Today is hot. Yesterday was hot. Day before was hot.</p>
                            <p>AR (Auto-Regressive) says: Tomorrow will likely be hot.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t21': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-cloud"></i> Activity: Cloud Reader</h3>
                        <p>Pattern Recognition.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Anomaly!</h4>
                            <p>Normal: Rainy in July. Weird: Rainy in January.</p>
                            <p>Teach the AI to shout when the weather breaks the rules.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t22': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-rupee-sign"></i> Activity: Market Watch</h3>
                        <p>Price Forecasting.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Buy or Sell?</h4>
                            <p>AI predicts Onion prices will double next week.</p>
                            <p>Decision: Hold your stock in the warehouse!</p>
                        </div>
                    </div>
                </div> `,
            'm3-t23': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-users"></i> Activity: The Crowd</h3>
                        <p>Demand Prediction.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Festival Season</h4>
                            <p>Diwali is coming. Demand for flowers goes UP.</p>
                            <p>Model this "External Factor" to plant more marigolds.</p>
                        </div>
                    </div>
                </div> `,
            'm3-t24': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-globe-asia"></i> Activity: The Big Picture</h3>
                        <p>Market Insights.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Connect the Dots</h4>
                            <p>Oil prices go up -> Transport costs go up -> Food prices go up.</p>
                            <p>Build a graph of these connections.</p>
                        </div>
                    </div>
                </div> `,
            // --- MODULE 4: Capstone Project ---
            'm4-t1': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-clipboard-list"></i> Activity: The Blueprint</h3>
                        <p>Problem Scoping.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Write it Down</h4>
                            <p><strong>Goal:</strong> "Predict Potato Blight with 90% accuracy."</p>
                            <p><strong>Non-Goal:</strong> "Build a robot that picks potatoes." (Keep it focused!)</p>
                        </div>
                    </div>
                </div> `,
            'm4-t4': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-shopping-basket"></i> Activity: Market Shopping</h3>
                        <p>Dataset Selection.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Quality Check</h4>
                            <p>Is the Kaggle dataset fresh (Recent)?</p>
                            <p>Are there enough samples (At least 1000)?</p>
                            <p>Is it legal to use (License)?</p>
                        </div>
                    </div>
                </div> `,
            'm4-t10': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-search-plus"></i> Activity: Field Recon</h3>
                        <p>Advanced EDA.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>The Pair Plot</h4>
                            <p>Imagine seeing your field from EVERY angle at once.</p>
                            <p>Does Height match Yield? Does Fertilizer match Height?</p>
                            <p>Look for the clearest "Diagonal" pattern.</p>
                        </div>
                    </div>
                </div> `,
            'm4-t14': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-hammer"></i> Activity: Laying Bricks</h3>
                        <p>Model Training.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Build It</h4>
                            <p>Start with a simple wall (Logistic Regression).</p>
                            <p>If it falls down, build a stronger wall (Random Forest).</p>
                        </div>
                    </div>
                </div> `,
            'm4-t16': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-hard-hat"></i> Activity: Safety Inspection</h3>
                        <p>Validation.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Stress Test</h4>
                            <p>Test your model on data it has NEVER seen.</p>
                            <p>If it fails, your building is unsafe (Overfitting).</p>
                        </div>
                    </div>
                </div> `,
            'm4-t21': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-server"></i> Activity: Open Shop</h3>
                        <p>Deployment (API).</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Serve Customers</h4>
                            <p>Wrap your model in a box (Flash/FastAPI).</p>
                            <p>Let users send a photo and get an answer back.</p>
                        </div>
                    </div>
                </div> `,
            'm4-t25': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-microphone-alt"></i> Activity: The Harvest Festival</h3>
                        <p>Final Presentation.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Show Off</h4>
                            <p>Don't show code.</p>
                            <p>Show the <strong>Impact</strong>: "We saved 20% of the crop."</p>
                            <p>Demo the app live!</p>
                        </div>
                    </div>
                </div> `,
            'm2-t4': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-heartbeat"></i> Activity: Health Check</h3>
                        <p>Statistical Functions.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Summary</h4>
                            <p>Don't look at every leaf.</p>
                            <p>Calculate the <strong>Average</strong> Height and the <strong>Standard Deviation</strong> (Risk).</p>
                        </div>
                    </div>
                </div> `,
            'm2-t5': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-table"></i> Activity: Class Register</h3>
                        <p>Pandas DataFrames.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Create Data</h4>
                            <p>Draw a table on the board.</p>
                            <p>Columns: Name, Height, Favorite Crop.</p>
                            <p>Fill it with student data.</p>
                        </div>
                    </div>
                </div> `,
            'm2-t6': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-filter"></i> Activity: Sorting Harvest</h3>
                        <p>Filtering Data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Select & Filter</h4>
                            <p>Pick only "Mangoes" (Select Column).</p>
                            <p>Keep only fruit> 200g (Conditional Filter).</p>
                        </div>
                    </div>
                </div> `,

            // --- MODULE 1: Fundamentals Activities ---
            'm1-activity1': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-tools"></i> Activity: Google Colab Setup</h3>
                        <p>Get your cloud environment ready for AI development.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Create Account</h4>
                            <p>Go to <a href="https://colab.research.google.com" target="_blank">colab.research.google.com</a> and sign in with your Google account.</p>
                        </div>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Hello World</h4>
                            <p>Create a new notebook and run: <code>print("Hello AI Agriculture")</code></p>
                        </div>
                    </div>
                </div> `,
            'm1-activity2': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-code"></i> Activity: Python Exercises</h3>
                        <p>Practice basic syntax and logic.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Crop Calculator</h4>
                            <p>Write a function that accepts 'acres' and 'yield_per_acre' and returns total production.</p>
                        </div>
                    </div>
                </div> `,
            'm1-activity3': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-tractor"></i> Activity: Agri Data Project</h3>
                        <p>Analyze mock farm data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Data Entry</h4>
                            <p>Create a list of dictionaries representing 5 different farms with keys: Name, Size, Crop.</p>
                        </div>
                    </div>
                </div> `,
            'm1-activity4': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-bar"></i> Activity: Matplotlib Viz</h3>
                        <p>Visualize farm metrics.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Yield Chart</h4>
                            <p>Plot a bar chart comparing the yields of Wheat, Rice, and Maize.</p>
                        </div>
                    </div>
                </div> `,

            // --- MODULE 2: Data Science Activities ---
            'm2-activity1': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-table"></i> Activity: NumPy Soil Analysis</h3>
                        <p>Matrix operations on soil sensor data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>pH Matrix</h4>
                            <p>Create a 3x3 matrix representing pH levels in a grid field. Calculate the mean pH.</p>
                        </div>
                    </div>
                </div> `,
            'm2-activity2': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-line"></i> Activity: Linear Regression</h3>
                        <p>Predicting futures.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Rainfall vs Yield</h4>
                            <p>Use Scikit-Learn to fit a line between Rainfall (X) and Yield (y) data points.</p>
                        </div>
                    </div>
                </div> `,
            'm2-activity3': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-vial"></i> Activity: Crop Classification</h3>
                        <p>Binary classification logic.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Logistic Regression</h4>
                            <p>Train a model to classify "Healthy" vs "Diseased" based on leaf spot percentage.</p>
                        </div>
                    </div>
                </div> `,
            'm2-activity4': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-balance-scale"></i> Activity: Model Eval</h3>
                        <p>Testing your accuracy.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Confusion Matrix</h4>
                            <p>Generate a confusion matrix for your classification model from the previous activity.</p>
                        </div>
                    </div>
                </div> `,

            // --- MODULE 3: Advanced Activities ---
            'm3-activity1': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-seedling"></i> Activity: Yield Pred System</h3>
                        <p>Integrated RF Model.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Complex Features</h4>
                            <p>Train a Random Forest using Rainfall, Temp, and Soil Quality to predict yield.</p>
                        </div>
                    </div>
                </div> `,
            'm3-activity2': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-camera"></i> Activity: Disease CNN</h3>
                        <p>Deep Learning Vision.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Architecture Design</h4>
                            <p>Sketch (and code) a CNN with 2 Conv2D layers and 1 Dense layer.</p>
                        </div>
                    </div>
                </div> `,
            'm3-activity3': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-flask"></i> Activity: Soil Health Analysis</h3>
                        <p>Clustering soil types.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>K-Means Clustering</h4>
                            <p>Use K-Means to group 100 soil samples into 3 distinct nutrient profiles.</p>
                        </div>
                    </div>
                </div> `,
            'm3-activity4': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-cloud-sun"></i> Activity: Weather Config</h3>
                        <p>Forecasting basics.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>ARIMA Setup</h4>
                            <p>Prepare a time-series dataset of daily temperatures for ARIMA input.</p>
                        </div>
                    </div>
                </div> `,

            // --- Capstone Activities ---
            'm4-activity1': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-project-diagram"></i> Activity: Capstone Planning</h3>
                        <p>Define your roadmap.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Problem Statement</h4>
                            <p>Write a clear 1-sentence problem statement for your final project.</p>
                        </div>
                    </div>
                </div> `,
            'm4-activity2': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-laptop-code"></i> Activity: Development Level 1</h3>
                        <p>Core prototype.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>MVP Check</h4>
                            <p>Verify that your main algorithm runs on a small sample dataset.</p>
                        </div>
                    </div>
                </div> `,
            'm4-activity3': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-chalkboard-teacher"></i> Activity: Final Presentation</h3>
                        <p>Showcase your work.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Slide Draft</h4>
                            <p>Create the 'Methodology' slide explaining your algorithm choice.</p>
                        </div>
                    </div>
                </div> `,
            'm5-t1': `
            <div class="activity-container" >
                    <div class="activity-header">
                        <h3><i class="fas fa-upload"></i> Deployment Verification</h3>
                        <p>Ensure your project is ready for the world.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Pre-Flight Checklist</h4>
                            <ul class="checklist">
                                <li><input type="checkbox"> Requirements.txt created?</li>
                                <li><input type="checkbox"> README.md explains usage?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            ...projectActivities
        };
    }
}

const activitySystem = new ActivitySystem();

window.activitySystem = activitySystem;
