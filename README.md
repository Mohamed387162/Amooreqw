# Amoore Specialist Hospital — Web Application

Official trilingual (Somali, English, Arabic RTL) web platform for **Amoore Specialist Hospital (Isbitaalka Takhasusiga Amoore)** covering Mogadishu (West Taleex) and Hargeisa (Jigjiga-Yar), specialist departments, verified timelines, educational academy summaries, discreet patient booking, and brand color/research transparency.

---

## Sida Bilaash Loogu Deploy Gareeyo Vercel (Using Your GitHub Repo)

**Vercel Hobby Plan** waa **100% bilaash** (kaarka bangiga ama 30-days trial looma baahna), wuxuuna si toos ah uga shaqeeyaa **GitHub repository-gaaga ha ahaado Public ama Private**:

1. **Hubi in koodhka ugu dambeeya ku jiro GitHub:**
   ```bash
   git add .
   git commit -m "Configure Vercel free deployment"
   git push origin main
   ```

2. **Gal Vercel adigoo isticmaalaya akoonkaaga GitHub:**
   - Tag **[vercel.com](https://vercel.com)** → guji **Sign Up** ama **Login** → dooro **Continue with GitHub**.
   - Haddii uu ku weydiiyo nooca akoonka, dooro **Hobby (Free — Personal / Non-commercial)**.

3. **Soo xir Repository-gaaga (Import Git Repository):**
   - Gudaha Vercel Dashboard, guji **Add New...** → **Project**.
   - Liiska **Import Git Repository** ka hel repository-ga aad u samaysay Isbitaalka Amoore, kaddib guji **Import**.

4. **Ha beddelin Settings-ka (Auto-Detected by `vercel.json`):**
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Environment Variables**: Looma baahna wax furayaal sir ah — boggu si buuxda ayuu u shaqaynayaa isagoo leh dhammaan xogta, saacadda tooska ah ee EAT, 3-da luqadood (SO/EN/AR), iyo Ballanta Qarsoon.

5. **Guji `Deploy`:**
   - 1–2 daqiiqo kaddib wuxuu ku siinayaa link bilaash ah oo HTTPS leh (tusaale: `https://amoore-hospital.vercel.app`).
   - Mar kasta oo aad wax ku beddesho oo aad `git push` samayso, Vercel si otomaatig ah ayuu u cusboonaysiinayaa bogga.

---

## Local Verification & Testing

```bash
# Development server (port 3000)
npm run dev

# Unit tests
npx --yes tsx --test lib/hospital-logic.test.ts

# Production Vercel-compatible build check
VERCEL=1 npm run build
```
