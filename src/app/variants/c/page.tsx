"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { personal, skills, workExperience, education, projects, photos, profilePhoto } from "@/lib/data";
import { translations, type Lang, type T } from "@/lib/translations";
import {
  FiMail, FiLinkedin, FiGithub, FiMapPin, FiMenu, FiX,
  FiExternalLink, FiDownload, FiCode, FiCamera, FiDatabase,
  FiArrowRight, FiCalendar, FiBriefcase, FiBook, FiArrowUpRight,
} from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ACCENT = "#0066FF";
const ACCENT_LIGHT = "#EBF2FF";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }),
};

// ─── Language Switcher ────────────────────────────────────────────────────────
function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];
  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-gray-100">
      {langs.map(({ code, label }) => (
        <button key={code} onClick={() => setLang(code)}
          className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200"
          style={lang === code
            ? { background: "white", color: ACCENT, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }
            : { color: "#9ca3af" }}>
          {label}
        </button>
      ))}
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ t, lang, setLang }: { t: T; lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.education, id: "education" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.photography, id: "photography" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_#e5e7eb]" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-black text-lg tracking-tighter text-gray-900">
          JT<span style={{ color: ACCENT }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-500">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}
                className="relative py-1 hover:text-gray-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href={personal.cvFile} download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-blue-100"
            style={{ background: ACCENT }}>
            <FiDownload size={13} /> {t.nav.resume}
          </a>
        </div>

        <button className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-xl">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}
                    className="block py-2.5 px-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <LangSwitcher lang={lang} setLang={setLang} />
              <a href={personal.cvFile} download
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-full"
                style={{ background: ACCENT }}>
                <FiDownload size={13} /> {t.nav.resume}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`, backgroundSize: "32px 32px", opacity: 0.5 }} />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-black tracking-tighter text-gray-900 leading-[0.95] mb-6"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}>
              {personal.name.split(" ").map((w, i) => (
                <span key={i} className="block">{w}</span>
              ))}
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 rounded" style={{ background: ACCENT }} />
              <p className="text-lg font-medium text-gray-500">{personal.title}</p>
            </motion.div>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10">
              {t.hero.tagline}
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="flex flex-wrap gap-3 mb-10">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-200 hover:opacity-90"
                style={{ background: ACCENT, boxShadow: `0 8px 24px ${ACCENT}30` }}>
                {t.hero.cta1} <FiArrowRight size={15} />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-gray-700 text-sm border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                {t.hero.cta2}
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="flex items-center gap-5">
              {[
                { href: personal.linkedin, icon: <FiLinkedin size={17} /> },
                { href: personal.github, icon: <FiGithub size={17} /> },
                { href: `mailto:${personal.email}`, icon: <FiMail size={17} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200">
                  {icon}
                </a>
              ))}
              <span className="text-gray-300 text-xs ml-2 flex items-center gap-1.5">
                <FiMapPin size={11} className="text-gray-400" /> {personal.location}
              </span>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-[360px] md:h-[440px] lg:w-full lg:max-w-md lg:h-[500px]">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{ background: ACCENT_LIGHT, border: `1.5px solid ${ACCENT}20` }} />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                {profilePhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profilePhoto} alt={personal.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Add profile.jpg to /public/</p>
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 h-1" style={{ background: ACCENT }} />
              </div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-6 top-10 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3">
                <p className="text-xs text-gray-400 font-medium mb-0.5">{t.hero.statExperienceLabel}</p>
                <p className="text-xl font-black text-gray-900">3+ <span className="text-sm font-medium text-gray-400">{t.hero.statExperienceUnit}</span></p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 }}
                className="absolute -right-5 bottom-20 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3">
                <p className="text-xs text-gray-400 font-medium mb-0.5">{t.hero.statProjectsLabel}</p>
                <p className="text-xl font-black text-gray-900">10+ <span className="text-sm font-medium text-gray-400">{t.hero.statProjectsUnit}</span></p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="flex items-center gap-3 mb-5">
      <span className="text-xs font-bold tabular-nums" style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>{num}</span>
      <div className="h-px flex-1 max-w-[40px]" style={{ background: ACCENT }} />
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</span>
    </motion.div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-14">
      {children}
    </motion.h2>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About({ t }: { t: T }) {
  return (
    <section id="about" className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="01" label={t.about.sectionLabel} />
        <SectionTitle>{t.about.title}</SectionTitle>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6 space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="text-gray-600 text-lg leading-relaxed">
                {p}
              </motion.p>
            ))}
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {t.about.stats.map((s, i) => (
                <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 group">
                  <p className="text-3xl font-black mb-1 group-hover:text-blue-600 transition-colors" style={{ color: ACCENT }}>{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* What I do */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t.about.whatIDo}</p>
              <div className="space-y-3">
                {[
                  { icon: <FiDatabase size={15} />, label: t.about.doItems[0] },
                  { icon: <FiCode size={15} />, label: t.about.doItems[1] },
                  { icon: <FiCamera size={15} />, label: t.about.doItems[2] },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills({ t }: { t: T }) {
  const groups = [
    { label: t.skills.groups[0], items: [...skills.data, ...skills.ml] },
    { label: t.skills.groups[1], items: skills.vibeCoding },
    { label: t.skills.groups[2], items: skills.tools },
  ];

  return (
    <section id="skills" className="py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="02" label={t.skills.sectionLabel} />
        <SectionTitle>{t.skills.title}</SectionTitle>

        <div className="space-y-12">
          {groups.map((g, gi) => (
            <motion.div key={g.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={gi}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-bold text-gray-900">{g.label}</h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-600 cursor-default transition-all duration-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 hover:shadow-sm"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Work Experience ──────────────────────────────────────────────────────────
function WorkExperience({ t }: { t: T }) {
  return (
    <section id="experience" className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="03" label={t.experience.sectionLabel} />
        <SectionTitle>{t.experience.title}</SectionTitle>

        <div className="space-y-4">
          {workExperience.map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="group p-7 sm:p-10 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{t.experience.items[i]?.title ?? item.title}</h3>
                  <p className="font-semibold text-sm" style={{ color: ACCENT }}>{item.company}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">
                    <FiBriefcase size={11} /> {item.period}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 sm:justify-end">
                    <FiMapPin size={10} /> {item.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{t.experience.items[i]?.description ?? item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────
function Education({ t }: { t: T }) {
  return (
    <section id="education" className="py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="04" label={t.education.sectionLabel} />
        <SectionTitle>{t.education.title}</SectionTitle>

        <div className="space-y-4">
          {education.map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="group p-7 sm:p-10 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{t.education.items[i]?.degree ?? item.degree}</h3>
                  <p className="font-semibold text-sm" style={{ color: ACCENT }}>{item.institution}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">
                    <FiBook size={11} /> {item.period}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 sm:justify-end">
                    <FiMapPin size={10} /> {item.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{t.education.items[i]?.description ?? item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects({ t }: { t: T }) {
  const [tab, setTab] = useState<"data" | "vibe">("data");
  const items = tab === "data" ? projects.data : projects.vibeCoding;

  return (
    <section id="projects" className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="05" label={t.projects.sectionLabel} />
        <SectionTitle>{t.projects.title}</SectionTitle>

        <div className="flex gap-2 mb-10 p-1 bg-gray-100 rounded-full w-fit">
          {([["data", t.projects.tab1, <FiDatabase key="d" size={13} />], ["vibe", t.projects.tab2, <FiCode key="v" size={13} />]] as const).map(([key, label, icon]) => (
            <button key={key} onClick={() => setTab(key)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={tab === key ? { background: "white", color: ACCENT, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" } : { color: "#6b7280" }}>
              {icon} {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {items.map((p, i) => (
              <motion.article key={`${tab}-${i}`}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 flex flex-col">
                <div className="h-48 flex items-center justify-center relative overflow-hidden flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${ACCENT_LIGHT}, #f8f9ff)` }}>
                  {"demoUrl" in p && p.demoUrl ? (
                    <iframe src={p.demoUrl as string} title={p.title} className="w-full h-full" loading="lazy" sandbox="allow-scripts allow-same-origin" />
                  ) : (
                    <div className="text-5xl opacity-20" style={{ color: ACCENT }}>
                      {tab === "data" ? <FiDatabase /> : <FiCode />}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: ACCENT_LIGHT, color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <a href={p.link} className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline" style={{ color: ACCENT }}>
                      {t.projects.liveDemo} <FiArrowUpRight size={13} />
                    </a>
                    <a href={p.github} className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors">
                      <FiGithub size={13} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── Photography ──────────────────────────────────────────────────────────────
function Photography({ t }: { t: T }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const realPhotos = photos.filter((p) => p.src !== "");
  const lightboxSlides = realPhotos.map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }));

  const openLightbox = (src: string) => {
    const idx = realPhotos.findIndex((p) => p.src === src);
    if (idx !== -1) { setLightboxIndex(idx); setLightboxOpen(true); }
  };

  return (
    <section id="photography" className="py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="06" label={t.photography.sectionLabel} />
        <SectionTitle>{t.photography.title}</SectionTitle>
        <p className="text-gray-500 text-lg -mt-8 mb-12 max-w-xl">{t.photography.subtitle}</p>

        <div className="columns-2 sm:columns-2 md:columns-3 gap-3 space-y-3">
          {realPhotos.map((photo, i) => (
            <motion.div key={photo.src}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i % 4}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => openLightbox(photo.src)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ display: "block" }}
                loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FiArrowUpRight size={18} style={{ color: ACCENT }} />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: ACCENT }} />
            </motion.div>
          ))}
        </div>

        {lightboxSlides.length > 0 && (
          <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} index={lightboxIndex} slides={lightboxSlides} />
        )}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact({ t }: { t: T }) {
  return (
    <section id="contact" className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="07" label={t.contact.sectionLabel} />
        <SectionTitle>{t.contact.title}</SectionTitle>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-10">
              {t.contact.intro}
            </motion.p>
            <div className="space-y-3">
              {[
                { href: `mailto:${personal.email}`, icon: <FiMail size={16} />, label: personal.email, sub: "Email" },
                { href: personal.linkedin, icon: <FiLinkedin size={16} />, label: "Jiazheng Tian", sub: "LinkedIn" },
                { href: personal.github, icon: <FiGithub size={16} />, label: "jz-tian", sub: "GitHub" },
              ].map((item, i) => (
                <motion.a key={item.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-blue-100"
                    style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{item.sub}</p>
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{item.label}</p>
                  </div>
                  <FiArrowUpRight className="ml-auto text-gray-300 group-hover:text-blue-500 transition-colors" size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:col-span-6 lg:col-start-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: t.contact.nameLabel, type: "text", placeholder: t.contact.namePlaceholder },
                { label: t.contact.emailLabel, type: "email", placeholder: t.contact.emailPlaceholder },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 placeholder:text-gray-300" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.messageLabel}</label>
                <textarea rows={5} placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 resize-none placeholder:text-gray-300" />
              </div>
              <button type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2"
                style={{ background: ACCENT, boxShadow: `0 4px 16px ${ACCENT}30` }}>
                {t.contact.send} <FiArrowRight size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ t }: { t: T }) {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {personal.name} · {t.footer.builtWith}
        </p>
        <div className="flex gap-4">
          {[
            { href: personal.linkedin, icon: <FiLinkedin size={16} /> },
            { href: personal.github, icon: <FiGithub size={16} /> },
            { href: `mailto:${personal.email}`, icon: <FiMail size={16} /> },
          ].map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-all duration-200">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VariantC() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <WorkExperience t={t} />
      <Education t={t} />
      <Projects t={t} />
      <Photography t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
