"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { personal, workExperience, education, projects, photos, profilePhotos } from "@/lib/data";
import { withBasePath } from "@/lib/site";
import { translations, type Lang, type T } from "@/lib/translations";
import {
  FiMail, FiLinkedin, FiGithub, FiMapPin, FiMenu, FiX,
  FiDownload, FiCode, FiArrowRight, FiBriefcase, FiBook, FiArrowUpRight, FiChevronDown,
} from "react-icons/fi";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

const ACCENT = "#0066FF";
const ACCENT_LIGHT = "#EBF2FF";
const BODY_FONT = "var(--font-plus-jakarta), sans-serif";
const TITLE_FONT = "var(--font-inter), sans-serif";

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
  const cvHref = withBasePath(lang === "de" ? "/cv/Lebenslauf_Jiazheng_Tian.pdf" : "/cv/cv_Jiazheng_Tian.pdf");
  const cvDownloadName = lang === "de" ? "Lebenslauf_Jiazheng_Tian.pdf" : "cv_Jiazheng_Tian.pdf";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: t.nav.about, id: "about" },
    { label: `${t.nav.experience} / ${t.nav.education}`, id: "journey" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.photography, id: "photography" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_#e5e7eb]" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-3 text-gray-900 transition-opacity duration-200 hover:opacity-80">
          <span className="font-black text-lg tracking-tighter" style={{ fontFamily: TITLE_FONT }}>
            JT<span style={{ color: ACCENT }}>.</span>
          </span>
          <span className="hidden sm:block text-[1.9rem] leading-none text-gray-200 font-light">|</span>
          <span className="hidden sm:block text-xl font-bold tracking-tight" style={{ fontFamily: TITLE_FONT }}>Jiazheng Tian</span>
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
              <a href={cvHref} download={cvDownloadName}
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
function Hero({ t, lang }: { t: T; lang: Lang }) {
  const cvHref = withBasePath(lang === "de" ? "/cv/Lebenslauf_Jiazheng_Tian.pdf" : "/cv/cv_Jiazheng_Tian.pdf");
  const cvDownloadName = lang === "de" ? "Lebenslauf_Jiazheng_Tian.pdf" : "cv_Jiazheng_Tian.pdf";
  const ref = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start 25%", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 1], [1, 1, 0.08]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 w-[40%] pointer-events-none bg-[linear-gradient(to_right,transparent,rgba(0,102,255,0.04))]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pt-22 pb-22">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-10 items-center">

          {/* Left — text */}
          <div className="lg:col-span-3">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] mb-6" style={{ color: ACCENT }}>
                Data Science · AI · Apps
              </p>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-black tracking-tighter text-gray-900 leading-[0.95] mb-6"
              style={{ fontFamily: TITLE_FONT, fontSize: "clamp(2.4rem, 5vw, 4.15rem)" }}>
              <span className="block">
                <span style={{ color: ACCENT }}>{personal.name}</span>
              </span>
              <span className="block">Data Analyst & Vibe Coder</span>
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 font-medium shadow-sm">
                <FiMapPin size={12} style={{ color: ACCENT }} /> {personal.location}
              </span>
            </motion.div>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-500 text-[0.98rem] leading-relaxed max-w-lg mb-8">
              {t.hero.tagline}
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="flex flex-wrap gap-3 mb-8">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-200 hover:opacity-90"
                style={{ background: "#111111", boxShadow: "0 14px 32px rgba(17,17,17,0.12)" }}>
                {t.hero.cta1} <FiArrowRight size={15} />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-gray-700 text-sm border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                {t.hero.cta2}
              </a>
              <a href={cvHref} download={cvDownloadName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-gray-700 text-sm border border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all duration-200">
                <FiDownload size={14} /> {t.nav.resume}
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="flex items-center gap-4">
              {[
                { href: `mailto:${personal.email}`, icon: <FiMail size={17} /> },
                { href: personal.linkedin, icon: <FiLinkedin size={17} /> },
                { href: personal.github, icon: <FiGithub size={17} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div ref={photoRef} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 flex justify-center lg:justify-end lg:pt-6">
            <div className="group relative w-72 h-72 md:w-[300px] md:h-[370px] lg:w-full lg:max-w-[390px] lg:h-[455px]">
              <div
                className="absolute -top-8 -left-10 hidden md:block h-[56%] w-[54%] rounded-[2.3rem] border transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                style={{ borderColor: `${ACCENT}70` }}
              />
              <div
                className="absolute -right-8 bottom-[-3rem] hidden md:block h-32 w-32 rounded-full border-2 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2"
                style={{ borderColor: `${ACCENT}70` }}
              />
              <div
                className="absolute -bottom-8 -left-8 h-28 w-28 rounded-[2rem] border bg-white/85 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1"
                style={{
                  borderColor: `${ACCENT}32`,
                  backgroundImage: "radial-gradient(circle, rgba(0,102,255,0.24) 1.5px, transparent 1.5px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div
                className="absolute -right-8 top-14 hidden md:block h-14 w-14 rotate-12 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", background: `${ACCENT}B8` }}
              />
              <div className="absolute inset-6 rounded-[2rem] border border-white/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.22),transparent_30%),linear-gradient(to_right,#dbe7ff_1px,transparent_1px),linear-gradient(to_bottom,#dbe7ff_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-0 transition-opacity duration-500 group-hover:opacity-45" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.14)] border border-gray-100 bg-white">
                {profilePhotos.hero ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={withBasePath(profilePhotos.hero)}
                    alt={personal.name}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045] group-hover:-translate-y-1"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Add profile.jpg to /public/</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_24%,transparent_72%,rgba(15,23,42,0.12))]" />
                <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: ACCENT }} />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0.85, y: 0 }}
        animate={{ opacity: 0.85, y: [0, 4, 0] }}
        transition={{ delay: 0.8, duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors duration-200"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.32em]">Scroll</span>
        <FiChevronDown size={18} />
      </motion.a>
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
      className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-14"
      style={{ fontFamily: TITLE_FONT }}>
      {children}
    </motion.h2>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About({ t }: { t: T }) {
  const capabilityGroups = [
    { label: t.skills.groups[0], items: ["Python", "SQL", "EDA", "NLP", "GenAI"] },
    { label: t.skills.groups[1], items: ["Claude Code", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"] },
    { label: "Tools", items: ["Git", "Spark", "Power BI", "AWS"] },
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="01" label={t.about.sectionLabel} />
        <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-14 lg:gap-16 items-stretch">
          <div className="space-y-5 lg:space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.2rem] border border-gray-100 bg-gray-50 shadow-sm">
              <div
                className="absolute -left-5 -bottom-5 hidden md:block h-28 w-28 rounded-[1.8rem] border transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1"
                style={{ borderColor: `${ACCENT}30` }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: ACCENT }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(profilePhotos.about)}
                alt={`${personal.name} portrait`}
                loading="lazy"
                className="h-[280px] sm:h-[420px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {t.about.stats.map((s, i) => (
                <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="p-3.5 sm:p-4 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <p
                      className={`leading-none tracking-tight group-hover:text-blue-600 transition-colors ${s.value === "∞" ? "text-[1.9rem] sm:text-[2.15rem] font-bold" : "text-[2rem] sm:text-2xl font-black"}`}
                      style={{ color: ACCENT }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[0.95rem] sm:text-sm text-gray-400 font-medium leading-snug">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="p-6 rounded-2xl border border-gray-100 bg-white">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Capabilities</p>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="space-y-5">
                {capabilityGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-bold text-gray-900 mb-3">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item}
                          className="px-3 py-1.5 text-sm font-medium rounded-full border border-gray-200 bg-gray-50 text-gray-600"
                          style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:min-h-full lg:flex lg:items-center">
            <div className="max-w-[42rem]">
              <SectionTitle>{t.about.title}</SectionTitle>
              <div className="space-y-5">
                {t.about.paragraphs.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                    className="text-gray-600 text-lg leading-relaxed">
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Journey ──────────────────────────────────────────────────────────────────
function Journey({ t }: { t: T }) {
  return (
    <section id="journey" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="02" label={`${t.experience.sectionLabel} / ${t.education.sectionLabel}`} />
        <SectionTitle>Professional Experience & Education</SectionTitle>

        <div className="grid xl:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-10 xl:gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                <FiBriefcase size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">{t.experience.sectionLabel}</p>
                <h3 className="text-2xl font-black tracking-tight text-gray-900" style={{ fontFamily: TITLE_FONT }}>Professional Experience</h3>
              </div>
            </div>

            {workExperience.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="group min-h-[250px] p-6 sm:p-7 rounded-3xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2" style={{ fontFamily: TITLE_FONT }}>{t.experience.items[i]?.title ?? item.title}</h4>
                    <p className="font-semibold text-sm" style={{ color: ACCENT }}>{item.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-0 py-0 bg-transparent rounded-none sm:px-3 sm:py-1 sm:bg-gray-50 sm:rounded-full">
                      <span className="inline-flex w-4 justify-center"><FiBriefcase size={11} /></span>
                      {item.period}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 justify-start sm:justify-end">
                      <span className="inline-flex w-4 justify-center"><FiMapPin size={10} /></span>
                      {item.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.experience.items[i]?.description ?? item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="hidden xl:block self-stretch bg-gradient-to-b from-transparent via-blue-100 to-transparent" />

          <div id="education" className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                <FiBook size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">{t.education.sectionLabel}</p>
                <h3 className="text-2xl font-black tracking-tight text-gray-900" style={{ fontFamily: TITLE_FONT }}>Education</h3>
              </div>
            </div>

            {education.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="group min-h-[250px] p-6 sm:p-7 rounded-3xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2" style={{ fontFamily: TITLE_FONT }}>{t.education.items[i]?.degree ?? item.degree}</h4>
                    <p className="font-semibold text-sm" style={{ color: ACCENT }}>{item.institution}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-0 py-0 bg-transparent rounded-none border-0 sm:px-3 sm:py-1 sm:bg-white sm:rounded-full sm:border sm:border-gray-100">
                      <span className="inline-flex w-4 justify-center"><FiBook size={11} /></span>
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-0 py-0 bg-transparent rounded-none border-0 sm:px-3 sm:py-1 sm:bg-white sm:rounded-full sm:border sm:border-gray-100">
                      <span className="inline-flex w-4 justify-center"><FiMapPin size={10} /></span>
                      {item.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.education.items[i]?.description ?? item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects({ t }: { t: T }) {
  const items = projects.vibeCoding;

  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="03" label={t.projects.sectionLabel} />
        <SectionTitle>{t.projects.title}</SectionTitle>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {items.map((p, i) => (
              (() => {
                const hasPreviewImage = Boolean(p.image);

                return (
              <motion.article key={p.title}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 flex flex-col">
                <div className="h-40 flex items-center justify-center relative overflow-hidden flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${ACCENT_LIGHT}, #f8f9ff)` }}>
                  {hasPreviewImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={withBasePath(p.image)}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-5xl opacity-20" style={{ color: ACCENT }}>
                      <FiCode size={12} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute left-5 top-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white/92 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600 shadow-sm backdrop-blur-sm">
                    <FiCode size={12} />
                    Featured Build
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: ACCENT_LIGHT, color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: TITLE_FONT }}>{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline" style={{ color: ACCENT }}>
                      {t.projects.liveDemo} <FiArrowUpRight size={13} />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors">
                      <FiGithub size={13} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
                );
              })()
            ))}
            <motion.article
              key="more-to-come"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: items.length * 0.1, duration: 0.4 }}
              className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 min-h-[22rem] flex flex-col items-center justify-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <span className="text-3xl leading-none text-gray-400">•••</span>
              </div>
              <h3 className="text-2xl font-black text-gray-700 mb-2" style={{ fontFamily: TITLE_FONT }}>
                {t.projects.moreTitle}
              </h3>
              <p className="text-gray-400 text-base">
                {t.projects.moreSubtitle}
              </p>
            </motion.article>
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
  const lightboxSlides = realPhotos.map((p) => ({
    src: withBasePath(p.src),
    alt: p.alt,
    width: p.width,
    height: p.height,
  }));

  const openLightbox = (src: string) => {
    const idx = realPhotos.findIndex((p) => p.src === src);
    if (idx !== -1) { setLightboxIndex(idx); setLightboxOpen(true); }
  };

  return (
    <section id="photography" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="04" label={t.photography.sectionLabel} />
        <SectionTitle>{t.photography.title}</SectionTitle>
        <p className="text-gray-500 text-lg -mt-8 mb-12 max-w-xl">{t.photography.subtitle}</p>

        <div className="columns-2 sm:columns-2 md:columns-3 gap-3 space-y-3">
          {realPhotos.map((photo, i) => (
            <motion.div key={photo.src}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i % 4}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => openLightbox(photo.src)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBasePath(photo.thumbSrc)} alt={photo.alt}
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
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel num="05" label={t.contact.sectionLabel} />
        <SectionTitle>{t.contact.title}</SectionTitle>

        <div className="mx-auto max-w-3xl">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center text-gray-600 text-lg leading-relaxed mb-10">
              {t.contact.intro}
          </motion.p>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { href: `mailto:${personal.email}`, icon: <FiMail size={16} />, label: personal.email, sub: "Email" },
              { href: personal.linkedin, icon: <FiLinkedin size={16} />, label: "Jiazheng Tian", sub: "LinkedIn" },
              { href: personal.github, icon: <FiGithub size={16} />, label: "jz-tian", sub: "GitHub" },
            ].map((item, i) => (
              <motion.a key={item.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-sm transition-all duration-200 group min-h-[96px]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-blue-100"
                  style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium">{item.sub}</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 break-all">
                    {item.label.includes('@')
                      ? <>{item.label.split('@')[0]}<wbr/>{'@'}{item.label.split('@')[1]}</>
                      : item.label}
                  </p>
                </div>
                <FiArrowUpRight className="ml-auto text-gray-300 group-hover:text-blue-500 transition-colors" size={16} />
              </motion.a>
            ))}
          </div>
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
            { href: `mailto:${personal.email}`, icon: <FiMail size={16} /> },
            { href: personal.linkedin, icon: <FiLinkedin size={16} /> },
            { href: personal.github, icon: <FiGithub size={16} /> },
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
    <main style={{ fontFamily: BODY_FONT }}>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <About t={t} />
      <Journey t={t} />
      <Projects t={t} />
      <Photography t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
