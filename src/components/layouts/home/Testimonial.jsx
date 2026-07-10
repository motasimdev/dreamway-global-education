import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Container from "../../Container";

const testimonials = [
  {
    name: "Nusrat Jahan",
    country: "Australia",
    university: "University of Adelaide",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85",
    quote:
      "Dreamway made a complicated process feel wonderfully clear. From shortlisting courses to preparing for my visa interview, I always knew exactly what came next.",
  },
  {
    name: "Rafid Hasan",
    country: "Canada",
    university: "Conestoga College",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
    quote:
      "My counsellor understood both my budget and my career goal. I received my offer sooner than expected and arrived in Canada feeling fully prepared.",
  },
  {
    name: "Tasnia Rahman",
    country: "United Kingdom",
    university: "University of Roehampton",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=85",
    quote:
      "The personal attention was the difference for me. Every document was checked carefully, and the team stayed in touch even after I reached London.",
  },
  {
    name: "Mahin Chowdhury",
    country: "New Zealand",
    university: "Auckland University of Technology",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85",
    quote:
      "I valued the honest advice most. Dreamway helped me choose a programme that fits my long-term plans, rather than simply chasing a quick admission.",
  },
  {
    name: "Samia Islam",
    country: "Australia",
    university: "Deakin University",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=85",
    quote:
      "From my first counselling session to my departure briefing, everything felt organised and reassuring. I could focus on my studies while they guided the details.",
  },
  {
    name: "Arman Kabir",
    country: "United States",
    university: "University of California, Riverside",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=85",
    quote:
      "Their scholarship guidance helped turn a dream into a realistic plan. I am now studying computer science with confidence and a clear direction.",
  },
];

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const Testimonial = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pageCount = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setActivePage(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActivePage((page) => (page + 1) % pageCount);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, pageCount]);

  const goToPrevious = () => {
    setActivePage((page) => (page - 1 + pageCount) % pageCount);
  };

  const goToNext = () => {
    setActivePage((page) => (page + 1) % pageCount);
  };

  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    testimonials.slice(pageIndex * visibleCount, (pageIndex + 1) * visibleCount),
  );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-[#fffaf6] py-16 md:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Student stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-chivo text-3xl font-bold text-secondary md:text-4xl lg:text-[42px]"
          >
            Trusted guidance. Transformative futures.
          </h2>
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Real experiences from students who began their international study
            journey with Dreamway Global.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-1 pb-4">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${activePage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  className="grid min-w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
                  key={pageIndex}
                >
                  {page.map((student) => (
                    <article
                      className="group relative flex min-h-[345px] flex-col rounded-[1.75rem] border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] md:p-7"
                      key={student.name}
                    >
                      <FaQuoteRight
                        aria-hidden="true"
                        className="absolute right-6 top-6 text-5xl text-primary/15 transition-colors duration-300 group-hover:text-primary/25"
                      />
                      <div className="relative mb-6 flex items-center gap-4">
                        <div className="rounded-2xl bg-primary p-0.5 shadow-md shadow-orange-200">
                          <img
                            src={student.image}
                            alt={`${student.name}, Dreamway Global student`}
                            className="h-14 w-14 rounded-[0.85rem] object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="font-chivo text-lg font-bold text-secondary">
                            {student.name}
                          </h3>
                          <p className="mt-0.5 font-jost text-sm text-secondary/65">
                            {student.university}
                          </p>
                          <p className="font-jost text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                            {student.country}
                          </p>
                        </div>
                      </div>

                      <blockquote className="flex flex-1 flex-col justify-between">
                        <p className="font-jost text-[15px] leading-7 text-secondary/80">
                          “{student.quote}”
                        </p>
                        <div
                          className="mt-6 flex gap-1 text-primary"
                          aria-label="5 out of 5 stars"
                        >
                          {Array.from({ length: 5 }, (_, index) => (
                            <FaStar aria-hidden="true" key={index} />
                          ))}
                        </div>
                      </blockquote>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 md:mt-7">
            <button
              type="button"
              onClick={goToPrevious}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 bg-white text-secondary shadow-sm transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Show previous testimonials"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" aria-label="Testimonial slides">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActivePage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    activePage === index
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-secondary/20 hover:bg-primary/50"
                  }`}
                  aria-label={`Show testimonial group ${index + 1}`}
                  aria-current={activePage === index ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 bg-white text-secondary shadow-sm transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Show next testimonials"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
