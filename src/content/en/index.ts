export const en = {
  profile: {
    title: "Software Engineer | Fullstack, Data & DevOps",
    tagline:
      "A graduate of IAI-Cameroon with expertise in secure API design, predictive analytics and infrastructure administration. Responsive, rigorous and ready to contribute from day one.",
    about: [
      "I am a software engineer trained at IAI-Cameroon, working at KIAMA S.A. in Yaoundé, where I build backend and fullstack applications.",
      "My dual background in software engineering and in systems and networks lets me follow a project from the data model through to deployment: secure APIs, data analysis and going live on a VPS.",
    ],
    location: "Yaoundé, Cameroon",
    availability: "Open to fixed-term and permanent positions",
  },
  experience: [
    {
      company: "KIAMA S.A.",
      role: "Academic then professional internship, backend and fullstack development",
      location: "Yaoundé",
      period: "Since Jul. 2026",
      highlights: [
        "Built applications with React.js and TypeScript, and REST APIs with Symfony 7 and Java 21",
        "Designed a predictive maintenance module with Python and machine learning",
        "Security and traceability: JWT, 2FA/OTP, role management, action logging",
        "Data and DevOps: Oracle, PostgreSQL, MySQL, VPS deployment, Git",
        "Acceptance testing, support and technical coordination",
      ],
    },
    {
      company: "DOWHILE AWAE Laverie",
      role: "Internship",
      period: "Jul. - Sep. 2025",
      highlights: [
        "LDAP access management interface with change tracking and PostgreSQL",
        "Technical support",
      ],
    },
    {
      company: "WELLDONE&CO",
      role: "Internship",
      period: "Jul. - Sep. 2024",
      highlights: [
        "School tracking platform built with Django and MySQL, with an AI module for student guidance",
      ],
    },
  ],
  education: [
    {
      degree:
        "Diplôme d'ingénieure des travaux informatiques (Bachelor's degree in software engineering)",
      school: "IAI-Cameroon",
    },
    {
      degree: "Higher technician diploma, systems and networks",
      school: "IAI-Cameroon",
    },
    {
      degree: "Baccalauréat C (mathematics and physical sciences)",
      school: "Lycée Bilingue de Yaoundé Essos",
    },
  ],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Intermediate" },
    { name: "German", level: "Goethe-Zertifikat A1 and A2" },
  ],
  skills: [
    {
      name: "Backend & API",
      daily: ["PHP/Symfony", "Java", "TypeScript", "Python/Django"],
      notions: [],
    },
    {
      name: "Frontend",
      daily: ["React.js", "HTML5/CSS3"],
      notions: ["Flutter"],
    },
    {
      name: "Data & AI",
      daily: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
      notions: ["Machine learning", "Prompt engineering"],
    },
    {
      name: "Databases",
      daily: ["PostgreSQL", "MySQL", "Oracle"],
      notions: ["PostGIS", "SQL Server", "MongoDB", "SQLite"],
    },
    {
      name: "Security",
      daily: ["JWT", "2FA/OTP", "Role management", "Traceability"],
      notions: ["LDAP"],
    },
    {
      name: "DevOps & systems",
      daily: ["Git/GitHub/GitLab", "Linux", "VPS deployment"],
      notions: ["Docker", "Windows Server", "TCP/IP", "Cloud"],
    },
    {
      name: "Project management",
      daily: ["UML", "Agile/Scrum", "Jira"],
      notions: ["Trello"],
    },
  ],
  projects: [
    {
      slug: "gep",
      title: "GEP, public asset management",
      summary:
        "A platform that centralizes the assets of a Cameroonian public administration: vehicles, land, buildings and IT equipment.",
      role: "Backend developer",
      organization: "KIAMA S.A.",
      status: "In production",
      stack: ["Symfony 7", "Java 21", "React.js", "TypeScript"],
      confidential: true,
      links: {},
    },
    {
      slug: "solve-educ",
      title: "Solve'Educ",
      summary:
        "A Django tracking and guidance platform for Cameroonian secondary education.",
      role: "Design and development",
      organization: "WELLDONE&CO",
      status: "Not deployed",
      stack: ["Python", "Django", "MySQL", "UML"],
      confidential: false,
      links: {},
    },
    {
      slug: "solve-shop",
      title: "Solve'Shop",
      summary:
        "A Django marketplace for French-speaking Africa, with mobile money payments.",
      role: "Design and development",
      organization: "Personal project",
      status: "Not deployed",
      stack: ["Python", "Django"],
      confidential: false,
      links: {},
    },
    {
      slug: "apptest",
      title: "AppTest",
      summary:
        "A platform for running different types of tests on a web application.",
      role: "Final-year project",
      organization: "KIAMA S.A.",
      status: "[À COMPLÉTER: AppTest status]",
      stack: ["[À COMPLÉTER: publishable AppTest stack]"],
      confidential: true,
      links: {},
    },
  ],
};
