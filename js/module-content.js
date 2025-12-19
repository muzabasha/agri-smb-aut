// Module-Content.js - Objectives, Outcomes, and Resources for each Module

class ModuleSystem {
    constructor() {
        this.modules = {
            1: {
                objectives: [
                    "Understand the fundamental concepts of Artificial Intelligence and Machine Learning.",
                    "Differentiate between AI, ML, and Deep Learning.",
                    "Master the basics of Python programming including variables, loops, and functions.",
                    "Explore the history and future potential of AI in Agriculture."
                ],
                outcomes: [
                    "Explain the difference between traditional programming and AI.",
                    "Write functional Python scripts to process agricultural data.",
                    "Identify 5 key applications of AI in modern farming.",
                    "Set up a complete Python/Colab development environment."
                ],
                textbooks: [
                    "Russell, S., & Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th ed.).",
                    "Guttag, J. V. (2021). Introduction to Computation and Programming Using Python."
                ],
                references: [
                    "FAO (2022). Artificial Intelligence in Agriculture.",
                    "Python Software Foundation - Official Documentation (python.org)"
                ],
                youtubeLinks: [
                    { title: "What is AI? (Crash Course)", url: "https://www.youtube.com/watch?v=ad79nYk2keg" },
                    { title: "Python for Beginners - Full Course", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" }
                ]
            },
            2: {
                objectives: [
                    "Gain proficiency in Python libraries for Data Science (NumPy, Pandas).",
                    "Learn techniques for data cleaning, manipulation, and visualization.",
                    "Understand the wide range of Machine Learning algorithms available.",
                    "Apply statistical methods to agricultural datasets."
                ],
                outcomes: [
                    "Perform Exploratory Data Analysis (EDA) on crop yield data.",
                    "Create meaningful visualizations (histograms, scatter plots) to communicate findings.",
                    "Pre-process raw sensor data for machine learning models.",
                    "Select appropriate algorithms for classification vs. regression tasks."
                ],
                textbooks: [
                    "McKinney, W. (2017). Python for Data Analysis.",
                    "VanderPlas, J. (2016). Python Data Science Handbook."
                ],
                references: [
                    "Kaggle: Agriculture Datasets",
                    "Scikit-Learn User Guide"
                ],
                youtubeLinks: [
                    { title: "Pandas Tutorial", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
                    { title: "Machine Learning Basics", url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" }
                ]
            },
            3: {
                objectives: [
                    "Deep dive into Neural Networks and Deep Learning architectures.",
                    "Explore Computer Vision applications for disease detection.",
                    "Understand Internet of Things (IoT) integration with AI.",
                    "Learn about Natural Language Processing (NLP) for advisory chatbots."
                ],
                outcomes: [
                    "Build and train a specific CNN for plant disease classification.",
                    "Develop a predictive model for soil health monitoring.",
                    "Design an IoT sensor network architecture for smart irrigation.",
                    "Evaluate model performance using metrics like Accuracy, Precision, and Recall."
                ],
                textbooks: [
                    "Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning.",
                    "Chollet, F. (2021). Deep Learning with Python."
                ],
                references: [
                    "TensorFlow & Keras Documentation",
                    "Papers with Code: Agriculture"
                ],
                youtubeLinks: [
                    { title: "Convolutional Neural Networks Explained", url: "https://www.youtube.com/watch?v=YRhxdVk_sIs" },
                    { title: "Deep Learning for Agriculture", url: "https://www.youtube.com/watch?v=Jj7uPDoG1A8" }
                ]
            },
            4: {
                objectives: [
                    "Synthesize all learned concepts into a final comprehensive project.",
                    "Navigate the full end-to-end ML project lifecycle.",
                    "Address real-world challenges like data scarcity and model deployment.",
                    "Prepare for a career in AgriTech with a strong portfolio."
                ],
                outcomes: [
                    "Deliver a fully functional AI-powered agricultural solution.",
                    "Present findings in a professional report and presentation.",
                    "Demonstrate the ability to iterate on models based on feedback.",
                    "Conduct a feasibility analysis for scaling the solution."
                ],
                textbooks: [
                    "Géron, A. (2019). Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow.",
                    "AgriTech Project Management Guidelines."
                ],
                references: [
                    "Google Colab Pro documentation",
                    "GitHub Guides"
                ],
                youtubeLinks: [
                    { title: "How to Present a Data Science Project", url: "https://www.youtube.com/watch?v=r1r4t88r93E" },
                    { title: "Successful AgriTech Startups", url: "https://www.youtube.com/watch?v=1d9g7D9g9g8" }
                ]
            },
            5: {
                objectives: [
                    "Design and implement 20 diverse AI/ML projects specifically for agriculture.",
                    "Apply regression, classification, clustering, and deep learning techniques to real-world datasets.",
                    "Integrate IoT sensor data with predictive models for automated decision-making.",
                    "Develop end-to-end solutions from data ingestion to actionable dashboards."
                ],
                outcomes: [
                    "A portfolio of 20 functional AI prototypes addressing critical farming challenges.",
                    "Proficiency in debugging and optimizing complex ML pipelines in Python.",
                    "Experience with 'Digital Twins' and simulation-based validation.",
                    "Capability to explain technical results to non-technical stakeholders (farmers)."
                ],
                textbooks: [
                    "Suthaharan, S. (2016). Machine Learning Models and Algorithms for Big Data Classification.",
                    "Recent IEEE/Springer Research Papers on Smart Farming (2023-2025)."
                ],
                references: [
                    "Kaggle Agriculture Datasets Collection",
                    "UCI Machine Learning Repository",
                    "OpenWeatherMap API Documentation",
                    "Raspberry Pi & Arduino Sensor Guides"
                ],
                youtubeLinks: [
                    { title: "20 Machine Learning Projects for Portfolio", url: "https://www.youtube.com/watch?v=B7PPQ45SXjk" },
                    { title: "Smart Farming: The Future of Agriculture", url: "https://www.youtube.com/watch?v=Q4gL3R88yT0" }
                ]
            }
        };
    }

    getModuleContent(moduleId) {
        return this.modules[moduleId] || null;
    }
}

const moduleSystem = new ModuleSystem();

window.moduleSystem = moduleSystem;
