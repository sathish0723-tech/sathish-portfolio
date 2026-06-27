import Reveal from "./Reveal";
import TilePattern from "./TilePattern";
import { AsteriskIcon, BurstIcon } from "./icons";

const experiences = [
  {
    no: "001",
    title: "AI Engineering",
    desc: "Architecting intelligent systems and LLM-powered products that learn, reason, and scale.",
    tags: [
      "LLM Integration",
      "RAG Pipelines",
      "AI Agents",
      "Prompt Engineering",
      "Fine-Tuning",
    ],
    gradient: "from-[#f3c39a] via-[#d9663a] to-[#5e2417]",
  },
  {
    no: "002",
    title: "Full-Stack Development",
    desc: "Building fast, reliable web apps end to end — from the data layer to a polished interface.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs"],
    gradient: "from-[#cdd6e0] via-[#7f8ea0] to-[#323b47]",
  },
  {
    no: "003",
    title: "Data & Analytics",
    desc: "Turning raw events into clear, real-time insight with high-performance data pipelines.",
    tags: ["ClickHouse", "SQL", "Dashboards", "Data Modeling", "Reporting"],
    gradient: "from-[#f0d9b5] via-[#c79a5b] to-[#6b4a23]",
  },
  {
    no: "004",
    title: "Growth & Marketing",
    desc: "Driving measurable growth through data-led performance marketing and experimentation.",
    tags: ["Meta Ads", "Performance Marketing", "A/B Testing", "Funnels"],
    gradient: "from-[#e8c7c0] via-[#c97b6a] to-[#6b2f24]",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#f4f1ea] px-6 pb-32 pt-16 sm:px-10 lg:px-14"
    >
      <TilePattern className="left-0 top-0" />

      <style>{`
        @keyframes burstSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Decorative spinning bursts at varied sizes */}
      <BurstIcon
        className="pointer-events-none absolute left-[3%] top-[22%] z-0 hidden h-20 w-20 text-black/10 lg:block"
        style={{ animation: "burstSpin 26s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute left-[44%] top-[12%] z-0 hidden h-10 w-10 text-black/10 lg:block"
        style={{ animation: "burstSpin 16s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute left-[2%] top-[58%] z-0 hidden h-12 w-12 text-black/10 lg:block"
        style={{ animation: "burstSpin 20s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute bottom-[8%] left-[38%] z-0 hidden h-16 w-16 text-black/[0.07] lg:block"
        style={{ animation: "burstSpin 34s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute bottom-[20%] right-[5%] z-0 hidden h-9 w-9 text-black/10 lg:block"
        style={{ animation: "burstSpin 14s linear infinite" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-md bg-black/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-800">
            <AsteriskIcon className="h-3.5 w-3.5 text-[#e8632f]" />
            Experience
          </span>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight text-neutral-900 sm:text-5xl">
            What I Do
          </h2>
        </Reveal>

        <div className="mt-12">
          {experiences.map((exp) => (
            <Reveal key={exp.no}>
              <div className="grid gap-8 border-t border-black/10 py-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
                {/* Number */}
                <div className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
                  <AsteriskIcon className="h-4 w-4 text-[#e8632f]" />
                  {exp.no}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold uppercase leading-tight tracking-tight text-[#b1431f] sm:text-4xl">
                    {exp.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
                    {exp.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-black/5 px-3 py-1.5 text-sm font-medium text-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
