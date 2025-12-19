// Comprehensive Course Structure - All Topics with Time Estimates

const comprehensiveCourseStructure = {
    modules: [
        {
            id: 1,
            title: "Module 1: Fundamentals of AI and Python Programming",
            totalHours: 40,
            topics: [
                {
                    id: "m1-t1",
                    title: "Introduction to Artificial Intelligence",
                    duration: 2,
                    subtopics: ["What is AI?", "Types of AI", "AI vs ML vs DL"]
                },
                {
                    id: "m1-t2",
                    title: "Machine Learning Paradigms",
                    duration: 2,
                    subtopics: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
                },
                {
                    id: "m1-t3",
                    title: "History and Evolution of AI/ML",
                    duration: 1,
                    subtopics: ["Timeline of AI", "Key Milestones", "Modern AI Era"]
                },
                {
                    id: "m1-t4",
                    title: "AI/ML Applications in Agriculture",
                    duration: 2,
                    subtopics: ["Precision Farming", "Crop Monitoring", "Yield Prediction", "Disease Detection"]
                },
                {
                    id: "m1-t5",
                    title: "Career Opportunities in AgriTech",
                    duration: 1,
                    subtopics: ["Job Roles", "Industry Landscape", "Skill Requirements"]
                },
                {
                    id: "m1-t6",
                    title: "Mathematical Foundations for ML",
                    duration: 3,
                    subtopics: ["Why Math Matters", "Essential Concepts", "Application in ML"]
                },
                {
                    id: "m1-t7",
                    title: "Statistics and Probability Basics",
                    duration: 3,
                    subtopics: ["Mean, Median, Mode", "Variance & Standard Deviation", "Probability Distributions"]
                },
                {
                    id: "m1-t8",
                    title: "Linear Algebra for Machine Learning",
                    duration: 3,
                    subtopics: ["Vectors & Matrices", "Matrix Operations", "Eigenvalues"]
                },
                {
                    id: "m1-t9",
                    title: "Data Types and Structures",
                    duration: 2,
                    subtopics: ["Structured vs Unstructured", "Time Series Data", "Image Data"]
                },
                {
                    id: "m1-t10",
                    title: "Data Collection Methods in Agriculture",
                    duration: 2,
                    subtopics: ["IoT Sensors", "Satellite Imagery", "Manual Collection"]
                },
                {
                    id: "m1-t11",
                    title: "Python Environment Setup",
                    duration: 1,
                    subtopics: ["Installing Python", "Google Colab Setup", "IDE Configuration"]
                },
                {
                    id: "m1-t12",
                    title: "Variables and Data Types",
                    duration: 2,
                    subtopics: ["int, float, string, bool", "Type Conversion", "Variable Naming"]
                },
                {
                    id: "m1-t13",
                    title: "Operators and Expressions",
                    duration: 1,
                    subtopics: ["Arithmetic Operators", "Comparison Operators", "Logical Operators"]
                },
                {
                    id: "m1-t14",
                    title: "Control Structures (If-Else)",
                    duration: 2,
                    subtopics: ["if statements", "if-else", "elif chains", "Nested conditionals"]
                },
                {
                    id: "m1-t15",
                    title: "Loops (For and While)",
                    duration: 2,
                    subtopics: ["for loops", "while loops", "break & continue", "Loop patterns"]
                },
                {
                    id: "m1-t16",
                    title: "Functions and Modularity",
                    duration: 2,
                    subtopics: ["Defining functions", "Parameters & Arguments", "Return values", "Scope"]
                },
                {
                    id: "m1-t17",
                    title: "Lists, Tuples, and Dictionaries",
                    duration: 3,
                    subtopics: ["List operations", "Tuple immutability", "Dictionary key-value pairs"]
                },
                {
                    id: "m1-t18",
                    title: "String Manipulation",
                    duration: 2,
                    subtopics: ["String methods", "Formatting", "Regular expressions basics"]
                },
                {
                    id: "m1-t19",
                    title: "File Handling Basics",
                    duration: 2,
                    subtopics: ["Reading files", "Writing files", "CSV handling"]
                },
                {
                    id: "m1-activity1",
                    title: "Activity: Google Colab Setup",
                    duration: 1,
                    isActivity: true
                },
                {
                    id: "m1-activity2",
                    title: "Activity: Python Programming Exercises",
                    duration: 2,
                    isActivity: true
                },
                {
                    id: "m1-activity3",
                    title: "Activity: Agricultural Data Analysis Project",
                    duration: 3,
                    isActivity: true
                },
                {
                    id: "m1-activity4",
                    title: "Activity: Data Visualization with Matplotlib",
                    duration: 2,
                    isActivity: true
                }
            ]
        },
        {
            id: 2,
            title: "Module 2: Python & ML Fundamentals",
            totalHours: 45,
            topics: [
                {
                    id: "m2-t1",
                    title: "NumPy: Arrays and Operations",
                    duration: 2,
                    subtopics: ["Creating arrays", "Array indexing", "Array slicing"]
                },
                {
                    id: "m2-t2",
                    title: "Matrix Operations",
                    duration: 2,
                    subtopics: ["Matrix multiplication", "Transpose", "Determinant"]
                },
                {
                    id: "m2-t3",
                    title: "Broadcasting and Advanced Operations",
                    duration: 2,
                    subtopics: ["Broadcasting rules", "Vectorization", "Performance optimization"]
                },
                {
                    id: "m2-t4",
                    title: "Statistical Functions",
                    duration: 2,
                    subtopics: ["mean, median, std", "Correlation", "Covariance"]
                },
                {
                    id: "m2-t5",
                    title: "Pandas: Introduction and Series",
                    duration: 2,
                    subtopics: ["What is Pandas", "Series creation", "Series operations"]
                },
                {
                    id: "m2-t6",
                    title: "DataFrames Manipulation",
                    duration: 3,
                    subtopics: ["Creating DataFrames", "Selecting columns", "Adding/removing columns"]
                },
                {
                    id: "m2-t7",
                    title: "Data Analysis and Visualization",
                    duration: 2,
                    subtopics: ["describe()", "info()", "Basic plotting"]
                },
                {
                    id: "m2-t8",
                    title: "Data Filtering and Selection",
                    duration: 2,
                    subtopics: ["Boolean indexing", "loc & iloc", "Query methods"]
                },
                {
                    id: "m2-t9",
                    title: "Handling Missing Data",
                    duration: 2,
                    subtopics: ["Detecting NaN", "Filling missing values", "Dropping rows/columns"]
                },
                {
                    id: "m2-t10",
                    title: "Data Aggregation and Grouping",
                    duration: 2,
                    subtopics: ["groupby()", "Aggregation functions", "Pivot tables"]
                },
                {
                    id: "m2-t11",
                    title: "Matplotlib: Basic Plotting",
                    duration: 2,
                    subtopics: ["Line plots", "Scatter plots", "Bar charts"]
                },
                {
                    id: "m2-t12",
                    title: "Advanced Chart Types",
                    duration: 2,
                    subtopics: ["Histograms", "Box plots", "Heatmaps"]
                },
                {
                    id: "m2-t13",
                    title: "Seaborn: Statistical Visualization",
                    duration: 2,
                    subtopics: ["Seaborn basics", "Distribution plots", "Relationship plots"]
                },
                {
                    id: "m2-t14",
                    title: "ML Workflow Introduction",
                    duration: 2,
                    subtopics: ["Problem definition", "Data preparation", "Model training", "Evaluation"]
                },
                {
                    id: "m2-t15",
                    title: "Supervised vs Unsupervised Learning",
                    duration: 2,
                    subtopics: ["Labeled vs unlabeled data", "Use cases", "Algorithms"]
                },
                {
                    id: "m2-t16",
                    title: "Train-Test Split and Validation",
                    duration: 2,
                    subtopics: ["Why split data", "train_test_split()", "Validation sets"]
                },
                {
                    id: "m2-t17",
                    title: "Cross-Validation Techniques",
                    duration: 2,
                    subtopics: ["K-Fold CV", "Stratified CV", "Leave-One-Out"]
                },
                {
                    id: "m2-t18",
                    title: "Overfitting and Underfitting",
                    duration: 2,
                    subtopics: ["Bias-Variance tradeoff", "Detection", "Prevention"]
                },
                {
                    id: "m2-t19",
                    title: "Hyperparameter Tuning",
                    duration: 2,
                    subtopics: ["Grid Search", "Random Search", "Bayesian Optimization"]
                },
                {
                    id: "m2-t20",
                    title: "Scikit-Learn Library Basics",
                    duration: 2,
                    subtopics: ["Library overview", "Estimators", "Transformers"]
                },
                {
                    id: "m2-t21",
                    title: "Linear Regression Concepts",
                    duration: 2,
                    subtopics: ["Simple linear regression", "Multiple regression", "Assumptions"]
                },
                {
                    id: "m2-t22",
                    title: "Regression Model Evaluation",
                    duration: 2,
                    subtopics: ["RMSE", "MAE", "R² Score"]
                },
                {
                    id: "m2-t23",
                    title: "Logistic Regression",
                    duration: 2,
                    subtopics: ["Binary classification", "Sigmoid function", "Decision boundary"]
                },
                {
                    id: "m2-t24",
                    title: "Decision Trees for Classification",
                    duration: 2,
                    subtopics: ["Tree structure", "Splitting criteria", "Pruning"]
                },
                {
                    id: "m2-t25",
                    title: "Feature Importance Analysis",
                    duration: 1,
                    subtopics: ["Calculating importance", "Visualization", "Feature selection"]
                },
                {
                    id: "m2-activity1",
                    title: "Activity: NumPy Operations on Soil Data",
                    duration: 2,
                    isActivity: true
                },
                {
                    id: "m2-activity2",
                    title: "Activity: Linear Regression for Crop Yield",
                    duration: 3,
                    isActivity: true
                },
                {
                    id: "m2-activity3",
                    title: "Activity: Classification - Crop Type Prediction",
                    duration: 3,
                    isActivity: true
                },
                {
                    id: "m2-activity4",
                    title: "Activity: Model Evaluation Comparison",
                    duration: 2,
                    isActivity: true
                }
            ]
        },
        {
            id: 3,
            title: "Module 3: AI/ML Applications in Agriculture",
            totalHours: 50,
            topics: [
                {
                    id: "m3-t1",
                    title: "Feature Engineering for Agricultural Data",
                    duration: 3,
                    subtopics: ["Creating features", "Scaling", "Encoding"]
                },
                {
                    id: "m3-t2",
                    title: "Crop Yield Prediction Models",
                    duration: 3,
                    subtopics: ["Random Forest", "Gradient Boosting", "Ensemble methods"]
                },
                {
                    id: "m3-t3",
                    title: "Regression Techniques for Yield Forecasting",
                    duration: 2,
                    subtopics: ["Polynomial regression", "Ridge regression", "Lasso regression"]
                },
                {
                    id: "m3-t4",
                    title: "Weather Data Integration",
                    duration: 2,
                    subtopics: ["Weather APIs", "Data preprocessing", "Feature creation"]
                },
                {
                    id: "m3-t5",
                    title: "Soil Data Integration",
                    duration: 2,
                    subtopics: ["Soil sensors", "Lab data", "Spatial data"]
                },
                {
                    id: "m3-t6",
                    title: "Crop Health Assessment",
                    duration: 2,
                    subtopics: ["NDVI calculation", "Health indices", "Threshold detection"]
                },
                {
                    id: "m3-t7",
                    title: "Plant Disease Detection Basics",
                    duration: 2,
                    subtopics: ["Common diseases", "Visual symptoms", "Detection methods"]
                },
                {
                    id: "m3-t8",
                    title: "Computer Vision Fundamentals",
                    duration: 3,
                    subtopics: ["Image basics", "Color spaces", "Image preprocessing"]
                },
                {
                    id: "m3-t9",
                    title: "CNN Introduction",
                    duration: 3,
                    subtopics: ["Convolutional layers", "Pooling layers", "Architecture basics"]
                },
                {
                    id: "m3-t10",
                    title: "Image Classification with Pre-trained Models",
                    duration: 3,
                    subtopics: ["Transfer learning", "ResNet", "MobileNet", "Fine-tuning"]
                },
                {
                    id: "m3-t11",
                    title: "PlantVillage Dataset Overview",
                    duration: 2,
                    subtopics: ["Dataset structure", "Loading data", "Preprocessing"]
                },
                {
                    id: "m3-t12",
                    title: "Pest and Weed Detection Models",
                    duration: 3,
                    subtopics: ["Object detection", "YOLO basics", "Model deployment"]
                },
                {
                    id: "m3-t13",
                    title: "Soil Health Classification",
                    duration: 2,
                    subtopics: ["Soil types", "Classification models", "Accuracy metrics"]
                },
                {
                    id: "m3-t14",
                    title: "Soil Property Prediction",
                    duration: 2,
                    subtopics: ["pH prediction", "Nutrient prediction", "Moisture estimation"]
                },
                {
                    id: "m3-t15",
                    title: "Nutrient Requirement Calculation",
                    duration: 2,
                    subtopics: ["NPK ratios", "Soil testing interpretation", "Calculation formulas"]
                },
                {
                    id: "m3-t16",
                    title: "Fertilizer Optimization Models",
                    duration: 2,
                    subtopics: ["Cost optimization", "Environmental impact", "Recommendation systems"]
                },
                {
                    id: "m3-t17",
                    title: "Precision Irrigation Systems",
                    duration: 3,
                    subtopics: ["Soil moisture monitoring", "Irrigation scheduling", "Water efficiency"]
                },
                {
                    id: "m3-t18",
                    title: "Water Requirement Prediction",
                    duration: 2,
                    subtopics: ["ET calculation", "Crop coefficients", "Prediction models"]
                },
                {
                    id: "m3-t19",
                    title: "Time Series Analysis Fundamentals",
                    duration: 3,
                    subtopics: ["Time series components", "Stationarity", "ACF/PACF"]
                },
                {
                    id: "m3-t20",
                    title: "ARIMA Models for Weather Prediction",
                    duration: 3,
                    subtopics: ["ARIMA components", "Model selection", "Forecasting"]
                },
                {
                    id: "m3-t21",
                    title: "Weather Pattern Recognition",
                    duration: 2,
                    subtopics: ["Pattern identification", "Anomaly detection", "Seasonal patterns"]
                },
                {
                    id: "m3-t22",
                    title: "Crop Price Forecasting",
                    duration: 2,
                    subtopics: ["Market data", "Price trends", "ARIMA for prices"]
                },
                {
                    id: "m3-t23",
                    title: "Demand Prediction Models",
                    duration: 2,
                    subtopics: ["Demand forecasting", "Seasonality", "External factors"]
                },
                {
                    id: "m3-t24",
                    title: "Agricultural Market Insights",
                    duration: 2,
                    subtopics: ["Market analysis", "Supply chain", "Price drivers"]
                },
                {
                    id: "m3-activity1",
                    title: "Activity: Crop Yield Prediction System",
                    duration: 4,
                    isActivity: true
                },
                {
                    id: "m3-activity2",
                    title: "Activity: Disease Detection with Image Classification",
                    duration: 4,
                    isActivity: true
                },
                {
                    id: "m3-activity3",
                    title: "Activity: Soil Health Analysis System",
                    duration: 3,
                    isActivity: true
                },
                {
                    id: "m3-activity4",
                    title: "Activity: Weather Forecasting for Precision Farming",
                    duration: 3,
                    isActivity: true
                }
            ]
        },
        {
            id: 4,
            title: "Module 4: Capstone Project & Evaluation",
            totalHours: 35,
            topics: [
                {
                    id: "m4-t1",
                    title: "Problem Definition and Scoping",
                    duration: 2,
                    subtopics: ["Identifying problems", "Scoping", "Success criteria"]
                },
                {
                    id: "m4-t2",
                    title: "Agricultural Problem Identification",
                    duration: 2,
                    subtopics: ["Common challenges", "Stakeholder needs", "Impact assessment"]
                },
                {
                    id: "m4-t3",
                    title: "Literature Review Methodology",
                    duration: 2,
                    subtopics: ["Search strategies", "Paper evaluation", "Citation management"]
                },
                {
                    id: "m4-t4",
                    title: "Dataset Selection and Validation",
                    duration: 2,
                    subtopics: ["Finding datasets", "Quality assessment", "Licensing"]
                },
                {
                    id: "m4-t5",
                    title: "Feasibility Analysis",
                    duration: 2,
                    subtopics: ["Technical feasibility", "Resource assessment", "Risk analysis"]
                },
                {
                    id: "m4-t6",
                    title: "Project Timeline Planning",
                    duration: 1,
                    subtopics: ["Gantt charts", "Milestones", "Buffers"]
                },
                {
                    id: "m4-t7",
                    title: "Resource Allocation",
                    duration: 1,
                    subtopics: ["Computing resources", "Data storage", "Team roles"]
                },
                {
                    id: "m4-t8",
                    title: "Team Collaboration Basics",
                    duration: 1,
                    subtopics: ["Git/GitHub", "Communication tools", "Documentation"]
                },
                {
                    id: "m4-t9",
                    title: "Data Collection Strategy",
                    duration: 2,
                    subtopics: ["Collection methods", "Sample size", "Data quality"]
                },
                {
                    id: "m4-t10",
                    title: "Exploratory Data Analysis (EDA)",
                    duration: 3,
                    subtopics: ["Statistical summary", "Visualizations", "Outlier detection"]
                },
                {
                    id: "m4-t11",
                    title: "Data Cleaning and Preprocessing",
                    duration: 2,
                    subtopics: ["Missing values", "Outliers", "Normalization"]
                },
                {
                    id: "m4-t12",
                    title: "Feature Engineering for Project",
                    duration: 2,
                    subtopics: ["Domain features", "Transformations", "Selection"]
                },
                {
                    id: "m4-t13",
                    title: "Algorithm Selection Justification",
                    duration: 2,
                    subtopics: ["Algorithm comparison", "Justification criteria", "Trade-offs"]
                },
                {
                    id: "m4-t14",
                    title: "Model Development and Training",
                    duration: 3,
                    subtopics: ["Implementation", "Training loop", "Monitoring"]
                },
                {
                    id: "m4-t15",
                    title: "Hyperparameter Optimization",
                    duration: 2,
                    subtopics: ["Tuning strategies", "Grid/Random search", "Automated tuning"]
                },
                {
                    id: "m4-t16",
                    title: "Model Validation and Testing",
                    duration: 2,
                    subtopics: ["Test set evaluation", "Cross-validation", "Robustness testing"]
                },
                {
                    id: "m4-t17",
                    title: "Performance Metrics Analysis",
                    duration: 2,
                    subtopics: ["Choosing metrics", "Interpretation", "Reporting"]
                },
                {
                    id: "m4-t18",
                    title: "Cross-Validation and Performance Testing",
                    duration: 2,
                    subtopics: ["K-fold implementation", "Results interpretation", "Consistency checks"]
                },
                {
                    id: "m4-t19",
                    title: "Error Analysis and Troubleshooting",
                    duration: 2,
                    subtopics: ["Error patterns", "Debugging", "Performance issues"]
                },
                {
                    id: "m4-t20",
                    title: "Model Improvement Strategies",
                    duration: 2,
                    subtopics: ["Iterative improvement", "Ensemble methods", "Advanced techniques"]
                },
                {
                    id: "m4-t21",
                    title: "API Development and Testing",
                    duration: 2,
                    subtopics: ["REST API basics", "Flask/FastAPI", "Testing"]
                },
                {
                    id: "m4-t22",
                    title: "User Interface Design",
                    duration: 2,
                    subtopics: ["UI principles", "Web frameworks", "Mobile considerations"]
                },
                {
                    id: "m4-t23",
                    title: "Project Documentation Preparation",
                    duration: 2,
                    subtopics: ["Technical writing", "Code documentation", "User guides"]
                },
                {
                    id: "m4-t24",
                    title: "Presentation Skills for Technical Projects",
                    duration: 1,
                    subtopics: ["Slide design", "Storytelling", "Q&A preparation"]
                },
                {
                    id: "m4-t25",
                    title: "Final Project Presentations and Viva",
                    duration: 2,
                    subtopics: ["Presentation", "Demo", "Defense"]
                },
                {
                    id: "m4-activity1",
                    title: "Activity: Capstone Project Planning Documentation",
                    duration: 3,
                    isActivity: true
                },
                {
                    id: "m4-activity2",
                    title: "Activity: Capstone Project Development & Testing",
                    duration: 8,
                    isActivity: true
                },
                {
                    id: "m4-activity3",
                    title: "Activity: Final Presentations",
                    duration: 3,
                    isActivity: true
                }
            ]
        },
        {
            id: 5,
            title: "Module 5: Future Directions & Real-World Deployment",
            totalHours: 10,
            topics: [
                {
                    id: "m5-t1",
                    title: "Deploying AI Solutions",
                    duration: 2,
                    subtopics: ["GitHub Pages & Portfolios", "Streamlit/Gradio Demoing", "Dockerization Basics"]
                },
                {
                    id: "m5-t2",
                    title: "Bonus Project 1: Smart Irrigation System",
                    duration: 2,
                    subtopics: ["IoT Logic", "Sensor Fusion", "Control Algorithms"]
                },
                {
                    id: "m5-t3",
                    title: "Bonus Project 2: Crop Disease API",
                    duration: 2,
                    subtopics: ["FastAPI/Flask", "Model Serving", "API Documentation"]
                },
                {
                    id: "m5-t4",
                    title: "Bonus Project 3: Market Price Dashboard",
                    duration: 2,
                    subtopics: ["Data Visualization", "Interactive Dashboards", "Real-time Data"]
                },
                {
                    id: "m5-t5",
                    title: "Bonus Project 4: Soil Nutrient Predictor",
                    duration: 2,
                    subtopics: ["Regression Models", "Soil Chemistry", "Feature Engineering"]
                },
                {
                    id: "m5-t6",
                    title: "Bonus Project 5: Weed Detection System",
                    duration: 3,
                    subtopics: ["Object Detection", "YOLO Architecture", "Real-time Inference"]
                },
                {
                    id: "m5-t7",
                    title: "Bonus Project 6: Fruit Maturity Grading",
                    duration: 2,
                    subtopics: ["Image Classification", "Color Analysis", "Quality Control"]
                },
                {
                    id: "m5-t8",
                    title: "Bonus Project 7: Greenhouse Temp Control",
                    duration: 2,
                    subtopics: ["PID Controllers", "Feedback Loops", "Environmental Modeling"]
                },
                {
                    id: "m5-t9",
                    title: "Bonus Project 8: Automated Fruit Picker",
                    duration: 3,
                    subtopics: ["Robotic Kinematics", "Path Planning", "Gripper Logic"]
                },
                {
                    id: "m5-t10",
                    title: "Bonus Project 9: Drone Path Planning",
                    duration: 3,
                    subtopics: ["A* Algorithm", "Coverage Optimization", "Battery Management"]
                },
                {
                    id: "m5-t11",
                    title: "Bonus Project 10: Livestock Health Monitor",
                    duration: 2,
                    subtopics: ["Anomaly Detection", "Wearable Sensors", "Activity Recognition"]
                },
                {
                    id: "m5-t12",
                    title: "Bonus Project 11: Weather Forecasting App",
                    duration: 2,
                    subtopics: ["Time Series", "API Integration", "Alert Systems"]
                },
                {
                    id: "m5-t13",
                    title: "Bonus Project 12: Crop Rotation Recommender",
                    duration: 2,
                    subtopics: ["Expert Systems", "Soil Restoration", "Rule-Based Logic"]
                },
                {
                    id: "m5-t14",
                    title: "Bonus Project 13: Farmer Chatbot",
                    duration: 3,
                    subtopics: ["NLP Basics", "RAG Architecture", "Context Handling"]
                },
                {
                    id: "m5-t15",
                    title: "Bonus Project 14: Satellite Yield Estimation",
                    duration: 3,
                    subtopics: ["Remote Sensing", "Geospatial Data", "Vegetation Indices"]
                },
                {
                    id: "m5-t16",
                    title: "Bonus Project 15: Supply Chain Optimization",
                    duration: 2,
                    subtopics: ["Operations Research", "Logistics", "Cost Minimization"]
                },
                {
                    id: "m5-t17",
                    title: "Bonus Project 16: Hydroponics Monitoring",
                    duration: 2,
                    subtopics: ["Digital Twins", "Water Chemistry", "Remote Monitoring"]
                },
                {
                    id: "m5-t18",
                    title: "Bonus Project 17: Pest Count from Traps",
                    duration: 2,
                    subtopics: ["Object Counting", "Density Estimation", "Threshold Alerts"]
                },
                {
                    id: "m5-t19",
                    title: "Bonus Project 18: Water Quality Indexer",
                    duration: 2,
                    subtopics: ["Data Analysis", "Sensor Calibration", "Reporting"]
                },
                {
                    id: "m5-t20",
                    title: "Bonus Project 19: Crop Scheduling Genetic Algo",
                    duration: 3,
                    subtopics: ["Genetic Algorithms", "Optimization", "Resource Constraints"]
                },
                {
                    id: "m5-t21",
                    title: "Bonus Project 20: Equipment Maintenance Predictor",
                    duration: 2,
                    subtopics: ["Predictive Maintenance", "Vibration Analysis", "Failure Forecasting"]
                }
            ]
        }
    ]
};

// Calculate totals
const totalTopics = comprehensiveCourseStructure.modules.reduce((sum, mod) => sum + mod.topics.length, 0);
const totalHours = comprehensiveCourseStructure.modules.reduce((sum, mod) => sum + mod.totalHours, 0);

console.log(`Total Topics: ${totalTopics}`);
console.log(`Total Hours: ${totalHours}`);

window.comprehensiveCourseStructure = comprehensiveCourseStructure;
