# 🚀 Quick Run Guide - View Your Website Properly

## Problem
When you press "Run" in VS Code, it opens `file:///` which doesn't work properly for web pages (CSS, JavaScript, images won't load correctly).

## Solution: Use a Local Web Server

### Option 1: Double-Click to Start Server (Easiest!)

**Just double-click one of these files:**
- `START_SERVER.bat` (Windows Batch file)
- `START_SERVER.ps1` (PowerShell script)

Then open your browser and go to:
**http://localhost:8000/index.html**

---

### Option 2: Use VS Code Live Server Extension (Recommended!)

1. **Install Live Server Extension:**
   - Press `Ctrl+Shift+X` to open Extensions
   - Search for "Live Server" by Ritwick Dey
   - Click "Install"

2. **Run Your Site:**
   - Right-click on `index.html` in the file explorer
   - Select "Open with Live Server"
   - Your site will open automatically at `http://127.0.0.1:5500/index.html`

---

### Option 3: Manual Server Start

**If you have Python installed:**
```powershell
python -m http.server 8000
```
Then open: http://localhost:8000/index.html

**If you have Node.js installed:**
```powershell
npx http-server -p 8000
```
Then open: http://localhost:8000/index.html

---

## Why Use a Server?

- ✅ CSS files load correctly
- ✅ JavaScript works properly
- ✅ Images display correctly
- ✅ No CORS errors
- ✅ Matches how Vercel serves your site

---

## Quick Fix for VS Code "Run" Button

The `.vscode/launch.json` file has been updated to use a local server instead of `file://`.

**To use it:**
1. Press `F5` or click the Run button
2. Select "Open in Browser (Local Server)"
3. The server will start automatically

---

**Your site is ready! Just use one of the methods above.** 🎉

