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
    moreTitle: string;
    moreSubtitle: string;
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
      badge: "Open to new connections",
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
        "I'm a data scientist with a background in information systems, working across machine learning, analytics, and business intelligence. At Acxiom, I build predictive models and scalable data workflows that support real client decisions and turn complex datasets into useful business direction.",
        "Lately, I've become especially interested in vibe coding: using AI tools to turn ideas into working apps quickly. I enjoy building things that are practical, fast to test, and shaped through experimentation, combining analytical thinking with a more creative way of making software.",
        "Outside of work, I'm into photography, languages, and strategy-driven hobbies like tennis and games. Those interests sharpen how I observe details, adapt to new situations, and approach problems from different angles.",
      ],
      stats: [
        { value: "5+", label: "Years in data" },
        { value: "10+", label: "Apps built" },
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
            "Build and deploy predictive models and address selection strategies for enterprise marketing campaigns. Use SAS and Python for customer structure analysis and data enrichment, support the migration from SAS to PySpark, and develop scripts for web scraping, market analysis, and client-facing insights.",
        },
        {
          title: "Machine Learning Research — Master Thesis",
          description:
            "Built an anomaly detection pipeline for CT scanner log data, combining supervised and unsupervised methods. Used SHAP-based explainability to turn model outputs into insights that supported predictive maintenance.",
        },
        {
          title: "Working Student — Data Science, Sales Operations",
          description:
            "Maintained and enriched CRM data, built visualizations with Python tools, and delivered dashboards that gave the sales team clearer visibility into pipeline performance and conversion trends.",
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
            "Focused on machine learning, business analytics, and database systems, with a thesis on industrial anomaly detection completed in collaboration with Siemens.",
        },
        {
          degree: "B.Sc. Information Systems",
          description:
            "Built a strong foundation in data management, information systems, and applied analytics.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projects",
      title: "Things I've built",
      tab1: "Data & ML",
      tab2: "Vibe Coding",
      liveDemo: "Live Demo",
      moreTitle: "More to come",
      moreSubtitle: "New builds in progress",
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
        "Ich bin Datenwissenschaftler mit einem Hintergrund in Informationssystemen und arbeite an der Schnittstelle von maschinellem Lernen, Analytics und Business Intelligence. Bei Acxiom entwickle ich prädiktive Modelle und skalierbare Datenworkflows, die komplexe Daten in konkrete Geschäftsentscheidungen übersetzen.",
        "Besonders spannend finde ich derzeit Vibe Coding: den Einsatz von KI-Tools, um Ideen schnell in funktionierende Apps zu verwandeln. Mich reizt vor allem, Dinge pragmatisch zu bauen, schnell zu testen und sie durch Experimentieren Schritt für Schritt besser zu machen.",
        "Außerhalb der Arbeit interessiere ich mich für Fotografie, Sprachen und strategische Hobbys wie Tennis und Games. Diese Interessen prägen auch, wie ich Details wahrnehme, mich auf Neues einstelle und Probleme aus unterschiedlichen Perspektiven angehe.",
      ],
      stats: [
        { value: "5+", label: "Jahre Erfahrung" },
        { value: "10+", label: "Apps gebaut" },
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
            "Entwicklung und Einsatz prädiktiver Modelle sowie datengetriebener Adressselektionsstrategien für Marketingkampagnen großer Unternehmenskunden. Mit SAS und Python führe ich Kundenstrukturanalysen und Datenanreicherung durch, unterstütze die Migration von SAS zu PySpark und entwickle Skripte für Web-Scraping, Marktanalysen und klientenrelevante Insights.",
        },
        {
          title: "Machine-Learning-Forschung — Masterarbeit",
          description:
            "Entwicklung einer Anomalieerkennungspipeline für Logdaten von CT-Scannern unter Kombination überwachter und unüberwachter Verfahren. Mit SHAP-basierter Modellerklärung wurden verwertbare Erkenntnisse für Predictive Maintenance abgeleitet.",
        },
        {
          title: "Werkstudent — Data Science, Vertrieb",
          description:
            "Pflege und Anreicherung der CRM-Datenbank, Erstellung von Visualisierungen mit Python-Tools sowie Aufbau von Dashboards, die dem Vertrieb mehr Transparenz über Pipeline-Performance und Konversionsraten gaben.",
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
            "Schwerpunkte in Machine Learning, Business Analytics und Datenbanksystemen; Abschlussarbeit zur industriellen Anomalieerkennung in Zusammenarbeit mit Siemens.",
        },
        {
          degree: "B.Sc. Informationssysteme",
          description:
            "Solide Grundlage in Datenmanagement, Informationssystemen und angewandter Analytik.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projekte",
      title: "Was ich gebaut habe",
      tab1: "Daten & ML",
      tab2: "Vibe Coding",
      liveDemo: "Live Demo",
      moreTitle: "Mehr kommt bald",
      moreSubtitle: "Neue Projekte sind in Arbeit",
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
