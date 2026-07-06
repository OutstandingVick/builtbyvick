"use client";
import { useState } from "react";

const socials = [
  { label: "GitHub", handle: "OutstandingvVick", url: "https://github.com/outstandingvick" },
  { label: "LinkedIn", handle: "Victor Ogbonna", url: "https://www.linkedin.com/in/victorpogbonna/" },
  { label: "Resume", handle: "Check out", url: "https://docs.google.com/document/d/1jHvJmdzc50TVhIdudjX_mA7PWtT6FKVpe-cUPNCTkQg/edit" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const fields = [
    { key: "name", label: "Name", type: "text", placeholder: "Your name" },
    { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <>
      <section
        id="contact"
        className="content-section contact-section mx-auto w-full max-w-280 px-5 py-20 max-[980px]:max-w-760px max-[760px]:px-4 max-[760px]:py-14"
      >
        <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
          <span className="font-mono inline-flex min-h-11 items-center rounded-full border border-(--border-2) bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] px-5 text-[0.95rem] font-extrabold tracking-[0.02em] text-(--text)">
            04 / Contact
          </span>
        </div>

        <div className="contact-grid grid grid-cols-2 gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <div>
            <h2 className="font-display section-heading mb-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-(--text) max-[760px]:text-[1.65rem] max-[760px]:leading-[1.15] max-[520px]:text-2xl">
              Currently open
              <br />
              to new{" "}
              <span className="font-serif italic text-(--accent)">
                opportunities.
              </span>
            </h2>

            <p className="font-mono contact-copy mb-12 text-[1.3rem] leading-[1.65] text-(--text-2) max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
              Whether you&apos;re building a product, need technical writing, or want a
              researcher embedded in your Startup—I&apos;m interested in hearing
              about it. Drop me a message or reach out directly.
            </p>

            <a
              href="mailto:victor.ogbonna@hotmail.com"
              className="font-mono contact-email mb-8 block rounded-[20px] border border-(--border) bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] px-5 py-4 text-[0.75rem] tracking-[0.08em] text-[v(--text)] no-underline transition-colors hover:border-(--accent) max-[520px]:wrap:anywhere max-[760px]:text-[0.7rem]"
            >
              victor.ogbonna@hotmail.com ↗
            </a>

            <div className="flex flex-col">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group mb-3 flex items-center justify-between gap-4 rounded-[20px] border border-(--border) bg-[color-mix(in_srgb,var(--surface)_60%,transparent)] px-4 py-4 no-underline transition-colors max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-1.5"
                >
                  <span className="social-label font-mono text-[0.75rem] text-(--text-2) transition-colors group-hover:text-(--accent) max-[760px]:text-[0.7rem]">
                    {s.label}
                  </span>
                  <span className="font-mono social-handle text-[0.72rem] text-(--text-3) max-[760px]:text-[0.7rem]">
                    {s.handle} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="rounded-[20px] border border-(--border) bg-(--bg-3) px-8 py-12 text-center">
                <div className="mb-4 text-3xl">✦</div>
                <h3 className="font-display mb-3 text-[1.2rem] font-bold text-(--text)">
                  Message sent!
                </h3>
                <p className="font-mono text-[0.92rem] leading-[1.7] text-(--text-2)">
                  I aim to respond within 24 hours. Talk soon.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {fields.map((field) => (
                  <div key={field.key}>
                    <label className="font-mono mb-1.5 block text-[0.62rem] uppercase tracking-[0.15em] text-(--text-3)">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="font-mono w-full rounded-[20px] border border-(--border) bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] px-3.5 py-3 text-[0.82rem] text-(--text) outline-none transition-colors placeholder:text-(--text-3) focus:border-(--accent)"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono mb-1.5 block text-[0.62rem] uppercase tracking-[0.15em] text-(--text-3)">
                    Message
                  </label>
                  <textarea
                    placeholder="What's on your mind?"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="font-mono w-full resize-y rounded-[20px] border border-(--border) bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] px-3.5 py-3 text-[0.82rem] text-(--text) outline-none transition-colors placeholder:text-(--text-3) focus:border-(--accent)"
                  />
                </div> 
                <button
                  onClick={handleSubmit}
                  className="font-mono contact-submit inline-flex min-h-12 w-fit cursor-pointer items-center justify-center rounded-full border-0 bg-(--accent) px-6 py-3.5 text-[0.72rem] font-extrabold tracking-normal text-[#102217] transition-opacity hover:opacity-[0.82] max-[760px]:text-[0.7rem]"
                >
                  Send message →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="site-footer mx-auto flex w-full max-w-280 items-center justify-between border-t border-(--border) px-5 py-10 max-[980px]:max-w-190 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3 max-[760px]:px-4 max-[760px]:py-8">
        <span className="font-mono text-[0.68rem] tracking-[0.08em] text-(--text-3)">
          © 2025 Victor Ogbonna
        </span>
        <span className="font-mono text-[0.65rem] text-(--text-3)">
          Built with Next.js & Tailwind CSS
        </span>
      </footer>
    </>
  );
}
