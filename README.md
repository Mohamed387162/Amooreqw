# Amoore Specialist Hospital — Web Application

Official trilingual (Somali, English, Arabic RTL) web platform for **Amoore Specialist Hospital (Isbitaalka Takhasusiga Amoore)** covering Mogadishu (West Taleex) and Hargeisa (Jigjiga-Yar), specialist departments, verified timelines, educational academy summaries, discreet patient booking, and brand color/research transparency.

---

## Sida Loogu Deploy Gareeyo GitHub Pages (Bilaash / Free)

Mashruucan waxaa loogu diyaariyay inuu si toos ah ugu shaqeeyo **GitHub Pages** oo bilaash ah, iyadoo aan loo baahnayn server lacag ah:

1. **Ku dir koodhka GitHub (Push to GitHub):**
   ```bash
   git init
   git add .
   git commit -m "Deploy Amoore Specialist Hospital site"
   git branch -M main
   git remote add origin https://github.com/<MAGACAAGA_GITHUB>/<MAGACA_REPO>.git
   git push -u origin main
   ```

2. **Daar GitHub Pages gudaha GitHub Settings:**
   - Fur repository-gaaga GitHub.
   - Tag **Settings** → **Pages**.
   - Qaybta **Build and deployment** → **Source**, ka dooro **GitHub Actions**.

3. **Sug 1–2 daqiiqo:**
   - Workflow-ga `.github/workflows/deploy.yml` ayaa si otomaatig ah u dhisaya faylasha static-ga (`out/`), wuxuuna ku soo bandhigayaa cinwaanka:
     - Project repo: `https://<MAGACAAGA_GITHUB>.github.io/<MAGACA_REPO>/`
     - User/Org repo (`<username>.github.io`): `https://<MAGACAAGA_GITHUB>.github.io/`

---

## Local Development & Static Export Testing

```bash
# Development server (port 3000)
npm run dev

# Unit tests
npx --yes tsx --test lib/hospital-logic.test.ts

# Test GitHub Pages static build locally (subpath example)
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/amoore-hospital npm run build:github
```
