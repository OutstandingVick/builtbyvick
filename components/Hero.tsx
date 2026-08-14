export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-280 flex-col justify-center px-8 pb-24 pt-28 max-[760px]:w-[calc(100%-2rem)] max-[760px]:px-4 max-[760px]:pb-20 max-[760px]:pt-24 max-[380px]:w-[calc(100%-1.5rem)] max-[380px]:px-3"
    >
      <div className="hero-copy max-w-4xl">
        <p className="hero-meta mb-5 font-mono text-[0.68rem] font-medium tracking-[0.18em] text-(--hero-muted) max-[760px]:mb-4 max-[760px]:text-[0.6rem]">
          FULL-STACK ENGINEER · LAGOS, NG · OPEN TO WORK
        </p>

        <h1 className="font-display text-[clamp(2.6rem,7.2vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.04em] text-(--text)">
          I build interfaces
          <br />
          with <span className="text-(--accent)">intent</span>.
        </h1>

        <p className="hero-bio mt-7 max-w-xl text-[1.05rem] font-medium leading-[1.55] text-(--hero-muted) max-[760px]:mt-6 max-[760px]:max-w-sm max-[760px]:text-[0.95rem]">
          Frontend engineer at Gen Financial, and I build my own products end to
          end.
        </p>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-8 right-8 font-mono text-[0.62rem] font-medium tracking-[0.22em] text-(--hero-muted) no-underline transition-colors hover:text-(--text) max-[760px]:bottom-6 max-[760px]:right-4"
      >
        SCROLL ↓
      </a>
    </section>
  );
}
