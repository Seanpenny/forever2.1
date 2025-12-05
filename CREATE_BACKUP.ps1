# Forever Fit Website Backup Script
# Creates a clean backup to foreverfit website2.0 folder

$sourcePath = "C:\Users\webbr\Documents\MY APPS\MY GYM MANAGEMENT SYSTEM\FOREVER FIT BOX PROTOTYPE\Forever fit website"
$backupPath = "C:\Users\webbr\Documents\foreverfit website2.0"

Write-Host "Creating backup folder..." -ForegroundColor Green
New-Item -ItemType Directory -Path $backupPath -Force | Out-Null
New-Item -ItemType Directory -Path "$backupPath\css" -Force | Out-Null
New-Item -ItemType Directory -Path "$backupPath\js" -Force | Out-Null
New-Item -ItemType Directory -Path "$backupPath\images" -Force | Out-Null
New-Item -ItemType Directory -Path "$backupPath\assets" -Force | Out-Null

Write-Host "Copying essential files..." -ForegroundColor Green

# Copy main files
Copy-Item "$sourcePath\index.html" -Destination "$backupPath\index.html" -Force
Copy-Item "$sourcePath\css\styles.css" -Destination "$backupPath\css\styles.css" -Force
Copy-Item "$sourcePath\js\main.js" -Destination "$backupPath\js\main.js" -Force

# Copy images folder (only image files, exclude subfolders with .download files)
Write-Host "Copying images..." -ForegroundColor Yellow
Get-ChildItem "$sourcePath\images" -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|gif|webp)$' } | Copy-Item -Destination "$backupPath\images\" -Force

# Copy assets folder
Write-Host "Copying assets..." -ForegroundColor Yellow
Copy-Item "$sourcePath\assets\*" -Destination "$backupPath\assets\" -Recurse -Force

Write-Host "`nBackup completed successfully!" -ForegroundColor Green
Write-Host "Location: $backupPath" -ForegroundColor Cyan
Write-Host "`nFiles backed up:" -ForegroundColor Yellow
Write-Host "  - index.html" -ForegroundColor White
Write-Host "  - css/styles.css" -ForegroundColor White
Write-Host "  - js/main.js" -ForegroundColor White
Write-Host "  - images/ (all image files)" -ForegroundColor White
Write-Host "  - assets/ (all assets)" -ForegroundColor White

