@echo off
REM Agri-LMS Auto Reload Script
REM Kills any process using port 3000, then restarts the Node.js server

REM Find PID using port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    set PID=%%a
)

REM Kill the process if PID exists
if defined PID (
    echo Killing process on port 3000 (PID: %PID%)
    taskkill /PID %PID% /F
) else (
    echo No process found on port 3000
)

REM Start the server
REM Optionally open browser in incognito mode to avoid cache
REM For Chrome (Windows):
REM start chrome --incognito http://localhost:3000

start chrome --incognito http://localhost:3000
npx nodemon server.js
