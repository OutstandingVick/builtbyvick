"use client";
import Image from "next/image";
import { useState, useEffect, useSyncExternalStore } from "react";
import { ChevronsUpDown, Github, Mail, Moon, Sun } from "lucide-react";

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
              <Github size={mobileNav ? 25 : 31} fill="currentColor" strokeWidth={0} />
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
