"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about", hasChevron: true },
  { label: "PROJECTS", href: "#projects", hasChevron: true },
  { label: "CONTACT ME", href: "#contact" },
];

function GitHubMark({ size }: { size: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      focusable="false"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.02c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12v3.2c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-100 px-6 transition-[background-color,backdrop-filter] 
                  duration-300 max-[760px]:px-5 max-[380px]:px-4 ${
                  scrolled ? "bg-transparent backdrop-blur-0" : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="site-nav-shell mx-auto flex min-h-18 w-full max-w-400 items-center justify-between gap-4 overflow-hidden border-b 
                      border-(--nav-pill-border) bg-transparent px-0 shadow-none 
                      backdrop-blur-none max-[760px]:min-h-15 max-[760px]:gap-2">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Victor Ogundimu home"
          className="inline-flex size-11 shrink-0 items-center justify-start no-underline max-[760px]:size-9"
        >
          <Image
            src="/vick-dark-mode-indigo.png"
            alt="Victor Ogundimu logo"
            width={48}
            height={48}
            priority
            className="block size-9 object-contain max-[760px]:size-8"
          />
        </a>

        <div className="site-nav-pill flex min-h-11 min-w-0 shrink items-center justify-end gap-7 overflow-hidden scrollbar-none max-[760px]:gap-2">
          <div className="site-nav-links flex h-full shrink-0 items-stretch gap-7 max-[760px]:hidden">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`font-mono relative inline-flex min-h-11 items-center gap-[0.4rem] whitespace-nowrap text-[0.72rem] font-medium leading-none tracking-[0.08em] no-underline transition-colors hover:text-(--nav-link-active) ${
                    isActive ? "text-(--nav-link-active)" : "text-(--nav-link)"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-px bg-(--nav-link-active)"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            className="site-nav-divider h-4 w-px shrink-0 bg-(--nav-pill-border) opacity-60 max-[760px]:h-4"
          />

          <div className="site-nav-actions flex shrink-0 items-center justify-end gap-1 max-[760px]:gap-0.5">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="hidden size-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-(--nav-icon) transition-colors hover:bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] hover:text-(--nav-link-active) max-[760px]:inline-flex"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>

            <a
              href="https://github.com/outstandingvick"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex size-9 shrink-0 items-center justify-center text-(--nav-icon) no-underline transition-[color,transform] hover:-translate-y-px hover:text-(--nav-link-active) max-[760px]:size-8"
            >
              <GitHubMark size={22} />
            </a>

            <a
              href="mailto:victor@outstandingvick.xyz"
              aria-label="Email"
              title="Email"
              className="inline-flex size-9 shrink-0 items-center justify-center text-(--nav-icon) no-underline transition-[color,transform] hover:-translate-y-px hover:text-(--nav-link-active) max-[760px]:size-8"
            >
              <Mail size={21} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-nav-menu mx-auto hidden w-full max-w-400 flex-col overflow-hidden border-b border-(--nav-pill-border) bg-(--nav-bg) px-0 py-3 shadow-none backdrop-blur-xl max-[760px]:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-mono flex min-h-11 items-center justify-between border-t border-(--nav-pill-border) px-0 text-[0.75rem] font-medium tracking-[0.08em] no-underline transition-colors hover:text-(--nav-link-active) ${
                active === link.href.slice(1) ? "text-(--nav-link-active)" : "text-(--nav-link)"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
