"use client";
import Image from "next/image";
import { useState, useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
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
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        padding: mobileNav ? "0 1rem" : "0 2rem",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
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

        {/* Links */}
        <div className="site-nav-links" style={{ display: mobileNav ? "none" : "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: active === l.href.slice(1) ? "var(--accent)" : "var(--text-2)",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  active === l.href.slice(1) ? "var(--accent)" : "var(--text-2)")
              }
            >
              {active === l.href.slice(1) && (
                <span
                  style={{
                    position: "absolute",
                    left: "-10px",
                    color: "var(--accent)",
                    fontSize: "0.6rem",
                  }}
                >
                  ▸
                </span>
              )}
              {l.label}
            </a>
          ))}
        </div>

        <div className="site-nav-actions" style={{ display: "flex", alignItems: "center", gap: mobileNav ? "0.5rem" : "0.75rem" }}>
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
              color: "var(--text)",
              backgroundColor: "var(--bg-3)",
              border: "1px solid var(--border-2)",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "var(--border-2)";
            }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* CTA */}
          <a
            href="mailto:victor@example.com"
            className="font-mono"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--bg)",
              backgroundColor: "var(--accent)",
              padding: "6px 14px",
              borderRadius: "2px",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
}
