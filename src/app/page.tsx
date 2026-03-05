import Link from "next/link";

const variants = [
  {
    id: "c",
    name: "C — Editorial",
    description: "White background, electric blue accent (#0066FF), large section numbers, monospace tags. Clean and precise.",
    colors: ["#0066FF", "#111111", "#e5e7eb"],
    font: "Inter + JetBrains Mono",
    tags: ["White", "Blue accent", "Minimal"],
    isNew: false,
  },
  {
    id: "c2",
    name: "C2 — Dark Editorial",
    description: "Same structure as C but dark background (#0C0C0C). Blue accent glows against black. Sleek and technical.",
    colors: ["#3B82F6", "#0C0C0C", "#2a2a2a"],
    font: "Inter + JetBrains Mono",
    tags: ["Dark mode", "Blue accent", "Glowing"],
    isNew: true,
  },
  {
    id: "c3",
    name: "C3 — Warm Editorial",
    description: "Warm off-white background, bold red accent (#E63946), split-screen hero, Playfair Display serif headings. Warmer feel.",
    colors: ["#E63946", "#FAFAF8", "#F5F0EB"],
    font: "Playfair Display + JetBrains Mono",
    tags: ["Warm white", "Red accent", "Split-screen"],
    isNew: true,
  },
  {
    id: "a",
    name: "A — Gradient Flow",
    description: "Floating purple/blue/pink gradient blobs, Playfair serif headings, rounded cards.",
    colors: ["#8B5CF6", "#3B82F6", "#EC4899"],
    font: "Playfair Display + Inter",
    tags: ["Gradients", "Soft", "Rounded"],
    isNew: false,
  },
  {
    id: "b",
    name: "B — Card Grid",
    description: "Colorful card-based layout with section-coded accents (teal/orange/pink). Playful and vibrant.",
    colors: ["#0D9488", "#F97316", "#DB2777"],
    font: "Space Grotesk + Inter",
    tags: ["Vibrant", "Cards", "Colorful"],
    isNew: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">Jiazheng Tian — Personal Website</p>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Pick Your Style</h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Five design prototypes — C, C2, and C3 are all in the editorial style you liked. Click to preview, then pick one to develop.
          </p>
        </div>

        <div className="grid gap-4">
          {variants.map((v) => (
            <Link key={v.id} href={`/variants/${v.id}`}
              className="group block border-2 border-gray-100 hover:border-gray-300 rounded-2xl p-6 transition-all hover:shadow-lg relative">
              {v.isNew && (
                <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                  New
                </span>
              )}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 flex flex-col gap-2">
                  {v.colors.map((c) => (
                    <div key={c} className="w-6 h-6 rounded-full border border-gray-100" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                    {v.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{v.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {v.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">{t}</span>
                    ))}
                    <span className="text-xs px-2.5 py-1 bg-gray-50 text-gray-400 rounded-full border border-gray-200">{v.font}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12">
          Edit{" "}
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 text-xs">src/lib/data.ts</code>{" "}
          to update your content. Add photos to{" "}
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 text-xs">public/photos/</code>.
        </p>
      </div>
    </main>
  );
}
