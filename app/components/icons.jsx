export function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function GridIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.55" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.55" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M4 9h16" />
      <path d="M4 15h16" />
    </svg>
  );
}

export function AsteriskIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M12 4v16" />
      <path d="M4 12h16" />
      <path d="m6.3 6.3 11.4 11.4" />
      <path d="m17.7 6.3-11.4 11.4" />
    </svg>
  );
}

export function BurstIcon({ className = "", ...props }) {
  const spokes = Array.from({ length: 10 }, (_, i) => {
    const angle = (i * 36 * Math.PI) / 180;
    const x = 24 + 20 * Math.cos(angle);
    const y = 24 + 20 * Math.sin(angle);
    return <line key={i} x1="24" y1="24" x2={x.toFixed(2)} y2={y.toFixed(2)} />;
  });
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      {...props}
    >
      {spokes}
    </svg>
  );
}
