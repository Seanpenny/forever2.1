# Cache Busting Guide - Forever Fit Website

## 🔄 Why Cache Busting?

Browsers cache files to load websites faster. Sometimes this causes old versions to show. Cache busting forces browsers to load the latest version.

## ✅ What We've Added

1. **Version Query Strings**: CSS and JS files now have `?v=2.0.1` appended
2. **Meta Tags**: Added cache-control headers to prevent caching
3. **Version Check Script**: Automatically clears cache when version changes
4. **Version Logging**: Console shows current version for debugging

## 📝 How to Update Version (When You Make Changes)

### Step 1: Update Version Number
Open `index.html` and find these 3 places (around lines 11, 15, and 797):

1. **Meta tag version** (line ~11):
   ```html
   <meta name="version" content="2.0.1">
   ```

2. **CSS file** (line ~15):
   ```html
   <link rel="stylesheet" href="css/styles.css?v=2.0.1">
   ```

3. **JavaScript file** (line ~797):
   ```html
   <script src="js/main.js?v=2.0.1"></script>
   ```

4. **Version constant in script** (line ~800):
   ```javascript
   const CURRENT_VERSION = '2.0.1';
   ```

5. **JavaScript console log** (in `js/main.js` line ~592):
   ```javascript
   console.log('Version: 2.0.1 - Cache busting enabled');
   ```

### Step 2: Change Version Number
Change `2.0.1` to a new number like `2.0.2` or `2.1.0` in all 5 places above.

### Step 3: Test
1. Open your website
2. Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac) for hard refresh
3. Check browser console (F12) - should show new version number

## 🚀 Quick Version Update Script

You can also use this PowerShell command to update version:

```powershell
# Replace 2.0.2 with your new version number
$newVersion = "2.0.2"
(Get-Content index.html) -replace '\?v=\d+\.\d+\.\d+', "?v=$newVersion" -replace 'content="\d+\.\d+\.\d+"', "content=`"$newVersion`"" -replace "const CURRENT_VERSION = '\d+\.\d+\.\d+'", "const CURRENT_VERSION = '$newVersion'" | Set-Content index.html
(Get-Content js/main.js) -replace "Version: \d+\.\d+\.\d+", "Version: $newVersion" | Set-Content js/main.js
```

## 💡 Tips

- **Always update version** when you change CSS, JS, or HTML structure
- **Use semantic versioning**: `MAJOR.MINOR.PATCH` (e.g., 2.0.1)
- **Test in incognito mode** to verify cache busting works
- **Check browser console** to confirm version loaded

## 🔍 How to Verify It's Working

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. You should see: `✅ Forever Fit Website - Version: 2.0.1`
4. If you see an old version, the cache busting isn't working - check all 5 version numbers match

## 🆘 Troubleshooting

**Still seeing old version?**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache manually
3. Try incognito/private browsing mode
4. Check all 5 version numbers match exactly

**Version not updating?**
- Make sure you updated ALL 5 places
- Check for typos in version number
- Clear browser localStorage: `localStorage.clear()` in console

---

**Current Version**: 2.0.1  
**Last Updated**: December 2025



