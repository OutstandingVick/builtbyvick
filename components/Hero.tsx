import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-400 flex-col items-center justify-center px-6 pb-16 pt-28 text-center max-[760px]:px-5 max-[760px]:pb-12 max-[760px]:pt-24 max-[380px]:px-4"
    >
      <div className="hero-doodle hero-doodle-left" aria-hidden="true">
        <div className="hero-window">
          <div className="hero-window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-window-face">
            <i />
            <i />
            <b />
          </div>
        </div>
        <span className="hero-doodle-shadow" />
      </div>

      <div className="hero-doodle hero-doodle-right" aria-hidden="true">
        <span className="hero-spark hero-spark-one">✦</span>
        <div className="hero-code-card">
          <span className="hero-code-symbol">&lt;/&gt;</span>
          <span className="hero-code-line hero-code-line-long" />
          <span className="hero-code-line" />
        </div>
        <span className="hero-spark hero-spark-two">✦</span>
      </div>

      <div className="hero-content mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="hero-portrait-card">
          <Image
            src="/victor-portrait.jpg"
            alt="Victor Ogbonna"
            fill
            preload
            sizes="(max-width: 760px) 144px, 190px"
            className="object-cover"
          />
          <div className="hero-availability">
            <span aria-hidden="true" />
            Available for work
          </div>
        </div>

        <p className="hero-kicker font-mono text-[0.78rem] font-semibold tracking-[0.03em] text-(--hero-muted) md:text-[0.86rem]">
          Hi, I&apos;m Victor
        </p>

        <h1 className="hero-heading font-serif text-[clamp(3.2rem,5.3vw,5.5rem)] font-normal leading-[0.94] tracking-[-0.025em] text-(--text) max-[760px]:text-[clamp(2.65rem,11.5vw,4rem)]">
          I build intuitive interfaces,
          <br className="hero-heading-break" /> seamless experiences &amp; products that{" "}
          <span className="hero-accent italic text-(--accent)">scale.</span>
        </h1>

        <p className="hero-bio max-w-2xl text-[1rem] font-medium leading-[1.7] text-(--hero-muted) md:text-[1.08rem]">
          Frontend &amp; Product Engineer turning complex ideas into clear,
          thoughtful products — from first sketch to shipped experience.
        </p>

        <span className="hero-divider" aria-hidden="true" />
        <a className="hero-cta" href="#contact">
          Let&apos;s build something
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[0.62rem] font-semibold tracking-[0.16em] text-(--hero-muted) no-underline transition-colors hover:text-(--text) max-[760px]:bottom-5"
      >
        Scroll to explore ↓
      </a>
    </section>
  );
}
