"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaRegFileAlt } from "react-icons/fa";

const socials = [
  { label: "GitHub", icon: FaGithub, handle: "OutstandingvVick", url: "https://github.com/outstandingvick" },
  { label: "LinkedIn", icon: FaLinkedinIn, handle: "Victor Ogbonna", url: "https://www.linkedin.com/in/victorpogbonna/" },
  { label: "Resume", icon: FaRegFileAlt, handle: "Check out", url: "https://docs.google.com/document/d/1jHvJmdzc50TVhIdudjX_mA7PWtT6FKVpe-cUPNCTkQg/edit" },
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
        className="contact-section relative mx-auto mt-20 w-full overflow-hidden px-5 pb-20 pt-60 max-[760px]:mt-12 max-[760px]:px-4 max-[760px]:pb-14 max-[760px]:pt-20"
      >
        <br />
        <div className="contact-wave" aria-hidden="true" />
        <div className="contact-bubble contact-bubble-one" aria-hidden="true" />
        <div className="contact-bubble contact-bubble-two" aria-hidden="true" />
        <div className="contact-bubble contact-bubble-three" aria-hidden="true" />
        <div className="contact-seaweed contact-seaweed-left" aria-hidden="true" />
        <div className="contact-seaweed contact-seaweed-right" aria-hidden="true" />
        <div className="contact-coral contact-coral-left" aria-hidden="true" />
        <div className="contact-coral contact-coral-right" aria-hidden="true" />

        <div className="contact-inner relative z-1 mx-auto w-full">
          <div className="mb-12 flex items-start justify-between gap-8 max-[760px]:mb-9 max-[760px]:flex-col max-[760px]:items-start">
            <div className="min-w-0 max-w-165">
              <h2 className="font-display max-w-full text-[clamp(2.35rem,5.2vw,4.65rem)] font-black leading-[0.92] text-[#0496FF] tracking-[-0.055em]">
                Let&apos;s build something{" "}
                <span className="font-serif italic font-normal text-[#f05f9f]">
                  cool.
                </span>
              </h2>
            </div>

            <div className="contact-social-list flex shrink-0 items-center gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="social-link grid size-17 place-items-center rounded-full border-2 border-[#101820] bg-[#fff7fb] 
                  font-mono text-[0.88rem] font-black text-[#15324a] 
                  no-underline shadow-[0_7px_0_#101820] transition-transform 
                  hover:-translate-y-1 max-[760px]:size-13.5 max-[760px]:text-[0.72rem]"
                >
                  <Icon aria-hidden="true" className="size-7 max-[760px]:size-5" />
                </a>
                );
              })}
            </div>
          </div>
          <br/>
          <div className="contact-grid grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-14 max-[980px]:grid-cols-1 max-[980px]:gap-10">
            <div className="min-w-0">
              <p className="font-mono contact-copy mb-10 max-w-140 text-[1.15rem] font-semibold leading-[1.6] text-[#071827] max-[760px]:text-[1rem]">
                If you have a product idea, frontend problem, research brief, or
                just want to talk through a build, reach out and I&apos;ll get back
                to you.
              </p>

              <a
                href="mailto:victor.ogbonna@hotmail.com"
                className="contact-email font-mono inline-flex min-h-14 items-center justify-center 
                rounded-full border-2 border-[#101820] bg-[#0496FF] px-6 py-4 text-[0.82rem] 
                font-black tracking-[0.02em] text-[#071827] no-underline shadow-[0_7px_0_#101820] 
                transition-transform hover:-translate-y-1 max-[520px]:wrap:anywhere max-[760px]:w-full max-[760px]:text-[0.72rem]"
              >
                victor.ogbonna@hotmail.com ↗
              </a>

              <a
                href="mailto:victor.ogbonna@hotmail.com"
                className="contact-fish mt-16 inline-flex min-h-20 items-center justify-center rounded-[55%_45%_45%_55%/55%_50%_50%_45%] border-2 border-[#101820] bg-[#0496FF] px-12 text-[1.2rem] font-black text-[#071827] no-underline shadow-[0_7px_0_#101820] max-[760px]:mt-8"
              >
                Hire Me
              </a>
            </div>

            <div className="contact-form-card rounded-[34px] border-2 border-[#101820] bg-[#fff7fb] shadow-[0_10px_0_#101820] max-[760px]:rounded-[26px]">
              {sent ? (
                <div className="px-8 py-12 text-center">
                  <div className="mb-4 text-3xl">✦</div>
                  <h3 className="font-display mb-3 text-[1.2rem] font-bold text-[#071827]">
                    Message sent!
                  </h3>
                  <p className="font-mono text-[0.92rem] leading-[1.7] text-[#315069]">
                    I aim to respond within 24 hours. Talk soon.
                  </p>
                </div>
              ) : (
                <div className="contact-form-body flex flex-col">
                  {fields.map((field) => (
                    <div key={field.key} className="contact-form-group">
                      <label className="contact-label font-mono block text-[0.7rem] font-black uppercase tracking-[0.15em] text-[#315069]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="contact-field font-mono w-full rounded-full border-2 border-[#101820] bg-white px-5 py-4 text-[0.9rem] 
                        font-bold text-[#071827] outline-none transition-colors placeholder:text-[#718da3] focus:border-[#f05f9f]"
                      />
                    </div>
                  ))}
                  <div className="contact-form-group">
                    <label className="contact-label font-mono block text-[0.7rem] font-black uppercase tracking-[0.15em] text-[#315069]">
                      Message
                    </label>
                    <textarea
                      placeholder="What's on your mind?"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="contact-field contact-message font-mono w-full resize-y rounded-3xl border-2 border-[#101820]
                       bg-white px-5 py-4 text-[0.9rem] font-bold text-[#071827] outline-none transition-colors placeholder:text-[#718da3] focus:border-[#f05f9f]"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="contact-submit inline-flex min-h-14 w-fit cursor-pointer items-center justify-center rounded-full border-2 border-[#101820] bg-[#0496FF] px-7 py-4 font-mono text-[0.82rem] font-black text-[#071827] shadow-[0_7px_0_#101820] transition-transform hover:-translate-y-1 max-[760px]:w-full"
                  >
                    Send message →
                  </button>
                </div>
              )}
              </div>
          </div>
        </div>
        <br />
        <br />
        <footer className="site-footer mx-auto flex w-full max-w-280 items-center justify-between px-5 py-10 max-[980px]:max-w-190 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3 max-[760px]:px-4 max-[760px]:py-8">
        <span className="font-mono text-base tracking-[0.08em] text-(--text-4)">
          © 2025 Victor Ogbonna
        </span>
        <span className="font-mono text-base text-(--text-4)">
          Built with Typescript, Next.js & Tailwind CSS
        </span>
      </footer>
      <br />
      <br />
      </section>
    </>
  );
}
