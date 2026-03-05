"use client";

// ─── Variant C2: Dark Editorial ───────────────────────────────────────────────
// Same editorial structure as C but dark background with glowing blue accent

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal, about, skills, workExperience, education, projects, photos, profilePhoto } from "@/lib/data";
import {
  FiMail, FiLinkedin, FiGithub, FiMapPin, FiMenu, FiX,
  FiExternalLink, FiDownload, FiCode, FiCamera, FiDatabase,
  FiArrowRight, FiCalendar, FiBriefcase, FiBook,
} from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BG = "#0C0C0C";
const SURFACE = "#161616";
const BORDER = "#2a2a2a";
const MUTED = "#6b7280";
const TEXT = "#F0F0F0";
const ACCENT = "#3B82F6"; // blue pops on dark

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Experience", "Education", "Projects", "Photography", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{ background: scrolled ? `${BG}ee` : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${BORDER}` : "none" }}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-black text-xl tracking-tighter" style={{ color: TEXT }}>
          JT<span style={{ color: ACCENT }}>.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm" style={{ color: MUTED }}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-medium transition-colors hover:text-white" style={{ color: MUTED }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href={personal.cvFile} download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all"
          style={{ border: `2px solid ${TEXT}`, color: TEXT }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = TEXT; (e.currentTarget as HTMLElement).style.color = BG; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = TEXT; }}>
          <FiDownload size={13} /> CV
        </a>
        <button className="md:hidden" style={{ color: TEXT }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 py-4 overflow-hidden" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}` }}>
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="font-medium" style={{ color: TEXT }} onClick={() => setMobileOpen(false)}>{l}</a></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionNum({ num, title }: { num: string; title: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
      <div className="flex items-end gap-4 mb-2">
        <span className="text-6xl font-black leading-none" style={{ color: `${ACCENT}25`, fontFamily: "var(--font-jetbrains), monospace" }}>{num}</span>
        <div className="w-12 h-0.5 mb-3" style={{ background: ACCENT }} />
      </div>
      <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight" style={{ color: TEXT }}>{title}</h2>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="grid lg:grid-cols-12 gap-12 items-center relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest uppercase mb-6"
              style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
              Hello, world.
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6" style={{ color: TEXT }}>
              {personal.name.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5" style={{ background: ACCENT }} />
              <p className="text-xl font-medium" style={{ color: MUTED }}>{personal.title}</p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed mb-10" style={{ color: MUTED }}>{personal.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white text-sm hover:opacity-90 transition-opacity" style={{ background: ACCENT }}>
                View Work <FiArrowRight />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm transition-all"
                style={{ border: `2px solid ${BORDER}`, color: TEXT }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACCENT; (e.currentTarget as HTMLElement).style.color = ACCENT; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = TEXT; }}>
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="lg:col-span-5">
            <div className="aspect-square w-full max-w-sm mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ border: `2px solid ${BORDER}` }} />
              <div className="relative w-full h-full overflow-hidden" style={{ border: `2px solid ${ACCENT}40` }}>
                {profilePhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profilePhoto} alt={personal.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: SURFACE }}>
                    <div className="text-center" style={{ color: MUTED }}>
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs font-medium" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>profile_photo.jpg</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `0 0 60px ${ACCENT}15` }} />
            </div>

            <div className="mt-6 grid grid-cols-3" style={{ border: `1px solid ${BORDER}` }}>
              {[
                { label: "Location", value: "Passau, DE" },
                { label: "Focus", value: "Data + AI" },
                { label: "Status", value: "Available" },
              ].map((m) => (
                <div key={m.label} className="px-4 py-3" style={{ borderRight: `1px solid ${BORDER}` }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>{m.label}</p>
                  <p className="text-sm font-bold" style={{ color: TEXT }}>{m.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-5">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: MUTED }}
                onMouseEnter={e => (e.currentTarget.style.color = TEXT)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                <FiLinkedin size={18} />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: MUTED }}
                onMouseEnter={e => (e.currentTarget.style.color = TEXT)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                <FiGithub size={18} />
              </a>
              <a href={`mailto:${personal.email}`} className="transition-colors" style={{ color: MUTED }}
                onMouseEnter={e => (e.currentTarget.style.color = TEXT)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                <FiMail size={18} />
              </a>
              <span className="text-xs flex items-center gap-1 ml-auto" style={{ color: MUTED }}>
                <FiMapPin size={11} /> {personal.location}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="01" title="About" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-xl leading-relaxed" style={{ color: MUTED }}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="p-6 space-y-5" style={{ border: `1px solid ${BORDER}` }}>
              <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>
                What I do
              </h3>
              {[
                { icon: <FiDatabase />, label: "Data Science & ML" },
                { icon: <FiCode />, label: "Vibe Coding" },
                { icon: <FiCamera />, label: "Photography" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 group cursor-default">
                  <div className="w-8 h-8 flex items-center justify-center transition-all"
                    style={{ border: `1px solid ${BORDER}`, color: MUTED }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACCENT; (e.currentTarget as HTMLElement).style.color = ACCENT; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                    {item.icon}
                  </div>
                  <span className="font-semibold" style={{ color: TEXT }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  const groups = [
    { num: "A", label: "Data & ML", items: [...skills.data, ...skills.ml] },
    { num: "B", label: "Vibe Coding", items: skills.vibeCoding },
    { num: "C", label: "Tools", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-28" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="02" title="Skills" />
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.label} className="grid lg:grid-cols-12 gap-6 pb-8 last:pb-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div className="lg:col-span-2 flex items-start gap-3">
                <span className="text-sm font-bold" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>[{g.num}]</span>
                <h3 className="font-bold" style={{ color: TEXT }}>{g.label}</h3>
              </div>
              <div className="lg:col-span-10 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-sm font-medium cursor-default transition-all"
                    style={{ border: `1px solid ${BORDER}`, color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACCENT; (e.currentTarget as HTMLElement).style.color = ACCENT; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reusable experience row ──────────────────────────────────────────────────
function ExpRow({ icon, period, location, title, org, description, i }: {
  icon: React.ReactNode; period: string; location: string; title: string; org: string; description: string; i: number;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="grid lg:grid-cols-12 gap-6 p-6 transition-colors group"
      style={{ borderBottom: `1px solid ${BORDER}` }}
      onMouseEnter={e => (e.currentTarget.style.background = SURFACE)}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
      <div className="lg:col-span-1 flex items-start pt-1">
        <div className="w-8 h-8 flex items-center justify-center transition-all"
          style={{ border: `1px solid ${BORDER}`, color: MUTED }}>
          {icon}
        </div>
      </div>
      <div className="lg:col-span-3">
        <p className="text-sm flex items-center gap-1 mb-1" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>
          <FiCalendar size={11} /> {period}
        </p>
        <p className="text-sm flex items-center gap-1" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>
          <FiMapPin size={11} /> {location}
        </p>
      </div>
      <div className="lg:col-span-8">
        <h3 className="font-bold text-lg mb-0.5" style={{ color: TEXT }}>{title}</h3>
        <p className="font-semibold text-sm mb-3" style={{ color: ACCENT }}>{org}</p>
        <p className="leading-relaxed text-sm" style={{ color: MUTED }}>{description}</p>
      </div>
    </motion.div>
  );
}

function WorkExperience() {
  return (
    <section id="experience" className="py-28" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="03" title="Work Experience" />
        <div style={{ border: `1px solid ${BORDER}` }}>
          {workExperience.map((item, i) => (
            <ExpRow key={i} i={i} icon={<FiBriefcase size={14} />}
              period={item.period} location={item.location} title={item.title} org={item.company} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-28" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="04" title="Education" />
        <div style={{ border: `1px solid ${BORDER}` }}>
          {education.map((item, i) => (
            <ExpRow key={i} i={i} icon={<FiBook size={14} />}
              period={item.period} location={item.location} title={item.degree} org={item.institution} description={item.description} />
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

  return (
    <section id="projects" className="py-28" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="05" title="Projects" />
        <div className="flex gap-0 mb-12 w-fit" style={{ border: `1px solid ${BORDER}` }}>
          {([["data", "Data & ML"], ["vibe", "Vibe Coding"]] as const).map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)}
              className="px-6 py-2.5 text-sm font-bold transition-all"
              style={{
                background: tab === key ? ACCENT : "transparent",
                color: tab === key ? "white" : MUTED,
                borderRight: `1px solid ${BORDER}`,
              }}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-0" style={{ border: `1px solid ${BORDER}` }}>
          <AnimatePresence mode="wait">
            {items.map((p, i) => (
              <motion.div key={`${tab}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }} className="p-8 transition-colors group"
                style={{ borderRight: i === 0 ? `1px solid ${BORDER}` : "none" }}
                onMouseEnter={e => (e.currentTarget.style.background = SURFACE)}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <div className="aspect-video mb-6 flex items-center justify-center relative overflow-hidden" style={{ background: `${ACCENT}08`, border: `1px solid ${BORDER}` }}>
                  {"demoUrl" in p && p.demoUrl ? (
                    <iframe src={p.demoUrl as string} title={p.title} className="w-full h-full" loading="lazy" sandbox="allow-scripts allow-same-origin" />
                  ) : (
                    <div className="text-4xl" style={{ color: `${ACCENT}40` }}>
                      {tab === "data" ? <FiDatabase /> : <FiCode />}
                    </div>
                  )}
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: ACCENT }} />
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5" style={{ border: `1px solid ${BORDER}`, color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>{t}</span>
                  ))}
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: TEXT }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{p.description}</p>
                <div className="flex gap-5">
                  <a href={p.link} className="flex items-center gap-1.5 text-sm font-bold hover:underline" style={{ color: ACCENT }}>
                    Live <FiExternalLink size={13} />
                  </a>
                  <a href={p.github} className="flex items-center gap-1.5 text-sm font-bold transition-colors" style={{ color: MUTED }}
                    onMouseEnter={e => (e.currentTarget.style.color = TEXT)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                    <FiGithub size={13} /> Code
                  </a>
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
  const darkBgs = ["#1e3a5f", "#1a2e4a", "#2d1b69", "#3b0764", "#1a2e1a", "#2d2000"];

  return (
    <section id="photography" className="py-28" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="06" title="Photography" />
        <p className="text-lg mb-10 max-w-xl" style={{ color: MUTED }}>
          I photograph landscapes, streets, and quiet moments. A selection of my favourites.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: BORDER }}>
          {photos.map((photo, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }} className="relative overflow-hidden cursor-pointer group"
              style={{ aspectRatio: photo.width / photo.height, background: BG }}
              onClick={() => { if (hasRealPhotos && photo.src) { setLightboxIndex(i); setLightboxOpen(true); } }}>
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ background: darkBgs[i % darkBgs.length] }}>
                  <div className="text-center" style={{ color: `${TEXT}50` }}>
                    <FiCamera size={28} className="mx-auto mb-1" />
                    <p className="text-xs font-medium" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                      photo_{String(i + 1).padStart(2, "0")}.jpg
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: ACCENT }} />
            </motion.div>
          ))}
        </div>
        {hasRealPhotos && <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} index={lightboxIndex} slides={lightboxSlides} />}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-28" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionNum num="07" title="Contact" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xl leading-relaxed mb-10" style={{ color: MUTED }}>
              Have a project? Need data insights? Or just want to talk shop — I&apos;m always up for a conversation.
            </p>
            <div className="space-y-4">
              {[
                { href: `mailto:${personal.email}`, icon: <FiMail />, label: personal.email },
                { href: personal.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
                { href: personal.github, icon: <FiGithub />, label: "GitHub" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group pb-4 transition-colors"
                  style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <div className="w-9 h-9 flex items-center justify-center transition-all"
                    style={{ border: `1px solid ${BORDER}`, color: MUTED }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACCENT; (e.currentTarget as HTMLElement).style.color = ACCENT; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = MUTED; }}>
                    {item.icon}
                  </div>
                  <span className="font-medium transition-colors" style={{ color: MUTED }}
                    onMouseEnter={e => (e.currentTarget.style.color = TEXT)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                    {item.label}
                  </span>
                  <FiArrowRight className="ml-auto transition-all" style={{ color: BORDER }} size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <form className="space-y-5 p-8" style={{ border: `1px solid ${BORDER}` }} onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>
                Send a message
              </h3>
              {[{ label: "Name", type: "text", placeholder: "Your name" }, { label: "Email", type: "email", placeholder: "your@email.com" }].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-bold mb-1.5" style={{ color: TEXT }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full px-4 py-3 text-sm outline-none transition-colors"
                    style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: TEXT }}
                    onFocus={e => (e.target.style.borderColor = ACCENT)} onBlur={e => (e.target.style.borderColor = BORDER)} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: TEXT }}>Message</label>
                <textarea rows={5} placeholder="What's on your mind?"
                  className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: TEXT }}
                  onFocus={e => (e.target.style.borderColor = ACCENT)} onBlur={e => (e.target.style.borderColor = BORDER)} />
              </div>
              <button type="submit" className="w-full py-3.5 font-bold text-white text-sm hover:opacity-90 transition-opacity" style={{ background: ACCENT }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: `1px solid ${BORDER}`, background: BG }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>
          {personal.name} © {new Date().getFullYear()}
        </p>
        <div className="flex gap-5">
          {[personal.linkedin, personal.github, `mailto:${personal.email}`].map((href, i) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: MUTED }}
              onMouseEnter={e => (e.currentTarget.style.color = TEXT)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              {i === 0 ? <FiLinkedin size={16} /> : i === 1 ? <FiGithub size={16} /> : <FiMail size={16} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function VariantC2() {
  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif", background: BG }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </main>
  );
}
