// ============================================================
// PERSONAL WEBSITE CONTENT
// ============================================================

export const personal = {
  name: "Jiazheng Tian",
  initials: "JT",
  title: "Senior Data Analyst | AI & Data Transformation",
  tagline:
    "I translate business questions into scalable analytics workflows, decision-support outputs, and AI-enabled ways of working.",
  email: "jiazheng.tian@outlook.com",
  linkedin: "https://www.linkedin.com/in/jiazheng-tian-07a05a178/",
  github: "https://github.com/jz-tian",
  location: "Passau, Germany",
  cvFile: "/cv/cv_Jiazheng_Tian.pdf",
};

export const about = {
  paragraphs: [
    "I'm an AI & Data Transformation professional with an M.Sc. in Information Systems and experience across customer analytics, predictive modeling, machine learning, workflow modernization, and AI-assisted solution development.",
    "At Acxiom, I translate client marketing and customer-data questions into scalable analytics workflows, decision-support outputs, and stakeholder-ready recommendations using Python, SAS, SQL, PySpark, and modern ML methods.",
    "I actively build practical tools and prototypes with Next.js, TypeScript, Claude Code, Codex, and LLM-assisted workflows to explore how teams can adopt AI-enabled ways of working.",
    "Outside of data and AI, I enjoy photography, languages, tennis, and games because they keep my attention trained on perspective, adaptation, and strategy.",
  ],
};

export const languages = [
  { name: "Chinese", level: "Native" },
  { name: "English", level: "Full professional" },
  { name: "German", level: "Full professional" },
  { name: "Japanese", level: "Elementary" },
  { name: "French", level: "Elementary" },
];

export const skills = {
  data: [
    "Python", "SAS", "SQL", "PySpark", "pandas", "NumPy",
    "scikit-learn", "PyTorch", "Predictive Modeling", "Statistical Analysis",
    "Customer Analytics", "Data Enrichment", "Segmentation",
  ],
  ai: [
    "AI Enablement", "Generative AI", "LLM Tooling", "Claude Code",
    "Codex", "Prompt Iteration", "AI-assisted Development", "Workflow Automation",
  ],
  business: [
    "Business-Tech Translation", "Decision Support", "Stakeholder Recommendations",
    "Process Optimization", "Dashboarding", "Power BI", "Recharts", "Seaborn",
  ],
  engineering: [
    "JavaScript", "TypeScript", "Node.js", "React", "Next.js",
    "Tailwind CSS", "Git", "Vercel", "Cloudflare", "Render",
    "MySQL", "MongoDB", "SQLite", "AWS",
  ],
};

export const workExperience = [
  {
    title: "Senior Data Analyst",
    company: "Acxiom Deutschland GmbH",
    period: "Feb. 2022 – Present",
    location: "Munich, Germany",
    description:
      "Translate client marketing and customer-data questions into scalable analytics workflows and decision-ready recommendations. Build logistic-model based address selection strategies, develop SAS/Python customer structure and data enrichment workflows, support modernization toward PySpark-based processing, and contribute to AI-assisted development adoption through coding agents and workflow automation.",
  },
  {
    title: "Master Thesis Student in Machine Learning",
    company: "Siemens AG",
    period: "Jun. 2021 – Jan. 2022",
    location: "Munich, Germany",
    description:
      "Developed explainable anomaly detection for CT scanner log data in an industrial healthcare setting. Built supervised and unsupervised ML models, used SHAP explainability to translate model behavior for business and technical stakeholders, and connected results to predictive-maintenance and after-sales service thinking.",
  },
  {
    title: "Working Student Data Scientist",
    company: "Fujitsu Enabling Software Technology GmbH",
    period: "Nov. 2019 – Dec. 2021",
    location: "Munich, Germany",
    description:
      "Managed and enriched customer and sales datasets for reporting quality and sales-operations decision support.",
  },
];

export const education = [
  {
    degree: "M.Sc. Information Systems",
    institution: "Technical University of Munich",
    period: "Oct. 2018 – Jan. 2022",
    location: "Munich, Germany",
    description:
      "Focused on machine learning, business analytics, and database systems, with a thesis on industrial anomaly detection in collaboration with Siemens.",
  },
  {
    degree: "B.Sc. Information Systems",
    institution: "Communication University of China",
    period: "Sep. 2014 – Jul. 2018",
    location: "Beijing, China",
    description:
      "Built a foundation in data management, information systems, and applied analytics.",
  },
];

