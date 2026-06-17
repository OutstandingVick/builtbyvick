"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 2rem",
        paddingTop: "80px",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Availability badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "3rem",
          padding: "6px 14px",
          border: "1px solid var(--border-2)",
          borderRadius: "100px",
          backgroundColor: "var(--bg-3)",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            display: "block",
            boxShadow: "0 0 8px var(--accent)",
            animation: "pulse 2s infinite",
          }}
        />
        <span
          className="font-mono"
          style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--text-2)" }}
        >
          AVAILABLE FOR ROLES
        </span>
      </div>

      {/* Big name */}
      <h1
        ref={nameRef}
        className="font-display"
        style={{
          fontSize: "clamp(2.8rem, 8vw, 7.4rem)",
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          marginBottom: "1.5rem",
        }}
      >
        <span style={{ whiteSpace: "nowrap" }}>
          VICTOR{" "}
          <span style={{ color: "var(--accent)", WebkitTextStroke: "0px" }}>
            POWEIDEI
          </span>
        </span>
        <br />
        OGBONNA
      </h1>

      {/* Role tag */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <span
          className="font-serif"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "var(--text-2)",
            fontStyle: "italic",
          }}
        >
          Frontend Engineer
        </span>
        <span style={{ color: "var(--border-2)" }}>—</span>
        <span
          className="font-serif"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "var(--text-2)",
            fontStyle: "italic",
          }}
        >
          Technical Writer
        </span>
        <span style={{ color: "var(--border-2)" }}>—</span>
        <span
          className="font-serif"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "var(--text-2)",
            fontStyle: "italic",
          }}
        >
          Solana Researcher
        </span>
      </div>

      {/* Bio */}
      <p
        className="font-mono"
        style={{
          fontSize: "0.9rem",
          color: "var(--text-2)",
          maxWidth: "560px",
          lineHeight: 1.85,
          marginBottom: "3rem",
        }}
      >
        I build responsive and user-focused web applications. My work centers
        on creating intuitive interfaces, seamless user experiences, and
        products that scale effectively.
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="#projects"
          className="font-mono"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "var(--bg)",
            backgroundColor: "var(--accent)",
            padding: "12px 24px",
            borderRadius: "2px",
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.82")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          View my work
        </a>
        <a
          href="#contact"
          className="font-mono"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "var(--text)",
            backgroundColor: "transparent",
            padding: "12px 24px",
            border: "1px solid var(--border-2)",
            borderRadius: "2px",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--text-2)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--border-2)";
          }}
        >
          Get in touch
        </a>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "0",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
        }}
      >
        <span
          className="font-mono"
          style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--text-3)" }}
        >
          SCROLL
        </span>
        <span style={{ color: "var(--text-3)", fontSize: "0.8rem" }}>↓</span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
