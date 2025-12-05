# Update GitHub Repository with Latest Files
# This will push your local Forever Fit website to GitHub

Write-Host "=== Update Forever Fit Website on GitHub ===" -ForegroundColor Green
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "⚠️  Git repository not initialized!" -ForegroundColor Yellow
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
    git remote add origin https://github.com/Seanpenny/forever-_website.git
}

# Check current status
Write-Host "Checking current status..." -ForegroundColor Cyan
git status
Write-Host ""

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
$commitMessage = "Update website with cache busting and latest changes - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMessage

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Changes committed!" -ForegroundColor Green
    Write-Host ""
    
    # Push to GitHub
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✓✓✓ Successfully pushed to GitHub! ✓✓✓" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your site will update in 2-3 minutes at:" -ForegroundColor Cyan
        Write-Host "https://seanpenny.github.io/forever-_website/" -ForegroundColor White
        Write-Host ""
        Write-Host "Wait a few minutes, then hard refresh (Ctrl+Shift+R) to see changes!" -ForegroundColor Yellow
    } else {
        Write-Host ""
        Write-Host "✗ Failed to push. You may need to:" -ForegroundColor Red
        Write-Host "  1. Set up git credentials" -ForegroundColor Yellow
        Write-Host "  2. Or use GitHub Desktop instead" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Alternative: Use GitHub Desktop or web interface to upload files" -ForegroundColor Cyan
    }
} else {
    Write-Host "✗ Failed to commit. Check git status above." -ForegroundColor Red
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green



