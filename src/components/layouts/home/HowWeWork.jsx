import { useEffect, useRef } from "react";
import {
  FaFileSignature,
  FaPlaneDeparture,
  FaRegComments,
  FaRegHandshake,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";

const HOW_WE_WORK_STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Share your ambitions with us. We will help you choose the right destination, programme and path forward. Share your ambitions with us. We will help you choose the right destination, programme and path forward.Share your ambitions with us. We will help you choose the right destination, programme and path forward.",
    Icon: FaRegComments,
  },
  {
    number: "02",
    title: "Find the Best Options",
    description:
      "From university selection to a polished application, we make every document clear, complete and ready to submit. From university selection to a polished application, we make every document clear, complete and ready to submit.From university selection to a polished application, we make every document clear, complete and ready to submit.",
    Icon: FaFileSignature,
  },
  {
    number: "03",
    title: "Application Through Expert Team",
    description:
      "We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence.",
    Icon: FaPlaneDeparture,
  },
  {
    number: "04",
    title: "Documentation Guidance",
    description:
      "We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence..",
    Icon: FaRegHandshake,
  },
  {
    number: "05",
    title: "Visa Submission with right/professional hand",
    description:
      "We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence.",
    Icon: FaWallet,
  },
  {
    number: "06",
    title: "Pre and Post-Departure Support",
    description:
      "We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence. We guide your visa preparation and pre-departure plans, so you can begin your new chapter with confidence.",
    Icon: FaUniversity,
  },
];

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frameId = null;

    const updateTrack = () => {
      frameId = null;
      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const scrollDistance = section.offsetHeight - window.innerHeight;
      const travelled = Math.min(
        Math.max(-section.getBoundingClientRect().top, 0),
        scrollDistance,
      );
      const progress = scrollDistance > 0 ? travelled / scrollDistance : 0;
      const maxOffset =
        ((HOW_WE_WORK_STEPS.length - 1) / HOW_WE_WORK_STEPS.length) * 100;

      track.style.transform = `translate3d(${-progress * maxOffset}%, 0, 0)`;
    };

    const requestUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateTrack);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    desktopQuery.addEventListener("change", requestUpdate);
    reducedMotionQuery.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      desktopQuery.removeEventListener("change", requestUpdate);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      className="bg-[#f7f8fa] text-secondary"
      aria-labelledby="how-we-work-heading"
    >
      <header className="mx-auto w-full max-w-[1320px] px-5 pt-16 pb-18 sm:px-8 lg:px-12 lg:pt-24 lg:pb-4">
        <p className="font-jost text-center text-xs font-bold tracking-[0.22em] text-primary uppercase">
          Your global journey
        </p>
        <h3
          id="how-we-work-heading"
          className="mt- text-center font-chivo text-4xl font-bold sm:text-[42px]"
        >
          How We Work
        </h3>
        <h5 className="mt-4 max-w-2xl font-jost mx-auto text-center text-base leading-7 text-secondary/70 sm:text-lg">
          Thoughtful support at every milestone, from your first question to
          your first flight.
        </h5>
      </header>

      <div
        ref={sectionRef}
        className="relative overflow-x-clip pb-16 lg:h-[600vh] lg:pb-0"
      >
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:px-12">
          <div className="relative w-full">
            <svg
              className="pointer-events-none absolute top-1/2 left-[16%] hidden h-28 w-[68%] -translate-y-1/2 lg:block"
              viewBox="0 0 800 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 94C175 0 326 132 476 55C590 -3 682 33 792 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                className="text-primary/30"
              />
              <circle cx="8" cy="94" r="4" className="fill-primary/70" />
              <circle cx="792" cy="10" r="4" className="fill-primary/70" />
            </svg>

            <div
              ref={trackRef}
              className="flex flex-col gap-6 lg:w-[600%] lg:flex-row lg:gap-0 lg:will-change-transform"
            >
              {HOW_WE_WORK_STEPS.map(({ number, title, description, Icon }) => (
                <article
                  key={number}
                  className="relative flex min-h-[340px] flex-1 items-center lg:pt-20 lg:min-h-0 lg:w-1/6 lg:px-28"
                >
                  <div className="w-full rounded-2xl border border-white/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(31,41,55,0.08)] backdrop-blur-sm sm:p-10 lg:mx-auto lg:max-w-[700px] lg:p-12">
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-chivo text-5xl font-bold text-primary/20 sm:text-6xl">
                        {number}
                      </span>
                      <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-primary text-2xl text-white shadow-lg shadow-primary/20 sm:size-20 sm:text-3xl">
                        <Icon aria-hidden="true" />
                      </div>
                    </div>
                    <p className="mt-8 font-jost text-xs font-bold tracking-[0.2em] text-primary uppercase">
                      Step {number}
                    </p>
                    <h3 className="mt-3 font-chivo text-3xl font-bold sm:text-4xl">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-xl font-jost text-base leading-7 text-justify text-secondary/70 sm:text-lg">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
