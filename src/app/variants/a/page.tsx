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
  FiArrowRight, FiCalendar, FiBriefcase, FiBook,
} from "react-icons/fi";
import { SiClaude } from "react-icons/si";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ─── Photo placeholder colors ────────────────────────────────────────────────
const PHOTO_GRADIENTS = [
  "from-purple-300 via-pink-200 to-blue-200",
  "from-blue-300 via-indigo-200 to-purple-200",
  "from-pink-300 via-rose-200 to-orange-200",
  "from-violet-300 via-purple-200 to-fuchsia-200",
  "from-cyan-300 via-blue-200 to-indigo-200",
  "from-fuchsia-300 via-pink-200 to-rose-200",
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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl font-bold tracking-tight">
          <span className="gradient-text-a">JT</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-purple-600 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <a
          href={personal.cvFile}
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
        >
          <FiDownload size={14} /> Download CV
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4"
          >
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-gray-700 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a href={personal.cvFile} download className="text-purple-600 font-medium flex items-center gap-2">
                  <FiDownload size={14} /> Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-purple-300 -top-32 -left-32" />
      <div className="blob w-[500px] h-[500px] bg-blue-300 top-1/3 right-0" />
      <div className="blob w-[400px] h-[400px] bg-pink-300 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium tracking-widest text-purple-500 uppercase mb-4">
              Hello, I&apos;m
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="gradient-text-a">{personal.name}</span>
            </h1>
            <p className="text-xl text-gray-500 mb-6">{personal.title}</p>
            <p className="text-gray-600 max-w-md leading-relaxed mb-8">{personal.tagline}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-200"
              >
                View My Work <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-purple-300 hover:text-purple-600 transition-colors bg-white/70 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-purple-500 transition-colors">
                <FiMail size={20} />
              </a>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <FiMapPin size={13} /> {personal.location}
              </span>
            </div>
          </motion.div>

          {/* Profile photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 blur-[2px]" />
              <div className="absolute inset-[3px] rounded-full bg-white" />
              {/* Photo placeholder */}
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-2">👤</div>
                  <p className="text-xs">Upload profile photo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────
function Section({
  id, label, title, children, gradient = false,
}: {
  id: string; label: string; title: string; children: React.ReactNode; gradient?: boolean;
}) {
  return (
    <section id={id} className={`py-24 ${gradient ? "bg-gradient-to-b from-purple-50/50 via-white to-blue-50/30" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-purple-500 uppercase mb-2">{label}</p>
          <h2
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const highlights = [
    { icon: <FiDatabase />, label: "Data Science & ML" },
    { icon: <SiClaude />, label: "Vibe Coding" },
    { icon: <FiCamera />, label: "Photography" },
  ];

  return (
    <Section id="about" label="Who I Am" title="About Me">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">{p}</p>
          ))}
        </div>
        <div className="grid gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-lg">
                {h.icon}
              </div>
              <span className="font-semibold text-gray-700">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  const groups = [
    { label: "Data & ML", items: [...skills.data, ...skills.ml] },
    { label: "Vibe Coding", items: skills.vibeCoding },
    { label: "Tools", items: skills.tools },
  ];

  return (
    <Section id="skills" label="What I Know" title="Skills & Tools" gradient>
      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g.label}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{g.label}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-white border border-transparent shadow-sm"
                  style={{
                    background: "white",
                    boxShadow: "0 0 0 1.5px transparent, inset 0 0 0 1px #e5e7eb",
                    backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #8B5CF6, #3B82F6, #EC4899)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    border: "1.5px solid transparent",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  return (
    <Section id="experience" label="My Journey" title="Experience & Education">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 via-blue-200 to-pink-200 hidden md:block" />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="md:pl-16 relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 items-center justify-center text-white shadow-md shadow-purple-100">
                {item.type === "work" ? <FiBriefcase size={14} /> : <FiBook size={14} />}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-purple-100 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-purple-600 font-medium">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                      <FiCalendar size={12} /> {item.period}
                    </span>
                    <p className="text-xs text-gray-400 mt-1 flex items-center justify-end gap-1">
                      <FiMapPin size={11} /> {item.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  const [tab, setTab] = useState<"data" | "vibe">("data");
  const items = tab === "data" ? projects.data : projects.vibeCoding;

  return (
    <Section id="projects" label="What I Build" title="Projects" gradient>
      {/* Tabs */}
      <div className="flex gap-2 mb-10 p-1 bg-gray-100 rounded-full w-fit">
        {([["data", "Data & ML", <FiDatabase key="d" />], ["vibe", "Vibe Coding", <FiCode key="v" />]] as const).map(
          ([key, label, icon]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tab === key
                  ? "bg-white shadow text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {icon} {label}
            </button>
          )
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {items.map((p, i) => (
            <motion.div
              key={`${tab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-purple-100 transition-all group"
            >
              {/* Image or placeholder */}
              <div className="h-44 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 flex items-center justify-center relative overflow-hidden">
                {tab === "vibe" && "demoUrl" in p && p.demoUrl ? (
                  <iframe
                    src={p.demoUrl as string}
                    title={p.title}
                    className="w-full h-full scale-[0.5] origin-top"
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-purple-300 text-5xl">
                    {tab === "data" ? <FiDatabase /> : <FiCode />}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.link} className="flex items-center gap-1 text-sm text-purple-600 font-medium hover:underline">
                    Live Demo <FiExternalLink size={13} />
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
    </Section>
  );
}

// ─── Photography ──────────────────────────────────────────────────────────────
function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const hasRealPhotos = photos.some((p) => p.src !== "");
  const lightboxSlides = hasRealPhotos
    ? photos.filter((p) => p.src !== "").map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))
    : [];

  return (
    <Section id="photography" label="Through the Lens" title="Photography">
      <p className="text-gray-500 mb-8 max-w-xl">
        When I&apos;m not in the data, I&apos;m behind a camera. Here&apos;s a small selection of my favourite shots.
      </p>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
            style={{ aspectRatio: photo.width / photo.height }}
            onClick={() => {
              if (hasRealPhotos && photo.src) {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }
            }}
          >
            {photo.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br ${PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length]} flex items-center justify-center`}
              >
                <div className="text-center text-white/70">
                  <FiCamera className="mx-auto mb-1" size={24} />
                  <p className="text-xs">Add your photo</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {hasRealPhotos && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
        />
      )}
    </Section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Section id="contact" label="Get In Touch" title="Contact Me" gradient>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you have a project in mind, want to talk data, or just want to say hi — my inbox is always open.
          </p>
          <div className="space-y-4">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
                <FiMail />
              </div>
              {personal.email}
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <FiLinkedin />
              </div>
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                <FiGithub />
              </div>
              GitHub
            </a>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-100"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors"><FiLinkedin /></a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors"><FiGithub /></a>
          <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-purple-500 transition-colors"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VariantA() {
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
