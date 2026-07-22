export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-280 flex-col items-center justify-center px-6 pb-16 pt-28 text-center max-[760px]:px-4 max-[760px]:pb-12 max-[760px]:pt-24"
    >
      <div className="hero-badge mb-9 inline-flex max-w-full items-center justify-center gap-2 px-3.5 py-1.5 max-[760px]:mb-8 max-[520px]:mb-6">
        <span className="block size-1.75 animate-[pulse_2s_infinite]" />
        <span className="font-mono text-xl font-semibold tracking-[0.12em] text-(--text-2) max-[760px]:text-base max-[520px]:text-xs">
          AVAILABLE FOR ROLES
        </span>
      </div>
      <h1 className="font-display hero-title mb-6 text-9xl font-black leading-[0.88] tracking-[-0.045em] text-(--text) max-[1180px]:text-[5.7rem] max-[900px]:text-[4.5rem] max-[760px]:text-[2.55rem] max-[520px]:text-[2.12rem] max-[360px]:text-[1.85rem]">
        <span className="hero-name-line flex items-baseline justify-center gap-[0.22em] whitespace-nowrap">
          VICTOR
          <span className="text-(--accent-warm)">
            POWEIDEI
          </span>
        </span>
        <span className="block">OGBONNA</span>
      </h1>
      <div className="hero-roles mb-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 max-[520px]:mb-6 max-[520px]:flex-col max-[520px]:gap-0.5">
        <span className="font-serif text-3xl italic text-(--text-2) max-[760px]:text-2xl max-[520px]:text-[1.35rem]">
          Frontend Engineer
        </span>
        <span className="text-(--accent-warm) max-[520px]:hidden">—</span>
        <span className="font-serif text-3xl italic text-(--text-2) max-[760px]:text-2xl max-[520px]:text-[1.35rem]">
          Technical Writer & Researcher
        </span>
      </div>
      <p className="font-mono hero-bio mb-8 max-w-180 text-2xl font-semibold leading-[1.7] text-(--text-2) max-[900px]:text-xl max-[760px]:max-w-150 max-[760px]:text-base max-[520px]:text-[0.95rem]">
        My work centers on creating intuitive interfaces, seamless user experiences,
        and products that scale effectively.
      </p>
      <div className="hero-actions flex flex-wrap justify-center gap-4">
        <a
          href="mailto:victor.ogbonna@hotmail.com"
          className="font-mono inline-flex min-h-14 min-w-44 items-center justify-center rounded-full bg-(--accent) px-10 py-4 text-base font-extrabold tracking-normal text-[#0D2C54] no-underline shadow-[0_18px_38px_color-mix(in_srgb,var(--accent)_24%,transparent)] transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-[0.88] max-[420px]:w-full"
         >
          Get in touch
        </a>
      </div>
    </section>
  );
}
