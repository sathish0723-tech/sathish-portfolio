import Image from "next/image";
import Reveal from "./Reveal";
import { AsteriskIcon, BurstIcon } from "./icons";

export default function Impact() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f1ea] px-6 pb-32 pt-12 sm:px-10 lg:px-14"
    >
      <style>{`
        @keyframes burstSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Decorative bursts */}
      {/* In the gap between text and image (large) */}
      <BurstIcon
        className="pointer-events-none absolute left-[58%] top-1/2 z-0 hidden h-24 w-24 -translate-y-1/2 text-black/10 lg:block"
        style={{ animation: "burstSpin 22s linear infinite" }}
      />
      {/* Behind the text (large, very faint) */}
      <BurstIcon
        className="pointer-events-none absolute left-[4%] top-[34%] z-0 hidden h-44 w-44 text-black/[0.06] lg:block"
        style={{ animation: "burstSpin 40s linear infinite" }}
      />
      {/* Below the sentence (medium) */}
      <BurstIcon
        className="pointer-events-none absolute bottom-16 left-[8%] z-0 hidden h-14 w-14 text-black/10 lg:block"
        style={{ animation: "burstSpin 18s linear infinite" }}
      />
      {/* Lower-center accent (small) */}
      <BurstIcon
        className="pointer-events-none absolute bottom-20 left-[42%] z-0 hidden h-9 w-9 text-black/10 lg:block"
        style={{ animation: "burstSpin 14s linear infinite" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-md bg-black/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-800">
            <AsteriskIcon className="h-3.5 w-3.5 text-[#e8632f]" />
            About Me
          </span>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={100}>
            <p className="text-2xl font-medium leading-relaxed text-neutral-800 sm:text-3xl lg:text-[2rem] lg:leading-relaxed">
              A software developer and AI explorer who architects intelligent
              systems by day, wanders uncharted destinations by wanderlust,
              chases boundaries on the cricket pitch, and finds that the most
              profound algorithms — much like the best travel stories — are
              always discovered over a cup of coffee.
            </p>
          </Reveal>

          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-full max-w-[400px] overflow-hidden rounded-2xl shadow-xl shadow-black/10 sm:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f3c39a] via-[#d9663a] to-[#5e2417]" />
              <Image
                src="/profile-new.png"
                alt="Sathish"
                fill
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