export const projects = {
  data: [
    {
      title: "Explainable CT Scanner Anomaly Detection",
      description:
        "Built an anomaly detection pipeline for CT scanner log data and used SHAP explainability to turn model behavior into predictive-maintenance insights.",
      tags: ["Python", "PyTorch", "scikit-learn", "SHAP"],
      link: "#",
      github: "#",
      image: "",
    },
    {
      title: "Customer Selection & Marketing Optimization",
      description:
        "Developed logistic-regression based customer selection logic and data enrichment workflows for scalable direct-marketing optimization.",
      tags: ["Python", "SAS", "Logistic Regression"],
      link: "#",
      github: "#",
      image: "",
    },
  ],
  vibeCoding: [
    {
      title: "Research Intelligence Platform",
      description:
        "Built a decision-support workflow that aggregates Google Trends, news, YouTube signals, sentiment analysis, and keyword visualization to accelerate trend discovery and topic research.",
      tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
      link: "https://trendintel.vercel.app",
      github: "https://github.com/jz-tian/keyword_dashboard",
      image: "/projects/trendintel-preview.svg",
    },
    {
      title: "Aurora Visibility Tracker",
      description:
        "Engineered a data-integration and decision-support application that combines NOAA SWPC aurora data, cloud cover, geolocation, and 48-hour Kp forecasts on an interactive 3D globe.",
      tags: ["Next.js", "TypeScript", "Three.js", "GLSL"],
      link: "https://globe-aurora-live.vercel.app",
      github: "https://github.com/jz-tian/globe_aurora",
      image: "/projects/aurora-demo.gif",
    },
    {
      title: "落書き Rakugaki",
      description:
        "AI-powered drawing game with a Japanese washi-paper aesthetic. Gemini 2.5 Flash generates a random prompt, you draw it in 120 seconds, then Gemini Vision scores your work and writes a humorous comment. Features three brush styles, flood fill, undo/redo, a gallery with JPG export, and full EN/中文 localisation.",
      tags: ["Next.js", "TypeScript", "Gemini API", "Canvas API", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/jz-tian/rakugaki",
      image: "/projects/rakugaki-demo.gif",
    },
    {
      title: "Rabbit Garden",
      description:
        "A single-page interactive encyclopedia of rabbit breeds. Six breeds peek up from a botanical hero, each clickable to reveal a full profile — origin, temperament, stats, and three AI-generated photos in animated organic blob frames. Built with vanilla HTML/CSS/JS; all imagery generated with Google Imagen 4 and background-removed via a custom BFS flood-fill algorithm.",
      tags: ["HTML/CSS/JS", "Google Imagen 4", "Node.js", "sharp", "SVG Animation"],
      link: "https://rabbit-garden.vercel.app",
      github: "https://github.com/jz-tian/rabbit_garden",
      image: "/projects/rabbit-garden-demo.gif",
    },
    {
      title: "RabattHunter Retail Automation Product",
      description:
        "Developed an end-to-end retail promotions product for major German supermarket chains with automated data ingestion, product categorization, full-text search, and shopping-list export.",
      tags: ["Next.js", "React 19", "Turso", "SQLite"],
      link: "https://rabatt-hunter.vercel.app",
      github: "https://github.com/jz-tian/prospekt_hunter",
      image: "/projects/rabatthunter-demo.gif",
    },
  ],
};

export const profilePhotos = {
  hero: "/profile/profile_hero.jpg",
  about: "/profile/profile_about.jpg",
};

// Photography — add/remove entries to match your files in /public/photos/
export const photos: Array<{ src: string; thumbSrc: string; alt: string; width: number; height: number }> = [
  { src: "/photos/DSC00594.JPG", thumbSrc: "/photos/thumbs/DSC00594.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC00615.JPG", thumbSrc: "/photos/thumbs/DSC00615.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC01146.JPG", thumbSrc: "/photos/thumbs/DSC01146.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC01299.JPG", thumbSrc: "/photos/thumbs/DSC01299.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC01639.JPG", thumbSrc: "/photos/thumbs/DSC01639.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04342.JPG", thumbSrc: "/photos/thumbs/DSC04342.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04511.JPG", thumbSrc: "/photos/thumbs/DSC04511.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04536.JPG", thumbSrc: "/photos/thumbs/DSC04536.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04806.JPG", thumbSrc: "/photos/thumbs/DSC04806.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04970.JPG", thumbSrc: "/photos/thumbs/DSC04970.JPG", alt: "Photo", width: 3376, height: 6000 },
  { src: "/photos/DSC05004.JPG", thumbSrc: "/photos/thumbs/DSC05004.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC05094.JPG", thumbSrc: "/photos/thumbs/DSC05094.JPG", alt: "Photo", width: 6000, height: 3376 },
];
