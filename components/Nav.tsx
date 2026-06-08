"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(10,10,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        padding: "0 2rem",
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
          className="font-display"
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          VO
        </a>

        {/* Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
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
      </nav>
    </header>
  );
}
