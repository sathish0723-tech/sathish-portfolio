import Image from "next/image";
import { ArrowIcon, AsteriskIcon } from "./icons";

function PlusMark({ className = "" }) {
  return (
    <span className={`pointer-events-none absolute text-white/30 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #e8632f 0%, #de5025 55%, #c9431f 100%)",
      }}
    >
      {/* Faint construction grid lines */}
      <div className="pointer-events-none absolute inset-x-10 inset-y-20 hidden border-x border-white/15 lg:block" />
      {/* Interior vertical guides */}
      <div className="pointer-events-none absolute inset-y-20 left-1/3 hidden border-l border-white/15 lg:block" />
      <div className="pointer-events-none absolute inset-y-20 left-2/3 hidden border-l border-white/15 lg:block" />
      {/* Horizontal guide below the navbar */}
      <div className="pointer-events-none absolute inset-x-10 top-20 hidden border-t border-white/15 lg:block" />
      {/* Horizontal guide near the bottom */}
      <div className="pointer-events-none absolute inset-x-10 bottom-28 hidden border-t border-white/15 lg:block" />

      {/* Plus marks at the top intersections */}
      <PlusMark className="left-[32px] top-[72px] hidden lg:block" />
      <PlusMark className="left-1/3 top-[72px] hidden -translate-x-1/2 lg:block" />
      <PlusMark className="left-2/3 top-[72px] hidden -translate-x-1/2 lg:block" />
      <PlusMark className="right-[32px] top-[72px] hidden lg:block" />
      {/* Plus marks at the bottom intersections */}
      <PlusMark className="left-[32px] bottom-[104px] hidden lg:block" />
      <PlusMark className="right-[32px] bottom-[104px] hidden lg:block" />

      {/* Huge faded watermark name */}
      <span className="pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2 select-none text-[20vw] font-bold leading-none tracking-tighter text-white/10">
        SATHISH
      </span>

      {/* Center portrait */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center sm:bottom-6 lg:bottom-10">
        <Image
          src="/hero-v2.png"
          alt="Sathish"
          width={760}
          height={580}
          priority
          className="h-auto w-[82vw] max-w-[760px] object-contain"
        />
      </div>

      {/* Light orange shade blending the portrait into the background */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/5"
        style={{
          background:
            "linear-gradient(to top, #c9431f 0%, rgba(201,67,31,0.55) 45%, rgba(201,67,31,0) 100%)",
        }}
      />

      {/* Left tagline */}
      <p className="absolute left-6 top-[42%] z-20 max-w-xs text-sm font-medium uppercase leading-relaxed tracking-wide text-white sm:left-10 sm:text-base lg:left-14">
        I craft thoughtful digital
        <br />
        experiences that are simple
        <br />
        smart and impactful
      </p>

      {/* Big name headline */}
      <h1 className="absolute bottom-2 left-4 z-20 select-none text-[15vw] font-bold leading-[0.85] tracking-tighter text-white sm:left-8 lg:bottom-4 lg:left-12">
        SATHISH
      </h1>

      {/* Contact card (bottom-right) */}
      <a
        href="#contact"
        className="group absolute bottom-8 right-6 z-20 hidden w-80 items-center gap-3 rounded-2xl bg-[#14110f] p-3 text-white shadow-2xl shadow-black/30 transition hover:bg-black sm:flex lg:right-14"
      >
        <Image
          src="/profile-new.png"
          alt="Sathish"
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-xl bg-[#e8632f] object-cover object-top"
        />
        <div className="flex-1">
          <p className="flex items-center justify-between text-xs text-white/60">
            Let&apos;s Talk
            <AsteriskIcon className="h-3.5 w-3.5 text-white/60" />
          </p>
          <p className="text-base font-semibold leading-tight">Sathish</p>
          <p className="text-xs text-white/60">Software Developer</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-neutral-900 transition group-hover:bg-[#e8632f] group-hover:text-white">
          <ArrowIcon className="h-4 w-4" />
        </span>
      </a>
    </section>
  );
}
