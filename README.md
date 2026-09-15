# JobPulse — Job Finder Dashboard

A polished portfolio-ready job finder dashboard built with React 18, Vite, JavaScript, Tailwind CSS, Framer Motion, and Lucide React.

## Highlights
- Modern dark glassmorphism UI with emerald/cyan accents
- Responsive layout for desktop, tablet, and mobile
- Search by role, company, location, or skill
- Work-style and department filters
- Saved jobs persisted with localStorage
- Animated job cards and detail modal
- Responsive navigation and empty states
- Production build configured for Vite

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Structure

```text
job-finder-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobFilters.jsx
│   │   ├── JobModal.jsx
│   │   └── StatsOverview.jsx
│   ├── data/
│   │   └── mockJobs.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

Replace `src/data/mockJobs.js` with REST API data when connecting a backend.
