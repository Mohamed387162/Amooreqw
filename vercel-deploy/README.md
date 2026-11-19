# Amoore Specialist Hospital — Vercel Deployment Package

Official trilingual (Somali, English, Arabic RTL) web platform for **Amoore Specialist Hospital (Isbitaalka Takhasusiga Amoore)** covering Mogadishu (West Taleex) and Hargeisa (Jigjiga-Yar), specialist departments, verified timelines, educational academy summaries, discreet patient booking, and brand color/research transparency.

---

## Folder-ka `vercel-deploy/` (Diyaar u ah Vercel Branch ama Root Directory)

Folder-ka **`vercel-deploy/`** waxaa lagu ururiyay **dhammaan faylasha rasmiga ah** ee uu ku shaqaynayo website-ka (iyada oo aan hal dhibic ama fayl ka maqnayn, kana nadiif ah faylasha KMG ah). Waxaad ugu deploy garayn kartaa Vercel **laba hab midkood**:

### Habka 1: Ka dooro `vercel-deploy` gudaha Vercel (Root Directory)
1. Ku shub mashruuca GitHub repository-gaaga (`Mohamed387162/Amooreqw`).
2. Gudaha Vercel Project → **Settings** → **Build and Deployment** → **Root Directory**:
   - Ku qor / dooro **`vercel-deploy`**.
3. Ka daa **Node.js Version** sida uu Vercel kuugu dejiyay (tusaale **24.x** ama **26.x**) — faylasha `package.json` iyo galka `vercel-deploy` waxay si nadiif ah ugu shaqeeyaan iyadoon la abuurin `Node.js Version Override`.
4. Guji **Deploy**.

### Habka 2: Ka dhig Branch gaar ah (`vercel-deploy` branch)
Haddii aad rabto in aad Vercel ka doorato **Branch ahaan** (`vercel-deploy`):
```bash
git add .
git commit -m "Remove Node.js version override in vercel-deploy"
git push origin main

# Ku dir waxa ku jira vercel-deploy branch cusub oo la yiraahdo vercel-deploy
git subtree push --prefix vercel-deploy origin vercel-deploy
```
Kaddib gudaha **Vercel → Settings → Git → Production Branch**, ka dooro **`vercel-deploy`** (Root Directory `./`) oo guji **Redeploy**.

---

## Xasuusin Muhiim ah
- Xirmada `firebase-tools` (`superstatic`) iyo `@google/genai` waa laga saaray `vercel-deploy/package.json`, sidaa darteed mashruucu si buuxda ayuu ugu dhismaa Node `20.x`, `22.x`, `24.x`, iyo `26.x` iyada oo aan lahayn khilaaf version ama `Node.js Version Override`.
