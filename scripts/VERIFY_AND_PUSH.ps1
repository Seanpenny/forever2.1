# Simple script to verify and push changes
Write-Host "=== Verifying Changes ===" -ForegroundColor Cyan

# Check if files are modified
$status = git status --porcelain
if ($status) {
    Write-Host "`nChanges found:" -ForegroundColor Yellow
    git status --short
    
    Write-Host "`n=== Adding files ===" -ForegroundColor Cyan
    git add .
    
    Write-Host "`n=== Committing ===" -ForegroundColor Cyan
    git commit -m "Update to v2.0.2: Remove duplicate Simple MMA section, add cache busting"
    
    Write-Host "`n=== Pushing to GitHub ===" -ForegroundColor Cyan
    git push origin main
    
    Write-Host "`n=== DONE! ===" -ForegroundColor Green
    Write-Host "Your site will update in 2-3 minutes at:" -ForegroundColor Yellow
    Write-Host "https://seanpenny.github.io/forever_fit_website/" -ForegroundColor White
} else {
    Write-Host "No changes to commit. Everything is up to date!" -ForegroundColor Green
}

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")



