/**
 * ═══════════════════════════════════════════════════════════════
 *  ◈ CONTENT CONFIG — EDIT THIS FILE ONLY
 *  Every string the site renders lives here. No component code
 *  needs to be touched for normal content changes.
 * ═══════════════════════════════════════════════════════════════
 */

export const profile = {
  firstName: 'Nandikha',
  lastName: '', // rendered in italic accent, e.g. 'J' — leave '' if none
  statusLine: 'SYSTEM ONLINE // SOFTWARE ENGINEERING · FULL-STACK · ALGORITHMS',
  role: 'Computer Science Student',
  // Bracketed chips directly under the name
  badges: [
    '◈ Full-Stack Web Development',
    'B.E. CSE 2023–2027',
    'DSA · 400+ Problems Solved',
  ],
  // Hero paragraph. **bold** is rendered as highlighted text.
  intro:
    'Third-year **Computer Science & Engineering** student at **Your University, Coimbatore (2023–2027)**, focused on **full-stack web development and applied algorithms**. Most recently I built **Campus Connect**, an event platform now used by **12 student clubs** — React front end, Node/Express API, MongoDB, JWT auth, deployed on a single container with **99.4% uptime** over four months. Before that I shipped **StudyStack**, an offline-first spaced-repetition app implementing the **SM-2 scheduler** against a local IndexedDB store. **Seeking SDE internships in backend, full-stack, or platform engineering.**',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'hello@example.com', // ← replace with your real address
  availability: 'OPEN TO INTERNSHIPS',
  resumeUrl: '/resume.pdf', // drop resume.pdf into /public
  githubUsername: 'Nandikha',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  // Chip telemetry ticker under the hero buttons
  telemetryTicker: 'BUILD_TELEMETRY: NANDIKHA · REACT 19 · NODE 20 · CI GREEN',
  // Small status strip beside the portrait
  portraitStats: [
    { label: 'STATUS', value: 'OPEN TO WORK' },
    { label: 'DOMAINS', value: 'WEB · API · DSA' },
    { label: 'PROOF', value: 'SHIPPED & LIVE' },
  ],
}

/** Four-up telemetry grid in the hero. */
export const telemetry = [
  { label: 'Newest Build', value: 'Campus Connect', sub: '[React · Node · Mongo]' },
  { label: 'Test Suite', value: '48 / 48', sub: '[Unit · Integration]' },
  { label: 'API Latency', value: '82 ms', sub: '[p95 · Measured]' },
  { label: 'Live Users', value: '12 clubs', sub: '[Production Traffic]' },
]

/** MODULE_02 — education nodes. */
export const education = [
  {
    node: 'NODE_01 // UNDERGRADUATE',
    degree: 'B.E. Computer Science & Engineering',
    org: 'Your University, Coimbatore',
    detail:
      'Coursework in Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Compiler Design and Software Engineering. Graduation: May 2027.',
    metricLabel: 'CGPA',
    metricValue: '8.6 / 10.0',
  },
  {
    node: 'NODE_02 // SECONDARY',
    degree: 'Higher Secondary Certificate (HSC)',
    org: 'Your School, Tamil Nadu',
    detail:
      'Computer Science stream with Mathematics and Physics. First exposure to programming through C++ and Python.',
    metricLabel: 'PERCENTAGE',
    metricValue: '94.0%',
  },
]

