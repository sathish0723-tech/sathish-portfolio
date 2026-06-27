import Image from "next/image";
import Link from "next/link";
import {
  LuSparkles,
  LuZap,
  LuActivity,
  LuMonitor,
  LuChartLine,
  LuFileText,
  LuTarget,
  LuUsers,
  LuPencil,
  LuAward,
  LuPrinter,
  LuShare2,
  LuBot,
  LuMessageSquare,
} from "react-icons/lu";
import Reveal from "./Reveal";
import { ArrowIcon, AsteriskIcon } from "./icons";

const ICONS = {
  sparkle: LuSparkles,
  bolt: LuZap,
  activity: LuActivity,
  monitor: LuMonitor,
  chart: LuChartLine,
  document: LuFileText,
  target: LuTarget,
  users: LuUsers,
  pen: LuPencil,
  award: LuAward,
  printer: LuPrinter,
  share: LuShare2,
  bot: LuBot,
  chat: LuMessageSquare,
};

function IconBox({ name, className = "" }) {
  const Icon = ICONS[name] || LuSparkles;
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8632f]/10 text-[#e8632f] ${className}`}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

/* Central logo with platform screenshots auto-scrolling behind it */
function ShowcaseSection({ section }) {
  const edgeMask =
    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)";
  return (
    <div className="relative overflow-hidden py-24">
      <style>{`
        @keyframes showcaseScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Two rows of scrolling screenshots, opposite directions */}
      <div
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-6"
        style={{ WebkitMaskImage: edgeMask, maskImage: edgeMask }}
      >
        {[
          { dir: "normal", dur: "48s", imgs: section.images },
          { dir: "reverse", dur: "40s", imgs: [...section.images].reverse() },
        ].map((row, r) => (
          <div
            key={r}
            className="flex w-max items-center gap-6 opacity-45"
            style={{
              animation: `showcaseScroll ${row.dur} linear infinite`,
              animationDirection: row.dir,
            }}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-6"
                aria-hidden={copy === 1}
              >
                {row.imgs.map((src, i) => (
                  <div
                    key={`${copy}-${i}`}
                    className="h-36 w-64 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-black/10 ring-1 ring-black/5"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={512}
                      height={288}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Cream radial fade so the logo pops */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,241,234,0.96) 0%, rgba(244,241,234,0.7) 16%, rgba(244,241,234,0) 44%)",
        }}
      />

      {/* Center logo tile */}
      <div className="relative z-10 flex justify-center">
        <div className="rounded-[28px] bg-white p-7 shadow-2xl shadow-black/25 ring-1 ring-black/5">
          <Image
            src={section.logo}
            alt="Logo"
            width={120}
            height={120}
            className="h-24 w-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

/* 4-up feature card grid */
function FeaturesSection({ section }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
      <Reveal>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
              {section.subtitle}
            </p>
          )}
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-black/5 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <IconBox name={item.icon} />
              <h3 className="mt-6 text-xl font-bold text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* Icon + title + desc list (2 columns) */
function ListSection({ section }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
      <Reveal>
        {section.badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e8632f]/30 bg-[#e8632f]/10 px-3 py-1.5 text-sm font-semibold text-[#b1431f]">
            <AsteriskIcon className="h-3.5 w-3.5" />
            {section.badge}
          </span>
        )}
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {section.subtitle}
          </p>
        )}
      </Reveal>

      <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {section.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="flex gap-4">
              <IconBox name={item.icon} />
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ project }) {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-neutral-900">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Portfolio<sup className="top-[-0.6em] text-xs font-medium">®</sup>
        </Link>
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 ring-1 ring-black/5 transition hover:bg-neutral-900 hover:text-white"
        >
          <ArrowIcon className="h-3.5 w-3.5 -rotate-180" />
          All Projects
        </Link>
      </header>

      {/* Hero */}
      <section className="px-6 pt-10 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-md bg-black/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-800">
              <AsteriskIcon className="h-3.5 w-3.5 text-[#e8632f]" />
              Project
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="mt-4 max-w-2xl text-lg text-neutral-600 sm:text-xl">
                {project.tagline}
              </p>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#e8632f] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#d2521f]"
              >
                Visit Website
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </Reveal>

          {project.image && (
            <Reveal delay={120}>
              <div
                className={`mt-12 overflow-hidden rounded-3xl shadow-2xl shadow-black/10 ring-1 ring-black/5 ${
                  project.imageMode === "logo"
                    ? "flex items-center justify-center bg-white p-16"
                    : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={2400}
                  height={1024}
                  priority
                  className={
                    project.imageMode === "logo"
                      ? "h-auto w-full max-w-sm object-contain"
                      : "h-auto w-full object-cover"
                  }
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* About */}
      {project.about?.length > 0 && (
        <section className="px-6 pt-20 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What is {project.title}?
              </h2>
              <div className="mt-6 space-y-5">
                {project.about.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed text-neutral-600">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Rich sections */}
      {project.sections?.map((section, i) => {
        if (section.type === "showcase")
          return <ShowcaseSection key={i} section={section} />;
        if (section.type === "features")
          return <FeaturesSection key={i} section={section} />;
        return <ListSection key={i} section={section} />;
      })}

      {/* Footer back link */}
      <div className="px-6 pb-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl border-t border-black/10 pt-10">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-neutral-900"
          >
            <ArrowIcon className="h-3.5 w-3.5 -rotate-180" />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
