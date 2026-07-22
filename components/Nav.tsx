"use client";
import Image from "next/image";
import { useState, useEffect, useSyncExternalStore } from "react";
import { ChevronsUpDown, Mail, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about", hasChevron: true },
  { label: "PROJECTS", href: "#projects", hasChevron: true },
  { label: "CONTACT ME", href: "#contact" },
];

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Use the system preference when storage is unavailable.
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // The visual theme can still change when storage is unavailable.
  }
}

function isMobileNav() {
  return typeof window !== "undefined" && window.innerWidth <= 760;
}

function subscribeToViewport(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

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
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNav = useSyncExternalStore(subscribeToViewport, isMobileNav, () => false);

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

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const preferredTheme = getPreferredTheme();
      setTheme(preferredTheme);
      document.documentElement.dataset.theme = preferredTheme;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <header
      className={`site-header fixed inset-x-0 top-4 z-100 px-5 transition-[background-color,backdrop-filter] 
                  duration-300 max-[760px]:top-3 max-[760px]:px-4 max-[380px]:px-3 ${
                  scrolled ? "bg-transparent backdrop-blur-0" : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="site-nav-shell mx-auto flex min-h-15 w-full max-w-280 items-center justify-between gap-4 overflow-hidden rounded-full border 
                      border-(--nav-pill-border) bg-(--nav-pill-bg) px-4 pr-5 shadow-[0_6px_18px_rgba(13,44,84,0.06)] 
                      backdrop-blur-md max-[760px]:min-h-13.5 max-[760px]:gap-2 max-[760px]:px-3 max-[760px]:pr-3">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Victor Ogundimu home"
          className="inline-flex size-10 shrink-0 items-center justify-center no-underline max-[760px]:size-9"
        >
          <Image
            src={theme === "dark" ? "/vick-dark-mode-indigo.png" : "/vick-light-mode-indigo.png"}
            alt="Victor Ogundimu logo"
            width={48}
            height={48}
            priority
            className="block size-full object-contain"
          />
        </a>

        <div className="site-nav-pill flex min-h-11 min-w-0 shrink items-center justify-end gap-5 overflow-hidden scrollbar-none max-[760px]:gap-2">
          <div className="site-nav-links flex h-full shrink-0 items-stretch gap-5 max-[760px]:hidden">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`font-mono relative inline-flex min-h-11 items-center gap-[0.4rem] whitespace-nowrap text-[0.66rem] font-bold leading-none tracking-[0.14em] no-underline transition-colors hover:text-(--nav-link-active) ${
                    isActive ? "text-(--nav-link-active)" : "text-(--nav-link)"
                  }`}
                >
                  {l.label}
                  {l.hasChevron && (
                    <ChevronsUpDown
                      size={14}
                      strokeWidth={1.8}
                      className="shrink-0 text-(--nav-link-muted)"
                    />
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-0.5 rounded-none bg-(--accent) ${
                        l.hasChevron ? "right-[1.2rem]" : "right-0"
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            className="site-nav-divider h-5 w-px shrink-0 bg-(--nav-pill-border) opacity-70 max-[760px]:h-4"
          />

          <div className="site-nav-actions flex shrink-0 items-center justify-end gap-2.5 max-[760px]:gap-1.5">
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
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-(--nav-icon) no-underline transition-[background-color,color,transform] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] hover:text-(--nav-link-active) max-[760px]:size-8"
            >
              <GitHubMark size={mobileNav ? 20 : 23} />
            </a>

            <a
              href="mailto:victor@outstandingvick.xyz"
              aria-label="Email"
              title="Email"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-(--nav-icon) no-underline transition-[background-color,color,transform] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] hover:text-(--nav-link-active) max-[760px]:size-8"
            >
              <Mail size={mobileNav ? 19 : 22} strokeWidth={1.8} />
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="theme-toggle inline-flex size-8.5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--nav-pill-border) bg-[color-mix(in_srgb,var(--surface)_32%,transparent)] text-(--nav-icon) transition-[background-color,border-color,color,transform] hover:-translate-y-px hover:border-(--nav-link-muted) hover:bg-[color-mix(in_srgb,var(--surface)_48%,transparent)] hover:text-(--nav-link-active) max-[760px]:size-7.5"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-nav-menu mx-auto mt-2 hidden w-full max-w-280 flex-col overflow-hidden rounded-2xl border border-(--nav-pill-border) bg-(--nav-bg) p-2 shadow-[0_18px_48px_rgba(13,44,84,0.18)] backdrop-blur-xl max-[760px]:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-mono flex min-h-11 items-center justify-between rounded-xl px-4 text-[0.75rem] font-bold tracking-[0.12em] no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--surface)_14%,transparent)] ${
                active === link.href.slice(1) ? "text-(--nav-link-active)" : "text-(--nav-link)"
              }`}
            >
              {link.label}
              {link.hasChevron && <ChevronsUpDown size={14} className="text-(--nav-link-muted)" />}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
