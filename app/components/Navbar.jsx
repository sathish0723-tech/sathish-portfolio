"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "./icons";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "works" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function CloseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 z-50 flex w-full items-center justify-between px-6 py-6 text-white sm:px-10 lg:px-14">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Portfolio<sup className="top-[-0.6em] text-xs font-medium">®</sup>
        </Link>

        {/* Center links */}
        <ul className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.id}
                onClick={scrollTo(link.id)}
                className="group inline-flex items-center gap-1 text-white/90 transition hover:text-white"
              >
                <span className="border-b border-white/50 pb-1 transition group-hover:border-white">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Menu button */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-12 items-center justify-center rounded-md ring-1 ring-white/25 transition hover:bg-white/10"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Fullscreen menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#140b07]/97 backdrop-blur-sm transition-all duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Header row inside overlay */}
        <div className="flex w-full items-center justify-between px-6 py-6 text-white sm:px-10 lg:px-14">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold tracking-tight"
          >
            Portfolio<sup className="top-[-0.6em] text-xs font-medium">®</sup>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-12 items-center justify-center rounded-md ring-1 ring-white/25 transition hover:bg-white/10"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Big stacked links */}
        <ul className="mt-10 flex flex-col gap-2 px-6 sm:px-10 lg:mt-16 lg:px-14">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.id}
                onClick={scrollTo(link.id)}
                className="group flex items-center justify-between text-white"
              >
                <span className="text-5xl font-bold uppercase tracking-tight transition-colors group-hover:text-[#e8632f] sm:text-6xl lg:text-7xl">
                  {link.label}
                </span>
                <span className="text-2xl text-white/40 transition group-hover:rotate-90 group-hover:text-[#e8632f]">
                  +
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
