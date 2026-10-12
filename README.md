# NCDTE-2026: National Conference on Digital Technology and Engineering

Official website for **NCDTE-2026: National Conference on Digital Technology and Engineering**, hosted by **RV Institute of Technology and Management (RVITM), Bengaluru**, on **4 December 2026**.

Built with **React 18 + Vite**, **Tailwind CSS v3**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production (Static build for Vercel / Netlify / GitHub Pages)
```bash
npm run build
```
Production assets are output to the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Configuration Constants (`src/config.js`)

You can edit all conference action URLs in [src/config.js](file:///c:/Users/nisha/Desktop/csedept/src/config.js):

```javascript
export const CONFIG = {
  SUBMISSION_URL: "",       // External portal link for paper submission (e.g. CMT / EasyChair)
  REGISTRATION_URL: "",     // External portal link for registration payment gateway
  PAPER_TEMPLATE_URL: "",   // Downloadable paper template (e.g. Word / LaTeX format link)
  CONFERENCE_WEBSITE: "",   // Official college conference subdomain link
  EMAIL: "conference.rvitm@rvei.edu.in",
};
```

### Automatic Fallback Behavior:
- When `SUBMISSION_URL` is empty (`""`), the submission CTA automatically falls back to:
  `mailto:conference.rvitm@rvei.edu.in?subject=NCDTE-2026%20Paper%20Submission`
- When `REGISTRATION_URL` is empty (`""`), the registration button falls back to:
  `mailto:conference.rvitm@rvei.edu.in?subject=NCDTE-2026%20Registration`
- When `PAPER_TEMPLATE_URL` or `CONFERENCE_WEBSITE` is empty, those optional buttons/links are hidden automatically.

---

## 🖼️ Images & Brand Assets

- **RVITM Official Logo / Shield**: [public/images/rvitm-logo.png](file:///c:/Users/nisha/Desktop/csedept/public/images/rvitm-logo.png)
  - Displayed in the header navigation, identity strip, and footer.
  - Implements an `onError` fallback that renders an institutional CSS shield badge with the official name `"RV Institute of Technology and Management®"` if the file is missing or blocked.
- **Committee Avatars**:
  - Dynamically generated initials circle avatars with rich gradient backgrounds, stripping titles (`Dr.`, `Sri.`, `Ms.`, `Mr.`).

---

## 📂 Project Architecture

```
csedept/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
├── public/
│   └── images/
│       └── rvitm-logo.png
└── src/
    ├── App.jsx
    ├── config.js
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── About.jsx
    │   ├── Button.jsx
    │   ├── Committee.jsx
    │   ├── Countdown.jsx
    │   ├── CtaBand.jsx
    │   ├── FAQ.jsx
    │   ├── Fees.jsx
    │   ├── Footer.jsx
    │   ├── Guidelines.jsx
    │   ├── Hero.jsx
    │   ├── ImportantDates.jsx
    │   ├── MobileDrawer.jsx
    │   ├── Navbar.jsx
    │   ├── PersonCard.jsx
    │   ├── RegistrationModal.jsx
    │   ├── Reveal.jsx
    │   ├── SectionLabel.jsx
    │   └── Tracks.jsx
    ├── data/
    │   ├── committee.js
    │   ├── dates.js
    │   ├── faqs.js
    │   ├── fees.js
    │   └── tracks.js
    └── hooks/
        ├── useCountdown.js
        ├── useLockBodyScroll.js
        └── useScrollSpy.js
```
