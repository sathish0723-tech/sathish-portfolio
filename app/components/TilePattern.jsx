// Decorative coral tile pattern (inverted-triangle cluster), drawn in pure CSS
const C = "201,67,31"; // coral rgb
const PATTERNS = {
  plain: { image: "none", size: "auto" },
  stripe: {
    image: `repeating-linear-gradient(45deg, rgba(${C},0.5) 0, rgba(${C},0.5) 2px, transparent 2px, transparent 9px)`,
    size: "auto",
  },
  dot: {
    image: `radial-gradient(rgba(${C},0.55) 1.3px, transparent 1.5px)`,
    size: "9px 9px",
  },
  dense: {
    image: `radial-gradient(rgba(${C},0.45) 1px, transparent 1.2px)`,
    size: "7px 7px",
  },
  line: {
    image: `repeating-linear-gradient(0deg, rgba(${C},0.4) 0, rgba(${C},0.4) 1px, transparent 1px, transparent 8px)`,
    size: "auto",
  },
};

const tiles = [
  { c: 1, r: 1, o: 0.14, p: "stripe" },
  { c: 4, r: 1, o: 0.1, p: "line" },
  { c: 5, r: 1, o: 0.34, p: "dot" },
  { c: 6, r: 1, o: 0.1, p: "plain" },
  { c: 7, r: 1, o: 0.3, p: "stripe" },
  { c: 8, r: 1, o: 0.1, p: "plain" },
  { c: 9, r: 1, o: 0.2, p: "dot" },
  { c: 10, r: 1, o: 0.36, p: "plain" },
  { c: 5, r: 2, o: 0.12, p: "dense" },
  { c: 6, r: 2, o: 0.16, p: "plain" },
  { c: 7, r: 2, o: 0.1, p: "plain" },
  { c: 8, r: 2, o: 0.24, p: "dot" },
  { c: 9, r: 2, o: 0.16, p: "line" },
  { c: 6, r: 3, o: 0.18, p: "dot" },
  { c: 7, r: 3, o: 0.34, p: "dense" },
  { c: 8, r: 3, o: 0.1, p: "plain" },
  { c: 7, r: 4, o: 0.13, p: "plain" },
];

export default function TilePattern({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 hidden opacity-80 md:block ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 56px)",
        gridAutoRows: "56px",
      }}
    >
      {tiles.map((t, i) => {
        const pat = PATTERNS[t.p];
        return (
          <div
            key={i}
            style={{
              gridColumn: t.c,
              gridRow: t.r,
              backgroundColor: `rgba(${C},${t.o})`,
              backgroundImage: pat.image,
              backgroundSize: pat.size,
            }}
          />
        );
      })}
    </div>
  );
}
