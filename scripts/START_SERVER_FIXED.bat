@echo off
echo === Starting Forever Fit Website Server - FIXED VERSION ===
echo This version ensures only ONE browser tab opens
echo.

REM Check for Node.js first (preferred)
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting Node.js HTTP Server on port 8000...
    echo.
    echo Your site will be available at:
    echo http://localhost:8000/index.html
    echo.
    echo Opening browser in 2 seconds...
    echo Press Ctrl+C to stop the server
    echo.
    
    REM Start server WITHOUT auto-open to prevent multiple tabs
    start /B npx -y http-server -p 8000 -s
    
    REM Wait for server to start
    timeout /t 2 /nobreak >nul
    
    REM Open browser manually to ONLY index.html (prevents multiple files)
    start http://localhost:8000/index.html
    
    REM Keep script running
    :wait
    timeout /t 1 /nobreak >nul
    goto wait
)

REM Fallback to Python
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting Python HTTP Server on port 8000...
    echo.
    echo Your site will be available at:
    echo http://localhost:8000/index.html
    echo.
    echo Opening browser in 2 seconds...
    echo Press Ctrl+C to stop the server
    echo.
    
    REM Start Python server in background
    start /B python -m http.server 8000
    
    REM Wait for server to start
    timeout /t 2 /nobreak >nul
    
    REM Open browser manually to ONLY index.html
    start http://localhost:8000/index.html
    
    REM Keep script running
    :wait_python
    timeout /t 1 /nobreak >nul
    goto wait_python
)

echo ERROR: Neither Python nor Node.js found!
echo.
echo Please install one of the following:
echo 1. Python: https://www.python.org/downloads/
echo 2. Node.js: https://nodejs.org/
echo.
pause



