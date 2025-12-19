# Agri-LMS - Installation & Usage Guide

## 🎯 Quick Start for Students

### Prerequisites
- **Windows 10/11** or **Mac/Linux** with Node.js
- **Node.js 18.x or higher** installed
- **Any modern web browser** (Chrome, Firefox, Edge, Safari)

### Installation Steps

#### Step 1: Download & Install Node.js
If you don't have Node.js installed:
1. Visit: https://nodejs.org/
2. Download **LTS (Long Term Support)** version
3. Run the installer and follow the steps
4. **Important**: Check "Add to PATH" during installation
5. Restart your computer

#### Step 2: Extract the Application
1. Extract the `agri-lms` folder to your desired location
2. Example: `C:\Users\YourName\Documents\agri-lms` or `D:\agri-lms`

#### Step 3: Run the Application
**Option A - Automatic (Recommended):**
- Double-click `START_AGRI_LMS.bat` in the agri-lms folder
- The application will open automatically in your browser

**Option B - Manual:**
1. Open Command Prompt or PowerShell
2. Navigate to the agri-lms folder
3. Run: `npm install` (only first time)
4. Run: `npm start` or `node server.js`
5. Open your browser and visit: `http://localhost:3000`

---

## 📚 Application Features

### Available Modules
- **Module 1**: Fundamentals of AI and Python Programming
- **Module 2**: Python & ML Fundamentals  
- **Module 3**: AI/ML Applications in Agriculture
- **Module 4**: Capstone Project

### For Each Topic
- 📖 **Handout**: Comprehensive learning materials with farming analogies
- 💻 **Google Colab**: Interactive code examples
- 📝 **Quiz**: Self-assessment with instant feedback
- 🎬 **Story**: Maya's real-world journey

### Dashboard
- Track your progress
- View module completion status
- Monitor quiz scores

---

## 🔧 Troubleshooting

### Problem: "Node.js is not installed"
**Solution**: Install Node.js from https://nodejs.org/

### Problem: Port 3000 already in use
**Solution**: 
- Close other applications using port 3000
- Or change port in `server.js` (line 3: change `3000` to another port like `3001`)

### Problem: Application won't open in browser
**Solution**:
- Manually open your browser
- Type: `http://localhost:3000`
- If still not working, check the Command Prompt for errors

### Problem: Handout not loading
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Reload the page (Ctrl+R or F5)
- Try a different browser

### Problem: Can't run .bat file
**Solution**:
1. Open Command Prompt
2. Navigate to agri-lms folder
3. Type: `node server.js`
4. Open browser to http://localhost:3000

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Look at the Command Prompt/Terminal for error messages
3. Take a screenshot of the error and contact your instructor

---

## 📌 Important Notes

✅ The application runs locally on your computer  
✅ All your progress is saved locally  
✅ You don't need internet connection after first load  
✅ The server window must stay open while using the app  
✅ Close the server window to stop the application  

---

## 🎓 Learning Tips

1. Read the handouts carefully - they contain practical farming analogies
2. Try the Google Colab code examples - hands-on practice is key
3. Take the quizzes after each topic to test your understanding
4. Follow Maya's story to understand real-world applications
5. Visit the Dashboard regularly to track your progress

---

## 📦 What's Included

```
agri-lms/
├── START_AGRI_LMS.bat        ← Click this to start
├── server.js                   ← Backend server
├── package.json                ← Dependencies
├── index.html                  ← Main page
├── dashboard.html              ← Progress dashboard
├── css/                        ← Styling
├── js/                         ← Application logic
├── assets/                     ← Images & icons
└── presentations/              ← Course slides
```

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**For**: GKVK Training Program - AI/ML in Agriculture