/** MODULE_03 — skill clusters. */
export const skills = [
  {
    tag: 'WEB-FS',
    kind: 'FRONTEND / UI',
    title: 'Front-End Engineering',
    subtitle: 'React 19 · Modern CSS · Accessibility',
    body:
      'Component architecture, state management, responsive layout systems, semantic markup and WCAG-conscious interfaces. Comfortable building design systems from scratch.',
    chips: [
      'React 19',
      'JavaScript (ES2023)',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'Vite',
      'Responsive Design',
      'Accessibility (a11y)',
      'Figma → Code',
    ],
  },
  {
    tag: 'API-SRV',
    kind: 'BACKEND / DATA',
    title: 'Back-End & Persistence',
    subtitle: 'Node · Express · SQL & NoSQL',
    body:
      'RESTful API design, authentication flows, schema modelling, query optimisation and server-side validation. Familiar with the request lifecycle end to end.',
    chips: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'REST API Design',
      'JWT Auth',
      'Flask',
      'Prisma',
    ],
  },
  {
    tag: 'DSA-400',
    kind: 'ALGORITHMS',
    title: 'Data Structures & Algorithms',
    subtitle: '400+ problems · Complexity analysis',
    body:
      'Consistent competitive-programming practice with emphasis on asymptotic reasoning, graph traversal, dynamic programming and space/time trade-offs.',
    chips: [
      'C++ / STL',
      'Python',
      'Graphs & Trees',
      'Dynamic Programming',
      'Sorting & Searching',
      'Big-O Analysis',
      'LeetCode',
      'System Design (intro)',
    ],
  },
  {
    tag: 'OPS-CI',
    kind: 'TOOLING / DEVOPS',
    title: 'Tooling & Delivery',
    subtitle: 'Git · CI/CD · Linux',
    body:
      'Version control discipline, automated pipelines, containerised environments and command-line fluency for day-to-day development work.',
    chips: [
      'Git & GitHub',
      'GitHub Actions',
      'Docker',
      'Linux / Bash',
      'Postman',
      'Vercel / Netlify',
      'Jest / Vitest',
      'VS Code',
    ],
  },
  {
    tag: 'LANG-05',
    kind: 'LANGUAGES',
    title: 'Programming Languages',
    subtitle: 'Polyglot fundamentals',
    body:
      'Working proficiency across imperative, object-oriented and scripting paradigms, with strong typing fundamentals from Java and C++.',
    chips: ['JavaScript', 'Python', 'Java', 'C++', 'SQL', 'TypeScript (learning)'],
  },
  {
    tag: 'LEAD-26',
    kind: 'MANAGEMENT',
    title: 'Leadership & Collaboration',
    subtitle: 'Coding Club · Peer Mentorship',
    body:
      'Running weekly problem-solving sessions, organising hackathons, and writing documentation other people can actually follow.',
    chips: [
      'Coding Club Core',
      'Peer Mentoring',
      'Technical Writing',
      'Hackathon Organiser',
      'Code Review',
    ],
  },
]

/**
 * MODULE_04 — featured projects.
 * `metrics` renders the stat grid; `details` renders inside the
 * expandable "OPEN BUILD LOG" drawer.
 */
