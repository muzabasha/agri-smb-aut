/**
 * AgriBot - Intelligent Course Assistant
 * Provides answers in English, Kannada, Hindi, Telugu, and Tamil.
 * Features: Slide Menu, Multilingual Support, Robust Voice Fallback (Phonetic).
 */

class AgriBot {
    constructor() {
        this.isOpen = false;
        this.language = 'en'; // en, hi, kn, te, ta

        // Supported Languages
        this.languages = {
            en: "English",
            hi: "हिंदी (Hindi)",
            kn: "ಕನ್ನಡ (Kannada)",
            te: "తెలుగు (Telugu)",
            ta: "தமிழ் (Tamil)"
        };

        // Knowledge Base with Text (Display) and Speech (Phonetic Fallback)
        this.knowledge = {
            en: {
                welcome: {
                    text: "Hello! I'm AgriBot. I can answer your questions about the course, AI, and Agriculture in 5 languages!",
                    speech: "Hello! I'm AgriBot. I can answer your questions about the course, AI, and Agriculture in 5 languages!"
                },
                unknown: {
                    text: "I'm not sure about that. Try asking about 'Certificate', 'Python', 'Jobs', or check the FAQ menu.",
                    speech: "I'm not sure about that. Try asking about Certificate, Python, Jobs, or check the FAQ menu."
                },
                questions: [
                    { label: "What is this course?", key: "what is this course" },
                    { label: "Do I get a certificate?", key: "certificate" },
                    { label: "Is it free?", key: "is it free" },
                    { label: "Key topics covered?", key: "key topics" },
                    { label: "What is AI?", key: "what is ai" },
                    { label: "AI in Agriculture?", key: "ai in agriculture" },
                    { label: "What is Machine Learning?", key: "what is ml" },
                    { label: "Is programming needed?", key: "programming needed" },
                    { label: "What is Python?", key: "what is python" },
                    { label: "How to start?", key: "how to start" },
                    { label: "What is a module?", key: "what is a module" },
                    { label: "Course duration?", key: "duration" },
                    { label: "What is Google Colab?", key: "what is google colab" },
                    { label: "How to run code?", key: "run code" },
                    { label: "What if I get stuck?", key: "get stuck" },
                    { label: "Can I use my phone?", key: "ai on phone" },
                    { label: "Job opportunities?", key: "jobs" },
                    { label: "Real-world projects?", key: "projects" },
                    { label: "Who created this?", key: "creator" },
                    { label: "Final Assessment?", key: "final assessment" }
                ],
                faqs: {
                    "what is this course": { text: "This is the AI/ML in Agriculture training program, teaching you how to apply technology to farming.", speech: "This is the AI ML in Agriculture training program, teaching you how to apply technology to farming." },
                    "certificate": { text: "Yes! You receive a verified certificate after completing all 5 modules and the final quiz.", speech: "Yes! You receive a verified certificate after completing all 5 modules and the final quiz." },
                    "is it free": { text: "Yes, this entire training program is completely free for students.", speech: "Yes, this entire training program is completely free for students." },
                    "key topics": { text: "We cover Python, Data Science, Computer Vision, IoT, and Smart Farming projects.", speech: "We cover Python, Data Science, Computer Vision, IoT, and Smart Farming projects." },
                    "what is ai": { text: "Artificial Intelligence is asking computers to do smart things, like recognizing crop diseases from photos.", speech: "Artificial Intelligence is asking computers to do smart things, like recognizing crop diseases from photos." },
                    "ai in agriculture": { text: "AI helps in weather prediction, disease detection, automated irrigation, and crop yield estimation.", speech: "AI helps in weather prediction, disease detection, automated irrigation, and crop yield estimation." },
                    "what is ml": { text: "Machine Learning is a part of AI where computers learn from data (like past rainfall) to make decisions.", speech: "Machine Learning is a part of AI where computers learn from data, like past rainfall, to make decisions." },
                    "programming needed": { text: "No prior coding experience is needed. We start from the very basics of Python in Module 1.", speech: "No prior coding experience is needed. We start from the very basics of Python in Module 1." },
                    "what is python": { text: "Python is a popular, easy-to-learn programming language used for building AI models.", speech: "Python is a popular, easy to learn programming language used for building AI models." },
                    "how to start": { text: "Click on 'Module 1' in the sidebar. Follow the Handouts and try the Labs.", speech: "Click on Module 1 in the sidebar. Follow the Handouts and try the Labs." },
                    "what is a module": { text: "A module is a chapter. We have 5 modules, from basics to a final capstone project.", speech: "A module is a chapter. We have 5 modules, from basics to a final capstone project." },
                    "duration": { text: "It typically takes 4-6 weeks to complete if you spend a few hours each week.", speech: "It typically takes 4 to 6 weeks to complete if you spend a few hours each week." },
                    "what is google colab": { text: "Google Colab is a free website where you can write and run Python code without installing anything.", speech: "Google Colab is a free website where you can write and run Python code without installing anything." },
                    "run code": { text: "In the Lab tab, you'll find 'Run' buttons or links to Colab. Just click play!", speech: "In the Lab tab, you'll find Run buttons or links to Colab. Just click play!" },
                    "get stuck": { text: "Don't worry! Use the specific 'Activity' tabs to practice, or ask me for help.", speech: "Don't worry! Use the specific Activity tabs to practice, or ask me for help." },
                    "ai on phone": { text: "Yes, you can view the lessons on a phone, but a laptop is better for coding practice.", speech: "Yes, you can view the lessons on a phone, but a laptop is better for coding practice." },
                    "jobs": { text: "You can become an Agri-Data Analyst, Smart Farm Manager, or AI Researcher.", speech: "You can become an Agri Data Analyst, Smart Farm Manager, or AI Researcher." },
                    "projects": { text: "Yes! Module 4 and 5 are dedicated to building real-world projects like Disease Detection.", speech: "Yes! Module 4 and 5 are dedicated to building real world projects like Disease Detection." },
                    "creator": { text: "This course is part of the GKVK Training Program contribution.", speech: "This course is part of the GKVK Training Program contribution." },
                    "final assessment": { text: "It's a quiz at the end of the course to test your knowledge before certification.", speech: "It's a quiz at the end of the course to test your knowledge before certification." }
                }
            },
            hi: {
                welcome: {
                    text: "नमस्ते! मैं एग्रीबॉट हूँ। मैं कोर्स और कृषि एआई के बारे में आपके सवालों का जवाब दे सकता हूँ।",
                    speech: "Namaste! Main AgriBot hoon. Main course aur krishi AI ke baare mein aapke sawalon ka jawab de sakta hoon."
                },
                unknown: {
                    text: "क्षमा करें, मुझे समझ नहीं आया। 'सर्टिफिकेट', 'नौकरी' या 'पायथन' के बारे में पूछें।",
                    speech: "Kshama karein, mujhe samajh nahi aaya. Certificate, naukri ya Python ke baare mein poochein."
                },
                questions: [
                    { label: "यह कोर्स क्या है?", key: "what is this course" },
                    { label: "क्या मुझे प्रमाण पत्र मिलेगा?", key: "certificate" },
                    { label: "क्या यह मुफ्त है?", key: "is it free" },
                    { label: "मुख्य विषय क्या हैं?", key: "key topics" },
                    { label: "AI क्या है?", key: "what is ai" },
                    { label: "कृषि में AI?", key: "ai in agriculture" },
                    { label: "मशीन लर्निंग (ML) क्या है?", key: "what is ml" },
                    { label: "क्या प्रोग्रामिंग आनी चाहिए?", key: "programming needed" },
                    { label: "पायथन क्या है?", key: "what is python" },
                    { label: "शुरुआत कैसे करें?", key: "how to start" },
                    { label: "मॉड्यूल क्या है?", key: "what is a module" },
                    { label: "कोर्स की अवधि?", key: "duration" },
                    { label: "गूगल कोलाब क्या है?", key: "what is google colab" },
                    { label: "कोड कैसे चलाएं?", key: "run code" },
                    { label: "अगर मैं अटक जाऊं?", key: "get stuck" },
                    { label: "क्या मैं फोन इस्तेमाल कर सकता हूँ?", key: "ai on phone" },
                    { label: "नौकरी के अवसर?", key: "jobs" },
                    { label: "प्रोजेक्ट्स?", key: "projects" },
                    { label: "इसे किसने बनाया?", key: "creator" },
                    { label: "अंतिम परीक्षा?", key: "final assessment" }
                ],
                faqs: {
                    "what is this course": { text: "यह कृषि में एआई/एमएल प्रशिक्षण कार्यक्रम है, जो आपको खेती में तकनीक का उपयोग करना सिखाता है।", speech: "Yeh krishi mein AI ML prashikshan karyakram hai, jo aapko kheti mein takneek ka upayog karna sikhata hai." },
                    "certificate": { text: "हाँ! सभी 5 मॉड्यूल और अंतिम परीक्षा पास करने के बाद आपको प्रमाण पत्र मिलेगा।", speech: "Haan! Sabhi 5 modules aur antim pariksha paas karne ke baad aapko pramaan patra milega." },
                    "is it free": { text: "हाँ, यह पूरा प्रशिक्षण कार्यक्रम छात्रों के लिए पूरी तरह से मुफ्त है।", speech: "Haan, yeh poora prashikshan karyakram chatron ke liye poori tarah se muft hai." },
                    "key topics": { text: "हम पायथन, डेटा साइंस, कंप्यूटर विजन, आईओटी और स्मार्ट फार्मिंग प्रोजेक्ट्स को कवर करते हैं।", speech: "Hum Python, Data Science, Computer Vision, IoT aur Smart Farming projects ko cover karte hain." },
                    "what is ai": { text: "एआई (AI) का मतलब कंप्यूटर को स्मार्ट काम करना सिखाना है, जैसे फोटो से फसल की बीमारी पहचानना।", speech: "AI ka matlab computer ko smart kaam karna sikhana hai, jaise photo se fasal ki bimari pehchanna." },
                    "ai in agriculture": { text: "एआई मौसम की भविष्यवाणी, बीमारी का पता लगाने और सिंचाई में मदद करता है।", speech: "AI mausam ki bhavishyavani, bimari ka pata lagane aur sinchai mein madad karta hai." },
                    "what is ml": { text: "मशीन लर्निंग एआई का हिस्सा है जहाँ कंप्यूटर डेटा से सीखते हैं।", speech: "Machine Learning AI ka hissa hai jahan computer data se seekhte hain." },
                    "programming needed": { text: "किसी पूर्व कोडिंग अनुभव की आवश्यकता नहीं है। हम मॉड्यूल 1 में पायथन की मूल बातें सिखाते हैं।", speech: "Kisi poorv coding anubhav ki avashyakta nahi hai. Hum Module 1 mein Python ki mool baatein sikhate hain." },
                    "what is python": { text: "पायथन एक आसान प्रोग्रामिंग भाषा है जिसका उपयोग एआई मॉडल बनाने के लिए किया जाता है।", speech: "Python ek aasaan programming bhasha hai jiska upayog AI model banane ke liye kiya jaata hai." },
                    "how to start": { text: "साइडबार में 'मॉड्यूल 1' पर क्लिक करें और सीखना शुरू करें।", speech: "Sidebar mein Module 1 par click karein aur seekhna shuru karein." },
                    "what is a module": { text: "मॉड्यूल एक अध्याय है। हमारे पास कुल 5 मॉड्यूल हैं।", speech: "Module ek adhyay hai. Hamare paas kul 5 modules hain." },
                    "duration": { text: "इसे पूरा करने में आमतौर पर 4-6 सप्ताह लगते हैं।", speech: "Ise poora karne mein aamtaur par 4 se 6 saptah lagte hain." },
                    "what is google colab": { text: "गूगल कोलाब एक मुफ्त वेबसाइट है जहाँ आप बिना कुछ इंस्टॉल किए पायथन कोड चला सकते हैं।", speech: "Google Colab ek muft website hai jahan aap bina kuch install kiye Python code chala sakte hain." },
                    "run code": { text: "लैब टैब में कोड चलाने के लिए बटन मिलेंगे।", speech: "Lab tab mein code chalane ke liye button milenge." },
                    "get stuck": { text: "चंता न करें! मदद के लिए मुझसे पूछें या एक्टिविटी टैब देखें।", speech: "Chinta na karein! Madad ke liye mujhse poochein ya Activity tab dekhein." },
                    "ai on phone": { text: "हाँ, आप फोन पर सीख सकते हैं, लेकिन कोडिंग के लिए लैपटॉप बेहतर है।", speech: "Haan, aap phone par seekh sakte hain, lekin coding ke liye laptop behtar hai." },
                    "jobs": { text: "आप एग्री-डेटा विश्लेषक या स्मार्ट फार्म मैनेजर बन सकते हैं।", speech: "Aap Agri Data Vishleshak ya Smart Farm Manager ban sakte hain." },
                    "projects": { text: "हाँ! मॉड्यूल 4 और 5 में हम रियल-वर्ल्ड प्रोजेक्ट्स बनाते हैं।", speech: "Haan! Module 4 aur 5 mein hum real world projects banate hain." },
                    "creator": { text: "यह कोर्स GKVK प्रशिक्षण कार्यक्रम का हिस्सा है।", speech: "Yeh course GKVK prashikshan karyakram ka hissa hai." },
                    "final assessment": { text: "यह प्रमाणीकरण से पहले आपके ज्ञान का परीक्षण करने के लिए एक अंतिम परीक्षा है।", speech: "Yeh pramaanikaran se pehle aapke gyaan ka parikshan karne ke liye ek antim pariksha hai." }
                }
            },
            kn: {
                welcome: {
                    text: "ನಮಸ್ಕಾರ! ನಾನು ಅಗ್ರಿಬಾಟ್. ಕೃಷಿಯಲ್ಲಿ ಎಐ ಮತ್ತು ಕೋರ್ಸ್ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ನಾನಿಲ್ಲಿದ್ದೇನೆ.",
                    speech: "Namaskara! Naanu AgriBot. Krishiyalli AI mattu course bagge nimma prashnegalige uttarisalu naanilliddene."
                },
                unknown: {
                    text: "ಕ್ಷಮಿಸಿ, ಅದು ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಕೋರ್ಸ್ ಅಥವಾ ಪ್ರಮಾಣಪತ್ರದ ಬಗ್ಗೆ ಕೇಳಿ.",
                    speech: "Kshamisi, adu nanage arthavaagalilla. Dayavittu course athava pramaanapatrada bagge keli."
                },
                questions: [
                    { label: "ಈ ಕೋರ್ಸ್ ಏನು?", key: "what is this course" },
                    { label: "ನನಗೆ ಪ್ರಮಾಣಪತ್ರ ಸಿಗುತ್ತದೆಯೇ?", key: "certificate" },
                    { label: "ಇದು ಉಚಿತವೇ?", key: "is it free" },
                    { label: "ಪ್ರಮುಖ ವಿಷಯಗಳು?", key: "key topics" },
                    { label: "AI ಎಂದರೇನು?", key: "what is ai" },
                    { label: "ಕೃಷಿಯಲ್ಲಿ AI?", key: "ai in agriculture" },
                    { label: "ಮಷಿನ್ ಲರ್ನಿಂಗ್ ಎಂದರೇನು?", key: "what is ml" },
                    { label: "ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಬೇಕೇ?", key: "programming needed" },
                    { label: "ಪೈಥಾನ್ ಎಂದರೇನು?", key: "what is python" },
                    { label: "ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ?", key: "how to start" },
                    { label: "ಮಾಡ್ಯೂಲ್ ಎಂದರೇನು?", key: "what is a module" },
                    { label: "ಕೋರ್ಸ್ ಅವಧಿ?", key: "duration" },
                    { label: "ಗೂಗಲ್ ಕೋಲಾಬ್ ಎಂದರೇನು?", key: "what is google colab" },
                    { label: "ಕೋಡ್ ರನ್ ಮಾಡುವುದು ಹೇಗೆ?", key: "run code" },
                    { label: "ಸಂದೇಹ ಬಂದರೆ?", key: "get stuck" },
                    { label: "ನಾನು ಫೋನ್ ಬಳಸಬಹುದೇ?", key: "ai on phone" },
                    { label: "ಉದ್ಯೋಗಾವಕಾಶಗಳು?", key: "jobs" },
                    { label: "ಪ್ರಾಜೆಕ್ಟ್ಗಳು?", key: "projects" },
                    { label: "ಇದನ್ನು ಯಾರು ರಚಿಸಿದ್ದಾರೆ?", key: "creator" },
                    { label: "ಅಂತಿಮ ಪರೀಕ್ಷೆ?", key: "final assessment" }
                ],
                faqs: {
                    "what is this course": { text: "ಇದು ಕೃಷಿಯಲ್ಲಿ ಎಐ/ಎಂಎಲ್ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮ. ಕೃಷಿಯಲ್ಲಿ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೇಗೆ ಬಳಸಬೇಕೆಂದು ಇದು ಕಲಿಸುತ್ತದೆ.", speech: "Idu krishiyalli AI ML tarabeti karyakrama. Krishiyalli tantrajnanavannu hege balasabekendu idu kalisuttade." },
                    "certificate": { text: "ಹೌದು! ಎಲ್ಲಾ 5 ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ನೀವು ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪಡೆಯುತ್ತೀರಿ.", speech: "Houdu! Ella 5 modulegalannu purnagolishida nantara neevu pramaanapatravannu padeyutteeri." },
                    "is it free": { text: "ಹೌದು, ಈ ತರಬೇತಿ ಸಂಪೂರ್ಣವಾಗಿ ಉಚಿತವಾಗಿದೆ.", speech: "Houdu, ee tarabeti sampurnavagi uchitavagide." },
                    "key topics": { text: "ನಾವು ಪೈಥಾನ್, ಡೇಟಾ ಸೈನ್ಸ್ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್ ಬಗ್ಗೆ ಕಲಿಸುತ್ತೇವೆ.", speech: "Naavu Python, Data Science mattu Smart Farming bagge kalisutteve." },
                    "what is ai": { text: "ಎಐ (AI) ಎಂದರೆ ಕಂಪ್ಯೂಟರ್‌ಗಳಿಗೆ ಬುದ್ಧಿವಂತ ಕೆಲಸಗಳನ್ನು ಕಲಿಸುವುದು, ಉದಾಹರಣೆಗೆ ಬೆಳೆ ರೋಗಗಳನ್ನು ಗುರುತಿಸುವುದು.", speech: "AI endare computergalige buddhivanta kelasagalannu kalisuvudu, udaharanege bele rogagalannu gurutisuvudu." },
                    "ai in agriculture": { text: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಮತ್ತು ನೀರಿನ ನಿರ್ವಹಣೆಗೆ ಎಐ ಸಹಾಯ ಮಾಡುತ್ತದೆ.", speech: "Havamaana munsoochane mattu neerina nirvahanege AI sahaaya maaduttade." },
                    "what is ml": { text: "ಮೆಷಿನ್ ಲರ್ನಿಂಗ್ ಎಂದರೆ ಕಂಪ್ಯೂಟರ್‌ಗಳು ಡೇಟಾದಿಂದ ಕಲಿಯುವ ವಿಧಾನ.", speech: "Machine Learning endare computergalu datadinda kaliyuva vidhana." },
                    "programming needed": { text: "ಯಾವುದೇ ಕೋಡಿಂಗ್ ಅನುಭವ ಬೇಕಿಲ್ಲ. ನಾವು ಪೈಥಾನ್ ಅನ್ನು ಮೊದಲಿನಿಂದ ಕಲಿಸುತ್ತೇವೆ.", speech: "Yaavude coding anubhava bekilla. Naavu Python annu modalininda kalisutteve." },
                    "what is python": { text: "ಪೈಥಾನ್ ಎಐಗಾಗಿ ಬಳಸುವ ಸರಳ ಕಂಪ್ಯೂಟರ್ ಭಾಷೆ.", speech: "Python AI gaagi balasuva sarala computer bhaashe." },
                    "how to start": { text: "'ಮಾಡ್ಯೂಲ್ 1' ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ.", speech: "Module 1 annu click maadi mattu kaliyalu prarambhisi." },
                    "what is a module": { text: "ನಾವು ಒಟ್ಟು 5 ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು (ಅಧ್ಯಾಯಗಳು) ಹೊಂದಿದ್ದೇವೆ.", speech: "Naavu ottu 5 modulegalannu hondiddeve." },
                    "duration": { text: "ಇದನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಸುಮಾರು 4-6 ವಾರಗಳು ಬೇಕಾಗುತ್ತವೆ.", speech: "idannu purnagolisalu sumaru 4 rinda 6 vaaragalu bekaaguttave." },
                    "what is google colab": { text: "ಗೂಗಲ್ ಕೋಲಾಬ್ ಬಳಸಿ ನೀವು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಕೋಡ್ ಬರೆಯಬಹುದು.", speech: "Google Colab balasi neevu online nalli code bareyabahudu." },
                    "run code": { text: "ಲ್ಯಾಬ್ ವಿಭಾಗದಲ್ಲಿ ಕೋಡ್ ರನ್ ಮಾಡಬಹುದು.", speech: "Lab vibhaagadalli code run maadabahudu." },
                    "get stuck": { text: "ಚಿಂತಿಸಬೇಡಿ, ಸಹಾಯಕ್ಕಾಗಿ ನನ್ನನ್ನು ಕೇಳಿ.", speech: "Chintisabedi, sahaayakkaagi nannannu keli." },
                    "ai on phone": { text: "ಹೌದು, ನೀವು ಮೊಬೈಲ್‌ನಲ್ಲಿ ಕಲಿಯಬಹುದು.", speech: "Houdu, neevu mobile nalli kaliyabahudu." },
                    "jobs": { text: "ನೀವು ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮ್ ಮ್ಯಾನೇಜರ್ ಆಗಿ ಕೆಲಸ ಪಡೆಯಬಹುದು.", speech: "Neevu Smart Farm Manager aagi kelasa padeyabahudu." },
                    "projects": { text: "ಹೌದು, ಮಾಡ್ಯೂಲ್ 4 ಮತ್ತು 5 ಪ್ರಾಜೆಕ್ಟ್ ಆಧಾರಿತವಾಗಿದೆ.", speech: "Houdu, module 4 mattu 5 project aadharitavagide." },
                    "creator": { text: "ಇದು GKVK ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಭಾಗವಾಗಿದೆ.", speech: "Idu GKVK tarabeti karyakramada bhaagavagide." },
                    "final assessment": { text: "ಇದು ಕೋರ್ಸ್‌ನ ಕೊನೆಯಲ್ಲಿರುವ ಪರೀಕ್ಷೆ.", speech: "Idu course na koneyalliruva parikshe." }
                }
            },
            te: {
                welcome: {
                    text: "నమస్తే! నేను అగ్రి బాట్ ని. ఈ కోర్సు మరియు AI గురించి మీ సందేహాలకు సమాధానం ఇస్తాను.",
                    speech: "Namaste! Nenu AgriBot ni. Ee course mariyu AI gurinchi mee sandehalaku samadhanam isthanu."
                },
                unknown: {
                    text: "క్షమించండి, నాకు అర్థం కాలేదు. దయచేసి సర్టిఫికేట్ లేదా సిలబస్ గురించి అడగండి.",
                    speech: "Kshaminchandi, naaku ardham kaledu. Dayachesi certificate leda syllabus gurinchi adagandi."
                },
                questions: [
                    { label: "ఈ కోర్సు ఏమిటి?", key: "what is this course" },
                    { label: "నాకు సర్టిఫికేట్ వస్తుందా?", key: "certificate" },
                    { label: "ఇది ఉచితమా?", key: "is it free" },
                    { label: "ముఖ్యమైన అంశాలు?", key: "key topics" },
                    { label: "AI అంటే ఏమిటి?", key: "what is ai" },
                    { label: "వ్యవసాయంలో AI?", key: "ai in agriculture" },
                    { label: "మెషిన్ లెర్నింగ్ అంటే ఏమిటి?", key: "what is ml" },
                    { label: "ప్రోగ్రామింగ్ అవసరమా?", key: "programming needed" },
                    { label: "పైథాన్ అంటే ఏమిటి?", key: "what is python" },
                    { label: "ఎలా ప్రారంభించాలి?", key: "how to start" },
                    { label: "మాడ్యూల్ అంటే ఏమిటి?", key: "what is a module" },
                    { label: "కోర్సు వ్యవధి?", key: "duration" },
                    { label: "గూగుల్ కోలాబ్ అంటే ఏమిటి?", key: "what is google colab" },
                    { label: "కోడ్ ఎలా రన్ చేయాలి?", key: "run code" },
                    { label: "సందేహం వస్తే?", key: "get stuck" },
                    { label: "నేను ఫోన్ వాడవచ్చా?", key: "ai on phone" },
                    { label: "ఉద్యోగ అవకాశాలు?", key: "jobs" },
                    { label: "ప్రాజెక్ట్స్?", key: "projects" },
                    { label: "దీనిని ఎవరు రూపొందించారు?", key: "creator" },
                    { label: "చివరి పరీక్ష?", key: "final assessment" }
                ],
                faqs: {
                    "what is this course": { text: "ఇది అగ్రికల్చర్‌లో AI/ML ట్రైనింగ్ ప్రోగ్రామ్. వ్యవసాయంలో టెక్నాలజీని ఎలా వాడాలో నేర్పిస్తాము.", speech: "Idi Agriculture lo AI ML training program. Vyavasayam lo technology ni ela vaadalo nerpisthamu." },
                    "certificate": { text: "అవును! కోర్సు పూర్తయిన తర్వాత మీకు సర్టిఫికేట్ లభిస్తుంది.", speech: "Avunu! Course poorthiyaina tharuvatha meeku certificate labhisthundi." },
                    "is it free": { text: "అవును, ఈ కోర్సు విద్యార్థులకు పూర్తిగా ఉచితం.", speech: "Avunu, ee course vidyarthulaku poorthiga uchitam." },
                    "key topics": { text: "మేము పైథాన్, డేటా సైన్స్ మరియు స్మార్ట్ ఫార్మింగ్ నేర్పిస్తాము.", speech: "Memu Python, Data Science mariyu Smart Farming nerpisthamu." },
                    "what is ai": { text: "AI అంటే కంప్యూటర్లకు తెలివిని నేర్పించడం. ఉదాహరణకు, పంట తెగుళ్లను గుర్తించడం.", speech: "AI ante computerlaku telivini nerpinchadham. Udaharanaku, panta tegulanu gurthinchadam." },
                    "ai in agriculture": { text: "వాతావరణం అంచనా మరియు నీటి పారుదల కోసం AI ఉపయోగపడుతుంది.", speech: "Vaathavaranam anchana mariyu neeti paarudala kosam AI upayogapaduthundi." },
                    "what is ml": { text: "మెషిన్ లెర్నింగ్ అంటే డేటా నుండి కంప్యూటర్లు నేర్చుకునే పద్ధతి.", speech: "Machine Learning ante data nundi computerlu nerchukune paddhati." },
                    "programming needed": { text: "కోడింగ్ అనుభవం అవసరం లేదు. మేము మొదటి నుండి నేర్పిస్తాము.", speech: "Coding anubhavam avasaram ledu. Memu modati nundi nerpisthamu." },
                    "what is python": { text: "పైథాన్ అనేది AI కోసం వాడే చాలా సులభమైన ప్రోగ్రామింగ్ భాష.", speech: "Python anedi AI kosam vaade chala sulabhamaina programming bhasha." },
                    "how to start": { text: "మొదలుపెట్టడానికి 'మాడ్యూల్ 1' పై క్లిక్ చేయండి.", speech: "Modalupettadaniki Module 1 pai click cheyandi." },
                    "what is a module": { text: "మాకు మొత్తం 5 మాడ్యూల్స్ (అధ్యాయాలు) ఉన్నాయి.", speech: "Maaku motham 5 modules unnayi." },
                    "duration": { text: "ఈ కోర్సు పూర్తి చేయడానికి 4-6 వారాలు పడుతుంది.", speech: "Ee course poorthi cheyadaniki 4 nundi 6 vaaralu paduthundi." },
                    "what is google colab": { text: "గూగుల్ కోలాబ్ ద్వారా మీరు ఆన్‌లైన్‌లో కోడ్ రన్ చేయవచ్చు.", speech: "Google Colab dwara meeru online lo code run cheyavachu." },
                    "run code": { text: "లాబ్ సెక్షన్‌లో కోడ్ రన్ చేయవచ్చు.", speech: "Lab section lo code run cheyavachu." },
                    "get stuck": { text: "ఏమి పర్వాలేదు, నన్ను అడగండి.", speech: "Emi parvaledu, nannu adagandi." },
                    "ai on phone": { text: "అవును, మీరు ఫోన్‌లో కూడా నేర్చుకోవచ్చు.", speech: "Avunu, meeru phone lo kuda nerchukovachu." },
                    "jobs": { text: "మీరు అగ్రి-టెక్ డేటా అనలిస్ట్ కావచ్చు.", speech: "Meeru Agri Tech Data Analyst kaavachu." },
                    "projects": { text: "అవును, మాడ్యూల్ 4 మరియు 5 లో రియల్ టైమ్ ప్రాజెక్ట్స్ ఉన్నాయి.", speech: "Avunu, module 4 mariyu 5 lo real time projects unnayi." },
                    "creator": { text: "ఇది GKVK ట్రైనింగ్ ప్రోగ్రామ్.", speech: "Idi GKVK Training Program." },
                    "final assessment": { text: "ఇది సర్టిఫికేట్ కోసం చివరి పరీక్ష.", speech: "Idi certificate kosam chivari pariksha." }
                }
            },
            ta: {
                welcome: {
                    text: "வணக்கம்! நான் அக்ரிபாட் (AgriBot). விவசாயத்தில் AI மற்றும் இந்த பாடத்திட்டம் பற்றிய உங்கள் கேள்விகளுக்கு பதிலளிக்கிறேன்.",
                    speech: "Vanakkam! Naan AgriBot. Vivasayathil AI mattrum indha paadathittam patriya ungal kelvigalukku badhilalikkiren."
                },
                unknown: {
                    text: "மன்னிக்கவும், எனக்கு புரியவில்லை. சான்றிதழ் அல்லது பாடம் பற்றி கேளுங்கள்.",
                    speech: "Mannikkavum, enakku puriyavillai. Saandridhazh alladhu paadam patri kelungal."
                },
                questions: [
                    { label: "இந்த படிப்பு என்ன?", key: "what is this course" },
                    { label: "எனக்கு சான்றிதழ் கிடைக்குமா?", key: "certificate" },
                    { label: "இது இலவசமா?", key: "is it free" },
                    { label: "முக்கிய தலைப்புகள்?", key: "key topics" },
                    { label: "AI என்றால் என்ன?", key: "what is ai" },
                    { label: "விவசாயத்தில் AI?", key: "ai in agriculture" },
                    { label: "இயந்திர கற்றல் (ML) என்றால் என்ன?", key: "what is ml" },
                    { label: "நிரலாக்கம் தேவையா?", key: "programming needed" },
                    { label: "பைதான் என்றால் என்ன?", key: "what is python" },
                    { label: "எப்படி தொடங்குவது?", key: "how to start" },
                    { label: "தொகுதி என்றால் என்ன?", key: "what is a module" },
                    { label: "கால அளவு?", key: "duration" },
                    { label: "கூகுள் கோலேப் என்றால் என்ன?", key: "what is google colab" },
                    { label: "கோட் இயக்குவது எப்படி?", key: "run code" },
                    { label: "சந்தேகம் வந்தால்?", key: "get stuck" },
                    { label: "நான் போன் பயன்படுத்தலாமா?", key: "ai on phone" },
                    { label: "வேலை வாய்ப்புகள்?", key: "jobs" },
                    { label: "திட்டங்கள்?", key: "projects" },
                    { label: "இதை உருவாக்கியவர் யார்?", key: "creator" },
                    { label: "இறுதித் தேர்வு?", key: "final assessment" }
                ],
                faqs: {
                    "what is this course": { text: "இது விவசாயத்தில் AI/ML பயிற்சி வகுப்பு.", speech: "Idhu vivasayathil AI ML payirchi vaguppu." },
                    "certificate": { text: "ஆம்! பாடத்திட்டத்தை முடித்தவுடன் சான்றிதழ் வழங்கப்படும்.", speech: "Aam! Paadathittathai mudithavudan saandridhazh vazhangapadum." },
                    "is it free": { text: "ஆம், இது மாணவர்களுக்கு முற்றிலும் இலவசம்.", speech: "Aam, idhu maanavargalukku muttrilum ilavasam." },
                    "key topics": { text: "நாங்கள் பைதான் (Python) மற்றும் ஸ்மார்ட் ஃபார்மிங் கற்றுக்கொடுக்கிறோம்.", speech: "Naangal Python mattrum Smart Farming kattrukodukkirom." },
                    "what is ai": { text: "AI என்பது கணினிகளுக்கு அறிவை கற்றுக்கொடுப்பது.", speech: "AI enbadhu kaninigalukku arivai kattrukoduppadhu." },
                    "ai in agriculture": { text: "விவசாயத்தில் நோய்களைக் கண்டறிய AI உதவுகிறது.", speech: "Vivasayathil noigalai kandariya AI udhavugiradhu." },
                    "what is ml": { text: "இயந்திர கற்றல் (ML) என்பது தரவுகளிலிருந்து கற்றுக்கொள்ளும் முறை.", speech: "Machine Learning enbadhu dharavugalilirundhu kattrukkollum murai." },
                    "programming needed": { text: "முன் அனுபவம் தேவையில்லை. நாங்கள் ஆரம்பத்திலிருந்து கற்றுக்கொடுக்கிறோம்.", speech: "Mun anubhavam devaiyillai. Naangal aarambathilirundhu kattrukodukkirom." },
                    "what is python": { text: "பைதான் AI-க்காக பயன்படுத்தப்படும் எளிதான மொழி.", speech: "Python AI kkaaga payanpaduthappadum elidhaana mozhi." },
                    "how to start": { text: "தொடங்க 'Module 1'-ஐ கிளிக் செய்யவும்.", speech: "Thodanga Module 1 ai click seiyavum." },
                    "what is a module": { text: "மொத்தம் 5 தொகுதிகள் (Units) உள்ளன.", speech: "Motham 5 thogudhigal ullana." },
                    "duration": { text: "இதை முடிக்க 4-6 வாரங்கள் ஆகும்.", speech: "Idhai mudikka 4 mudhal 6 vaarangal aagum." },
                    "what is google colab": { text: "கூகுள் கோலேப் மூலம் ஆன்லைனில் கோட் செய்யலாம்.", speech: "Google Colab moolam online il code seiyalaam." },
                    "run code": { text: "லேப் பிரிவில் கோட் இயக்கலாம்.", speech: "Lab pirivil code iyakkalaam." },
                    "get stuck": { text: "கவலை வேண்டாம், என்னிடம் கேளுங்கள்.", speech: "Kavalai vendaam, ennidam kelungal." },
                    "ai on phone": { text: "ஆம், நீங்கள் மொபைலில் படிக்கலாம்.", speech: "Aam, neengal mobile il padikkalaam." },
                    "jobs": { text: "வேளாண் தொழில்நுட்பத் துறையில் வேலை வாய்ப்புகள் உள்ளன.", speech: "Velaan thozhilnutpa thuraiyil velai vaaippugal ullana." },
                    "projects": { text: "ஆம், இது செய்முறைப் பயிற்சி உள்ளது.", speech: "Aam, idhu seimurai payirchi ulladhu." },
                    "creator": { text: "இது GKVK பயிற்சித் திட்டம்.", speech: "Idhu GKVK payirchi thittam." },
                    "final assessment": { text: "இது இறுதித் தேர்வு.", speech: "Idhu irudhi thervu." }
                }
            }
        };

        this.init();
    }

    init() {
        this.createUI();
        this.attachListeners();
        this.injectStyles();
        this.speechEnabled = false;

        this.voices = [];
        const loadVoices = () => {
            this.voices = window.speechSynthesis.getVoices();
        };

        if (window.speechSynthesis) {
            loadVoices();
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoices;
            }
        }
    }

    injectStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .chat-questions-panel {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: white;
                z-index: 10;
                transform: translateX(100%);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                flex-direction: column;
                box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            }
            .chat-questions-panel.active {
                transform: translateX(0);
            }
            .questions-header {
                padding: 15px;
                background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
            }
            .questions-list {
                flex: 1;
                overflow-y: auto;
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .question-item {
                background: #f3f4f6;
                padding: 12px 15px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
                font-size: 0.9em;
                color: #1f2937;
                border-left: 3px solid transparent;
            }
            .question-item:hover {
                background: #e0e7ff;
                border-left-color: #1e3a8a;
                transform: translateX(2px);
            }
            .menu-toggle-btn {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-right: 10px;
                font-size: 1.1em;
            }
        `;
        document.head.appendChild(style);
    }

    createUI() {
        // Toggle Button
        this.toggleBtn = document.createElement('button');
        this.toggleBtn.className = 'chatbot-toggle pulse';
        this.toggleBtn.innerHTML = `<i class="fas fa-robot"></i><span class="badge">?</span>`;
        this.toggleBtn.style.display = 'flex';
        document.body.appendChild(this.toggleBtn);

        // Chat Window
        this.window = document.createElement('div');
        this.window.className = 'chatbot-window';

        // Language Options
        let langOptions = '';
        for (const [code, name] of Object.entries(this.languages)) {
            langOptions += `<option value="${code}">${name}</option>`;
        }

        this.window.innerHTML = `
            <div class="chat-questions-panel" id="questionsPanel">
                <div class="questions-header">
                    <span><i class="fas fa-list"></i> FAQ / Questions</span>
                    <button id="closeQuestions" style="background:none; border:none; color:white; cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
                <div class="questions-list" id="questionsList">
                    <!-- Questions populated dynamically -->
                </div>
            </div>

            <div class="chat-header">
                <div class="chat-title">
                    <button class="menu-toggle-btn" id="openQuestions" title="View All Questions">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div style="display:flex; flex-direction:column;">
                        <div style="font-weight: bold;">AgriBot</div>
                        <div style="font-size: 0.8em; opacity: 0.9;">AI Tutor</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <button id="voiceToggle" class="voice-toggle" title="Voice">
                        <i class="fas fa-volume-mute"></i>
                    </button>
                    <select class="lang-select" id="botLang" style="width: 100px; font-size: 12px;">
                        ${langOptions}
                    </select>
                </div>
                <button id="closeChat" style="background:none; border:none; color:white; cursor:pointer; margin-left: 5px;"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    ${this.knowledge['en'].welcome.text}
                </div>
            </div>

            <div class="typing-indicator" id="typingIndicator">
                <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
            </div>

            <div class="chat-suggestions" id="chatSuggestions" style="display: flex; flex-direction: column; gap: 8px; max-height: 180px; overflow-y: auto; padding: 10px; border-top: 1px solid #f3f4f6;">
            </div>

            <div class="chat-input-area">
                <input type="text" class="chat-input" id="chatInput" placeholder="Ask a question...">
                <button class="chat-send-btn" id="sendChat"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
        document.body.appendChild(this.window);

        this.updateQuestionsList();
        this.updateSuggestions();
    }

