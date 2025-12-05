# Quick Push to GitHub - Manual Steps

## 🚀 Easy Way: Use the Batch File

1. **Double-click:** `PUSH_TO_GITHUB.bat`
2. **Wait for it to finish**
3. **Done!** Your changes are pushed

---

## 📝 Manual Way: Copy & Paste These Commands

Open PowerShell in your project folder and run these **one at a time**:

```powershell
git add .
```

```powershell
git commit -m "Update to v2.0.2: Remove duplicate Simple MMA section, add cache busting"
```

```powershell
git push origin main
```

---

## ✅ What This Will Do

- ✅ Add all your local changes
- ✅ Commit them with a message
- ✅ Push to GitHub repository
- ✅ Update your live website in 2-3 minutes

---

## 🔍 After Pushing

1. **Wait 2-3 minutes** for GitHub Pages to update
2. **Visit:** https://seanpenny.github.io/forever_fit_website/
3. **Hard refresh:** `Ctrl+Shift+R` to see version 2.0.2

---

## ⚠️ If You Get Errors

**"Authentication failed":**
- You may need to use a Personal Access Token
- Or use GitHub Desktop instead

**"Nothing to commit":**
- Your changes are already committed
- Just run: `git push origin main`

---

**Status:** Ready to push! Just run the batch file or commands above.



