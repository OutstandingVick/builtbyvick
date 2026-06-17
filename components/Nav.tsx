"use client";
import Image from "next/image";
import { useState, useEffect, useSyncExternalStore } from "react";
import { ChevronsUpDown, Mail, Moon, Sun } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about", hasChevron: true },
  { label: "PROJECTS", href: "#projects", hasChevron: true },
  { label: "CONTACT ME", href: "#contact" },
];

type Theme = "light" | "dark";

const themeEvent = "builtbyvick-theme-change";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event(themeEvent));
}

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(themeEvent, onStoreChange);
  return () => window.removeEventListener(themeEvent, onStoreChange);
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
  const theme = useSyncExternalStore(subscribeToTheme, getPreferredTheme, () => "dark");
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
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <header
      className="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        padding: mobileNav ? "0.75rem 1rem" : "1.2rem 2rem",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Victor Ogundimu home"
          style={{
            width: mobileNav ? "42px" : "48px",
            height: mobileNav ? "42px" : "48px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Image
            src={theme === "dark" ? "/vick-light.png" : "/vick-light-mode-transparent.png"}
            alt="Victor Ogundimu logo"
            width={48}
            height={48}
            priority
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>

        <div
          className="site-nav-pill"
          style={{
            minHeight: mobileNav ? "54px" : "64px",
            display: "flex",
            alignItems: "center",
            gap: mobileNav ? "0.75rem" : "1.75rem",
            padding: mobileNav ? "0 0.75rem" : "0 1.35rem",
            backgroundColor: "var(--nav-pill-bg)",
            border: "1px solid var(--nav-pill-border)",
            borderRadius: "18px",
            boxShadow: "0 18px 40px rgba(0, 0, 0, 0.18)",
            overflowX: mobileNav ? "auto" : "visible",
            scrollbarWidth: "none",
          }}
        >
          <div
            className="site-nav-links"
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: mobileNav ? "0.25rem" : "1.35rem",
              height: "100%",
              flexShrink: 0,
            }}
          >
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-display"
                  style={{
                    minHeight: mobileNav ? "54px" : "64px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: isActive ? "var(--nav-link-active)" : "var(--nav-link)",
                    fontSize: mobileNav ? "0.82rem" : "1rem",
                    fontWeight: 600,
                    lineHeight: 1,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    position: "relative",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--nav-link-active)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive
                      ? "var(--nav-link-active)"
                      : "var(--nav-link)";
                  }}
                >
                  {l.label}
                  {l.hasChevron && (
                    <ChevronsUpDown
                      size={18}
                      strokeWidth={2.2}
                      style={{ color: "var(--nav-link-muted)", flexShrink: 0 }}
                    />
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: 0,
                        right: l.hasChevron ? "1.7rem" : 0,
                        bottom: 0,
                        height: "10px",
                        backgroundColor: "var(--nav-active-underline)",
                        borderRadius: "999px 999px 0 0",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            style={{
              width: "1px",
              height: mobileNav ? "34px" : "42px",
              backgroundColor: "var(--nav-pill-border)",
              flexShrink: 0,
            }}
          />

          <div className="site-nav-actions" style={{ display: "flex", alignItems: "center", gap: mobileNav ? "0.55rem" : "0.9rem", flexShrink: 0 }}>
            <a
              href="https://github.com/outstandingvick"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              style={{
                width: mobileNav ? "34px" : "42px",
                height: mobileNav ? "34px" : "42px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--nav-icon)",
                textDecoration: "none",
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--nav-link-active)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--nav-icon)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GitHubMark size={mobileNav ? 25 : 31} />
            </a>

            <a
              href="mailto:victor@outstandingvick.xyz"
              aria-label="Email"
              title="Email"
              style={{
                width: mobileNav ? "34px" : "42px",
                height: mobileNav ? "34px" : "42px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--nav-icon)",
                textDecoration: "none",
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--nav-link-active)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--nav-icon)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Mail size={mobileNav ? 26 : 32} fill="currentColor" strokeWidth={0} />
            </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{
              width: "32px",
              height: "32px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--nav-icon)",
              backgroundColor: "transparent",
              border: "1px solid var(--nav-pill-border)",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--nav-link-active)";
              e.currentTarget.style.borderColor = "var(--nav-link-muted)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--nav-icon)";
              e.currentTarget.style.borderColor = "var(--nav-pill-border)";
            }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
