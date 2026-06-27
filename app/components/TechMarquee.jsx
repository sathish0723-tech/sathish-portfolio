import {
  SiPython,
  SiNextdotjs,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiMeta,
  SiClickhouse,
} from "react-icons/si";
import { FaJava, FaBrain, FaRobot, FaChartLine, FaChartBar } from "react-icons/fa";

const items = [
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#111111" },
  { label: "Java", Icon: FaJava, color: "#E76F00" },
  { label: "JavaScript", Icon: SiJavascript, color: "#E8A800" },
  { label: "React", Icon: SiReact, color: "#0EA5C4" },
  { label: "SQL", Icon: SiMysql, color: "#4479A1" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "Meta Ads", Icon: SiMeta, color: "#0467DF" },
  { label: "Performance Marketing", Icon: FaChartLine, color: "#E8632F" },
  { label: "LLM", Icon: FaBrain, color: "#8B5CF6" },
  { label: "AI Intelligence", Icon: FaRobot, color: "#E8632F" },
  { label: "ClickHouse", Icon: SiClickhouse, color: "#D9A300" },
  { label: "Analytics", Icon: FaChartBar, color: "#16A34A" },
];

function Item({ label, Icon, color }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 px-8">
      <Icon className="h-6 w-6" style={{ color }} />
      <span className="whitespace-nowrap text-lg font-semibold text-neutral-700">
        {label}
      </span>
    </span>
  );
}

export default function TechMarquee() {
  return (
    <section className="group relative overflow-hidden border-y border-black/5 bg-[#f4f1ea] py-10">
      <style>{`
        @keyframes techMarqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Auto-scrolling track */}
      <div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{ animation: "techMarqueeScroll 32s linear infinite" }}
      >
        {/* Two identical copies for a seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <Item key={`${copy}-${i}`} {...item} />
            ))}
          </div>
        ))}
      </div>

      {/* Left label with a cloudy shade that hides items scrolling behind it */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[260px] items-center bg-gradient-to-r from-[#f4f1ea] from-55% to-transparent pl-6 sm:w-[300px] sm:pl-10 lg:pl-14">
        <p className="text-sm font-semibold uppercase leading-tight tracking-wide text-neutral-900">
          Experience
        </p>
      </div>

      {/* Right cloudy shade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#f4f1ea] to-transparent" />
    </section>
  );
}
