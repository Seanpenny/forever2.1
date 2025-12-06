@echo off
echo Downloading working files from GitHub...
echo.

mkdir RESTORED_FROM_GITHUB 2>nul
mkdir RESTORED_FROM_GITHUB\css 2>nul
mkdir RESTORED_FROM_GITHUB\js 2>nul

echo Downloading index.html...
curl -L https://raw.githubusercontent.com/Seanpenny/forever_fit_website/main/index.html -o RESTORED_FROM_GITHUB\index.html

echo Downloading styles.css...
curl -L https://raw.githubusercontent.com/Seanpenny/forever_fit_website/main/css/styles.css -o RESTORED_FROM_GITHUB\css\styles.css

echo Downloading main.js...
curl -L https://raw.githubusercontent.com/Seanpenny/forever_fit_website/main/js/main.js -o RESTORED_FROM_GITHUB\js\main.js

echo.
echo Done! Files saved to RESTORED_FROM_GITHUB folder
echo.
pause




