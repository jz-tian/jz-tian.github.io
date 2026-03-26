// ============================================================
// PERSONAL WEBSITE CONTENT
// ============================================================

export const personal = {
  name: "Jiazheng Tian",
  initials: "JT",
  title: "Data Scientist & Vibe Coder",
  tagline: "I turn data into insights and ideas into apps — occasionally from behind a camera.",
  email: "jiazheng.tian@outlook.com",
  linkedin: "https://www.linkedin.com/in/jiazheng-tian-07a05a178/",
  github: "https://github.com/jz-tian",
  location: "Passau, Germany",
  cvFile: "/CV_Jiazheng_Tian.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Data Analyst and Data Scientist with a background in information systems, working at the intersection of machine learning, analytics, and business intelligence. At Acxiom, I build predictive models and scalable data pipelines that help clients make better marketing decisions and turn complex data into practical business value.",
    "What excites me most right now is how AI has transformed the way we build. I've become deeply interested in vibe coding, using modern AI tools to turn ideas and even vague \"what if\" thoughts into working applications within hours. You no longer need perfect coding skills to create something meaningful. If you can imagine it and are willing to experiment, you can build it. That mindset of daring to think and then making it real is what drives me.",
    "Outside of data and development, I'm a hobby photographer drawn to landscapes, light, and quiet moments. Photography sharpens my sense for detail and perspective, qualities that carry over into my analytical work.",
    "I'm fluent in Chinese, English, and German, with basic knowledge of Japanese and French. I genuinely enjoy learning languages and exploring different cultures, which continues to shape how I think and collaborate.",
    "When I'm not building or learning, you'll likely find me on a tennis court or immersed in a good game. I enjoy both for the mix of strategy, focus, and creativity they require.",
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
    "Python", "NumPy", "Pandas", "PyTorch", "Scikit-learn",
    "Seaborn", "spaCy", "SAS", "MySQL", "Tableau", "Power BI",
  ],
  ml: [
    "Machine Learning", "Deep Learning", "Reinforcement Learning",
    "NLP", "Anomaly Detection", "Statistical Data Analysis",
    "SHAP / Model Explainability", "Social Computing",
  ],
  vibeCoding: [
    "Claude Code", "Next.js", "React", "TypeScript",
    "Tailwind CSS", "Vercel", "Node.js", "JavaScript",
  ],
  tools: [
    "Git", "HTML/CSS/SASS", "Java", "Excel / PowerPoint",
    "Adobe Photoshop", "Empirical Research", "Web Scraping",
  ],
};

export const workExperience = [
  {
    title: "Data Scientist/Data Analyst",
    company: "Acxiom Deutschland GmbH",
    period: "Feb 2022 – Present",
    location: "Munich, Germany",
    description:
      "Build predictive models from customer data, including logistic-model based address selection strategies, to improve campaign targeting and marketing effectiveness. Deliver customer structure analysis and data enrichment workflows using SAS and Python, support the transition of analytical workflows toward PySpark-based solutions, and turn findings into clear recommendations for clients and internal stakeholders.",
  },
  {
    title: "Machine Learning Research — Master Thesis",
    company: "Siemens AG",
    period: "Jun 2021 – Jan 2022",
    location: "Munich, Germany",
    description:
      "Built an anomaly detection pipeline for CT scanner log data, combining supervised and unsupervised methods. Used SHAP-based explainability to turn model outputs into insights that supported predictive maintenance.",
  },
  {
    title: "Working Student — Data Science, Sales Operations",
    company: "Fujitsu Enabling Software Technology GmbH",
    period: "Nov 2019 – Dec 2021",
    location: "Munich, Germany",
    description:
      "Maintained and enriched CRM data, built visualizations with Python tools, and delivered dashboards that gave the sales team clearer visibility into pipeline performance and conversion trends.",
  },
];

export const education = [
  {
    degree: "M.Sc. Information Systems",
    institution: "Technical University of Munich (TUM)",
    period: "Oct 2018 – Jan 2022",
    location: "Munich, Germany",
    description:
      "Focused on machine learning, business analytics, and database systems, with a thesis on industrial anomaly detection completed in collaboration with Siemens.",
  },
  {
    degree: "B.Sc. Information Systems",
    institution: "Communication University of China",
    period: "Sep 2014 – Jul 2018",
    location: "Beijing, China",
    description:
      "Built a strong foundation in data management, information systems, and applied analytics.",
  },
];

export const projects = {
  data: [
    {
      title: "CT Scanner Anomaly Detection",
      description:
        "ML-based anomaly detection on log data from Siemens CT scanner machines. Combined supervised and unsupervised algorithms with SHAP-based model explainability to improve predictive maintenance and after-sale service.",
      tags: ["Python", "PyTorch", "Scikit-learn", "SHAP", "Anomaly Detection"],
      link: "#",
      github: "#",
      image: "",
    },
    {
      title: "Marketing Model & Address Selection",
      description:
        "Logistic regression–based customer data model for direct marketing strategy optimization at Acxiom. Included customer structure analysis and data enrichment using SAS and Python.",
      tags: ["Python", "SAS", "Logistic Regression", "Pandas", "Tableau"],
      link: "#",
      github: "#",
      image: "",
    },
  ],
  vibeCoding: [
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
      title: "Trend Intelligence Dashboard",
      description:
        "Full-stack keyword trend dashboard surfacing Google Trends, news, YouTube results, sentiment analysis, and a word cloud from a single search — no paid APIs. Built with Next.js and deployed on Vercel.",
      tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Vercel"],
      link: "https://trendintel.vercel.app",
      github: "https://github.com/jz-tian/keyword_dashboard",
      image: "/projects/trendintel-preview.svg",
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
      title: "RabattHunter",
      description:
        "Live German supermarket discount tracker aggregating weekly deals from ALDI, Lidl, NORMA, EDEKA, and Denns BioMarkt. Features real-time scraping from official retailer APIs, auto-categorisation, full-text search, and a persistent shopping list with CSV export.",
      tags: ["Next.js", "React 19", "Turso", "SQLite", "Vercel"],
      link: "https://rabatt-hunter.vercel.app",
      github: "https://github.com/jz-tian/prospekt_hunter",
      image: "/projects/rabatthunter-preview.svg",
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
