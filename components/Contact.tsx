"use client";
import { useState } from "react";

const socials = [
  { label: "Twitter / X", handle: "@outstandingvick", url: "https://x.com/outstandingvick" },
  { label: "GitHub", handle: "outstandingvick", url: "https://github.com/outstandingvick" },
  { label: "LinkedIn", handle: "Victor Ogundimu", url: "https://linkedin.com/in/outstandingvick" },
  { label: "Resume", handle: "Request", url: "mailto:victor.ogbonna@hotmail.com?subject=Resume%20request" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <>
      <section
        id="contact"
        className="content-section contact-section"
        style={{
          padding: "8rem 2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <div className="section-label" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
          <span
            className="font-mono"
            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase" }}
          >
            04 / Contact
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
          }}
        >
          {/* Left */}
          <div>
            <h2
              className="font-display section-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Currently open
              <br />
              to new{" "}
              <span className="font-serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>
                opportunities.
              </span>
            </h2>

            <p
              className="font-mono contact-copy"
              style={{ fontSize: "1.3rem", color: "var(--text-2)", lineHeight: 1.65, marginBottom: "3rem" }}
            >
              Whether you&apos;re building a product, need technical writing, or want a
              researcher embedded in your Startup—I&apos;m interested in hearing
              about it. Drop me a message or reach out directly.
            </p>

            {/* Email */}
            <a
              href="mailto:victor.ogbonna@hotmail.com"
              className="font-mono"
              style={{
                display: "block",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "var(--text)",
                textDecoration: "none",
                padding: "16px 20px",
                border: "1px solid var(--border-2)",
                borderRadius: "2px",
                marginBottom: "2rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget).style.borderColor = "var(--border-2)")}
            >
              victor.ogbonna@hotmail.com ↗
            </a>

            {/* Socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.querySelector(".social-label") as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.querySelector(".social-label") as HTMLElement).style.color = "var(--text-2)";
                  }}
                >
                  <span
                    className="social-label font-mono"
                    style={{ fontSize: "0.75rem", color: "var(--text-2)", transition: "color 0.2s" }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: "0.72rem", color: "var(--text-3)" }}
                  >
                    {s.handle} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "3rem 2rem",
                  textAlign: "center",
                  backgroundColor: "var(--bg-3)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✦</div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}
                >
                  Message sent!
                </h3>
                <p
                  className="font-mono"
                  style={{ fontSize: "0.92rem", color: "var(--text-2)", lineHeight: 1.7 }}
                >
                  I aim to respond within 24 hours. Talk soon.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      className="font-mono"
                      style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.15em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: "6px" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="font-mono"
                      style={{
                        width: "100%",
                        backgroundColor: "var(--bg-3)",
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        padding: "12px 14px",
                        fontSize: "0.82rem",
                        color: "var(--text)",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="font-mono"
                    style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.15em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: "6px" }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="What's on your mind?"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="font-mono"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--bg-3)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      padding: "12px 14px",
                      fontSize: "0.82rem",
                      color: "var(--text)",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="font-mono"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "2px",
                    padding: "14px 24px",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "opacity 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.82")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  Send message →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="site-footer"
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2.5rem 2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          className="font-mono"
          style={{ fontSize: "0.68rem", color: "var(--text-3)", letterSpacing: "0.08em" }}
        >
          © 2025 Victor Ogbonna
        </span>
        <span
          className="font-mono"
          style={{ fontSize: "0.65rem", color: "var(--text-3)" }}
        >
          Built with Next.js & Tailwind CSS
        </span>
      </footer>
    </>
  );
}
