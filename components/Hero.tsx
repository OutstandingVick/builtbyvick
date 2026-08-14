export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-400 flex-col justify-end px-6 pb-8 pt-28 max-[760px]:px-5 max-[760px]:pb-6 max-[760px]:pt-24 max-[380px]:px-4"
    >
      <div className="hero-copy">
        <p className="hero-meta mb-5 font-mono text-[0.68rem] font-medium tracking-[0.18em] text-(--hero-muted) max-[760px]:mb-4 max-[760px]:text-[0.6rem]">
          VICTOR POWEIDEI OGBONNA
        </p>

        <h1 className="font-display text-[clamp(1.35rem,4.4vw,4.35rem)] font-bold leading-[1.08] tracking-[-0.04em] text-(--text)">
          <span className="block whitespace-nowrap">I build intuitive interfaces</span>
          <span className="block whitespace-nowrap">seamless user experiences,</span>
          <span className="block whitespace-nowrap">
            & products that <span className="text-(--accent)">scale</span>.
          </span>
        </h1>
        <br />
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
