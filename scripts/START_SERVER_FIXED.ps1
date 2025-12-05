# Start Local Web Server for Forever Fit Website - FIXED VERSION
# This version ensures only ONE browser tab opens with the correct application

Write-Host "=== Starting Forever Fit Website Server ===" -ForegroundColor Green
Write-Host ""

# Check for Node.js first (preferred)
$nodeAvailable = Get-Command node -ErrorAction SilentlyContinue

if ($nodeAvailable) {
    Write-Host "Starting Node.js HTTP Server on port 8000..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Your site will be available at:" -ForegroundColor Cyan
    Write-Host "http://localhost:8000/index.html" -ForegroundColor White -BackgroundColor DarkBlue
    Write-Host ""
    Write-Host "Opening browser in 2 seconds..." -ForegroundColor Yellow
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Write-Host ""
    
    # Start server WITHOUT auto-open flag to prevent multiple tabs
    $serverProcess = Start-Process -NoNewWindow -PassThru -FilePath "npx" -ArgumentList "-y", "http-server", "-p", "8000", "-s"
    
    # Wait a moment for server to start
    Start-Sleep -Seconds 2
    
    # Open browser manually to ONLY index.html (prevents multiple files)
    Start-Process "http://localhost:8000/index.html"
    
    # Wait for server process
    $serverProcess.WaitForExit()
} else {
    # Fallback to Python
    $pythonAvailable = Get-Command python -ErrorAction SilentlyContinue
    
    if ($pythonAvailable) {
        Write-Host "Starting Python HTTP Server on port 8000..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Your site will be available at:" -ForegroundColor Cyan
        Write-Host "http://localhost:8000/index.html" -ForegroundColor White -BackgroundColor DarkBlue
        Write-Host ""
        Write-Host "Opening browser in 2 seconds..." -ForegroundColor Yellow
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        
        # Start Python server in background
        $serverProcess = Start-Process -NoNewWindow -PassThru -FilePath "python" -ArgumentList "-m", "http.server", "8000"
        
        # Wait a moment for server to start
        Start-Sleep -Seconds 2
        
        # Open browser manually to ONLY index.html
        Start-Process "http://localhost:8000/index.html"
        
        # Wait for server process
        $serverProcess.WaitForExit()
    } else {
        Write-Host "ERROR: Neither Node.js nor Python found!" -ForegroundColor Red
        Write-Host ""
        Write-Host "Please install Node.js:" -ForegroundColor Yellow
        Write-Host "https://nodejs.org/" -ForegroundColor White
        Write-Host ""
        Read-Host "Press Enter to exit"
    }
}



