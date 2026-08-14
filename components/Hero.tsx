export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-400 flex-col justify-center px-6 pb-24 pt-28 max-[760px]:px-5 max-[760px]:pb-20 max-[760px]:pt-24 max-[380px]:px-4"
    >
      <div className="hero-copy max-w-4xl">
        <p className="hero-meta mb-5 font-mono text-[0.68rem] font-medium tracking-[0.18em] text-(--hero-muted) max-[760px]:mb-4 max-[760px]:text-[0.6rem]">
          VICTOR POWEIDEI OGBONNA
        </p>

        <h1 className="font-display text-[clamp(2.6rem,7.2vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.04em] text-(--text)">
          I build intuitive interfaces
          <br />
          seamless user experiences,
          <br />
          & products that<span className="text-(--accent)">scale</span>.
        </h1>

        <p className="hero-bio mt-7 max-w-xl text-[1.05rem] font-medium leading-[1.55] text-(--hero-muted) max-[760px]:mt-6 max-[760px]:max-w-sm max-[760px]:text-[0.95rem]">
          Frontend & Product Engineer, that also builds his own products end to
          end.
        </p>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-8 right-6 font-mono text-[0.62rem] font-medium tracking-[0.22em] text-(--hero-muted) no-underline transition-colors hover:text-(--text) max-[760px]:bottom-6 max-[760px]:right-5"
      >
        SCROLL ↓
      </a>
    </section>
  );
}