    updateQuestionsList() {
        const list = document.getElementById('questionsList');
        const questions = this.knowledge[this.language].questions;
        list.innerHTML = questions.map(q =>
            `<div class="question-item" data-key="${q.key}">${q.label}</div>`
        ).join('');
    }

    updateSuggestions() {
        const container = document.getElementById('chatSuggestions');
        // User requested to see ALL questions and vertical layout
        const questions = this.knowledge[this.language].questions;
        container.innerHTML = questions.map(q =>
            `<div class="suggestion-chip" data-key="${q.key}" style="width: fit-content; max-width: 100%; white-space: normal; text-align: left;">${q.label}</div>`
        ).join('');
    }

    attachListeners() {
        if (this.toggleBtn) this.toggleBtn.addEventListener('click', () => this.toggle());
        document.getElementById('closeChat').addEventListener('click', () => this.toggle());

        document.getElementById('openQuestions').addEventListener('click', () => {
            document.getElementById('questionsPanel').classList.add('active');
        });
        document.getElementById('closeQuestions').addEventListener('click', () => {
            document.getElementById('questionsPanel').classList.remove('active');
        });

        document.getElementById('questionsList').addEventListener('click', (e) => {
            if (e.target.classList.contains('question-item')) {
                const label = e.target.innerText;
                const key = e.target.getAttribute('data-key');
                this.addMessage(label, 'user');
                this.processReply(key, true);
                document.getElementById('questionsPanel').classList.remove('active');
            }
        });

        document.getElementById('voiceToggle').addEventListener('click', (e) => {
            this.speechEnabled = !this.speechEnabled;
            const icon = e.currentTarget.querySelector('i');
            if (this.speechEnabled) {
                icon.className = 'fas fa-volume-up';
                e.currentTarget.style.color = '#10b981';
            } else {
                icon.className = 'fas fa-volume-mute';
                e.currentTarget.style.color = 'white';
                window.speechSynthesis.cancel();
            }
        });

        document.getElementById('sendChat').addEventListener('click', () => this.sendMessage());
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        document.getElementById('botLang').addEventListener('change', (e) => {
            this.language = e.target.value;
            // Handle Welcome Message (Object structure now)
            const welcomeMsg = this.knowledge[this.language].welcome;
            this.addBotMessage(welcomeMsg);
            this.updateQuestionsList();
            this.updateSuggestions();
        });

        document.getElementById('chatSuggestions').addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-chip')) {
                const label = e.target.innerText;
                const key = e.target.getAttribute('data-key');
                this.addMessage(label, 'user');
                this.processReply(key || label, !!key);
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.window.classList.toggle('active', this.isOpen);
        if (!this.isOpen) window.speechSynthesis.cancel();
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text) return;
        this.addMessage(text, 'user');
        input.value = '';
        this.processReply(text);
    }

    addMessage(text, type) {
        const container = document.getElementById('chatMessages');
        const msgDiv = document.createElement('div');
        msgDiv.innerText = text;
        msgDiv.className = `message ${type}`;
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
    }

    addBotMessage(replyObj) {
        const indicator = document.getElementById('typingIndicator');
        indicator.style.display = 'flex';

        let msgText = "";
        let speechText = "";

        if (typeof replyObj === 'object' && replyObj.text) {
            msgText = replyObj.text;
            speechText = replyObj.speech || replyObj.text;
        } else {
            msgText = replyObj; // Fallback if string
            speechText = replyObj;
        }

        setTimeout(() => {
            indicator.style.display = 'none';
            this.addMessage(msgText, 'bot');
            if (this.speechEnabled) this.speakResponse(speechText);
        }, 600);
    }

    processReply(userText, isKey = false) {
        const lowerText = userText.toLowerCase();
        const currentKB = this.knowledge[this.language].faqs;
        let reply = this.knowledge[this.language].unknown;

        let foundKey = "";

        if (isKey && currentKB[lowerText]) {
            reply = currentKB[lowerText];
            foundKey = lowerText;
        } else {
            for (const key of Object.keys(currentKB)) {
                if (lowerText.includes(key) || key.includes(lowerText)) {
                    reply = currentKB[key];
                    foundKey = key;
                    break;
                }
            }
            if (!foundKey) {
                if (lowerText.includes("module")) reply = currentKB["what is a module"];
                else if (lowerText.includes("python")) reply = currentKB["what is python"];
                else if (lowerText.includes("job")) reply = currentKB["jobs"];
                else if (lowerText.includes("ce")) reply = currentKB["certificate"];
            }
        }

        this.addBotMessage(reply);
    }

    speakResponse(text) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        // If text is purely phonetic (English chars only) but language is KN/TE/TA,
        // it means we are using fallback speech.

        const utterance = new SpeechSynthesisUtterance(text);

        const langMap = {
            'en': 'en-IN',
            'hi': 'hi-IN',
            'kn': 'kn-IN',
            'te': 'te-IN',
            'ta': 'ta-IN'
        };

        const targetLang = langMap[this.language] || 'en-US';

        const voices = this.voices.length ? this.voices : window.speechSynthesis.getVoices();
        let voice = voices.find(v => v.lang === targetLang) || voices.find(v => v.lang.startsWith(this.language));

        // Fallback Logic
        if (!voice && ['kn', 'te', 'ta', 'hi'].includes(this.language)) {
            // Find Indian English
            voice = voices.find(v => v.lang === 'en-IN' || v.name.includes('India'));
            if (!voice) voice = voices.find(v => v.lang.startsWith('en'));

            // If we are using an English fallback voice, we usually want it to speak English-ish text.
            // My 'text' argument passed here is ALREADY the 'speech' (transliterated) version from the object.
            // So we just need to ensure the utterance lang is set to the VOICE's lang so formatting works.
        }

        if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang; // Important: Match utterance lang to voice lang for it to work
        } else {
            utterance.lang = 'en-US'; // Last resort
        }

        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

window.agriBot = new AgriBot();
