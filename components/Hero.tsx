export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-400 flex-col items-center justify-center px-6 pb-16 pt-28 text-center max-[760px]:px-5 max-[760px]:pb-10 max-[760px]:pt-24 max-[380px]:px-4"
    >
      <div className="hero-content mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="hero-kicker font-mono mb-7 text-[0.72rem] font-medium tracking-[0.14em] text-(--hero-muted) md:text-[0.82rem]">
          VICTOR POWEIDEI OGBONNA
        </p>
        <h1 className="hero-heading font-serif text-[clamp(3rem,5.7vw,5.8rem)] font-normal leading-[0.98] tracking-normal text-(--text) max-[760px]:text-[clamp(2.55rem,11vw,4.35rem)]">
          <span className="block">I build intuitive interfaces,</span>
          <span className="block">seamless user experiences,</span>
          <span className="block">
            &amp; products that <span className="hero-accent italic text-(--accent)">scale</span>.
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
