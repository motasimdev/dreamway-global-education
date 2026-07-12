const logoModules = import.meta.glob(
  "../../../assets/universityLogos/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" },
);

const universityLogos = Object.entries(logoModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => ({
    src,
    name: path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]+/g, " "),
  }));

const LogoSet = ({ hidden = false }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {universityLogos.map(({ src, name }) => (
      <div key={`${hidden ? "duplicate-" : ""}${name}`} className="group flex h-24 w-44 shrink-0 items-center justify-center px-4 sm:h-28 sm:w-52 sm:px-5">
        <img
          src={src}
          alt={hidden ? "" : `${name} logo`}
          className="max-h-16 max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0 sm:max-h-20"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}
  </div>
);

const UniversityLogos = () => {
  if (!universityLogos.length) return null;

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20" aria-labelledby="partner-universities-heading">
      <div className="mx-auto max-w-[1320px] px-5 text-center sm:px-8 lg:px-12">
        <span className="font-jost text-xs font-bold tracking-[0.22em] text-primary uppercase">
          Join The Success
        </span>
        <h2 id="partner-universities-heading" className="mt-3 font-chivo text-3xl font-bold text-secondary sm:text-4xl">
          Our Students Study At
        </h2>
      </div>

      <div className="university-logo-marquee mt-10 sm:mt-12">
        <div className="university-logo-marquee__track flex w-max items-center">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>

      <style>{`
        @keyframes university-logo-marquee-scroll {
          to { transform: translate3d(-50%, 0, 0); }
        }

        .university-logo-marquee__track {
          animation: university-logo-marquee-scroll 48s linear infinite;
          will-change: transform;
        }

        .university-logo-marquee:hover .university-logo-marquee__track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .university-logo-marquee { overflow-x: auto; }
          .university-logo-marquee__track { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default UniversityLogos;
