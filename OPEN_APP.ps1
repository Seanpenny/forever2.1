# Open Forever Fit Website Directly - NO SERVER NEEDED
Write-Host "Opening Forever Fit Website..." -ForegroundColor Green
Write-Host ""

# Get the script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlFile = Join-Path $scriptPath "index.html"

# Open the HTML file directly in default browser
Start-Process $htmlFile

Write-Host "App opened in your browser!" -ForegroundColor Green
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")



