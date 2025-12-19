// Quiz.js - Interactive quiz system with comprehensive coverage

class QuizSystem {
    constructor() {
        this.courseData = comprehensiveCourseStructure; // Access global structure
        this.handCraftedQuizzes = this.getHandCraftedQuizzes();
        this.currentQuiz = null;
        this.score = 0;
        this.totalQuestions = 0;
        this.userAnswers = {};
    }

    loadQuiz(topicId) {
        if (topicId === 'final-exam') {
            return this.loadGrandQuiz();
        }

        // Find topic details first
        let topicDetails = null;
        let moduleTitle = "";

        let found = false;
        if (this.courseData && this.courseData.modules) {
            for (const module of this.courseData.modules) {
                const t = module.topics.find(t => t.id === topicId);
                if (t) {
                    topicDetails = t;
                    moduleTitle = module.title;
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            return '<div class="quiz-error">Topic not found.</div>';
        }

        // 1. Try Hand-Crafted Quiz
        if (this.handCraftedQuizzes[topicId]) {
            this.currentQuiz = this.handCraftedQuizzes[topicId];
        }
        // 2. Generate Dynamic Quiz based on Topic Metadata
        else {
            this.currentQuiz = this.generateDynamicQuiz(topicDetails, moduleTitle);
        }

        this.score = 0;
        this.totalQuestions = this.currentQuiz.questions.length;
        this.userAnswers = {};

        return this.renderQuiz();
    }

    loadGrandQuiz() {
        // Collect questions from all modules
        let allQuestions = [];
        let questionId = 1;

        console.log("Generating Final Assessment...");

        if (this.courseData && this.courseData.modules) {
            this.courseData.modules.forEach(module => {
                module.topics.forEach(topic => {
                    let quizData = null;

                    try {
                        // Prefer handcrafted
                        if (this.handCraftedQuizzes[topic.id]) {
                            quizData = this.handCraftedQuizzes[topic.id];
                        } else {
                            quizData = this.generateDynamicQuiz(topic, module.title);
                        }

                        // Add ALL questions from the topic
                        if (quizData && quizData.questions && quizData.questions.length > 0) {
                            quizData.questions.forEach(q => {
                                const qClone = { ...q }; // Clone to avoid ref issues
                                qClone.question = `[${module.title} - ${topic.title}] ${qClone.question}`; // Add context
                                allQuestions.push(qClone);
                            });
                        }
                    } catch (e) {
                        console.error(`Error generating quiz for ${topic.id}:`, e);
                    }
                });
            });
        }

        // Shuffle the questions for a randomized exam experience
        // Fisher-Yates shuffle
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        // Select exactly 100 questions (or all if less than 100)
        const selectedQuestions = allQuestions.slice(0, 100);

        // Re-index to 1..100
        selectedQuestions.forEach((q, index) => q.id = index + 1);

        console.log(`Final Assessment Generated with ${selectedQuestions.length} questions.`);

        this.currentQuiz = {
            title: "Final Course Assessment (100 Questions)",
            description: `A comprehensive exam covering the entire syllabus. You have ${selectedQuestions.length} questions. Good luck!`,
            questions: selectedQuestions
        };

        this.score = 0;
        this.totalQuestions = this.currentQuiz.questions.length;
        this.userAnswers = {};

        return this.renderQuiz();
    }

    generateDynamicQuiz(topic, moduleTitle) {
        const sub1 = topic.subtopics[0] || "core concepts";
        const sub2 = topic.subtopics[1] || "practical applications";
        const sub3 = topic.subtopics[2] || "best practices";

        return {
            title: topic.title,
            questions: [
                {
                    id: 1,
                    question: `Which of the following is a key component of "${topic.title}"?`,
                    options: [
                        `Implementing ${sub1} effectively`,
                        "Using random guessing",
                        "Ignoring data completely",
                        "Manual processing only"
                    ],
                    correct: 0,
                    explanation: `${sub1} is a fundamental aspect of ${topic.title} in the context of ${moduleTitle}.`
                },
                {
                    id: 2,
                    question: `Why is ${topic.title} significant in modern agriculture?`,
                    options: [
                        "It increases manual labor",
                        "It has no real impact",
                        "It enhances efficiency and decision-making",
                        "It reduces crop yields"
                    ],
                    correct: 2,
                    explanation: `By leveraging ${topic.title}, farmers can optimize operations, reduce waste, and improve overall productivity.`
                },
                {
                    id: 3,
                    question: `When applying ${topic.title}, what should be the primary focus?`,
                    options: [
                        `Understanding ${sub2}`,
                        "Ignoring improved techniques",
                        "Avoiding technology",
                        "Using outdated methods"
                    ],
                    correct: 0,
                    explanation: `Focusing on ${sub2} ensures that the implementation of ${topic.title} yields the best results.`
                }
            ]
        };
    }

    getHandCraftedQuizzes() {
        return {
            'm1-t1': {
                title: "Introduction to AI",
                questions: [
                    {
                        id: 1,
                        question: "What is the main difference between traditional programming and Machine Learning?",
                        options: ["ML is faster", "ML learns rules from data, unlike explicit programming", "ML needs no computers", "Traditional is more accurate"],
                        correct: 1,
                        explanation: "ML learns patterns from data automatically, while traditional programming requires explicit step-by-step instructions."
                    },
                    {
                        id: 2,
                        question: "Which technology does 'See & Spray' use?",
                        options: ["GPS", "Computer Vision and AI", "Manual labor", "Sensors"],
                        correct: 1,
                        explanation: "Computer Vision allows AI to 'see' weeds vs crops, reducing herbicide use."
                    },
                    {
                        id: 3,
                        question: "What is Deep Learning in agriculture?",
                        options: ["Planting deep", "Advanced AI for complex patterns (like images)", "Soil depth study", "Underground farming"],
                        correct: 1,
                        explanation: "Deep Learning uses neural networks to recognize complex patterns like pests or diseases."
                    }
                ]
            },
            'm1-t2': {
                title: "Machine Learning Paradigms",
                questions: [
                    {
                        id: 1,
                        question: "Which paradigm involves training with labeled data?",
                        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Deep Learning"],
                        correct: 1,
                        explanation: "Supervised learning uses labeled examples (input-output pairs) to teach the model."
                    },
                    {
                        id: 2,
                        question: "Clustering soil types without labels is an example of:",
                        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Regression"],
                        correct: 1,
                        explanation: "Unsupervised learning finds hidden patterns (like clusters) in unlabeled data."
                    },
                    {
                        id: 3,
                        question: "An automated tractor learning to navigate by trial and error uses:",
                        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Clustering"],
                        correct: 2,
                        explanation: "Reinforcement learning learns through rewards and penalties (trial and error)."
                    }
                ]
            },
            'm1-t3': {
                title: "History and Evolution",
                questions: [
                    { id: 1, question: "When did the modern AI boom (Deep Learning) effectively start?", options: ["1950s", "2010s", "1980s", "2000s"], correct: 1, explanation: "The 2010s saw the rise of Deep Learning due to big data and GPU power." },
                    { id: 2, question: "Who is considered the father of AI?", options: ["Alan Turing", "Elon Musk", "Bill Gates", "Steve Jobs"], correct: 0, explanation: "Alan Turing laid the theoretical foundations for Artificial Intelligence." },
                    { id: 3, question: "The 'AI Winter' refers to:", options: ["Cold scanning rooms", "Periods of reduced funding and interest in AI", "Cooling systems for servers", "AI predicting snow"], correct: 1, explanation: "AI Winters were periods where hype exceeded reality, leading to funding cuts." }
                ]
            },
            'm1-t4': {
                title: "AI in Agriculture",
                questions: [
                    { id: 1, question: "Which of the following is a direct application of AI in farming?", options: ["Manual plowing", "AI camera pest detection", "Hand watering", "Traditional crop rotation"], correct: 1, explanation: "AI cameras can detect and count pests, automating monitoring." },
                    { id: 2, question: "How does AI help with irrigation?", options: ["Ignores water needs", "Optimizes irrigation schedule", "Removes sensors", "Only works in cities"], correct: 1, explanation: "AI uses sensor data to optimize when and how much to irrigate." },
                    { id: 3, question: "What is a benefit of using AI for weather prediction in agriculture?", options: ["Random harvest times", "Accurate harvest planning", "No impact", "Increased manual labor"], correct: 1, explanation: "AI enables accurate harvest planning by predicting weather patterns." }
                ]
            },
            'm1-t5': {
                title: "Career Opportunities in AgriTech",
                questions: [
                    { id: 1, question: "Which AgriTech role focuses on analyzing farm data?", options: ["Product Manager", "Data Scientist", "Sales Person", "UX Designer"], correct: 1, explanation: "Data Scientists analyze farm data to improve yield and efficiency." },
                    { id: 2, question: "What is a key skill for an AgriTech developer?", options: ["Writing code for AI systems", "Selling solutions", "Designing farm layouts", "Harvesting crops"], correct: 0, explanation: "AgriTech developers build and maintain AI systems for agriculture." },
                    { id: 3, question: "Which career involves making apps easy for farmers to use?", options: ["UX Designer", "Data Scientist", "Sales Person", "Farm Owner"], correct: 0, explanation: "UX Designers focus on user experience, making technology accessible to farmers." }
                ]
            },
            'm1-t8': {
                title: "Linear Algebra",
                questions: [
                    { id: 1, question: "A vector in AI usually represents:", options: ["A virus", "A list of features/numbers", "A straight line", "A circle"], correct: 1, explanation: "Vectors are ordered lists of numbers representing data features." },
                    { id: 2, question: "Matrix multiplication is key for:", options: ["Neural Network layers", "Storing files", "Printing text", "Playing music"], correct: 0, explanation: "Neural networks use matrix multiplication to process inputs through layers." },
                    { id: 3, question: "Eigenvalues help in:", options: ["Cooling", "Dimensionality Reduction (PCA)", "Watering", "None"], correct: 1, explanation: "Eigenvalues are used in PCA to find principal components." }
                ]
            },
            'm1-t9': {
                title: "Data Types",
                questions: [
                    { id: 1, question: "Which is structured data?", options: ["Images", "Audio", "Excel Spreadsheet", "Text emails"], correct: 2, explanation: "Spreadsheets have rows and columns, making them structured." },
                    { id: 2, question: "Images are considered:", options: ["Structured", "Unstructured", "Semi-structured", "None"], correct: 1, explanation: "Images are unstructured data requiring special processing." },
                    { id: 3, question: "Time-series data involves:", options: ["Random snapshots", "Data points indexed by time", "Space only", "Colors"], correct: 1, explanation: "Time-series tracks changes over time intervals." }
                ]
            },
            'm1-t10': {
                title: "Data Collection",
                questions: [
                    { id: 1, question: "IoT sensors collect:", options: ["Real-time environmental data", "Manual surveys", "Old books", "Dreams"], correct: 0, explanation: "IoT sensors monitor temp, humidity, etc., in real-time." },
                    { id: 2, question: "Satellite imagery provides:", options: ["Ground level bacteria", "Large scale field views", "Root health", "Market prices"], correct: 1, explanation: "Satellites give macro views of vegetation health (NDVI)." },
                    { id: 3, question: "Garbage In, Garbage Out means:", options: ["Recycling is good", "Bad data leads to bad models", "Good data is trash", "None"], correct: 1, explanation: "Model quality strongly depends on input data quality." }
                ]
            },
            'm1-t11': {
                title: "Python Setup",
                questions: [
                    { id: 1, question: "Google Colab allows you to:", options: ["Run Python in the cloud", "Buy crops", "Drive tractors", "Sleep"], correct: 0, explanation: "Colab is a cloud-based Python notebook environment." },
                    { id: 2, question: "pip is used for:", options: ["Planting seeds", "Installing Python packages", "Drawing", "Editing video"], correct: 1, explanation: "pip is the package installer for Python." },
                    { id: 3, question: "An IDE is a:", options: ["Integrated Development Environment", "Ideal Data Entry", "Intelligent Drone Engine", "None"], correct: 0, explanation: "IDE provides tools for coding, debugging, and testing." }
                ]
            },
            'm1-t6': {
                title: "Mathematical Foundations",
                questions: [
                    { id: 1, question: "Which field of math is most critical for understanding how Neural Networks change weights?", options: ["Calculus", "Geometry", "Trigonometry", "Topology"], correct: 0, explanation: "Calculus (derivatives/gradients) is used to optimize weights during training." },
                    { id: 2, question: "Linear Algebra primarily deals with:", options: ["Curves", "Vectors and Matrices", "Integrals", "Probability"], correct: 1, explanation: "Linear Algebra handles vectors and matrices, the data structures regarding data." },
                    { id: 3, question: "Why is Probability important in AI?", options: ["It isn't", "To handle uncertainty and predictions", "For gambling apps", "To calculate server costs"], correct: 1, explanation: "AI deals with uncertainty; probability provides the framework to reason about it." }
                ]
            },
            'm1-t7': {
                title: "Statistics Basics",
                questions: [
                    { id: 1, question: "What does the 'mean' represent?", options: ["The highest value", "The central/average value", "The lowest value", "The spread"], correct: 1, explanation: "The mean is the arithmetic average of a dataset." },
                    { id: 2, question: "Standard Deviation measures:", options: ["Total sum", "Average", "Spread or dispersion of data", "Max value"], correct: 2, explanation: "Standard Deviation tells you how spread out your data is from the mean." },
                    { id: 3, question: "If probability is 0.5, it means:", options: ["Impossible", "Certain", "50% chance", "Unknown"], correct: 2, explanation: "0.5 equals a 50% chance of the event occurring." }
                ]
            },
            'm1-t12': { // Variables
                title: "Variables and Data Types",
                questions: [
                    { id: 1, question: "Which is a valid integer in Python?", options: ["'5'", "5.0", "5", "Five"], correct: 2, explanation: "Integers are whole numbers without decimals." },
                    { id: 2, question: "What type is 'Hello'?", options: ["int", "float", "string", "bool"], correct: 2, explanation: "Text enclosed in quotes is a string." },
                    { id: 3, question: "True and False are:", options: ["Strings", "Booleans", "Integers", "Floats"], correct: 1, explanation: "True and False are Boolean values." }
                ]
            },
            'm1-t13': {
                title: "Operators",
                questions: [
                    { id: 1, question: "What does '%' operator do?", options: ["Percentage", "Modulus (Remainder)", "Division", "Multiplication"], correct: 1, explanation: "% returns the remainder of a division." },
                    { id: 2, question: "Result of 3 ** 2 is:", options: ["6", "9", "5", "1"], correct: 1, explanation: "** is the exponentiation operator (3 squared = 9)." },
                    { id: 3, question: "== checks for:", options: ["Assignment", "Equality", "Inequality", "Type"], correct: 1, explanation: "== compares values for equality." }
                ]
            },
            'm1-t14': { // Control Structures
                title: "Control Structures",
                questions: [
                    { id: 1, question: "Which keyword starts a conditional block?", options: ["loop", "if", "for", "def"], correct: 1, explanation: "'if' is used to start a conditional statement." },
                    { id: 2, question: "What executes if the 'if' condition is false?", options: ["else", "stop", "break", "return"], correct: 0, explanation: "The 'else' block runs if the 'if' condition is not met." },
                    { id: 3, question: "Indentation in Python is:", options: ["Optional", "For loop only", "Mandatory for blocks", "Forbidden"], correct: 2, explanation: "Python uses indentation to define blocks of code." }
                ]
            },
            'm1-t15': { // Loops
                title: "Loops",
                questions: [
                    { id: 1, question: "Which loop is best for iterating over a list?", options: ["while", "for", "if", "try"], correct: 1, explanation: "'for' loops are designed to iterate over sequences." },
                    { id: 2, question: "How do you stop a loop prematurely?", options: ["stop", "break", "exit", "end"], correct: 1, explanation: "'break' exits the loop immediately." },
                    { id: 3, question: "A 'while' loop runs:", options: ["Once", "Forever", "As long as condition is true", "Twice"], correct: 2, explanation: "It continues as long as its condition remains True." }
                ]
            },
            'm1-t16': {
                title: "Functions",
                questions: [
                    { id: 1, question: "To define a function use:", options: ["func", "def", "function", "define"], correct: 1, explanation: "'def' keyword starts a function definition." },
                    { id: 2, question: "Variable scope 'local' means:", options: ["Accessible everywhere", "Accessible only inside function", "Accessible in other files", "None"], correct: 1, explanation: "Local variables exist only within the function they are created." },
                    { id: 3, question: "Return statement:", options: ["Prints to screen", "Sends value back to caller", "Exits program", "Repeats function"], correct: 1, explanation: "Return passes the result back to where function was called." }
                ]
            },
            'm1-t17': {
                title: "Lists & Dicts",
                questions: [
                    { id: 1, question: "Lists are:", options: ["Immutable", "Mutable", "Fixed size", "Text only"], correct: 1, explanation: "Lists can be changed (items added/removed) after creation." },
                    { id: 2, question: "Access a value in dictionary by:", options: ["Index", "Key", "Position", "Random"], correct: 1, explanation: "Dictionaries use unique keys to access values." },
                    { id: 3, question: "Tuples are different from lists because:", options: ["They are slower", "They are immutable (cannot change)", "They store only numbers", "No difference"], correct: 1, explanation: "Tuples cannot be modified after creation." }
                ]
            },
            'm1-t18': {
                title: "Strings",
                questions: [
                    { id: 1, question: "String slicing 'Hello'[1:4] gives:", options: ["Hel", "ell", "llo", "He"], correct: 1, explanation: "Indices 1, 2, 3 (not 4) -> 'e', 'l', 'l'." },
                    { id: 2, question: "Which method converts to uppercase?", options: [".up()", ".upper()", ".cap()", ".top()"], correct: 1, explanation: ".upper() returns the uppercase version string." },
                    { id: 3, question: "Strings in Python are:", options: ["Mutable", "Immutable", "Numbers", "Lists"], correct: 1, explanation: "You cannot change characters in a string in-place." }
                ]
            },
            'm1-t19': {
                title: "File Handling",
                questions: [
                    { id: 1, question: "Mode 'w' in open() means:", options: ["Write (overwrite)", "Read", "Append", "Walk"], correct: 0, explanation: "'w' opens for writing, truncating the file first." },
                    { id: 2, question: "Best practice to open files:", options: ["Just open()", "Using 'with' statement", "Never close", "Use loops"], correct: 1, explanation: "'with' automatically closes the file even if errors occur." },
                    { id: 3, question: "read() reads:", options: ["One line", "Entire file", "One char", "Last line"], correct: 1, explanation: "read() without arguments reads the whole file content." }
                ]
            },
            'm1-activity1': {
                title: "Activity: Colab Setup",
                questions: [
                    { id: 1, question: "Where does Google Colab code execute?", options: ["On your local CPU", "In Google's Cloud", "On your phone", "In the monitor"], correct: 1, explanation: "Colab uses Google's cloud servers, not your local machine." },
                    { id: 2, question: "What is the file extension for notebooks?", options: [".txt", ".py", ".ipynb", ".doc"], correct: 2, explanation: "Jupyter/Colab notebooks use the .ipynb (Interactive Python Notebook) extension." },
                    { id: 3, question: "Shortcut to run a cell?", options: ["Ctrl + C", "Alt + F4", "Shift + Enter", "Esc"], correct: 2, explanation: "Shift + Enter runs the current cell and moves to the next one." }
                ]
            },
            'm1-activity2': {
                title: "Activity: Python Challenges",
                questions: [
                    { id: 1, question: "What is the output of `print(10 * 2)`?", options: ["102", "12", "20", "Error"], correct: 2, explanation: "* is the multiplication operator." },
                    { id: 2, question: "Which symbol starts a comment?", options: ["//", "#", "<!--", "%"], correct: 1, explanation: "Python uses # for single-line comments." },
                    { id: 3, question: "Is `Print` the same as `print` in Python?", options: ["Yes", "No", "Sometimes", "Only in Windows"], correct: 1, explanation: "Python is case-sensitive. `print` is correct, `Print` is not." }
                ]
            },
            'm1-activity3': {
                title: "Activity: Yield Analyzer",
                questions: [
                    { id: 1, question: "Which function gives the total of a list?", options: ["total()", "add()", "sum()", "plus()"], correct: 2, explanation: "sum(list) adds all numerical elements together." },
                    { id: 2, question: "To find the highest yield, use:", options: ["max()", "top()", "high()", "upper()"], correct: 0, explanation: "max() returns the largest item in an iterable." },
                    { id: 3, question: "Why do we calculate average yield?", options: ["To pick the worst tree", "To summarize performance", "To waste time", "To complexify data"], correct: 1, explanation: "Averages give a single number summary of the overall performance." }
                ]
            },
            'm1-activity4': {
                title: "Activity: Visualization",
                questions: [
                    { id: 1, question: "Standard import alias for matplotlib.pyplot is:", options: ["mpl", "plt", "py", "pt"], correct: 1, explanation: "`import matplotlib.pyplot as plt` is the convention." },
                    { id: 2, question: "To create a bar chart, use:", options: ["plt.line()", "plt.bar()", "plt.circle()", "plt.chart()"], correct: 1, explanation: "plt.bar() creates bar charts." },
                    { id: 3, question: "What must you call to display the plot?", options: ["plt.show()", "plt.render()", "plt.view()", "plt.display()"], correct: 0, explanation: "plt.show() renders the figure window." }
                ]
            },
            'm2-t1': { // Numpy
                title: "NumPy Arrays",
                questions: [
                    { id: 1, question: "What is the main advantage of NumPy arrays over lists?", options: ["Slower", "Less memory", "Faster performance", "Easier to type"], correct: 2, explanation: "NumPy arrays are optimized for vectorized operations, making them much faster." },
                    { id: 2, question: "Which function creates an array?", options: ["np.create()", "np.array()", "np.make()", "np.list()"], correct: 1, explanation: "np.array() converts a list into a NumPy array." },
                    { id: 3, question: "Can NumPy arrays calculate element-wise?", options: ["Yes", "No", "Only sums", "Only multiplication"], correct: 0, explanation: "Yes, operations like array1 + array2 happen element-wise automatically." }
                ]
            },
            'm2-t5': { // Pandas
                title: "Pandas Intro",
                questions: [
                    { id: 1, question: "What is a DataFrame?", options: ["A snake", "2D Tabular data structure", "A database", "A graph"], correct: 1, explanation: "A DataFrame is a 2D labeled data structure like a spreadsheet." },
                    { id: 2, question: "Which library is used for data manipulation?", options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"], correct: 1, explanation: "Pandas is the primary library for data manipulation." },
                    { id: 3, question: "How do you view the first 5 rows?", options: [".tail()", ".view()", ".head()", ".top()"], correct: 2, explanation: ".head() shows the first 5 rows by default." }
                ]
            },
            'm2-t11': { // Matplotlib
                title: "Matplotlib Basics",
                questions: [
                    { id: 1, question: "What acts as the canvas in Matplotlib?", options: ["Figure", "Plot", "Graph", "Draw"], correct: 0, explanation: "The Figure is the top-level container for all plot elements." },
                    { id: 2, question: "Which function plots a line?", options: [".bar()", ".scatter()", ".plot()", ".hist()"], correct: 2, explanation: ".plot() is the standard function for line charts." },
                    { id: 3, question: "Why visualize data?", options: ["To use more colors", "To find patterns and trends", "To hide data", "For fun"], correct: 1, explanation: "Visualization helps humans spot patterns and outliers quickly." }
                ]
            },
            'm2-t21': { // Linear Regression
                title: "Linear Regression",
                questions: [
                    { id: 1, question: "Linear regression predicts which type of variable?", options: ["Categorical", "Continuous/Numeric", "Images", "Text"], correct: 1, explanation: "Regression predicts continuous values like price, height, or yield." },
                    { id: 2, question: "What represents the relationship in simple linear regression?", options: ["A curve", "A straight line", "A circle", "A dot"], correct: 1, explanation: "It fits a straight line (y = mx + c) to the data." },
                    { id: 3, question: "What is the 'best fit' line?", options: ["Longest line", "Line minimizing error", "Highest line", "Thickest line"], correct: 1, explanation: "It minimizes the distance (error) between data points and the line." }
                ]
            },
            'm3-t2': { // Yield Prediction
                title: "Yield Prediction",
                questions: [
                    { id: 1, question: "Yield prediction is primarily a:", options: ["Classification problem", "Regression problem", "Clustering problem", "Reinforcement problem"], correct: 1, explanation: "Since yield is a continuous number (e.g., kg/hectare), it's a regression task." },
                    { id: 2, question: "Which feature is crucial for yield?", options: ["Farmer's name", "Soil health & Weather", "Tractor color", "Fence type"], correct: 1, explanation: "Environmental factors like soil and weather directly impact growth." },
                    { id: 3, question: "A benefit of accurate prediction is:", options: ["More work", "Market planning & storage", "Less production", "None"], correct: 1, explanation: "Knowing yield helps in logistics, storage planning, and price negotiation." }
                ]
            },
            'm3-t7': { // Disease Detection
                title: "Disease Detection",
                questions: [
                    { id: 1, question: "Which DL architecture is best for image disease detection?", options: ["RNN", "CNN", "Linear Regression", "K-Means"], correct: 1, explanation: "Convolutional Neural Networks (CNNs) excel at image processing." },
                    { id: 2, question: "What is the role of the training set?", options: ["To test the model", "To teach the model patterns", "To validate", "To deploy"], correct: 1, explanation: "The training set is used to adjust weights so the model learns." },
                    { id: 3, question: "Early detection leads to:", options: ["Higher crop loss", "Reduced chemical use & saved crops", "More pests", "Slower growth"], correct: 1, explanation: "Catching it early means targeted treatment, saving money and crops." }
                ]
            },
            'm4-t1': { // Capstone Planning
                title: "Project Planning",
                questions: [
                    { id: 1, question: "What is the first step in a project?", options: ["Coding", "Problem Definition", "Testing", "Buying hardware"], correct: 1, explanation: "You must define WHAT you are solving before successful execution." },
                    { id: 2, question: "Scope changes during a project are called:", options: ["Scope creep", "Scope hop", "Scope jump", "Scope skip"], correct: 0, explanation: "Scope creep refers to uncontrolled growth in project scope." },
                    { id: 3, question: "Why is a timeline important?", options: ["It isn't", "To track progress and meet deadlines", "To fill paper", "To increase costs"], correct: 1, explanation: "Timelines keep the project on track and ensure timely delivery." }
                ]
            },
            // MODULE 2 ADDITIONAL QUIZZES
            'm2-t2': {
                title: "Matrix Operations",
                questions: [
                    { id: 1, question: "Matrix multiplication is:", options: ["Always commutative", "Not commutative (A×B ≠ B×A)", "Same as addition", "Only for 2D"], correct: 1, explanation: "Matrix multiplication order matters: A×B ≠ B×A in general." },
                    { id: 2, question: "What is the transpose of a matrix?", options: ["Inverse", "Rows become columns", "Same matrix", "Determinant"], correct: 1, explanation: "Transposing swaps rows and columns." },
                    { id: 3, question: "Why are matrices important in ML?", options: ["They aren't", "Data is represented as matrices", "For decoration", "Only for math"], correct: 1, explanation: "Datasets are matrices; operations like dot products power neural networks." }
                ]
            },
            'm2-t4': {
                title: "Statistical Functions",
                questions: [
                    { id: 1, question: "Correlation measures:", options: ["Causation", "Linear relationship strength", "Average", "Total"], correct: 1, explanation: "Correlation shows how two variables move together, not causation." },
                    { id: 2, question: "Covariance tells us:", options: ["Direction of relationship", "Exact prediction", "Nothing useful", "Only average"], correct: 0, explanation: "Covariance shows if variables increase/decrease together." },
                    { id: 3, question: "Standard deviation measures:", options: ["Average", "Spread of data", "Total sum", "Minimum"], correct: 1, explanation: "Std dev shows how dispersed data is from the mean." }
                ]
            },
            'm2-t6': {
                title: "DataFrame Manipulation",
                questions: [
                    { id: 1, question: "How to select a column?", options: ["df['column']", "df.get('column')", "df->column", "df::column"], correct: 0, explanation: "Use bracket notation or dot notation: df['col'] or df.col" },
                    { id: 2, question: "Adding a column:", options: ["df.add()", "df['new'] = values", "df.insert()", "df.append()"], correct: 1, explanation: "Direct assignment creates a new column: df['new_col'] = data" },
                    { id: 3, question: "Removing a column:", options: ["df.remove()", "df.drop('col', axis=1)", "df.delete()", "df.pop()"], correct: 1, explanation: "Use drop() with axis=1 for columns." }
                ]
            },
            'm2-t8': {
                title: "Data Filtering",
                questions: [
                    { id: 1, question: "Boolean indexing means:", options: ["Using True/False to filter", "Index numbers", "Alphabetical", "Random"], correct: 0, explanation: "Filter rows using boolean conditions: df[df['col'] > 5]" },
                    { id: 2, question: "loc vs iloc:", options: ["Same thing", "loc=label, iloc=integer position", "iloc is faster", "loc is deprecated"], correct: 1, explanation: "loc uses labels, iloc uses integer positions." },
                    { id: 3, question: "Query method uses:", options: ["SQL syntax", "String expressions", "Only numbers", "JSON"], correct: 1, explanation: "df.query('column > 5') uses string expressions." }
                ]
            },
            'm2-t9': {
                title: "Missing Data",
                questions: [
                    { id: 1, question: "NaN stands for:", options: ["Not a Name", "Not a Number", "Null and None", "Negative"], correct: 1, explanation: "NaN = Not a Number, represents missing values." },
                    { id: 2, question: "fillna() is used to:", options: ["Delete rows", "Replace missing values", "Find NaN", "Count missing"], correct: 1, explanation: "fillna() replaces NaN with specified values." },
                    { id: 3, question: "dropna() will:", options: ["Fill missing", "Remove rows/columns with NaN", "Count NaN", "Nothing"], correct: 1, explanation: "dropna() removes rows or columns containing NaN." }
                ]
            },
            'm2-t10': {
                title: "Aggregation",
                questions: [
                    { id: 1, question: "groupby() is used for:", options: ["Filtering", "Grouping data by category", "Sorting", "Merging"], correct: 1, explanation: "groupby() groups rows by unique values in a column." },
                    { id: 2, question: "After grouping, you can:", options: ["Apply aggregation functions", "Only print", "Delete data", "Rename"], correct: 0, explanation: "Apply sum(), mean(), count(), etc. after groupby()." },
                    { id: 3, question: "Pivot tables:", options: ["Are Excel-only", "Reshape and aggregate data", "Delete data", "Same as groupby"], correct: 1, explanation: "Pivot tables reshape data with aggregations." }
                ]
            },
            'm2-t12': {
                title: "Advanced Charts",
                questions: [
                    { id: 1, question: "Histograms show:", options: ["Time series", "Distribution of values", "Relationships", "Categories"], correct: 1, explanation: "Histograms show frequency distribution." },
                    { id: 2, question: "Box plots reveal:", options: ["Outliers and quartiles", "Only average", "Time trends", "Nothing"], correct: 0, explanation: "Box plots show median, quartiles, and outliers." },
                    { id: 3, question: "Heatmaps are best for:", options: ["Single values", "Correlation matrices", "Line trends", "Text"], correct: 1, explanation: "Heatmaps visualize correlation or intensity matrices." }
                ]
            },
            'm2-t14': {
                title: "ML Workflow",
                questions: [
                    { id: 1, question: "First step in ML workflow:", options: ["Model training", "Problem definition", "Deployment", "Testing"], correct: 1, explanation: "Define what problem you're solving first." },
                    { id: 2, question: "Data preparation includes:", options: ["Only loading data", "Cleaning, transforming, splitting", "Just visualization", "Only testing"], correct: 1, explanation: "Preparation = cleaning, feature engineering, splitting." },
                    { id: 3, question: "Why evaluate models?", options: ["It's optional", "To measure performance", "To waste time", "For fun"], correct: 1, explanation: "Evaluation tells us if the model works well." }
                ]
            },
            'm2-t16': {
                title: "Train-Test Split",
                questions: [
                    { id: 1, question: "Why split data?", options: ["To reduce size", "To test on unseen data", "Random choice", "No reason"], correct: 1, explanation: "Testing on unseen data reveals true performance." },
                    { id: 2, question: "Typical split ratio:", options: ["50/50", "80/20 or 70/30", "90/10", "100/0"], correct: 1, explanation: "Common: 80% train, 20% test." },
                    { id: 3, question: "Validation set is:", options: ["Same as test", "For hyperparameter tuning", "Not needed", "For final deployment"], correct: 1, explanation: "Validation set helps tune hyperparameters." }
                ]
            },
            'm2-t17': {
                title: "Cross-Validation",
                questions: [
                    { id: 1, question: "K-Fold CV splits data into:", options: ["2 parts", "K equal parts", "Random parts", "No split"], correct: 1, explanation: "K-Fold divides data into K folds, trains K times." },
                    { id: 2, question: "Advantage of CV:", options: ["Faster", "More robust performance estimate", "Uses less data", "Simpler"], correct: 1, explanation: "CV gives better estimate by averaging K runs." },
                    { id: 3, question: "Stratified CV ensures:", options: ["Random split", "Class proportions maintained", "No split", "Faster training"], correct: 1, explanation: "Stratified keeps class distribution in each fold." }
                ]
            },
            'm2-t18': {
                title: "Overfitting/Underfitting",
                questions: [
                    { id: 1, question: "Overfitting means:", options: ["Too simple model", "Memorizing training data", "Perfect model", "No learning"], correct: 1, explanation: "Overfitting = high train accuracy, low test accuracy." },
                    { id: 2, question: "Underfitting means:", options: ["Perfect fit", "Too complex", "Too simple, can't learn patterns", "Good generalization"], correct: 2, explanation: "Underfitting = model too simple to capture patterns." },
                    { id: 3, question: "Bias-Variance tradeoff:", options: ["Not important", "Balance between underfitting and overfitting", "Only for deep learning", "Deprecated"], correct: 1, explanation: "Balance bias (underfitting) and variance (overfitting)." }
                ]
            },
            'm2-t22': {
                title: "Regression Evaluation",
                questions: [
                    { id: 1, question: "RMSE stands for:", options: ["Root Mean Square Error", "Random Mean Score", "Rate My Squared Error", "None"], correct: 0, explanation: "RMSE = Root Mean Squared Error, measures prediction error." },
                    { id: 2, question: "R² Score ranges:", options: ["0 to 100", "0 to 1", "-∞ to 1", "Always positive"], correct: 2, explanation: "R² can be negative for poor models, 1 is perfect." },
                    { id: 3, question: "Lower MAE means:", options: ["Worse model", "Better model", "No difference", "Invalid"], correct: 1, explanation: "MAE = Mean Absolute Error; lower is better." }
                ]
            },
            'm2-t24': {
                title: "Decision Trees",
                questions: [
                    { id: 1, question: "Decision trees split on:", options: ["Random features", "Features that best separate classes", "Alphabetically", "Last feature"], correct: 1, explanation: "Trees split on features that maximize information gain." },
                    { id: 2, question: "Pruning is:", options: ["Growing tree", "Trimming tree to avoid overfitting", "Deleting data", "Training"], correct: 1, explanation: "Pruning removes branches to prevent overfitting." },
                    { id: 3, question: "Leaf nodes contain:", options: ["More splits", "Final predictions", "Nothing", "Only errors"], correct: 1, explanation: "Leaf nodes are terminal and make predictions." }
                ]
            },
            // MODULE 3 AGRICULTURE QUIZZES
            'm3-t1': {
                title: "Feature Engineering",
                questions: [
                    { id: 1, question: "Feature scaling is:", options: ["Unnecessary", "Normalizing features to same range", "Deleting features", "Creating features"], correct: 1, explanation: "Scaling ensures features have similar ranges (e.g., 0-1)." },
                    { id: 2, question: "One-hot encoding:", options: ["Converts categorical to binary columns", "Scales numbers", "Deletes data", "Reduces dimensions"], correct: 0, explanation: "One-hot creates binary columns for each category." },
                    { id: 3, question: "Why engineer features?", options: ["To complicate", "To improve model performance", "Random", "Not needed"], correct: 1, explanation: "Good features help models learn better patterns." }
                ]
            },
            'm3-t3': {
                title: "Regression for Yield",
                questions: [
                    { id: 1, question: "Polynomial regression can:", options: ["Only fit lines", "Fit curved patterns", "Never work", "Only for categories"], correct: 1, explanation: "Polynomial regression fits curves using higher-degree terms." },
                    { id: 2, question: "Ridge regression adds:", options: ["Nothing", "L2 penalty to prevent overfitting", "More complexity", "Noise"], correct: 1, explanation: "Ridge adds L2 regularization to reduce overfitting." },
                    { id: 3, question: "Lasso can:", options: ["Only predict", "Perform feature selection via L1", "Never work", "Only classify"], correct: 1, explanation: "Lasso's L1 penalty can shrink coefficients to zero." }
                ]
            },
            'm2-t3': {
                title: "Broadcasting",
                questions: [
                    { id: 1, question: "Broadcasting allows operations on:", options: ["Identical shapes only", "Arrays of different shapes", "Only matrices", "Lists"], correct: 1, explanation: "Broadcasting stretches smaller arrays to match larger ones." },
                    { id: 2, question: "Adding a scalar to an array (A + 5):", options: ["Adds to first element", "Error", "Adds 5 to every element", "Adds to last"], correct: 2, explanation: "The scalar is broadcasted to match the array shape." },
                    { id: 3, question: "Broadcasting rule:", options: ["Trailing dims must match or be 1", "Leading dims match", "No rules", "Only for 1D"], correct: 0, explanation: "Dimensions are compatible if they are equal or one is 1." }
                ]
            },
            'm2-t7': {
                title: "Data Analysis",
                questions: [
                    { id: 1, question: "df.describe() shows:", options: ["Plot", "Stats summary (min, max, mean)", "First 5 rows", "Columns names"], correct: 1, explanation: "It generates descriptive statistics." },
                    { id: 2, question: "df.info() shows:", options: ["Data values", "Data types and non-null counts", "Pie chart", "File size"], correct: 1, explanation: "info() provides a concise summary of the DataFrame." },
                    { id: 3, question: "Best plot for value distribution:", options: ["Line plot", "Histogram", "Scatter", "Pie"], correct: 1, explanation: "Histograms visualize the frequency distribution." }
                ]
            },
            'm2-t13': {
                title: "Seaborn",
                questions: [
                    { id: 1, question: "Seaborn is built on top of:", options: ["Pandas", "Matplotlib", "Numpy", "React"], correct: 1, explanation: "Seaborn is a high-level interface for Matplotlib." },
                    { id: 2, question: "sns.heatmap() is good for:", options: ["Time series", "Correlation matrices", "Bar charts", "Pie charts"], correct: 1, explanation: "Heatmaps visualize matrix values well." },
                    { id: 3, question: "Seaborn works well with:", options: ["Lists", "Pandas DataFrames", "Dictionaries", "Sets"], correct: 1, explanation: "It integrates directly with DataFrames." }
                ]
            },
            'm2-t15': {
                title: "Supervised vs Unsupervised",
                questions: [
                    { id: 1, question: "Supervised learning uses:", options: ["Labeled data", "Unlabeled data", "No data", "Random data"], correct: 0, explanation: "Supervised models learn from input-output pairs." },
                    { id: 2, question: "Unsupervised learning example:", options: ["Regression", "Clustering (K-Means)", "Classification", "Decision Tree"], correct: 1, explanation: "Clustering groups unlabeled data." },
                    { id: 3, question: "Predicting house price is:", options: ["Supervised Regression", "Unsupervised", "Classification", "Clustering"], correct: 0, explanation: "Price is a continuous label." }
                ]
            },
            'm2-t19': {
                title: "Hyperparameters",
                questions: [
                    { id: 1, question: "Hyperparameters are set:", options: ["By the model", "Before training", "After training", "Randomly"], correct: 1, explanation: "They configure the training process." },
                    { id: 2, question: "Grid Search is used for:", options: ["Data cleaning", "Finding best hyperparameters", "Visualization", "Deployment"], correct: 1, explanation: "It exhaustively searches hyperparameter combinations." },
                    { id: 3, question: "Learning rate is a:", options: ["Parameter", "Hyperparameter", "Metric", "Feature"], correct: 1, explanation: "It controls step size during optimization." }
                ]
            },
            'm2-t20': {
                title: "Scikit-Learn",
                questions: [
                    { id: 1, question: "Standard sklearn import for LinearRegression:", options: ["import LinearRegression", "from sklearn.linear_model import LinearRegression", "import sklearn.linear", "None"], correct: 1, explanation: "Classes are organized in submodules." },
                    { id: 2, question: "fit() method does what?", options: ["Predicts", "Trains the model", "Scores", "Splits"], correct: 1, explanation: "fit() trains the algorithm on data." },
                    { id: 3, question: "predict() method:", options: ["Trains", "Generates predictions on new data", "Evaluates", "Cleans"], correct: 1, explanation: "predict() uses the trained model." }
                ]
            },
            'm2-t23': {
                title: "Logistic Regression",
                questions: [
                    { id: 1, question: "Logistic Regression is used for:", options: ["Regression", "Classification", "Clustering", "Plotting"], correct: 1, explanation: "Despite the name, it's for classification (probabilities)." },
                    { id: 2, question: "Function used in Logistic Regression:", options: ["Linear", "Sigmoid", "ReLU", "Step"], correct: 1, explanation: "Sigmoid maps output to 0-1 probability." },
                    { id: 3, question: "Output of Logistic Regression:", options: ["Any number", "Probability (0 to 1)", "Integer", "String"], correct: 1, explanation: "It outputs probability of class membership." }
                ]
            },
            'm2-t25': {
                title: "Feature Importance",
                questions: [
                    { id: 1, question: "Feature importance tells us:", options: ["Which feature cost most", "Which feature impacted prediction most", "Nothing", "Row count"], correct: 1, explanation: "It ranks features by influence." },
                    { id: 2, question: "Can we use it for feature selection?", options: ["Yes", "No", "Maybe", "Only for images"], correct: 0, explanation: "Yes, drop low importance features." },
                    { id: 3, question: "Tree models provide importance naturally?", options: ["Yes", "No", "Never", "Only SVM"], correct: 0, explanation: "Trees calculate split importance automatically." }
                ]
            },
            'm2-activity1': {
                title: "Activity: NumPy Soil",
                questions: [
                    { id: 1, question: "To find pH < 5.5:", options: ["ph < 5.5", "ph.less(5.5)", "check(ph)", "loop"], correct: 0, explanation: "Boolean indexing: ph < 5.5 works directly." },
                    { id: 2, question: "Result of ph < 5.5 is:", options: ["Numbers", "Boolean array (True/False)", "One number", "Error"], correct: 1, explanation: "It returns an array of Trues and Falses." },
                    { id: 3, question: "np.mean(ph) calculates:", options: ["Total", "Average", "Max", "Min"], correct: 1, explanation: "Mean is the average." }
                ]
            },
            'm2-activity2': {
                title: "Activity: Linear Regression",
                questions: [
                    { id: 1, question: "Shape of X for sklearn:", options: ["1D array", "2D array (n_samples, n_features)", "3D", "List"], correct: 1, explanation: "Sklearn expects 2D array for features." },
                    { id: 2, question: "y (target) is usually:", options: ["1D array", "2D array", "Matrix", "String"], correct: 0, explanation: "Target is typically a 1D vector." },
                    { id: 3, question: "If rain increases, yield increases. This is:", options: ["Negative correlation", "Positive correlation", "No correlation", "Random"], correct: 1, explanation: "Both moving up = Positive." }
                ]
            },
            'm2-activity3': {
                title: "Activity: Classification",
                questions: [
                    { id: 1, question: "Target variable for crop type:", options: ["Continuous", "Categorical (Discrete)", "Text", "None"], correct: 1, explanation: "Classes like 'Wheat','Rice' are categorical." },
                    { id: 2, question: "Encoding 'Wheat'=0, 'Rice'=1 is called:", options: ["Label Encoding", "One-hot", "Scaling", "Binning"], correct: 0, explanation: "Assigning integers to classes is Label Encoding." },
                    { id: 3, question: "Algorithm for this task:", options: ["Linear Regression", "Logistic Regression / Decision Tree", "K-Means", "PCA"], correct: 1, explanation: "Classifiers are needed." }
                ]
            },
            'm2-activity4': {
                title: "Activity: Evaluation",
                questions: [
                    { id: 1, question: "Accuracy = ", options: ["Correct/Total", "Wrong/Total", "Total/Correct", "None"], correct: 0, explanation: "Accuracy is fraction of correct predictions." },
                    { id: 2, question: "Confusion Matrix shows:", options: ["TP, TN, FP, FN", "Only Accuracy", "Nothing", "Time"], correct: 0, explanation: "It breaks down correct and incorrect predictions types." },
                    { id: 3, question: "Is accuracy always best?", options: ["Yes", "No (especially for imbalanced data)", "Always", "Never"], correct: 1, explanation: "Accuracy is misleading if classes are imbalanced." }
                ]
            },
            'm3-t4': {
                title: "Weather Integration",
                questions: [
                    { id: 1, question: "Weather APIs provide:", options: ["Only images", "Real-time and historical weather data", "Nothing useful", "Only text"], correct: 1, explanation: "APIs like OpenWeather give temp, rain, wind data." },
                    { id: 2, question: "Why preprocess weather data?", options: ["It's clean already", "Handle missing values, normalize", "To delete it", "Not needed"], correct: 1, explanation: "Weather data needs cleaning and feature creation." },
                    { id: 3, question: "Useful weather features:", options: ["Only temperature", "Temp, rainfall, humidity, wind", "None", "Color"], correct: 1, explanation: "Multiple weather factors affect crop growth." }
                ]
            },
            'm3-t6': {
                title: "Crop Health Assessment",
                questions: [
                    { id: 1, question: "NDVI stands for:", options: ["Nothing", "Normalized Difference Vegetation Index", "New Data Value", "Node Division"], correct: 1, explanation: "NDVI measures vegetation health from satellite data." },
                    { id: 2, question: "NDVI values range:", options: ["-1 to 1", "0 to 100", "Only positive", "Any number"], correct: 0, explanation: "NDVI ranges from -1 to 1; higher = healthier vegetation." },
                    { id: 3, question: "NDVI is calculated from:", options: ["Soil samples", "NIR and Red light bands", "Temperature", "Price"], correct: 1, explanation: "NDVI = (NIR - Red) / (NIR + Red) from satellite images." }
                ]
            },
            'm3-t9': {
                title: "CNN Basics",
                questions: [
                    { id: 1, question: "Convolutional layers:", options: ["Flatten images", "Extract spatial features", "Only classify", "Reduce size"], correct: 1, explanation: "Conv layers detect edges, patterns via filters." },
                    { id: 2, question: "Pooling layers:", options: ["Increase size", "Reduce spatial dimensions", "Add features", "Train weights"], correct: 1, explanation: "Pooling (max/avg) downsamples feature maps." },
                    { id: 3, question: "CNNs are best for:", options: ["Text only", "Images and spatial data", "Audio only", "Numbers only"], correct: 1, explanation: "CNNs excel at image and grid-like data." }
                ]
            },
            'm3-t10': {
                title: "Transfer Learning",
                questions: [
                    { id: 1, question: "Transfer learning uses:", options: ["Random weights", "Pre-trained models on new tasks", "No learning", "Only ImageNet"], correct: 1, explanation: "Transfer learning adapts pre-trained models to new tasks." },
                    { id: 2, question: "ResNet is:", options: ["A regression model", "Deep CNN with skip connections", "Clustering algorithm", "Decision tree"], correct: 1, explanation: "ResNet uses residual connections for very deep networks." },
                    { id: 3, question: "Fine-tuning means:", options: ["Starting from scratch", "Adjusting pre-trained weights", "Deleting model", "Only testing"], correct: 1, explanation: "Fine-tuning retrains later layers on new data." }
                ]
            },
            'm3-t12': {
                title: "Pest & Weed Detection",
                questions: [
                    { id: 1, question: "Object detection differs from classification:", options: ["No difference", "Locates objects with bounding boxes", "Slower only", "Less accurate"], correct: 1, explanation: "Object detection finds WHERE objects are, not just WHAT." },
                    { id: 2, question: "YOLO stands for:", options: ["You Only Look Once", "Yearly Object Learning", "Yellow Orange Light", "None"], correct: 0, explanation: "YOLO is a fast object detection algorithm." },
                    { id: 3, question: "YOLO advantage:", options: ["Slow", "Real-time detection", "Low accuracy", "CPU only"], correct: 1, explanation: "YOLO processes entire image in one pass = fast." }
                ]
            },
            'm3-t19': {
                title: "Time Series Fundamentals",
                questions: [
                    { id: 1, question: "Time series components:", options: ["Only trend", "Trend, seasonality, residuals", "Random only", "None"], correct: 1, explanation: "Components: trend, seasonal, cyclical, irregular." },
                    { id: 2, question: "Stationarity means:", options: ["Changing over time", "Statistical properties constant over time", "No data", "Random"], correct: 1, explanation: "Stationary = constant mean/variance over time." },
                    { id: 3, question: "ACF measures:", options: ["Altitude", "Autocorrelation at different lags", "Average", "None"], correct: 1, explanation: "ACF = AutoCorrelation Function shows correlation at lags." }
                ]
            },
            'm3-t20': {
                title: "ARIMA Models",
                questions: [
                    { id: 1, question: "ARIMA stands for:", options: ["AutoRegressive Integrated Moving Average", "Agriculture Regression", "Auto Random Index", "None"], correct: 0, explanation: "Standard time series forecasting method." },
                    { id: 2, question: "ARIMA is good for:", options: ["Images", "Time Series (Forecasting)", "Classification", "Audio"], correct: 1, explanation: "It models temporal dependencies." },
                    { id: 3, question: "Integrated (I) part handles:", options: ["Seasonality/Trend removal (Stationarity)", "Noise", "Missing values", "Outliers"], correct: 0, explanation: "Differencing makes data stationary." }
                ]
            },
            'm3-activity1': { title: "Activity: Yield Prediction", questions: [{ id: 1, question: "Metric for regression:", options: ["Accuracy", "RMSE", "F1-Score", "Recall"], correct: 1, explanation: "RMSE measures error in continuous values." }] },
            'm3-activity2': { title: "Activity: Disease Detection", questions: [{ id: 1, question: "Confidence score indicates:", options: ["Accuracy", "Probability/Certainty", "Error rate", "Speed"], correct: 1, explanation: "Higher score = model is sure." }] },
            'm3-activity3': { title: "Activity: Soil Health", questions: [{ id: 1, question: "Soil classification is:", options: ["Regression", "Clustering", "Classification", "Forecasting"], correct: 2, explanation: "Assigning labels (Fertile/Not)." }] },
            'm3-activity4': { title: "Activity: Weather Forecast", questions: [{ id: 1, question: "Forecasting future steps:", options: ["predict()", "forecast()", "score()", "fit()"], correct: 1, explanation: "forecast() method generates future values." }] },

            // MODULE 4 QUIZZES
            'm4-t1': { title: "Problem Definition", questions: [{ id: 1, question: "Good problem statement:", options: ["Vague", "Specific & Measurable", "Too broad", "Technical only"], correct: 1, explanation: "Must be precise." }, { id: 2, question: "Why define scope?", options: ["To do everything", "To limit work & ensure feasibility", "No reason", "To delay"], correct: 1, explanation: "Prevents scope creep." }] },
            'm4-t5': { title: "Feasibility", questions: [{ id: 1, question: "Technical feasibility checks:", options: ["Cost", "If we have skills/tools", "Legal issues", "Market"], correct: 1, explanation: "Can we build it?" }] },
            'm4-t14': { title: "Model Development", questions: [{ id: 1, question: "Baseline model:", options: ["Best model", "Simple first attempt", "Final model", "Worst model"], correct: 1, explanation: "Establishes a performance floor." }] },
            'm4-t25': { title: "Final Presentation", questions: [{ id: 1, question: "Key presentation element:", options: ["Only code", "Story & Impact", "Only math", "Silence"], correct: 1, explanation: "Explain the 'Why' and 'So What'." }] }
        };
    }

    renderQuiz() {
        let html = `
            <div class="quiz-header">
                <h3><i class="fas fa-clipboard-question"></i> ${this.currentQuiz.title} - Quiz</h3>
                <p class="quiz-instructions">Select your answer. Instant feedback provided!</p>
            </div>
            <div class="quiz-questions">
        `;

        this.currentQuiz.questions.forEach((q, index) => {
            html += `
                <div class="quiz-question" data-question-id="${q.id}">
                    <div class="question-header">
                        <span class="question-number">Question ${index + 1} of ${this.totalQuestions}</span>
                    </div>
                    <p class="question-text"><strong>${q.question}</strong></p>
                    <div class="quiz-options">
                        ${q.options.map((option, optIndex) => `
                            <div class="quiz-option" data-question="${q.id}" data-option="${optIndex}">
                                <input type="radio" name="question-${q.id}" id="q${q.id}-opt${optIndex}" value="${optIndex}">
                                <label for="q${q.id}-opt${optIndex}">${option}</label>
                            </div>
                        `).join('')}
                    </div>
                    <div class="answer-feedback" id="feedback-${q.id}" style="display: none;"></div>
                </div>
            `;
        });

        html += `
            </div>
            <div class="quiz-results" id="quizResults" style="display: none;">
                <h4>🎉 Quiz Complete!</h4>
                <div class="score-display">
                    <div class="score-circle">
                        <span class="score-value" id="scoreValue">0</span>
                        <span class="score-total">/ ${this.totalQuestions}</span>
                    </div>
                    <p class="score-percentage" id="scorePercentage">0%</p>
                </div>
                <p class="score-message" id="scoreMessage"></p>
                <button class="btn-retry" onclick="location.reload()">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
            </div>
        `;

        return html;
    }

    checkAnswer(questionId, selectedOption) {
        const question = this.currentQuiz.questions.find(q => q.id === questionId);
        if (!question) return;

        const isCorrect = selectedOption === question.correct;
        this.userAnswers[questionId] = { selected: selectedOption, correct: isCorrect };

        if (isCorrect) this.score++;

        // Show feedback
        const feedbackDiv = document.getElementById(`feedback-${questionId}`);
        feedbackDiv.style.display = 'block';
        feedbackDiv.className = 'answer-feedback ' + (isCorrect ? 'correct' : 'incorrect');
        feedbackDiv.innerHTML = `
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-content">
                <p class="feedback-status"><strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong></p>
                ${!isCorrect ? `<p class="correct-answer">Correct: <strong>${question.options[question.correct]}</strong></p>` : ''}
                <p class="explanation"><em>${question.explanation}</em></p>
            </div>
        `;

        // Disable options
        const options = document.querySelectorAll(`[data-question="${questionId}"]`);
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.style.opacity = '0.7';
            const idx = parseInt(opt.getAttribute('data-option'));
            if (idx === question.correct) opt.classList.add('correct-answer-highlight');
            else if (idx === selectedOption && !isCorrect) opt.classList.add('wrong-answer-highlight');
        });

        if (Object.keys(this.userAnswers).length === this.totalQuestions) {
            this.showResults();
        }
    }

    showResults() {
        const resultsDiv = document.getElementById('quizResults');
        const percentage = Math.round((this.score / this.totalQuestions) * 100);

        resultsDiv.style.display = 'block';
        document.getElementById('scoreValue').textContent = this.score;
        document.getElementById('scorePercentage').textContent = `${percentage}%`;

        let message = '';
        if (percentage >= 90) message = '🌟 Outstanding! Masterful performance!';
        else if (percentage >= 70) message = '👍 Great job! Solid understanding.';
        else if (percentage >= 50) message = '📚 Good effort. Review and retry!';
        else message = '💪 Keep practicing. You can do this!';

        document.getElementById('scoreMessage').textContent = message;
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

        if (typeof progressTracker !== 'undefined') {
            // Get current topic ID from URL hash or global state
            const topicId = router ? router.currentRoute : 'unknown';
            progressTracker.saveQuizScore(topicId, this.score, this.totalQuestions);
        }
    }
}

// Initialize
// Initialize immediately (comprehensiveStructure should be loaded)
try {
    window.quizSystem = new QuizSystem();
    console.log('[QuizSystem] Initialized successfully');
} catch (e) {
    console.error('[QuizSystem] Initialization failed:', e);
}

// Event Delegation for Quiz Interactions
document.addEventListener('click', function (e) {
    const option = e.target.closest('.quiz-option');
    if (option && option.querySelector('input[type="radio"]')) {
        const qId = parseInt(option.getAttribute('data-question'));
        const optId = parseInt(option.getAttribute('data-option'));
        const input = option.querySelector('input[type="radio"]');
        if (input && !input.disabled && window.quizSystem) {
            input.checked = true;
            window.quizSystem.checkAnswer(qId, optId);
        }
    }
});
