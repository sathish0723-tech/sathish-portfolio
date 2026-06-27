import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { AsteriskIcon, ArrowIcon } from "./icons";
import { projects } from "../projects/data";

const featured = projects.find((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section id="projects" className="bg-[#120a06] px-6 py-28 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-white/80">
            <AsteriskIcon className="h-3.5 w-3.5 text-[#e8632f]" />
            Projects
          </span>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Selected Work
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {/* Featured project */}
          <Reveal>
            <article
              className="grid gap-10 rounded-3xl p-8 ring-1 ring-white/10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:p-12"
              style={{ background: featured.gradient }}
            >
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {featured.desc}
                </p>
                <Link
                  href={`/projects/${featured.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-neutral-900"
                >
                  Read More
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Screenshot preview */}
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10 lg:ml-auto lg:max-w-md">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={1200}
                  height={512}
                  className="h-auto w-full object-cover"
                />
              </div>
            </article>
          </Reveal>

          {/* Secondary projects */}
          <div className="grid gap-6 lg:grid-cols-2">
            {others.map((p) => (
              <Reveal key={p.slug}>
                <article
                  className="flex h-full flex-col rounded-3xl p-8 ring-1 ring-white/10 lg:p-10"
                  style={{ background: p.gradient }}
                >
                  <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                    {p.desc}
                  </p>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
                  >
                    Read More
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
