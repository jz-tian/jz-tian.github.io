"use client";

// ─── Variant C3: Warm Editorial ───────────────────────────────────────────────
// Bold red/coral accent, split-screen hero, warmer white background, serif headings

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

const ACCENT = "#E63946";   // bold red
const WARM_BG = "#FAFAF8";  // warm off-white
const WARM_ALT = "#F5F0EB"; // slightly warmer section bg
const TEXT = "#1a1a1a";
const MUTED = "#6b7280";
const BORDER = "#e5e0db";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200`}
      style={{ background: scrolled ? `${WARM_BG}f0` : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${BORDER}` : "none" }}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-black text-xl tracking-tighter" style={{ color: TEXT, fontFamily: "var(--font-playfair), serif" }}>
          JT<span style={{ color: ACCENT }}>.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm" style={{ color: MUTED }}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-medium transition-colors hover:text-gray-900">{l}</a>
            </li>
          ))}
        </ul>
        <a href={personal.cvFile} download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all"
          style={{ background: ACCENT, color: "white" }}>
          <FiDownload size={13} /> CV
        </a>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: TEXT }}>
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 py-4 overflow-hidden" style={{ background: WARM_BG, borderTop: `1px solid ${BORDER}` }}>
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

// ─── Section heading (serif style) ────────────────────────────────────────────
function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
      <span className="text-xs font-bold tracking-widest uppercase block mb-3"
        style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
        {num} /
      </span>
      <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: TEXT, fontFamily: "var(--font-playfair), serif" }}>
        {title}
      </h2>
      <div className="w-16 h-1 mt-4" style={{ background: ACCENT }} />
    </motion.div>
  );
}