export const projects = [
  {
    id: 'campus-connect',
    featured: true,
    banner: ['★ FLAGSHIP BUILD', 'PRODUCTION TRAFFIC', '12 CLUBS ONBOARDED', 'MERN STACK'],
    kicker: 'CAMPUS CONNECT // FULL-STACK EVENT PLATFORM — LIVE IN PRODUCTION',
    title: 'Campus Connect — Student Event Platform',
    subtitle:
      'React SPA · Express REST API · MongoDB · JWT role-based auth · Deployed & monitored',
    body:
      'Built to replace the endless WhatsApp forwards on campus. Clubs publish events through a role-gated dashboard; students browse, filter and RSVP. The API enforces **role-based access control** with JWT refresh rotation, and the event feed is served from a **compound-indexed** Mongo collection that keeps p95 query time under **20 ms** at current volume. Deployed as a single container behind a reverse proxy with health checks and automated backups.',
    repo: 'https://github.com/Nandikha',
    demo: '',
    year: '2025',
    chips: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    metrics: [
      { label: 'Test Suite', value: '48 / 48', sub: 'unit · integration' },
      { label: 'API p95', value: '82 ms', sub: 'measured under load' },
      { label: 'Uptime', value: '99.4%', sub: '4-month window' },
      { label: 'Clubs Onboarded', value: '12', sub: 'active publishers' },
      { label: 'Auth Model', value: 'RBAC', sub: 'JWT + refresh rotation' },
      { label: 'DB Query p95', value: '< 20 ms', sub: 'compound indexed' },
    ],
    details: [
      'Role-based access control with three tiers (student, club admin, super admin) enforced at middleware level, not in the UI.',
      'JWT access tokens with rotating refresh tokens stored as httpOnly cookies; replay detection invalidates the whole token family.',
      'Compound indexes on (date, category, status) keep the filtered event feed query under 20 ms p95.',
      'Optimistic UI for RSVP with rollback on failure, so the interaction feels instant on slow campus Wi-Fi.',
      'GitHub Actions pipeline runs lint, unit and integration tests, then builds and pushes the container image on every merge to main.',
    ],
  },
  {
    id: 'studystack',
    featured: false,
    banner: ['OFFLINE-FIRST', 'PWA', 'SM-2 SCHEDULER'],
    kicker: 'STUDYSTACK // SPACED REPETITION ENGINE',
    title: 'StudyStack — Spaced Repetition Flashcards',
    subtitle: 'SM-2 algorithm · IndexedDB · Installable PWA · Keyboard-first review',
    body:
      'A flashcard app that implements the **SM-2 spaced-repetition scheduler** properly — ease factors, interval growth and lapse handling — rather than a naive "show it again tomorrow" loop. Fully **offline-capable**: a service worker caches the shell and all review state persists to **IndexedDB**, so a review session survives an airplane-mode commute and syncs nothing it does not need to.',
    repo: 'https://github.com/Nandikha',
    demo: '',
    year: '2025',
    chips: ['React', 'IndexedDB', 'Service Worker', 'PWA', 'Vitest'],
    metrics: [
      { label: 'Scheduler', value: 'SM-2', sub: 'ease + interval + lapse' },
      { label: 'Offline', value: '100%', sub: 'no network required' },
      { label: 'Cold Start', value: '< 1.2 s', sub: 'Lighthouse measured' },
      { label: 'Storage', value: 'IndexedDB', sub: 'local-first' },
    ],
    details: [
      'Full SM-2 implementation: quality ratings 0–5 adjust the ease factor, which compounds the review interval.',
      'Service worker with a stale-while-revalidate strategy for the app shell and cache-first for static assets.',
      'Entire review loop is keyboard driven — space to flip, 1–4 to rate — so a session never needs the mouse.',
      'Unit tests cover the scheduler maths against a reference table of expected intervals.',
    ],
  },
  {
    id: 'expense-lens',
    featured: false,
    banner: ['DATA PIPELINE', 'PANDAS', 'HEURISTIC CLASSIFIER'],
    kicker: 'EXPENSE LENS // STATEMENT PARSING & CATEGORISATION',
    title: 'Expense Lens — Bank Statement Analyser',
    subtitle: 'Python · Pandas · Flask · Rule-based category inference',
    body:
      'Ingests messy bank-statement CSVs from **four different bank formats**, normalises them into a single schema, and produces readable monthly spending breakdowns. Category detection runs a **rule + keyword heuristic** scored against a hand-labelled set of 600 transactions, reaching **91% accuracy** without any ML dependency.',
    repo: 'https://github.com/Nandikha',
    demo: '',
    year: '2024',
    chips: ['Python', 'Pandas', 'Flask', 'Matplotlib', 'pytest'],
    metrics: [
      { label: 'Classifier Accuracy', value: '91%', sub: '600 labelled txns' },
      { label: 'Bank Formats', value: '4', sub: 'normalised schema' },
      { label: 'Parse Speed', value: '10k rows/s', sub: 'vectorised' },
    ],
    details: [
      'Format detection sniffs the header row and dispatches to the right parser adapter.',
      'All transforms are vectorised Pandas operations — no per-row Python loops.',
      'Flask front end renders monthly breakdowns with drill-down by category.',
      'pytest suite runs against anonymised fixture statements for each supported bank.',
    ],
  },
  {
    id: 'portfolio',
    featured: false,
    banner: ['THIS SITE', 'ZERO DEPENDENCIES', 'LIVE GITHUB API'],
    kicker: 'PORTFOLIO // STATIC SITE + RUNTIME DATA',
    title: 'This Portfolio',
    subtitle: 'React 19 · Vite · Tailwind v4 · GitHub API · Pages CI',
    body:
      'The site you are reading. Hand-built component system with **no UI library and no icon package** — every icon is inline SVG. The open-source module queries the **GitHub REST API at runtime**, so new repositories appear here without a rebuild. Ships as a fully static bundle deployed by GitHub Actions.',
    repo: 'https://github.com/Nandikha/Nandikha-Portfolio',
    demo: '',
    year: '2026',
    chips: ['React 19', 'Vite', 'Tailwind v4', 'GitHub Actions'],
    metrics: [
      { label: 'JS Bundle', value: '~77 kB', sub: 'gzipped' },
      { label: 'UI Deps', value: '0', sub: 'hand-rolled' },
      { label: 'Lint', value: '0 errors', sub: 'oxlint' },
    ],
    details: [
      'All content is centralised in a single content.js module for frictionless editing.',
      'Scroll reveals and active-nav tracking use IntersectionObserver, not scroll listeners.',
      'Respects prefers-reduced-motion — every animation is disabled for users who ask.',
      'Deployed automatically to GitHub Pages on every push to main.',
    ],
  },
]

