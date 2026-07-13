import Heading from "../../Heading";

const logoModules = import.meta.glob(
  "../../../assets/university-logos/*.{png,jpg,jpeg,webp,svg}",
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
      <div
        key={`${hidden ? "duplicate-" : ""}${name}`}
        className="group flex h-26 w-48 shrink-0 items-center justify-center px-4 sm:h-32 sm:w-60 sm:px-5"
      >
        <img
          src={src}
          alt={hidden ? "" : `${name} logo`}
          className="max-h-18 max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0 sm:max-h-24"
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
    <section
      className="overflow-hidden bg-white py-16 sm:py-20"
      aria-labelledby="partner-universities-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 text-center sm:px-8 lg:px-12">
        <span className="font-jost text-xs font-bold tracking-[0.22em] text-primary uppercase">
          Join The Success
        </span>
        <div id="partner-universities-heading" className="">
          <Heading
            text={"Our Students Study At"}
            className={
              "mt-3 font-chivo font-bold text-secondary"
            }
          />
        </div>
      </div>

      <div className="university-logo-marquee mt-8 sm:mt-12">
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
          animation: university-logo-marquee-scroll 154s linear infinite;
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