// ─── Hero — Split screen ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex pt-16" style={{ background: WARM_BG }}>
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left: text — 55% */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="flex-1 lg:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0"
          style={{ borderRight: `1px solid ${BORDER}` }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-6"
            style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
            Data · Code · Photography
          </p>
          <h1 className="font-black leading-none tracking-tighter mb-6"
            style={{ color: TEXT, fontFamily: "var(--font-playfair), serif", fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            {personal.name.split(" ").map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1" style={{ background: ACCENT }} />
            <p className="text-lg font-semibold" style={{ color: MUTED }}>{personal.title}</p>
          </div>
          <p className="max-w-lg text-lg leading-relaxed mb-10" style={{ color: MUTED }}>{personal.tagline}</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white text-sm hover:opacity-90 transition-opacity" style={{ background: ACCENT }}>
              View Work <FiArrowRight />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm border-2 transition-colors hover:text-white"
              style={{ borderColor: TEXT, color: TEXT }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = TEXT; (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = TEXT; }}>
              Contact
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: MUTED }}><FiLinkedin size={18} /></a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: MUTED }}><FiGithub size={18} /></a>
            <a href={`mailto:${personal.email}`} className="hover:opacity-70 transition-opacity" style={{ color: MUTED }}><FiMail size={18} /></a>
            <span className="text-xs flex items-center gap-1 ml-4" style={{ color: MUTED }}><FiMapPin size={11} /> {personal.location}</span>
          </div>
        </motion.div>

        {/* Right: photo — 45% */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-[45%] relative overflow-hidden" style={{ background: WARM_ALT, minHeight: "400px" }}>
          {profilePhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profilePhoto} alt={personal.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-12">
              <div className="w-40 h-40 rounded-full flex items-center justify-center text-6xl" style={{ background: BORDER }}>👤</div>
              <p className="text-sm font-medium text-center" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>profile_photo.jpg</p>
            </div>
          )}
          {/* Decorative accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: ACCENT }} />
          {/* Stats overlay */}
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-2">
            {[
              { label: "Years exp.", value: "3+" },
              { label: "ML projects", value: "10+" },
              { label: "Apps built", value: "5+" },
            ].map((s) => (
              <div key={s.label} className="p-3" style={{ background: `${WARM_BG}e8` }}>
                <p className="text-lg font-black" style={{ color: ACCENT }}>{s.value}</p>
                <p className="text-xs font-medium" style={{ color: MUTED }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28" style={{ background: WARM_ALT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="01" title="About Me" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-xl leading-relaxed" style={{ color: MUTED }}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="p-6 space-y-5" style={{ border: `1px solid ${BORDER}`, background: WARM_BG }}>
              <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
                What I do
              </h3>
              {[
                { icon: <FiDatabase />, label: "Data Science & ML" },
                { icon: <FiCode />, label: "Vibe Coding" },
                { icon: <FiCamera />, label: "Photography" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ background: `${ACCENT}15`, color: ACCENT }}>
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
    <section id="skills" className="py-28" style={{ background: WARM_BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="02" title="Skills" />
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.label} className="grid lg:grid-cols-12 gap-6 pb-8 last:pb-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div className="lg:col-span-2 flex items-start gap-2">
                <span className="text-xs font-bold" style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>{g.num}/</span>
                <h3 className="font-bold" style={{ color: TEXT }}>{g.label}</h3>
              </div>
              <div className="lg:col-span-10 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-sm font-medium cursor-default transition-all"
                    style={{ border: `1px solid ${BORDER}`, color: MUTED, background: WARM_BG, fontFamily: "var(--font-jetbrains), monospace" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACCENT; (e.currentTarget as HTMLElement).style.color = ACCENT; (e.currentTarget as HTMLElement).style.background = `${ACCENT}08`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = MUTED; (e.currentTarget as HTMLElement).style.background = WARM_BG; }}>
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

// ─── Experience row ───────────────────────────────────────────────────────────
function ExpRow({ icon, period, location, title, org, description, i }: {
  icon: React.ReactNode; period: string; location: string; title: string; org: string; description: string; i: number;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="grid lg:grid-cols-12 gap-6 p-6 transition-colors"
      style={{ borderBottom: `1px solid ${BORDER}` }}
      onMouseEnter={e => (e.currentTarget.style.background = WARM_ALT)}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
      <div className="lg:col-span-1 pt-1">
        <div className="w-8 h-8 flex items-center justify-center" style={{ background: `${ACCENT}15`, color: ACCENT }}>
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
    <section id="experience" className="py-28" style={{ background: WARM_ALT, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="03" title="Work Experience" />
        <div style={{ border: `1px solid ${BORDER}`, background: WARM_BG }}>
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
    <section id="education" className="py-28" style={{ background: WARM_BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="04" title="Education" />
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
    <section id="projects" className="py-28" style={{ background: WARM_ALT, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="05" title="Projects" />
        <div className="flex gap-0 mb-12 w-fit" style={{ border: `1px solid ${BORDER}` }}>
          {([["data", "Data & ML"], ["vibe", "Vibe Coding"]] as const).map(([key, label], idx) => (
            <button key={key} onClick={() => setTab(key)}
              className="px-6 py-2.5 text-sm font-bold transition-all"
              style={{
                background: tab === key ? ACCENT : WARM_BG,
                color: tab === key ? "white" : MUTED,
                borderRight: idx === 0 ? `1px solid ${BORDER}` : "none",
              }}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {items.map((p, i) => (
              <motion.div key={`${tab}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group transition-all hover:-translate-y-1"
                style={{ background: WARM_BG, border: `1px solid ${BORDER}` }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                <div className="aspect-video flex items-center justify-center relative overflow-hidden" style={{ background: `${ACCENT}08`, borderBottom: `1px solid ${BORDER}` }}>
                  {"demoUrl" in p && p.demoUrl ? (
                    <iframe src={p.demoUrl as string} title={p.title} className="w-full h-full" loading="lazy" sandbox="allow-scripts allow-same-origin" />
                  ) : (
                    <div className="text-4xl" style={{ color: `${ACCENT}40` }}>
                      {tab === "data" ? <FiDatabase /> : <FiCode />}
                    </div>
                  )}
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: ACCENT }} />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5" style={{ border: `1px solid ${BORDER}`, color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>{t}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-black mb-2" style={{ color: TEXT, fontFamily: "var(--font-playfair), serif" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{p.description}</p>
                  <div className="flex gap-5 pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <a href={p.link} className="flex items-center gap-1.5 text-sm font-bold hover:underline" style={{ color: ACCENT }}>
                      Live <FiExternalLink size={13} />
                    </a>
                    <a href={p.github} className="flex items-center gap-1.5 text-sm font-bold hover:opacity-70 transition-opacity" style={{ color: MUTED }}>
                      <FiGithub size={13} /> Code
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
  const warmBgs = ["#f3e8d8", "#e8d5c4", "#dde8d5", "#d8e0f3", "#f3d8e8", "#e8f3d8"];

  return (
    <section id="photography" className="py-28" style={{ background: WARM_BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="06" title="Photography" />
        <p className="text-lg mb-10 max-w-xl" style={{ color: MUTED }}>
          I photograph landscapes, streets, and quiet moments. A selection of my favourites.
        </p>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              style={{ aspectRatio: photo.width / photo.height, border: `1px solid ${BORDER}` }}
              onClick={() => { if (hasRealPhotos && photo.src) { setLightboxIndex(i); setLightboxOpen(true); } }}>
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ background: warmBgs[i % warmBgs.length] }}>
                  <div className="text-center" style={{ color: "#a09080" }}>
                    <FiCamera size={28} className="mx-auto mb-1" />
                    <p className="text-xs font-medium" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                      photo_{String(i + 1).padStart(2, "0")}.jpg
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: ACCENT }} />
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
    <section id="contact" className="py-28" style={{ background: WARM_ALT }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead num="07" title="Contact" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xl leading-relaxed mb-10" style={{ color: MUTED }}>
              Have a project? Need data insights? Or just want to talk shop — I&apos;m always up for a conversation.
            </p>
            <div className="space-y-3">
              {[
                { href: `mailto:${personal.email}`, icon: <FiMail />, label: personal.email },
                { href: personal.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
                { href: personal.github, icon: <FiGithub />, label: "GitHub" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 transition-colors"
                  style={{ background: WARM_BG, border: `1px solid ${BORDER}` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: `${ACCENT}15`, color: ACCENT }}>
                    {item.icon}
                  </div>
                  <span className="font-medium" style={{ color: TEXT }}>{item.label}</span>
                  <FiArrowRight className="ml-auto" style={{ color: MUTED }} size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <form className="space-y-5 p-8" style={{ border: `1px solid ${BORDER}`, background: WARM_BG }} onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: ACCENT, fontFamily: "var(--font-jetbrains), monospace" }}>
                Send a message
              </h3>
              {[{ label: "Name", type: "text", placeholder: "Your name" }, { label: "Email", type: "email", placeholder: "your@email.com" }].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-bold mb-1.5" style={{ color: TEXT }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full px-4 py-3 text-sm outline-none transition-colors"
                    style={{ background: WARM_ALT, border: `1px solid ${BORDER}`, color: TEXT }}
                    onFocus={e => (e.target.style.borderColor = ACCENT)} onBlur={e => (e.target.style.borderColor = BORDER)} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: TEXT }}>Message</label>
                <textarea rows={5} placeholder="What's on your mind?"
                  className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none"
                  style={{ background: WARM_ALT, border: `1px solid ${BORDER}`, color: TEXT }}
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
    <footer className="py-8" style={{ borderTop: `1px solid ${BORDER}`, background: WARM_BG }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: MUTED, fontFamily: "var(--font-jetbrains), monospace" }}>
          {personal.name} © {new Date().getFullYear()}
        </p>
        <div className="flex gap-5">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: MUTED }}><FiLinkedin size={16} /></a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: MUTED }}><FiGithub size={16} /></a>
          <a href={`mailto:${personal.email}`} className="hover:opacity-70 transition-opacity" style={{ color: MUTED }}><FiMail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

export default function VariantC3() {
  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif" }}>
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
