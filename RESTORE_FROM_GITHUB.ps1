# Restore Project from GitHub - Get Working Code
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "RESTORING PROJECT FROM GITHUB" -ForegroundColor Cyan
Write-Host "Repository: https://github.com/Seanpenny/forever_fit_website" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoUrl = "https://raw.githubusercontent.com/Seanpenny/forever_fit_website/main/"
$backupFolder = "RESTORED_FROM_GITHUB_$(Get-Date -Format 'yyyyMMdd_HHmmss')"

Write-Host "Creating backup folder: $backupFolder" -ForegroundColor Yellow
New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
New-Item -ItemType Directory -Path "$backupFolder\css" -Force | Out-Null
New-Item -ItemType Directory -Path "$backupFolder\js" -Force | Out-Null
New-Item -ItemType Directory -Path "$backupFolder\assets" -Force | Out-Null
New-Item -ItemType Directory -Path "$backupFolder\images" -Force | Out-Null

Write-Host ""
Write-Host "Downloading files from GitHub..." -ForegroundColor Green
Write-Host ""

# Main files to download
$files = @(
    @{Path="index.html"; Url="$repoUrl/index.html"},
    @{Path="css/styles.css"; Url="$repoUrl/css/styles.css"},
    @{Path="js/main.js"; Url="$repoUrl/js/main.js"},
    @{Path="README.md"; Url="$repoUrl/README.md"}
)

$successCount = 0
$failCount = 0

foreach ($file in $files) {
    $outputPath = Join-Path $backupFolder $file.Path
    $url = $file.Url
    
    Write-Host "Downloading: $($file.Path)" -ForegroundColor Cyan
    try {
        $response = Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        $size = (Get-Item $outputPath).Length
        Write-Host "  ✓ Success! ($([math]::Round($size/1KB, 2)) KB)" -ForegroundColor Green
        $successCount++
    } catch {
        Write-Host "  ✗ Failed: $_" -ForegroundColor Red
        $failCount++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DOWNLOAD SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Success: $successCount files" -ForegroundColor Green
Write-Host "Failed: $failCount files" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Green" })
Write-Host ""
Write-Host "Files saved to: $backupFolder" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Check the files in: $backupFolder" -ForegroundColor White
Write-Host "2. Compare with your corrupted files" -ForegroundColor White
Write-Host "3. Copy working files to replace corrupted ones" -ForegroundColor White
Write-Host "4. Or use these files to start fresh!" -ForegroundColor White
Write-Host ""
