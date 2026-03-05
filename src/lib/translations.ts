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
  };
  experience: {
    sectionLabel: string;
    title: string;
    items: { title: string; description: string }[];
  };
  education: {
    sectionLabel: string;
    title: string;
    items: { degree: string; description: string }[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    tab1: string;
    tab2: string;
    liveDemo: string;
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
      badge: "Open to opportunities",
      tagline: "I turn data into insights and ideas into apps — occasionally from behind a camera.",
      cta1: "View My Work",
      cta2: "Get In Touch",
      statExperienceLabel: "Experience",
      statExperienceUnit: "yrs",
      statProjectsLabel: "ML Projects",
      statProjectsUnit: "built",
    },
    about: {
      sectionLabel: "About",
      title: "A bit about me",
      paragraphs: [
        "I'm a data scientist with a background in information systems, working at the intersection of machine learning, analytics, and business intelligence. At Acxiom, I build predictive models and scalable data pipelines that support real marketing decisions for large clients.",
        "What excites me most right now is how AI has transformed the way we build. I've become deeply interested in vibe coding, using modern AI tools to turn ideas and even vague \"what if\" thoughts into working applications within hours. You no longer need perfect coding skills to create something meaningful. If you can imagine it and are willing to experiment, you can build it. That mindset of daring to think and then making it real is what drives me.",
        "Outside of data and development, I'm a hobby photographer drawn to landscapes, light, and quiet moments. Photography sharpens my sense for detail and perspective, qualities that carry over into my analytical work.",
        "I'm fluent in Chinese, English, and German, with basic knowledge of Japanese and French. I genuinely enjoy learning languages and exploring different cultures, which continues to shape how I think and collaborate.",
        "When I'm not building or learning, you'll likely find me on a tennis court or immersed in a good game. I enjoy both for the mix of strategy, focus, and creativity they require.",
      ],
      stats: [
        { value: "3+", label: "Years in data" },
        { value: "10+", label: "ML projects" },
        { value: "5", label: "Languages" },
        { value: "∞", label: "Curiosity" },
      ],
      whatIDo: "What I do",
      doItems: ["Data Science & Machine Learning", "Vibe Coding with Claude Code", "Hobby Photography"],
    },
    skills: {
      sectionLabel: "Skills",
      title: "Tools of the trade",
      groups: ["Data & Machine Learning", "Vibe Coding", "Tools & Others"],
    },
    experience: {
      sectionLabel: "Work Experience",
      title: "Where I've worked",
      items: [
        {
          title: "Data Analyst",
          description:
            "Build and deploy logistic regression models and address selection strategies that drive direct marketing campaigns for major enterprise clients. Conduct customer structure analyses and data enrichment using SAS and Python, turning raw data into clear business insights. Actively involved in the company-wide platform migration from SAS to PySpark, modernizing data workflows at scale. Also develop Python scripts for web scraping and market analysis, and present findings directly to clients.",
        },
        {
          title: "Machine Learning Research — Master Thesis",
          description:
            "Built an anomaly detection pipeline combining supervised and unsupervised ML algorithms to identify failure patterns in log data from CT scanner machines. Used SHAP values to explain model outputs and deliver actionable insights that helped the after-sales service team reduce unplanned equipment downtime.",
        },
        {
          title: "Working Student — Data Science, Sales Operations",
          description:
            "Maintained and enriched the CRM customer database and built data visualizations using NumPy, Pandas, and Seaborn. Produced regular dashboards that gave the sales team better visibility into pipeline performance and conversion trends.",
        },
      ],
    },
    education: {
      sectionLabel: "Education",
      title: "Academic background",
      items: [
        {
          degree: "M.Sc. Information Systems",
          description:
            "Coursework in Deep Learning, Business Analytics, Natural Language Processing, and Database Systems. Thesis on ML-based anomaly detection, carried out in collaboration with Siemens AG on real-world industrial data.",
        },
        {
          degree: "B.Sc. Information Systems",
          description:
            "Studied data management, information systems, and applied analytics, with coursework in Data Mining, Database Systems, and Management of Information Systems.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projects",
      title: "Things I've built",
      tab1: "Data & ML",
      tab2: "Vibe Coding",
      liveDemo: "Live Demo",
    },
    photography: {
      sectionLabel: "Photography",
      title: "Through the lens",
      subtitle: "Landscapes, light, and quiet moments. A selection of my favourite captures.",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's talk",
      intro: "Have a project in mind, want to explore a collaboration, or just want to talk data and code? I'm always happy to connect.",
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
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      photography: "Fotografie",
      contact: "Kontakt",
      resume: "Lebenslauf",
    },
    hero: {
      badge: "Offen für neue Möglichkeiten",
      tagline: "Ich verwandle Daten in Erkenntnisse und Ideen in Apps — gelegentlich auch durch eine Kameralinse.",
      cta1: "Meine Projekte",
      cta2: "Kontakt aufnehmen",
      statExperienceLabel: "Erfahrung",
      statExperienceUnit: "J.",
      statProjectsLabel: "ML-Projekte",
      statProjectsUnit: "gebaut",
    },
    about: {
      sectionLabel: "Über mich",
      title: "Ein bisschen über mich",
      paragraphs: [
        "Ich bin Datenwissenschaftler mit einem Hintergrund in Informationssystemen und arbeite an der Schnittstelle von maschinellem Lernen, Analytics und Business Intelligence. Bei Acxiom entwickle ich prädiktive Modelle und skalierbare Datenpipelines, die reale Marketingentscheidungen für große Kunden unterstützen.",
        "Was mich derzeit am meisten begeistert, ist, wie KI die Art und Weise ver\u00e4ndert hat, wie wir entwickeln. Ich habe mich intensiv mit Vibe Coding besch\u00e4ftigt \u2013 dem Einsatz moderner KI-Tools, um Ideen und selbst vage \u201eWas w\u00e4re wenn\u201c-Gedanken in wenigen Stunden in funktionierende Anwendungen zu verwandeln. Perfekte Programmierkenntnisse sind keine Voraussetzung mehr, um etwas Sinnvolles zu schaffen. Wer eine Idee hat und bereit ist zu experimentieren, kann sie umsetzen. Diese Denkweise \u2013 mutig denken und es dann Realit\u00e4t werden lassen \u2013 ist das, was mich antreibt.",
        "Abseits von Daten und Entwicklung bin ich ein Hobbyfotograf, den Landschaften, Licht und stille Momente faszinieren. Fotografie schärft meinen Sinn für Detail und Perspektive – Qualitäten, die sich auf meine analytische Arbeit übertragen.",
        "Ich spreche fließend Chinesisch, Englisch und Deutsch und verfüge über Grundkenntnisse in Japanisch und Französisch. Ich lerne wirklich gerne Sprachen und entdecke verschiedene Kulturen – das prägt weiterhin, wie ich denke und zusammenarbeite.",
        "Wenn ich nicht gerade etwas entwickle oder lerne, findet man mich wahrscheinlich auf dem Tennisplatz oder vertieft in ein gutes Spiel. Beides schätze ich für die Mischung aus Strategie, Konzentration und Kreativität, die sie verlangen.",
      ],
      stats: [
        { value: "3+", label: "Jahre Erfahrung" },
        { value: "10+", label: "ML-Projekte" },
        { value: "5", label: "Sprachen" },
        { value: "∞", label: "Neugier" },
      ],
      whatIDo: "Was ich mache",
      doItems: ["Data Science & Maschinelles Lernen", "Vibe Coding mit Claude Code", "Hobbyfotografie"],
    },
    skills: {
      sectionLabel: "Fähigkeiten",
      title: "Werkzeuge des Fachs",
      groups: ["Daten & Maschinelles Lernen", "Vibe Coding", "Tools & Sonstiges"],
    },
    experience: {
      sectionLabel: "Berufserfahrung",
      title: "Wo ich gearbeitet habe",
      items: [
        {
          title: "Data Analyst",
          description:
            "Entwicklung und Einsatz von logistischen Regressionsmodellen und datengetriebenen Adressselektionsstrategien für Direktmarketingkampagnen großer Unternehmenskunden. Durchführung von Kundenstrukturanalysen und Datenanreicherung mit SAS und Python. Aktive Beteiligung an der unternehmensweiten Plattformmigration von SAS auf PySpark zur Modernisierung der Datenworkflows. Erstellung von Python-Skripten für Web-Scraping und Marktanalysen sowie direkte Kundenpräsentationen.",
        },
        {
          title: "Machine-Learning-Forschung — Masterarbeit",
          description:
            "Entwicklung einer Anomalieerkennungspipeline, die überwachte und unüberwachte ML-Algorithmen kombiniert, um Fehlermuster in Logdaten von CT-Scannern zu identifizieren. Einsatz von SHAP-Werten zur Modellerklärung und Ableitung konkreter Empfehlungen für den After-Sales-Service zur Reduzierung ungeplanter Ausfallzeiten.",
        },
        {
          title: "Werkstudent — Data Science, Vertrieb",
          description:
            "Pflege und Anreicherung der CRM-Kundendatenbank sowie Erstellung von Datenvisualisierungen mit NumPy, Pandas und Seaborn. Bereitstellung regelmäßiger Dashboards für das Vertriebsteam zur besseren Übersicht über Pipeline-Performance und Konversionsraten.",
        },
      ],
    },
    education: {
      sectionLabel: "Ausbildung",
      title: "Akademischer Hintergrund",
      items: [
        {
          degree: "M.Sc. Informationssysteme",
          description:
            "Studium mit Schwerpunkten in Deep Learning, Business Analytics, Natural Language Processing und Datenbanksystemen. Abschlussarbeit über ML-basierte Anomalieerkennung in Zusammenarbeit mit der Siemens AG auf Basis realer industrieller Daten.",
        },
        {
          degree: "B.Sc. Informationssysteme",
          description:
            "Fundierte Grundlagenkenntnisse in Datenmanagement, Informationssystemen und angewandter Analytik durch Lehrveranstaltungen in Data Mining, Datenbanksystemen und Management von Informationssystemen.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projekte",
      title: "Was ich gebaut habe",
      tab1: "Daten & ML",
      tab2: "Vibe Coding",
      liveDemo: "Live Demo",
    },
    photography: {
      sectionLabel: "Fotografie",
      title: "Durch die Linse",
      subtitle: "Landschaften, Licht und stille Momente. Eine Auswahl meiner liebsten Aufnahmen.",
    },
    contact: {
      sectionLabel: "Kontakt",
      title: "Lass uns reden",
      intro: "Haben Sie ein Projekt im Sinn, möchten eine Zusammenarbeit erkunden oder einfach über Daten und Code sprechen? Ich freue mich immer über neue Kontakte.",
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
