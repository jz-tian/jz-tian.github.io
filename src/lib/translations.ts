// ============================================================
// TRANSLATIONS — EN | DE
// ============================================================

export type Lang = "en" | "de";

export interface T {
  nav: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
    photography: string;
    contact: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    location: string;
    badge: string;
    tagline: string;
    cta1: string;
    cta2: string;
    statExperienceLabel: string;
    statExperienceUnit: string;
    statProjectsLabel: string;
    statProjectsUnit: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    whatIDo: string;
    doItems: string[];
  };
  skills: {
    sectionLabel: string;
    title: string;
    groups: string[];
    capabilityLabel: string;
    capabilityGroups: { label: string; items: string[] }[];
  };
  experience: {
    sectionLabel: string;
    title: string;
    items: { title: string; period: string; location: string; description: string }[];
  };
  education: {
    sectionLabel: string;
    title: string;
    items: { degree: string; institution: string; period: string; location: string; description: string }[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    tab1: string;
    tab2: string;
    liveDemo: string;
    caseStudy: string;
    featuredLabel: string;
    moreTitle: string;
    moreSubtitle: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  photography: {
    sectionLabel: string;
    title: string;
    subtitle: string;
  };
  contact: {
    sectionLabel: string;
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Lang, T> = {
  // ── ENGLISH ────────────────────────────────────────────────
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      photography: "Photography",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      eyebrow: "Business · Data · Automation · AI",
      title: "Senior Data Analyst | AI & Data Transformation",
      location: "Passau, Germany",
      badge: "Open to new connections",
      tagline:
        "I translate business questions into scalable analytics workflows, decision-support outputs, and AI-enabled ways of working.",
      cta1: "View Selected Projects",
      cta2: "Get In Touch",
      statExperienceLabel: "Current role since",
      statExperienceUnit: "2022",
      statProjectsLabel: "Selected projects",
      statProjectsUnit: "5",
    },
    about: {
      sectionLabel: "About",
      title: "AI & Data Transformation, grounded in business analytics",
      paragraphs: [
        "I'm an AI & Data Transformation professional with an M.Sc. in Information Systems and experience across customer analytics, predictive modeling, machine learning, workflow modernization, and AI-assisted solution development.",
        "At Acxiom, I translate client marketing and customer-data questions into scalable analytics workflows, decision-support outputs, and stakeholder-ready recommendations using Python, SAS, SQL, PySpark, and modern ML methods.",
        "A recurring theme in my work is understanding a system, identifying bottlenecks, improving the workflow, and making the result easier for teams and stakeholders to use.",
        "I also build practical tools and prototypes with Next.js, TypeScript, Claude Code, Codex, and LLM-assisted workflows to explore how organizations can adopt AI-enabled ways of working.",
        "Outside of data and AI, photography, languages, tennis, and games keep my attention trained on perspective, adaptation, and strategy.",
      ],
      stats: [
        { value: "M.Sc.", label: "Information Systems" },
        { value: "2022", label: "Current role since" },
        { value: "5", label: "Languages" },
        { value: "AI", label: "Workflow adoption" },
      ],
      whatIDo: "What I do",
      doItems: ["Business-Tech Translation", "Scalable Analytics Workflows", "AI-assisted Solution Development"],
    },
    skills: {
      sectionLabel: "Skills",
      title: "Tools of the trade",
      groups: [
        "Data & Analytics Transformation",
        "AI Adoption & GenAI Workflows",
        "Business-Tech Translation",
        "Product & Web Engineering",
      ],
      capabilityLabel: "Capabilities",
      capabilityGroups: [
        { label: "Data & Analytics Transformation", items: ["Python", "SAS", "SQL", "PySpark", "scikit-learn"] },
        { label: "AI Adoption & GenAI Workflows", items: ["Claude Code", "Codex", "LLM tooling", "Prompt iteration"] },
        { label: "Business-Tech Translation", items: ["Decision support", "Recommendations", "Process optimization", "Power BI"] },
        { label: "Product & Web Engineering", items: ["Next.js", "TypeScript", "React", "Tailwind CSS"] },
      ],
    },
    experience: {
      sectionLabel: "Work Experience",
      title: "Professional Experience",
      items: [
        {
          title: "Senior Data Analyst",
          period: "Feb. 2022 – Present",
          location: "Munich, Germany",
          description:
            "Translate client marketing and customer-data questions into scalable analytics workflows and decision-ready recommendations. Build logistic-model based address selection strategies to support campaign targeting and marketing effectiveness, develop SAS/Python customer structure and data enrichment workflows, support modernization toward PySpark-based processing, and contribute to AI-assisted development adoption through coding agents and workflow automation.",
        },
        {
          title: "Master Thesis Student in Machine Learning",
          period: "Jun. 2021 – Jan. 2022",
          location: "Munich, Germany",
          description:
            "Developed explainable anomaly detection for CT scanner log data in an industrial healthcare setting. Built supervised and unsupervised ML models, used SHAP explainability to translate model behavior for business and technical stakeholders, and connected results to predictive-maintenance and after-sales service quality.",
        },
        {
          title: "Working Student Data Scientist",
          period: "Nov. 2019 – Dec. 2021",
          location: "Munich, Germany",
          description:
            "Managed and enriched customer and sales datasets for reporting quality and sales-operations decision support.",
        },
      ],
    },
    education: {
      sectionLabel: "Education",
      title: "Education",
      items: [
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
      ],
    },
    projects: {
      sectionLabel: "Projects",
      title: "Selected projects from data, AI, and product work",
      tab1: "Data & ML",
      tab2: "AI-enabled products",
      liveDemo: "Live Demo",
      caseStudy: "Project",
      featuredLabel: "Selected Project",
      moreTitle: "More to come",
      moreSubtitle: "New builds in progress",
      items: [
        {
          title: "Explainable CT Scanner Anomaly Detection",
          description:
            "Built an anomaly detection pipeline for CT scanner log data and used SHAP explainability to turn model behavior into predictive-maintenance insights.",
          tags: ["Python", "PyTorch", "scikit-learn", "SHAP"],
        },
        {
          title: "Customer Selection & Marketing Optimization",
          description:
            "Developed logistic-regression based customer selection logic and data enrichment workflows for scalable direct-marketing optimization.",
          tags: ["Python", "SAS", "Logistic Regression"],
        },
        {
          title: "Research Intelligence Platform",
          description:
            "Built a decision-support workflow that aggregates Google Trends, news, YouTube signals, sentiment analysis, and keyword visualization to accelerate trend discovery and topic research.",
          tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
        },
        {
          title: "Aurora Visibility Tracker",
          description:
            "Engineered a data-integration and decision-support application that combines NOAA SWPC aurora data, cloud cover, geolocation, and 48-hour Kp forecasts on an interactive 3D globe.",
          tags: ["Next.js", "TypeScript", "Three.js", "GLSL"],
        },
        {
          title: "落書き Rakugaki",
          description:
            "AI-powered drawing game with a Japanese washi-paper aesthetic. Gemini 2.5 Flash generates a random prompt, you draw it in 120 seconds, then Gemini Vision scores your work and writes a humorous comment. Features three brush styles, flood fill, undo/redo, a gallery with JPG export, and full EN/Chinese localisation.",
          tags: ["Next.js", "TypeScript", "Gemini API", "Canvas API", "Tailwind CSS"],
        },
        {
          title: "Rabbit Garden",
          description:
            "A single-page interactive encyclopedia of rabbit breeds. Six breeds peek up from a botanical hero, each clickable to reveal a full profile with origin, temperament, stats, and AI-generated photos in animated organic frames.",
          tags: ["HTML/CSS/JS", "Google Imagen 4", "Node.js", "sharp", "SVG Animation"],
        },
        {
          title: "RabattHunter Retail Automation Product",
          description:
            "Developed an end-to-end retail promotions product for major German supermarket chains with automated data ingestion, product categorization, full-text search, and shopping-list export.",
          tags: ["Next.js", "React 19", "Turso", "SQLite"],
        },
      ],
    },
    photography: {
      sectionLabel: "Photography",
      title: "Through the lens",
      subtitle: "Landscapes, light, and quiet moments. A selection of my favourite captures.",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's talk",
      intro:
        "Have a project in mind, want to modernize an analytical workflow, or want to explore AI-enabled ways of working? I'm happy to connect.",
      nameLabel: "Your name",
      namePlaceholder: "Jiazheng Tian",
      emailLabel: "Email address",
      emailPlaceholder: "hello@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or idea...",
      send: "Send Message",
    },
    footer: {
      builtWith: "Built with Next.js",
    },
  },

  // ── DEUTSCH ────────────────────────────────────────────────
  de: {
    nav: {
      about: "Über mich",
      skills: "Kenntnisse",
      experience: "Erfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      photography: "Fotografie",
      contact: "Kontakt",
      resume: "Lebenslauf",
    },
    hero: {
      eyebrow: "Business · Daten · Automatisierung · KI",
      title: "Senior Data Analyst | AI & Data Transformation",
      location: "Passau, Deutschland",
      badge: "Offen für neue Kontakte",
      tagline:
        "Ich übersetze Business-Fragestellungen in skalierbare Analyseprozesse, entscheidungsreife Ergebnisse und KI-gestützte Arbeitsweisen.",
      cta1: "Ausgewählte Projekte",
      cta2: "Kontakt aufnehmen",
      statExperienceLabel: "Aktuelle Rolle seit",
      statExperienceUnit: "2022",
      statProjectsLabel: "Ausgewählte Projekte",
      statProjectsUnit: "5",
    },
    about: {
      sectionLabel: "Über mich",
      title: "KI- und datengetriebene Transformation mit Business-Fokus",
      paragraphs: [
        "Ich bin ein AI- und datengetriebener Business-Analytics-Spezialist mit M.Sc. in Wirtschaftsinformatik und Erfahrung in Customer Analytics, Machine Learning, Prozessoptimierung und KI-gestützten Workflows.",
        "Bei Acxiom übersetze ich Business- und Marketing-Fragestellungen in skalierbare Analyseprozesse, datengetriebene Entscheidungsgrundlagen und praxisnahe Empfehlungen für Kunden und interne Stakeholder.",
        "Ein wiederkehrendes Muster in meiner Arbeit ist: Systeme verstehen, Engpässe erkennen, Workflows verbessern und Ergebnisse so aufbereiten, dass Teams besser damit arbeiten können.",
        "Zusätzlich entwickle ich praktische Tools und Prototypen mit Next.js, TypeScript, Claude Code, Codex und LLM-gestützten Workflows, um moderne KI-gestützte Arbeitsweisen greifbar zu machen.",
        "Außerhalb von Daten und KI halten Fotografie, Sprachen, Tennis und Games meinen Blick für Perspektive, Anpassung und Strategie wach.",
      ],
      stats: [
        { value: "M.Sc.", label: "Wirtschaftsinformatik" },
        { value: "2022", label: "Aktuelle Rolle seit" },
        { value: "5", label: "Sprachen" },
        { value: "KI", label: "Workflow-Adoption" },
      ],
      whatIDo: "Was ich mache",
      doItems: ["Business-Tech-Übersetzung", "Skalierbare Analyse-Workflows", "KI-gestützte Toolentwicklung"],
    },
    skills: {
      sectionLabel: "Kenntnisse",
      title: "Werkzeuge und Schwerpunkte",
      groups: [
        "Datenanalyse & Machine Learning",
        "KI & Workflow-Automatisierung",
        "Business & Stakeholder-Kommunikation",
        "Produkt- & Toolentwicklung",
      ],
      capabilityLabel: "Kenntnisse",
      capabilityGroups: [
        { label: "Datenanalyse & Machine Learning", items: ["Python", "SAS", "SQL", "PySpark", "scikit-learn"] },
        { label: "KI & Workflow-Automatisierung", items: ["Claude Code", "Codex", "LLM-Workflows", "Prompt-Iteration"] },
        { label: "Business & Stakeholder-Kommunikation", items: ["Empfehlungen", "Prozessoptimierung", "Marketing Analytics", "Power BI"] },
        { label: "Produkt- & Toolentwicklung", items: ["Next.js", "TypeScript", "React", "Tailwind CSS"] },
      ],
    },
    experience: {
      sectionLabel: "Berufliche Erfahrung",
      title: "Berufliche Erfahrung",
      items: [
        {
          title: "Senior Data Analyst",
          period: "Feb. 2022 – heute",
          location: "München, Deutschland",
          description:
            "Übersetzung von Business- und Marketing-Fragestellungen in analytische Lösungen für Customer Analytics, Zielgruppenstrategie und datengetriebene Kampagnenentscheidungen. Entwicklung prädiktiver Modelle und logistischer Selektionsmodelle, Aufbau von Kundenstrukturanalysen und Datenanreicherungs-Workflows mit SAS und Python, Modernisierung bestehender Analyse-Workflows in Richtung PySpark und Beitrag zur teamweiten Einführung KI-gestützter Entwicklung.",
        },
        {
          title: "Masterarbeit in Machine Learning",
          period: "Jun. 2021 – Jan. 2022",
          location: "München, Deutschland",
          description:
            "Entwicklung von ML-Ansätzen zur Anomalieerkennung in CT-Protokolldaten zur Unterstützung von Predictive-Maintenance- und Servicefragestellungen. Aufbau überwachter und unüberwachter Modelle sowie Einsatz von SHAP und Explainable AI zur Übersetzung von Modellresultaten in nachvollziehbare Erkenntnisse für technische und Business-Stakeholder.",
        },
        {
          title: "Werkstudent Data Scientist",
          period: "Nov. 2019 – Dez. 2021",
          location: "München, Deutschland",
          description:
            "Pflege und Anreicherung von CRM- und Vertriebsdaten sowie Erstellung von Visualisierungen und Dashboards mit Python zur Verbesserung von Datenqualität, Pipeline-Transparenz und Reporting für Vertriebs- und Sales-Operations-Teams.",
        },
      ],
    },
    education: {
      sectionLabel: "Akademischer Werdegang",
      title: "Akademischer Werdegang",
      items: [
        {
          degree: "M.Sc. Wirtschaftsinformatik",
          institution: "Technische Universität München",
          period: "Okt. 2018 – Jan. 2022",
          location: "München, Deutschland",
          description:
            "Schwerpunkte in Machine Learning, Business Analytics und Datenbanksystemen; Abschlussarbeit zur industriellen Anomalieerkennung in Zusammenarbeit mit Siemens.",
        },
        {
          degree: "B.Sc. Information Systems",
          institution: "Communication University of China",
          period: "Sep. 2014 – Jul. 2018",
          location: "Beijing, China",
          description:
            "Grundlage in Datenmanagement, Informationssystemen und angewandter Analytik.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projekte",
      title: "Ausgewählte Projekte aus Daten, KI und Produktentwicklung",
      tab1: "Daten & ML",
      tab2: "KI-gestützte Produkte",
      liveDemo: "Live Demo",
      caseStudy: "Projekt",
      featuredLabel: "Ausgewähltes Projekt",
      moreTitle: "Mehr kommt bald",
      moreSubtitle: "Neue Projekte sind in Arbeit",
      items: [
        {
          title: "Anomalieerkennung für CT-Geräte",
          description:
            "Entwicklung einer Explainable-AI-Pipeline zur Anomalieerkennung auf Basis von CT-Protokolldaten mit SHAP-gestützter Interpretierbarkeit für Predictive Maintenance, Ursachenanalyse und Serviceoptimierung.",
          tags: ["Python", "PyTorch", "scikit-learn", "SHAP"],
        },
        {
          title: "Marketingmodell & Adressselektion",
          description:
            "Entwicklung logistischer Selektionslogiken und datengetriebener Anreicherungs-Workflows zur Übersetzung von Marketingzielen in Zielgruppenstrategien und datenbasierte Kampagnenentscheidungen.",
          tags: ["Python", "SAS", "logistische Regression"],
        },
        {
          title: "Trend- und Research-Intelligence-Plattform",
          description:
            "Aufbau einer Research-Plattform zur Aggregation von Trendsignalen, Nachrichten, YouTube-Signalen, Sentiment-Analyse und Keyword-Visualisierung zur Beschleunigung von Themenrecherche und Trend Discovery.",
          tags: ["Next.js", "TypeScript", "Recharts", "Vercel"],
        },
        {
          title: "Aurora Live Tracker",
          description:
            "Entwicklung eines Echtzeit-Trackers mit interaktivem 3D-Globus, NOAA-Datenabruf, Standorterkennung und Ranking geeigneter Beobachtungsorte auf Basis aktueller Sichtbarkeits- und Wetterdaten.",
          tags: ["Next.js", "Three.js", "GLSL", "NOAA SWPC"],
        },
        {
          title: "落書き Rakugaki",
          description:
            "KI-gestütztes Zeichenspiel in japanischer Washi-Paper-Ästhetik: Gemini 2.5 Flash generiert zufällige Prompts, die Zeichnung entsteht in 120 Sekunden, und Gemini Vision bewertet das Ergebnis mit humorvollem Kommentar. Enthält drei Pinselstile, Füllwerkzeug, Undo/Redo, Galerie, JPG-Export und EN/中文-Lokalisierung.",
          tags: ["Next.js", "TypeScript", "Gemini API", "Canvas API", "Tailwind CSS"],
        },
        {
          title: "Rabbit Garden",
          description:
            "Interaktive Single-Page-Enzyklopädie zu Kaninchenrassen: sechs Rassen erscheinen im botanischen Hero-Bereich und öffnen klickbare Profile mit Herkunft, Charakter, Kennzahlen und KI-generierten Bildern in animierten organischen Frames.",
          tags: ["HTML/CSS/JS", "Google Imagen 4", "Node.js", "sharp", "SVG Animation"],
        },
        {
          title: "RabattHunter",
          description:
            "Aufbau eines Retail-Automation-Produkts für deutsche Supermarktangebote mit Aggregation offizieller Händlerdaten, automatischer Kategorisierung, Volltextsuche und persistenter Einkaufsliste für wiederkehrende Preis- und Angebotsanalysen.",
          tags: ["Next.js", "React 19", "Turso", "SQLite"],
        },
      ],
    },
    photography: {
      sectionLabel: "Fotografie",
      title: "Durch die Linse",
      subtitle: "Landschaften, Licht und stille Momente. Eine Auswahl meiner liebsten Aufnahmen.",
    },
    contact: {
      sectionLabel: "Kontakt",
      title: "Lass uns reden",
      intro:
        "Haben Sie ein Projekt im Sinn, möchten einen analytischen Workflow modernisieren oder KI-gestützte Arbeitsweisen erkunden? Ich freue mich über neue Kontakte.",
      nameLabel: "Ihr Name",
      namePlaceholder: "Jiazheng Tian",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "hallo@beispiel.de",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt oder Ihrer Idee...",
      send: "Nachricht senden",
    },
    footer: {
      builtWith: "Erstellt mit Next.js",
    },
  },
};
