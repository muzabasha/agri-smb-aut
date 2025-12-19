@echo off
REM Create a shortcut for Windows - run this once to set up
REM Creates "Agri-LMS.lnk" shortcut on desktop

setlocal enabledelayedexpansion

REM Get the current directory
set "CurrentDir=%~dp0"

REM Create VBS script to make shortcut
(
echo Set oWS = WScript.CreateObject("WScript.Shell"^)
echo sLinkFile = oWS.SpecialFolders("Desktop"^) ^& "\Agri-LMS.lnk"
echo Set oLink = oWS.CreateShortCut(sLinkFile^)
echo oLink.TargetPath = "%CurrentDir%START_AGRI_LMS.bat"
echo oLink.WorkingDirectory = "%CurrentDir%"
echo oLink.Description = "AI/ML in Agriculture - Interactive LMS"
echo oLink.IconLocation = "%CurrentDir%assets\icons\favicon.ico"
echo oLink.Save
) > "%temp%\CreateShortcut.vbs"

REM Run the VBS script
cscript "%temp%\CreateShortcut.vbs"

REM Delete the temporary script
del "%temp%\CreateShortcut.vbs"

echo.
echo ✓ Shortcut created on Desktop as "Agri-LMS.lnk"
echo.
pause
