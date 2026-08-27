export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-400 flex-col items-center justify-center px-6 pb-16 pt-28 text-center max-[760px]:px-5 max-[760px]:pb-10 max-[760px]:pt-24 max-[380px]:px-4"
    >
      <div className="hero-content mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="hfont-mono text-[0.6rem] md:text-[1rem] font-medium tracking-[0.18em] text-(--hero-muted)">
          VICTOR POWEIDEI OGBONNA
        </p>
        <br/>
        <h1 className="font-display text-[clamp(1.96rem,6.38vw,6.31rem)] font-bold leading-[1.08] tracking-[-0.04em] text-(--text) max-[760px]:text-[clamp(1.45rem,6.4vw,2.75rem)]">
          <span className="block whitespace-nowrap">I build intuitive interfaces,</span>
          <span className="block whitespace-nowrap">seamless user experiences,</span>
          <span className="block whitespace-nowrap">
            & products that <span className="text-(--accent)">scale</span>.
          </span>
        </h1>
        <p className="hero-bio max-w-xl text-[1.5rem] font-medium leading-[1.55] text-(--hero-muted)">
          Frontend & Product Engineer, that also builds his own products end to
          end.
        </p>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 right-6 font-mono text-[0.62rem] font-medium tracking-[0.22em] text-(--hero-muted) no-underline transition-colors hover:text-(--text) max-[760px]:bottom-6 max-[760px]:right-5"
      >
        SCROLL ↓
      </a>
      <br/>
      <br/>
      <br/>
    </section>
  );
}
