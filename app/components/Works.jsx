import Image from "next/image";
import Reveal from "./Reveal";
import TilePattern from "./TilePattern";
import { AsteriskIcon, BurstIcon } from "./icons";

function DiamondIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={className}>
      <path d="M6 3h12l3 6-9 12L3 9z" />
      <path d="M3 9h18" />
      <path d="M9 3 7.5 9 12 21l4.5-12L15 3" />
    </svg>
  );
}

const works = [
  {
    company: "Hawky.ai",
    logo: "/hawky.png",
    type: "On-site",
    description: [
      "Hawky.ai delivers deep creative intelligence across every element — from real-time competitor tracking and AI-powered creative generation to a conversational copilot engineered exclusively for performance marketers. Trusted by iconic global brands including TVS, Cars24, Maruti, and many more.",
      "I am proud to be part of this remarkable company — where every day unveils a new dimension of learning, and every chai at a local tea shop sparks ideas worth building. The ever-pleasant Bengaluru weather has a quiet way of clearing the mind and sharpening the perspective.",
    ],
    skills: "SASS, Next.js and +3 skills",
  },
  {
    company: "Freshworks",
    logo: "/freshworks-icon.png",
    type: "Trainee · STS Software Academy",
    description: [
      "My IT career was born at Freshworks — India's finest SaaS company, a name the world already knows and respects.",
      "My journey unfolded like a river descending from the mountains — with no certain destination, yet discovering something magnificent at every bend. Along the way, I gathered flowers: luminous learnings, golden mentors, wise coaches, and friendships forged strong enough to be unbreakable. There were stones thrown too — storms disguised as situations — yet the river never stopped. It carved its path with quiet resilience, reaching where it was meant to arrive, while still flowing forward, still searching for its truest horizon.",
    ],
    skills: "HTML, SQL and +4 skills",
  },
];

function Logo({ src, alt }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-black/5">
      <Image src={src} alt={alt} width={56} height={56} className="h-full w-full object-contain" />
    </div>
  );
}

export default function Works() {
  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#f4f1ea] px-6 pb-32 sm:px-10 lg:px-14"
    >
      <style>{`
        @keyframes burstSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Coral tile pattern in the top-right corner */}
      <TilePattern className="right-0 top-0" />

      {/* Decorative spinning bursts at varied sizes */}
      <BurstIcon
        className="pointer-events-none absolute right-[5%] top-[14%] z-0 hidden h-20 w-20 text-black/10 lg:block"
        style={{ animation: "burstSpin 28s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute left-[6%] top-[40%] z-0 hidden h-12 w-12 text-black/10 lg:block"
        style={{ animation: "burstSpin 18s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute bottom-[16%] right-[10%] z-0 hidden h-14 w-14 text-black/[0.07] lg:block"
        style={{ animation: "burstSpin 34s linear infinite" }}
      />
      <BurstIcon
        className="pointer-events-none absolute bottom-[8%] left-[12%] z-0 hidden h-9 w-9 text-black/10 lg:block"
        style={{ animation: "burstSpin 14s linear infinite" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-md bg-black/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-800">
            <AsteriskIcon className="h-3.5 w-3.5 text-[#e8632f]" />
            Career
          </span>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight text-neutral-900 sm:text-5xl">
            Work Experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          {works.map((work) => (
            <Reveal key={work.company}>
              <div className="border-t border-black/10 pt-10">
                {work.single ? (
                  /* Single-role entry */
                  <div className="grid grid-cols-[56px_1fr] gap-4">
                    <Logo src={work.logo} alt={work.company} />
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{work.company}</h3>
                      <p className="text-sm text-neutral-700">{work.org}</p>
                      <p className="mt-0.5 text-sm text-neutral-500">{work.period}</p>
                      <p className="text-sm text-neutral-500">{work.location}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <DiamondIcon className="h-4 w-4" />
                        {work.skills}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Multi-role company entry */
                  <div>
                    {/* Company header */}
                    <div className="grid grid-cols-[56px_1fr] gap-4">
                      <Logo src={work.logo} alt={work.company} />
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">{work.company}</h3>
                        <p className="text-sm text-neutral-500">{work.type}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-5 grid grid-cols-[56px_1fr] gap-4">
                      <div />
                      <div className="space-y-4">
                        {work.description.map((para, i) => (
                          <p key={i} className="max-w-2xl text-base leading-relaxed text-neutral-600">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-5 grid grid-cols-[56px_1fr] gap-4">
                      <div />
                      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <DiamondIcon className="h-4 w-4" />
                        {work.skills}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
