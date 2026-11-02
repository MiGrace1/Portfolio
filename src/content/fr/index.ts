export const fr = {
  profile: {
    title: "Ingénieure en Génie Logiciel | Fullstack, Data & DevOps",
    tagline:
      "Diplômée de l'IAI-Cameroun, j'ai développé une expertise en conception d'APIs sécurisées, analyse prédictive et administration d'infrastructures. Réactive, rigoureuse et immédiatement opérationnelle.",
    about: [
      "Ingénieure en génie logiciel formée à l'IAI-Cameroun, je travaille chez KIAMA S.A. à Yaoundé, où je développe des applications backend et fullstack.",
      "Ma double formation en génie logiciel et en systèmes et réseaux me permet de suivre un projet du modèle de données jusqu'au déploiement : APIs sécurisées, analyse de données et mise en ligne sur VPS.",
    ],
    location: "Yaoundé, Cameroun",
    availability: "Ouverte à un poste en CDD ou CDI",
  },
  experience: [
    {
      company: "KIAMA S.A.",
      role: "Stage académique puis professionnel, développement backend et fullstack",
      location: "Yaoundé",
      period: "Depuis juil. 2026",
      highlights: [
        "Développement d'applications avec React.js et TypeScript, et d'APIs REST avec Symfony 7 et Java 21",
        "Conception d'un module de maintenance prédictive en Python et machine learning",
        "Sécurité et traçabilité : JWT, 2FA/OTP, gestion des rôles, journalisation des actions",
        "Données et DevOps : Oracle, PostgreSQL, MySQL, déploiement sur VPS, Git",
        "Tests de recette, support et coordination technique",
      ],
    },
    {
      company: "DOWHILE AWAE Laverie",
      role: "Stage",
      period: "Juil. - sept. 2025",
      highlights: [
        "Interface de gestion des accès LDAP avec traçabilité des modifications et PostgreSQL",
        "Support technique",
      ],
    },
    {
      company: "WELLDONE&CO",
      role: "Stage",
      period: "Juil. - sept. 2024",
      highlights: [
        "Plateforme de suivi scolaire en Django et MySQL, avec un module d'IA pour l'orientation des élèves",
      ],
    },
  ],
  education: [
    {
      degree:
        "Diplôme d'ingénieure des travaux informatiques (licence en génie logiciel)",
      school: "IAI-Cameroun",
    },
    {
      degree: "Diplôme de technicienne supérieure, systèmes et réseaux",
      school: "IAI-Cameroun",
    },
    {
      degree: "Baccalauréat C",
      school: "Lycée Bilingue de Yaoundé Essos",
    },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Allemand", level: "Goethe-Zertifikat A1 et A2" },
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
      name: "Data & IA",
      daily: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
      notions: ["Machine learning", "Prompt engineering"],
    },
    {
      name: "Bases de données",
      daily: ["PostgreSQL", "MySQL", "Oracle"],
      notions: ["PostGIS", "SQL Server", "MongoDB", "SQLite"],
    },
    {
      name: "Sécurité",
      daily: ["JWT", "2FA/OTP", "Gestion des rôles", "Traçabilité"],
      notions: ["LDAP"],
    },
    {
      name: "DevOps & systèmes",
      daily: ["Git/GitHub/GitLab", "Linux", "Déploiement VPS"],
      notions: ["Docker", "Windows Server", "TCP/IP", "Cloud"],
    },
    {
      name: "Gestion de projet",
      daily: ["UML", "Agile/Scrum", "Jira"],
      notions: ["Trello"],
    },
  ],
  projects: [
    {
      slug: "gep",
      title: "GEP, gestion du patrimoine public",
      summary:
        "Plateforme centralisant le patrimoine d'une administration camerounaise : véhicules, terrains, bâtiments et matériel informatique.",
      role: "Développeuse backend",
      organization: "KIAMA S.A.",
      status: "En production",
      stack: ["Symfony 7", "Java 21", "React.js", "TypeScript"],
      confidential: true,
      links: {},
    },
    {
      slug: "solve-educ",
      title: "Solve'Educ",
      summary:
        "Plateforme Django de suivi et d'orientation pour l'enseignement secondaire camerounais.",
      role: "Conception et développement",
      organization: "WELLDONE&CO",
      status: "Non déployé",
      stack: ["Python", "Django", "MySQL", "UML"],
      confidential: false,
      links: {},
    },
    {
      slug: "solve-shop",
      title: "Solve'Shop",
      summary:
        "Marketplace Django pour l'Afrique francophone, avec paiements par mobile money.",
      role: "Conception et développement",
      organization: "Projet personnel",
      status: "Non déployé",
      stack: ["Python", "Django"],
      confidential: false,
      links: {},
    },
    {
      slug: "apptest",
      title: "AppTest",
      summary:
        "Plateforme de réalisation de différents types de tests sur une application web.",
      role: "Projet de fin d'études",
      organization: "KIAMA S.A.",
      status: "Projet d'entreprise",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Redis",
        "Spring AI",
        "Docker",
        "JUnit",
        "Playwright",
      ],
      confidential: true,
      links: {},
    },
  ],
};
