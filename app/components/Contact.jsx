import Image from "next/image";
import { FaLinkedinIn, FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathish-kumar-1a99b6353", Icon: FaLinkedinIn, color: "#0A66C2" },
  { label: "Reddit", href: "https://www.reddit.com/user/Born_Philosopher_945/", Icon: FaRedditAlien, color: "#FF4500" },
  { label: "X", href: "https://x.com/Sathish_723", Icon: FaXTwitter, color: "#000000" },
  { label: "Hugging Face", href: "https://huggingface.co/sathish0723", Icon: SiHuggingface, color: "#FFB000" },
];

function ChatIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f1ea] px-6 py-24 sm:px-10 lg:px-14"
    >
      <style>{`
        .social-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .social-item {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background-color: rgb(44, 44, 44);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: 0.3s;
        }
        .social-item:hover {
          background-color: var(--hover);
          transform: scale(1.3);
          border-radius: 15px;
        }
        .social-item:active { transform: scale(0.9); }
        .social-item:hover svg { animation: socialSlideIn 0.3s both; }
        .social-card:has(.social-item:hover) .social-item:not(:hover) { opacity: 0.1; }
        @keyframes socialSlideIn {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {/* Large faded portrait backdrop on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-3/4 lg:block">
        <Image
          src="/profile-new.png"
          alt=""
          fill
          className="object-contain object-right-bottom opacity-[0.12] grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left: connect card */}
        <div className="rounded-3xl border border-white/50 bg-white/55 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Have a project on your mind?
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-neutral-600">
            Let&apos;s connect — find me on any of these platforms.
          </p>

          <div className="social-card mt-10">
            {socials.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-item"
                style={{ "--hover": color }}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: copy + cards */}
        <div className="text-neutral-900">
          <p className="max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
            Reach out on any platform — I&apos;ll get back to you shortly
          </p>

          {/* Quick response card */}
          <div className="mt-8 rounded-2xl border border-white/50 bg-white/45 p-7 shadow-sm backdrop-blur-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8632f]/10 text-[#e8632f]">
              <ChatIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Quick Response</h3>
            <p className="mt-2 max-w-sm text-neutral-600">
              I review every request and reply within 24 hours.
            </p>
          </div>

          {/* Profile card */}
          <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/50 bg-white/45 p-4 shadow-sm backdrop-blur-xl">
            <Image
              src="/profile-new.png"
              alt="Sathish"
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-xl bg-[#e8632f] object-cover object-top"
            />
            <div>
              <p className="text-lg font-semibold">Sathish</p>
              <p className="text-sm text-neutral-500">Software Developer</p>
            </div>
            <a
              href="mailto:tech@hawky.ai"
              className="ml-auto rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
