export const personal = {
  name: "Huzaifa Mumtaz",
  role: "Software Engineer",
  tagline: "Full-stack engineer building scalable backend systems and modern web experiences.",
  summary:
    "Full stack software engineer with production experience across Python/FastAPI backends and React-based frontends, currently building microservices for an AI-powered multilingual translation platform. Comfortable owning features end-to-end from REST API and database design to UI integration, with hands-on experience evaluating and integrating third-party AI/ML providers into production pipelines.",
  email: "huzaifamumtaz09@gmail.com",
  location: "Not specified",
  resumeUrl: "/Huzaifa_Mumtaz.pdf",
  social: {
    github: "https://github.com/huzaifa-88",
    linkedin: "https://www.linkedin.com/in/huzaifa-mumtaz-475070360",
  },
};

export const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Built", value: "2+" },
  { label: "Technologies", value: "20+" },
  { label: "Currently Learning", value: "AI/ML Systems" },
];

export const experience = [
  {
    company: "Wamo Labs",
    role: "Associate Software Engineer",
    duration: "Dec 2025 – Present",
    description:
      "Backend/full-stack developer on a production microservices application for AI-powered multilingual translation, building REST APIs, integrating third-party AI/speech providers, and running technical benchmarks that inform architecture decisions.",
    achievements: [
      "Designed and shipped a plan-based authentication and authorization feature end-to-end in FastAPI, with role- and plan-level access control, enabling users to self-manage subscriptions",
      "Benchmarked Speech-to-Text and audio separation providers across accuracy, latency, cost, and voice-isolation quality, producing structured evaluation reports that directly informed AI provider selection",
      "Resolved bugs across multiple FastAPI microservices, tracing issues through service boundaries and shipping fixes covered by regression tests",
      "Built and maintained REST APIs within an established microservices architecture, following patterns for request validation, error handling, and response contracts",
      "Worked in an Agile/JIRA environment, broke down feature work into scoped PRs, participated in sprint planning, and maintained documentation for cross-team handoffs",
    ],
    technologies: ["Python", "FastAPI", "Microservices", "REST APIs", "SQL", "JIRA"],
  },
];

export const projects = [
  {
    name: "Project Handler",
    category: "Full-Stack Dashboard",
    description:
      "A full-stack project management tool with integrated analytics APIs powering live dashboards, covering the same React/Node/REST API stack used in modern production web apps.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: null,
  },
  {
    name: "Unani Medicine Knowledge-Based System",
    category: "Data Engineering / University Project",
    description:
      "A university project (team of 3) that designed data models and built ETL pipelines to integrate structured medical data into a searchable knowledge-based system, with a user-friendly interface for researchers and general users. Owned data transformation and schema design end-to-end.",
    technologies: ["Data Modeling", "ETL Pipelines"],
    github: "#",
    live: null,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C#", "C++"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "Microservices", ".NET"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML/CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "Oracle", "MongoDB", "Prisma ORM"],
  },
  {
    category: "Cloud / DevOps",
    items: ["Docker", "GitHub", "Agile", "JIRA", "VS Code"],
  },
  {
    category: "AI / ML",
    items: ["Speech-to-Text Integration", "Audio Separation", "Provider Benchmarking"],
  },
];

export const education = {
  school: "University of Engineering & Technology, Lahore",
  degree: "B.Sc. Computer Science",
  duration: "Nov 2021 – May 2025",
  coursework: [
    "Data Structures & Algorithms",
    "Artificial Intelligence",
    "Database Systems",
    "Applied Probability & Statistics",
    "Linear Algebra",
    "Software Quality Engineering",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
