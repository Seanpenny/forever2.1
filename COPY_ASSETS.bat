@echo off
echo ========================================
echo COPYING ASSETS AND IMAGES
echo ========================================
echo.

set "SOURCE=C:\Users\webbr\Documents\MY APPS\MY GYM MANAGEMENT SYSTEM\FOREVER FIT BOX PROTOTYPE\Forever fit website"
set "DEST=%~dp0"

echo Source: %SOURCE%
echo Destination: %DEST%
echo.

if not exist "%SOURCE%\assets" (
    echo ERROR: Source assets folder not found!
    pause
    exit
)

if not exist "%SOURCE%\images" (
    echo ERROR: Source images folder not found!
    pause
    exit
)

echo Copying assets folder...
xcopy "%SOURCE%\assets" "%DEST%assets\" /E /I /Y

echo Copying images folder...
xcopy "%SOURCE%\images" "%DEST%images\" /E /I /Y

echo.
echo ========================================
echo COPY COMPLETE!
echo ========================================
echo.
echo Assets and images copied to new project.
echo.
pause


