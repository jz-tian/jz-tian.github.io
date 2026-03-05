"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal, about, skills, workExperience, education, projects, photos } from "@/lib/data";

const experience = [
  ...workExperience.map((e) => ({ ...e, type: "work" as const, company: e.company })),
  ...education.map((e) => ({ ...e, type: "education" as const, title: e.degree, company: e.institution })),
];
import {
  FiMail, FiLinkedin, FiGithub, FiMapPin, FiMenu, FiX,
  FiExternalLink, FiDownload, FiCode, FiCamera, FiDatabase,
  FiArrowRight, FiCalendar, FiBriefcase, FiBook, FiZap,
} from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Accent colors per section
const TEAL = "#0D9488";
const ORANGE = "#F97316";
const PINK = "#DB2777";
const INDIGO = "#4F46E5";

const PHOTO_GRADIENTS = [
  ["#99f6e4", "#67e8f9"],
  ["#fdba74", "#fca5a5"],
  ["#f9a8d4", "#c4b5fd"],
  ["#6ee7b7", "#a5f3fc"],
  ["#fde68a", "#fca5a5"],
  ["#c4b5fd", "#fbcfe8"],
];

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Experience", "Projects", "Photography", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: `linear-gradient(135deg, ${TEAL}, ${INDIGO})` }}>
            JT
          </div>
          <span className="font-bold text-gray-900 hidden sm:block"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            Jiazheng Tian
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-teal-600 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personal.cvFile}
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: `linear-gradient(135deg, ${TEAL}, ${INDIGO})` }}
        >
          <FiDownload size={14} /> Download CV
        </a>

        <button className="md:hidden text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Tag chip ─────────────────────────────────────────────────────────────────
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-md font-semibold"
      style={{ background: `${color}18`, color }}>
      {label}
    </span>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-none mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              {personal.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-lg text-sm font-bold text-white" style={{ background: TEAL }}>Data Scientist</span>
              <span className="px-3 py-1.5 rounded-lg text-sm font-bold text-white" style={{ background: ORANGE }}>Vibe Coder</span>
              <span className="px-3 py-1.5 rounded-lg text-sm font-bold text-white" style={{ background: PINK }}>Photographer</span>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-8">{personal.tagline}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${TEAL}, ${INDIGO})` }}>
                See My Work <FiArrowRight />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                Say Hello
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors"><FiLinkedin size={20} /></a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors"><FiGithub size={20} /></a>
              <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-teal-500 transition-colors"><FiMail size={20} /></a>
              <span className="text-gray-200">|</span>
              <span className="text-sm text-gray-400 flex items-center gap-1"><FiMapPin size={12} /> {personal.location}</span>
            </div>
          </motion.div>

          {/* Right: photo + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="w-full h-full rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, #e0f7fa, #e8eaf6)` }}>
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-5xl mb-2">👤</div>
                    <p className="text-xs">Profile photo</p>
                  </div>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute -left-8 top-8 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <p className="text-xs text-gray-400 font-medium">Data Projects</p>
                <p className="text-xl font-bold" style={{ color: TEAL }}>20+</p>
              </div>
              <div className="absolute -right-8 bottom-12 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <p className="text-xs text-gray-400 font-medium">Apps Built</p>
                <p className="text-xl font-bold" style={{ color: ORANGE }}>10+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHead({ label, title, accent }: { label: string; title: string; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-0.5 rounded" style={{ background: accent }} />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>{label}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
        {title}
      </h2>
    </motion.div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const cards = [
    { icon: <FiDatabase size={20} />, title: "Data Science & ML", desc: "Modeling, analysis, and visualization to turn raw data into decisions.", color: TEAL },
    { icon: <FiZap size={20} />, title: "Vibe Coding", desc: "Rapid prototyping with Claude Code — from idea to shipped app in hours.", color: ORANGE },
    { icon: <FiCamera size={20} />, title: "Photography", desc: "Capturing light and moment — landscapes, streets, and everything in between.", color: PINK },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead label="Who I Am" title="About Me" accent={TEAL} />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">{p}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {cards.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-5 shadow-sm border-l-4 flex gap-4"
                style={{ borderLeftColor: c.color }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: c.color }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-sm">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  const groups = [
    { label: "Data & ML", items: [...skills.data, ...skills.ml], color: TEAL },
    { label: "Vibe Coding", items: skills.vibeCoding, color: ORANGE },
    { label: "Tools", items: skills.tools, color: INDIGO },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead label="What I Know" title="Skills & Tools" accent={ORANGE} />
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 p-6 hover:shadow-md transition-shadow"
              style={{ borderColor: `${g.color}30` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-5 rounded" style={{ background: g.color }} />
                <h3 className="font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {g.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s} label={s} color={g.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead label="My Journey" title="Experience & Education" accent={INDIGO} />
        <div className="grid md:grid-cols-2 gap-5">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-t-4"
              style={{ borderTopColor: item.type === "work" ? TEAL : INDIGO }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-white text-xs"
                      style={{ background: item.type === "work" ? TEAL : INDIGO }}>
                      {item.type === "work" ? <FiBriefcase size={12} /> : <FiBook size={12} />}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {item.type === "work" ? "Work" : "Education"}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                  <p className="font-semibold mt-0.5" style={{ color: item.type === "work" ? TEAL : INDIGO }}>
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1"><FiCalendar size={11} /> {item.period}</span>
                <span className="flex items-center gap-1"><FiMapPin size={11} /> {item.location}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  const [tab, setTab] = useState<"data" | "vibe">("data");
  const items = tab === "data" ? projects.data : projects.vibeCoding;
  const accent = tab === "data" ? TEAL : ORANGE;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead label="What I Build" title="Projects" accent={ORANGE} />

        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          {([["data", "Data & ML", TEAL], ["vibe", "Vibe Coding", ORANGE]] as const).map(([key, label, color]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
              style={
                tab === key
                  ? { background: color, color: "white" }
                  : { background: `${color}15`, color }
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {items.map((p, i) => (
              <motion.div
                key={`${tab}-${i}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                style={{ borderColor: `${accent}25` }}
              >
                <div className="h-40 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}>
                  {"demoUrl" in p && p.demoUrl ? (
                    <iframe src={p.demoUrl as string} title={p.title} className="w-full h-full" loading="lazy" sandbox="allow-scripts allow-same-origin" />
                  ) : (
                    <div className="text-4xl" style={{ color: `${accent}60` }}>
                      {tab === "data" ? <FiDatabase /> : <FiCode />}
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full text-white"
                      style={{ background: accent }}>
                      {tab === "data" ? "Data" : "Vibe"}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => <Tag key={t} label={t} color={accent} />)}
                  </div>
                  <div className="flex gap-4 pt-3 border-t border-gray-100">
                    <a href={p.link} className="flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: accent }}>
                      Demo <FiExternalLink size={13} />
                    </a>
                    <a href={p.github} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
                      <FiGithub size={13} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── Photography ──────────────────────────────────────────────────────────────
function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const hasRealPhotos = photos.some((p) => p.src !== "");
  const lightboxSlides = photos.filter((p) => p.src !== "").map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }));

  return (
    <section id="photography" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead label="Through the Lens" title="Photography" accent={PINK} />
        <p className="text-gray-500 mb-8">A selection of my favourite captures.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ aspectRatio: photo.width / photo.height, minHeight: "140px" }}
              onClick={() => { if (hasRealPhotos && photo.src) { setLightboxIndex(i); setLightboxOpen(true); } }}
            >
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length][0]}, ${PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length][1]})` }}>
                  <div className="text-center text-white/80">
                    <FiCamera className="mx-auto mb-1" size={28} />
                    <p className="text-xs font-medium">Add photo</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {hasRealPhotos && (
          <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} index={lightboxIndex} slides={lightboxSlides} />
        )}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead label="Get In Touch" title="Contact Me" accent={TEAL} />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Got an interesting project? Want to collaborate on data, code, or creative work? Let&apos;s talk.
            </p>
            <div className="space-y-3">
              {[
                { href: `mailto:${personal.email}`, icon: <FiMail />, label: personal.email, color: TEAL },
                { href: personal.linkedin, icon: <FiLinkedin />, label: "LinkedIn", color: INDIGO },
                { href: personal.github, icon: <FiGithub />, label: "GitHub", color: "#111" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: item.color }}>
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900">{item.label}</span>
                  <FiArrowRight className="ml-auto text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" size={16} />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
              <input type="text" placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-teal-400 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input type="email" placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-teal-400 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea rows={5} placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-teal-400 transition-colors resize-none" />
            </div>
            <button type="submit"
              className="w-full py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${TEAL}, ${INDIGO})` }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} {personal.name}</p>
        <div className="flex gap-4">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><FiLinkedin /></a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><FiGithub /></a>
          <a href={`mailto:${personal.email}`} className="text-gray-500 hover:text-white transition-colors"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VariantB() {
  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </main>
  );
}
