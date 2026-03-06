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
    "I'm a data scientist with a background in information systems, working at the intersection of machine learning, analytics, and business intelligence. At Acxiom, I build predictive models and scalable data pipelines that support real marketing decisions for large clients.",
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
    title: "Data Analyst",
    company: "Acxiom Deutschland GmbH",
    period: "Feb 2022 – Present",
    location: "Munich, Germany",
    description:
      "Build and deploy logistic regression models and address selection strategies that drive direct marketing campaigns for major enterprise clients. Conduct customer structure analyses and data enrichment using SAS and Python, turning raw data into clear business insights. Actively involved in the company-wide platform migration from SAS to PySpark, modernizing data workflows at scale. Also develop Python scripts for web scraping and market analysis, and present findings directly to clients.",
  },
  {
    title: "Machine Learning Research — Master Thesis",
    company: "Siemens AG",
    period: "Jun 2021 – Jan 2022",
    location: "Munich, Germany",
    description:
      "Built an anomaly detection pipeline combining supervised and unsupervised ML algorithms to identify failure patterns in log data from CT scanner machines. Used SHAP values to explain model outputs and deliver actionable insights that helped the after-sales service team reduce unplanned equipment downtime.",
  },
  {
    title: "Working Student — Data Science, Sales Operations",
    company: "Fujitsu Enabling Software Technology GmbH",
    period: "Nov 2019 – Dec 2021",
    location: "Munich, Germany",
    description:
      "Maintained and enriched the CRM customer database and built data visualizations using NumPy, Pandas, and Seaborn. Produced regular dashboards that gave the sales team better visibility into pipeline performance and conversion trends.",
  },
];

export const education = [
  {
    degree: "M.Sc. Information Systems",
    institution: "Technical University of Munich (TUM)",
    period: "Oct 2018 – Jan 2022",
    location: "Munich, Germany",
    description:
      "Coursework in Deep Learning, Business Analytics, Natural Language Processing, and Database Systems. Thesis on ML-based anomaly detection, carried out in collaboration with Siemens AG on real-world industrial data.",
  },
  {
    degree: "B.Sc. Information Systems",
    institution: "Communication University of China",
    period: "Sep 2014 – Jul 2018",
    location: "Beijing, China",
    description:
      "Studied data management, information systems, and applied analytics, with coursework in Data Mining, Database Systems, and Management of Information Systems.",
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
      title: "Trend Intelligence Dashboard",
      description:
        "Full-stack keyword trend dashboard that surfaces Google Trends, news, YouTube results, sentiment analysis, and a word cloud from a single search. Uses pytrends, GDELT 2.1, and ytsr — no paid APIs. Features two themes (Bloomberg dark / Apple light) and a FastAPI Python sidecar for NLP.",
      tags: ["Next.js", "FastAPI", "Python", "TypeScript", "Recharts", "Tailwind"],
      link: "#",
      github: "https://github.com/jz-tian/keyword_dashboard",
      demoUrl: "",
      image: "",
    },
  ],
};

// Profile picture — drop your photo into /public/ and update the path below
export const profilePhoto = "/profile.JPG";

// Photography — add/remove entries to match your files in /public/photos/
export const photos: Array<{ src: string; alt: string; width: number; height: number }> = [
  { src: "/photos/DSC00594.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC00615.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC01146.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC01299.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC01639.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04342.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04511.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04536.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04806.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC04970.JPG", alt: "Photo", width: 3376, height: 6000 },
  { src: "/photos/DSC05004.JPG", alt: "Photo", width: 6000, height: 3376 },
  { src: "/photos/DSC05094.JPG", alt: "Photo", width: 6000, height: 3376 },
];
