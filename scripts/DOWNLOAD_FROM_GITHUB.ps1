# Download files directly from GitHub to match Vercel
Write-Host "Downloading files from GitHub..." -ForegroundColor Yellow

$baseUrl = "https://raw.githubusercontent.com/Seanpenny/forever_fit_website/main/"

# Files to download
$files = @(
    "index.html",
    "js/main.js",
    "css/styles.css"
)

foreach ($file in $files) {
    $url = $baseUrl + $file
    $output = $file
    
    Write-Host "Downloading: $file" -ForegroundColor Cyan
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        Write-Host "✓ Downloaded: $file" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed: $file - $_" -ForegroundColor Red
    }
}

Write-Host "`nDone! Files downloaded from GitHub." -ForegroundColor Green
Write-Host "Your local files now match GitHub/Vercel!" -ForegroundColor Green



