// Content.js - Course content structure
// Due to file size, this contains topic metadata and simplified content
// Full handouts are loaded from markdown files

class CourseContent {
    constructor() {
        this.modules = [
            {
                id: 1,
                title: "Module 1: Fundamentals of AI and Python",
                icon: "fa-brain",
                topics: [
                    {
                        id: "module-1-topic-1",
                        number: "1.1",
                        title: "Intro to AI/ML & Agriculture",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout1_1(),
                        code: this.getCode1_1()
                    },
                    {
                        id: "module-1-topic-2",
                        number: "1.2",
                        title: "Math Foundations & Data Collection",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout1_2(),
                        code: this.getCode1_2()
                    },
                    {
                        id: "module-1-topic-3",
                        number: "1.3",
                        title: "Python Basics (Part 1)",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout1_3(),
                        code: this.getCode1_3()
                    },
                    {
                        id: "module-1-topic-4",
                        number: "1.4",
                        title: "Python Basics (Part 2)",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout1_4(),
                        code: this.getCode1_4()
                    }
                ]
            },
            {
                id: 2,
                title: "Module 2: Python & ML Fundamentals",
                icon: "fa-code",
                topics: [
                    {
                        id: "module-2-topic-1",
                        number: "2.1",
                        title: "Data Science Libraries",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout2_1(),
                        code: this.getCode2_1()
                    },
                    {
                        id: "module-2-topic-2",
                        number: "2.2",
                        title: "Visualization",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout2_2(),
                        code: this.getCode2_2()
                    },
                    {
                        id: "module-2-topic-3",
                        number: "2.3",
                        title: "ML Fundamentals & Regression",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout2_3(),
                        code: this.getCode2_3()
                    },
                    {
                        id: "module-2-topic-4",
                        number: "2.4",
                        title: "Classification & Evaluation",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout2_4(),
                        code: this.getCode2_4()
                    }
                ]
            },
            {
                id: 3,
                title: "Module 3: AI/ML Applications",
                icon: "fa-robot",
                topics: [
                    {
                        id: "module-3-topic-1",
                        number: "3.1",
                        title: "Predictive Analytics",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout3_1(),
                        code: this.getCode3_1()
                    },
                    {
                        id: "module-3-topic-2",
                        number: "3.2",
                        title: "Disease & Pest Management",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout3_2(),
                        code: this.getCode3_2()
                    },
                    {
                        id: "module-3-topic-3",
                        number: "3.3",
                        title: "Soil & Resource Management",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout3_3(),
                        code: this.getCode3_3()
                    },
                    {
                        id: "module-3-topic-4",
                        number: "3.4",
                        title: "Market & Weather Analysis",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout3_4(),
                        code: this.getCode3_4()
                    }
                ]
            },
            {
                id: 4,
                title: "Module 4: Capstone Project",
                icon: "fa-graduation-cap",
                topics: [
                    {
                        id: "module-4-topic-1",
                        number: "4.1",
                        title: "Project Planning & Design",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout4_1(),
                        code: this.getCode4_1()
                    },
                    {
                        id: "module-4-topic-2",
                        number: "4.2",
                        title: "Implementation & Development",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout4_2(),
                        code: this.getCode4_2()
                    },
                    {
                        id: "module-4-topic-3",
                        number: "4.3",
                        title: "Evaluation & Presentation",
                        colabUrl: "https://colab.research.google.com/",
                        handout: this.getHandout4_3(),
                        code: this.getCode4_3()
                    }
                ]
            }
        ];
    }

    getTopic(topicId) {
        for (const module of this.modules) {
            const topic = module.topics.find(t => t.id === topicId);
            if (topic) return topic;
        }
        return null;
    }

    getAllTopicIds() {
        const ids = [];
        for (const module of this.modules) {
            for (const topic of module.topics) {
                ids.push(topic.id);
            }
        }
        return ids;
    }

    // Content has been moved to lecture-content.js for comprehensive handouts.
    // These methods are kept for structure compatibility but return null.

    getHandout1_1() { return null; }
    getCode1_1() { return null; }

    getHandout1_2() { return null; }
    getCode1_2() { return null; }

    getHandout1_3() { return null; }
    getCode1_3() { return null; }

    getHandout1_4() { return null; }
    getCode1_4() { return null; }

    getHandout2_1() { return null; }
    getCode2_1() { return null; }

    getHandout2_2() { return null; }
    getCode2_2() { return null; }

    getHandout2_3() { return null; }
    getCode2_3() { return null; }

    getHandout2_4() { return null; }
    getCode2_4() { return null; }

    getHandout3_1() { return null; }
    getCode3_1() { return null; }

    getHandout3_2() { return null; }
    getCode3_2() { return null; }

    getHandout3_3() { return null; }
    getCode3_3() { return null; }

    getHandout3_4() { return null; }
    getCode3_4() { return null; }

    getHandout4_1() { return null; }
    getCode4_1() { return null; }

    getHandout4_2() { return null; }
    getCode4_2() { return null; }

    getHandout4_3() { return null; }
    getCode4_3() { return null; }
}

// Export
const courseContent = new CourseContent();

window.courseContent = courseContent;
