# Amoore Specialist Hospital — Vercel Deployment Package

Official trilingual (Somali, English, Arabic RTL) web platform for **Amoore Specialist Hospital (Isbitaalka Takhasusiga Amoore)** covering Mogadishu (West Taleex) and Hargeisa (Jigjiga-Yar), specialist departments, verified timelines, educational academy summaries, discreet patient booking, and brand color/research transparency.

---

## Folder-ka `vercel-deploy/` (Diyaar u ah Vercel Branch ama Root Directory)

Folder-ka **`vercel-deploy/`** waxaa lagu ururiyay **dhammaan faylasha rasmiga ah** ee uu ku shaqaynayo website-ka (iyada oo aan hal dhibic ama fayl ka maqnayn, kana nadiif ah faylasha KMG ah). Waxaad ugu deploy garayn kartaa Vercel **laba hab midkood**:

### Habka 1: Ka dooro `vercel-deploy` gudaha Vercel (Root Directory)
1. Ku shub mashruuca GitHub repository-gaaga (`Mohamed387162/Amooreqw`).
2. Gudaha Vercel Project → **Settings** → **Build and Deployment** → **Root Directory**:
   - Ku qor / dooro **`vercel-deploy`**.
3. Hubi in **Node.js Version** uu yahay **22.x** (si toos ah ayuu uga akhrinayaa `package.json` & `.nvmrc`).
4. Guji **Deploy**.

### Habka 2: Ka dhig Branch gaar ah (`vercel-deploy` branch)
Haddii aad rabto in aad Vercel ka doorato **Branch ahaan** (`vercel-deploy`):
```bash
git add .
git commit -m "Add clean vercel-deploy package with Node 22 LTS"
git push origin main

# Ku dir waxa ku jira vercel-deploy branch cusub oo la yiraahdo vercel-deploy
git subtree push --prefix vercel-deploy origin vercel-deploy
```
Kaddib gudaha **Vercel → Settings → Git → Production Branch**, ka dooro **`vercel-deploy`** (Root Directory `./`) oo guji **Redeploy**.

---

## Falanqaynta Build Log-ga (Node v26.13.1 & `npm warn`)
- Dhammaan khadadka ku jiray log-gaaga (`npm warn EBADENGINE superstatic@10.0.0`, `deprecated node-domexception`, `uuid@9.0.1`, `glob@10.5.0`, `eslint@9.39.1`) waxay ahaayeen **digniino npm (`npm warn`)**, ma ahan build error.
- Sababta `EBADENGINE` u soo baxday waxay ahayd in Vercel uu isticmaalay **Node `v26.13.1`**. Waxaan hadda ku xirnay **Node `22.x` LTS** (`"engines": { "node": "22.x" }` gudaha `package.json` iyo `.nvmrc`) si uu Node 22 ugu dhiso si deggan oo aan lahayn khilaaf version ah.