/** MODULE_06 — experience, rendered as clock pulses. */
export const timeline = [
  {
    edge: 'RISING EDGE 01 — INDUSTRY INTERNSHIP',
    title: 'Web Development Intern',
    org: 'Placeholder Tech Pvt. Ltd., Coimbatore',
    meta: '📍 On-site · ⏱ 10.06.2025 – 25.07.2025 · 📜 Cert No: 00000',
    body:
      'Built internal dashboard screens in **React**, wrote and documented **REST endpoints** in Node, and shipped **three features to production** during a six-week placement. Participated in code review and daily standups alongside the platform team.',
    chips: ['React', 'Node.js', 'REST API', 'Code Review', 'Agile'],
  },
  {
    edge: 'RISING EDGE 02 — FLAGSHIP PROJECT',
    title: 'Lead Developer — Campus Connect',
    org: 'Independent Project · Deployed to production',
    meta: '◈ Live since 03.2025 · 12 clubs onboarded · 99.4% uptime',
    body:
      'Owned architecture, implementation and deployment of a **MERN event platform** now used by 12 campus clubs. Designed the RBAC model, wrote the **48-test** suite, and set up the CI pipeline and container deployment.',
    chips: ['MERN Stack', 'RBAC Design', 'Docker', 'CI/CD', '48/48 Tests'],
  },
  {
    edge: 'RISING EDGE 03 — LEADERSHIP & OPERATIONS',
    title: 'Core Member — Coding Club',
    org: 'Your University, Coimbatore',
    meta: '🏛 Campus · 👥 60+ juniors mentored',
    body:
      'Run **weekly problem-solving sessions** for first- and second-year students, curate practice sets, and help organise the annual **24-hour hackathon**.',
    chips: ['Peer Mentoring', 'DSA Coaching', 'Event Operations', 'Technical Writing'],
  },
  {
    edge: 'RISING EDGE 04 — CERTIFICATIONS',
    title: 'Technical Certifications',
    org: 'Coursera · NPTEL · freeCodeCamp',
    body: 'Formal coursework in algorithms, databases and full-stack web development.',
    certs: [
      'CERT_01 // ALGO — Algorithms Specialisation (Coursera)',
      'CERT_02 // DBMS — Database Management Systems (NPTEL)',
      'CERT_03 // WEB — Responsive Web Design (freeCodeCamp)',
      'CERT_04 // BACKEND — APIs & Microservices (freeCodeCamp)',
    ],
    chips: ['Coursera', 'NPTEL', 'freeCodeCamp'],
  },
]
