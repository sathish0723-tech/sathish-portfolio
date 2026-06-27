import { ArrowIcon, GridIcon } from "./icons";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function FloatingNav() {
  return (
    <nav className="fixed inset-x-0 bottom-6 z-30 flex justify-center px-6">
      <div className="flex items-center gap-1 rounded-full bg-[#e8502e] p-1.5 text-white shadow-xl shadow-black/10 sm:gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <GridIcon className="h-5 w-5 text-white" />
        </span>

        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/15 sm:px-5 sm:text-base"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 sm:px-5 sm:text-base"
        >
          Get in Touch
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}
