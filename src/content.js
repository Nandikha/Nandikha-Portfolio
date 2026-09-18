/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS.
 *  Everything the site displays lives here — no component code
 *  needs to be touched. Replace the placeholder text, save, done.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Nandikha',
  // Shown in the browser tab and hero eyebrow
  role: 'Computer Science Student',
  tagline: 'Building things for the web, one commit at a time.',
  intro:
    'I’m a computer science undergraduate based in Coimbatore, India. I like turning half-formed ideas into working software — mostly with JavaScript, Python and whatever I happen to be curious about that week.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'hello@example.com', // ← replace with your real email
  availability: 'Open to internships & junior roles',
  resumeUrl: '/resume.pdf', // put resume.pdf in /public, or link to Drive
  githubUsername: 'Nandikha',
  socials: [
    { label: 'GitHub', url: 'https://github.com/Nandikha' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' },
    { label: 'Email', url: 'mailto:hello@example.com' },
  ],
}

export const stats = [
  { value: '3+', label: 'Years writing code' },
  { value: '10+', label: 'Projects shipped' },
  { value: '5', label: 'Languages & frameworks' },
]

export const about = {
  paragraphs: [
    'I started programming in school by copying tutorials I barely understood, and stuck around because the moment something finally runs is genuinely addictive. Since then I’ve worked through data structures, web development, and a growing pile of side projects.',
    'Right now I’m focused on full-stack web development and on getting comfortable with the parts of engineering that aren’t code — writing clear docs, reading other people’s repos, and shipping things that actually get used.',
    'Outside of class I mentor first-year students, take part in hackathons, and maintain a few small open-source utilities.',
  ],
  highlights: [
    'Comfortable across the stack — React on the front, Node or Flask on the back',
    'Strong fundamentals in DSA, OOP and databases',
    'Fast learner who reads documentation before Stack Overflow',
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'SQL', 'HTML & CSS'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Flask'],
  },
  {
    group: 'Tools & Platforms',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Linux'],
  },
  {
    group: 'Currently learning',
    items: ['TypeScript', 'Next.js', 'Docker', 'System design'],
  },
]

export const projects = [
  {
    title: 'Campus Connect',
    blurb:
      'A student event board where clubs post happenings and students RSVP. Built to replace the endless WhatsApp forwards on campus.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2025',
    repo: 'https://github.com/Nandikha',
    demo: '',
    featured: true,
  },
  {
    title: 'StudyStack',
    blurb:
      'Spaced-repetition flashcard app with a simple SM-2 scheduler, offline support and keyboard-first review.',
    tags: ['React', 'IndexedDB', 'PWA'],
    year: '2025',
    repo: 'https://github.com/Nandikha',
    demo: '',
    featured: true,
  },
  {
    title: 'Expense Lens',
    blurb:
      'Parses bank statement CSVs and turns them into readable monthly spending breakdowns with category detection.',
    tags: ['Python', 'Pandas', 'Flask'],
    year: '2024',
    repo: 'https://github.com/Nandikha',
    demo: '',
    featured: false,
  },
  {
    title: 'Portfolio Site',
    blurb:
      'This site — a fast, accessible single-page portfolio built with React, Vite and Tailwind, deployed on GitHub Pages.',
    tags: ['React', 'Vite', 'Tailwind'],
    year: '2026',
    repo: 'https://github.com/Nandikha/Nandikha-Portfolio',
    demo: '',
    featured: false,
  },
]

export const timeline = [
  {
    period: '2023 — 2027',
    title: 'B.E. Computer Science & Engineering',
    org: 'Your University, Coimbatore',
    detail:
      'Coursework in data structures, algorithms, operating systems, DBMS and computer networks. CGPA 8.6/10.',
    kind: 'education',
  },
  {
    period: 'Summer 2025',
    title: 'Web Development Intern',
    org: 'Placeholder Tech Pvt. Ltd.',
    detail:
      'Built internal dashboard screens in React, wrote REST endpoints, and shipped three features to production.',
    kind: 'experience',
  },
  {
    period: '2024 — present',
    title: 'Core Member, Coding Club',
    org: 'Campus',
    detail:
      'Run weekly problem-solving sessions for juniors and help organise the annual 24-hour hackathon.',
    kind: 'experience',
  },
  {
    period: '2021 — 2023',
    title: 'Higher Secondary, Computer Science',
    org: 'Your School',
    detail: 'Graduated with 94%. First contact with programming, and it stuck.',
    kind: 'education',
  },
]
