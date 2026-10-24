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
  SUBMISSION_URL: "", // External portal link for paper submission (e.g. CMT / EasyChair)
  REGISTRATION_URL: "", // External portal link for registration payment gateway
  PAPER_TEMPLATE_URL: "", // Downloadable paper template (e.g. Word / LaTeX format link)
  CONFERENCE_WEBSITE: "", // Official college conference subdomain link
  EMAIL: "national_conference.rvitm@rvei.edu.in",
  BROCHURE_URL: "", // Download Conference Brochure (button hidden if empty)
  MAP_URL:
    "https://www.google.com/maps/search/?api=1&query=RV+Institute+of+Technology+and+Management+Kothanur+JP+Nagar+Bengaluru+560076",
  CONTACT_PHONES: ["9655523276", "9902028279", "7200575617", "9739981676"],
};
```

### Automatic Fallback Behavior:

- When `SUBMISSION_URL` is empty (`""`), the submission CTA automatically falls back to:
  `mailto:national_conference.rvitm@rvei.edu.in?subject=NCDTE-2026%20Paper%20Submission`
- When `REGISTRATION_URL` is empty (`""`), the registration button falls back to:
  `mailto:national_conference.rvitm@rvei.edu.in?subject=NCDTE-2026%20Registration`
- When `BROCHURE_URL` or `PAPER_TEMPLATE_URL` is empty, those optional buttons/links are hidden automatically.

---

## 🖼️ Committee Photo Specifications & Assets

### Committee Portraits (`/public/images/committee/<slug>.jpg`):

- **Dimensions**: 800 × 1000 px (4:5 aspect ratio).
- **Format**: JPG or WebP.
- **Composition**: Face centered in the upper half of the frame with a consistent neutral background.
- **File size**: Under 150 KB each for optimal web performance.
- **Note**: Do not generate or invent portraits. When an image file is absent or fails to load, `PersonCard` displays a fallback gradient tile (`from-aurora-ice via-aurora-lavender to-white`) containing the member's initials in Instrument Serif at 72px.

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
│       ├── rvitm-logo.png
│       ├── rvitm-campus.webp
│       ├── rsst.png
│       ├── vtu.png
│       ├── aicte.png
│       ├── qr-submission.png
│       ├── qr-payment.png
│       └── committee/
└── src/
    ├── App.jsx
    ├── config.js
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── Container.jsx
    │   ├── InstitutionsMarquee.jsx
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Countdown.jsx
    │   ├── Blob.jsx
    │   ├── Glow.jsx
    │   ├── Reveal.jsx
    │   ├── About.jsx
    │   ├── Institution.jsx
    │   ├── Department.jsx
    │   ├── Tracks.jsx
    │   ├── Guidelines.jsx
    │   ├── PresentationFormats.jsx
    │   ├── WhyParticipate.jsx
    │   ├── SubmissionProcess.jsx
    │   ├── ImportantDates.jsx
    │   ├── Fees.jsx
    │   ├── Committee.jsx
    │   ├── PersonCard.jsx
    │   ├── ContactDesk.jsx
    │   ├── FAQ.jsx
    │   ├── CtaBand.jsx
    │   ├── Footer.jsx
    │   ├── RegistrationModal.jsx
    │   ├── Button.jsx
    │   ├── Card.jsx
    │   ├── SectionHeading.jsx
    │   └── SectionLabel.jsx
    ├── data/
    │   ├── affiliations.js
    │   ├── committee.js
    │   ├── dates.js
    │   ├── departments.js
    │   ├── faqs.js
    │   ├── fees.js
    │   ├── formats.js
    │   ├── institution.js
    │   ├── process.js
    │   ├── tracks.js
    │   └── why.js
    └── hooks/
        ├── useCountdown.js
        ├── useLockBodyScroll.js
        └── useScrollSpy.js
```
