@echo off
echo ========================================
echo Pushing Forever Fit Website to GitHub
echo ========================================
echo.

echo Step 1: Adding all files...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files
    pause
    exit /b 1
)

echo.
echo Step 2: Committing changes...
git commit -m "Update to v2.0.2: Remove duplicate Simple MMA section, add cache busting, sync with local version"
if %errorlevel% neq 0 (
    echo ERROR: Failed to commit
    pause
    exit /b 1
)

echo.
echo Step 3: Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ERROR: Failed to push to GitHub
    echo You may need to enter your GitHub credentials
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Your changes are now on GitHub
echo ========================================
echo.
echo Your site will update in 2-3 minutes at:
echo https://seanpenny.github.io/forever_fit_website/
echo.
pause






