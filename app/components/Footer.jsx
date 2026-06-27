import Link from "next/link";
import { FaLinkedinIn, FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";
import { projects } from "../projects/data";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Work", href: "/#orks" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathish-kumar-1a99b6353", Icon: FaLinkedinIn },
  { label: "Reddit", href: "https://www.reddit.com/user/Born_Philosopher_945/", Icon: FaRedditAlien },
  { label: "X", href: "https://x.com/Sathish_723", Icon: FaXTwitter },
  { label: "Hugging Face", href: "https://huggingface.co/sathish0723", Icon: SiHuggingface },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0d0c] px-6 pb-10 pt-20 text-white/70 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + social */}
          <div>
            <Link href="/" className="text-3xl font-bold tracking-tight text-white">
              Sathish<span className="text-[#e8632f]">.</span>
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-white/60">
              Crafting thoughtful digital products and AI-powered experiences that
              help brands stand out and grow.
            </p>

            <div className="mt-10">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                Social
              </h4>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 transition group-hover:bg-[#e8632f]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-semibold text-white">Navigation</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-base font-semibold text-white">Projects</h4>
            <ul className="mt-5 space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="transition hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-semibold text-white">Connect</h4>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:tech@hawky.ai" className="transition hover:text-white">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sathish. All rights reserved.</p>
          <p>Designed &amp; built by Sathish.</p>
        </div>
      </div>
    </footer>
  );
}
