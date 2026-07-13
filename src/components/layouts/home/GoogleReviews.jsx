import { useEffect, useState } from "react";
import { FaGoogle, FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import Container from "../../Container";
import Heading from "../../Heading";

const googleReviewsUrl =
  "https://www.google.com/search?q=Dreamway+Global+Education+Google+Reviews";

const reviews = [
  {
    name: "Farzana Ahmed",
    date: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=85",
    review:
      "The team gave me thoughtful, practical advice at every stage. My application to Australia was handled with real care, and I never felt left on my own.",
  },
  {
    name: "Md. Saimon Hossain",
    date: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=160&q=85",
    review:
      "Very professional service. They helped me compare universities honestly, prepare my documents, and understand the visa process without any confusion.",
  },
  {
    name: "Maliha Noor",
    date: "4 months ago",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=85",
    review:
      "I am grateful for the patience of my counsellor. She listened to my goals and helped me secure a place at a university that truly suits me.",
  },
  {
    name: "Tanvir Rahman",
    date: "5 months ago",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=85",
    review:
      "Dreamway Global made the journey to Canada much less stressful. Their pre-departure briefing was especially useful and gave my family confidence too.",
  },
  {
    name: "Mahfuj Rahman",
    date: "5 months ago",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=85",
    review:
      "Dreamway Global made the journey to Canada much less stressful. Their pre-departure briefing was especially useful and gave my family confidence too.",
  },
];

const getVisibleCount = () =>
  typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;

const GoogleReviews = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pageCount = Math.ceil(reviews.length / visibleCount);

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
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused, pageCount]);

  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    reviews.slice(pageIndex * visibleCount, (pageIndex + 1) * visibleCount),
  );

  const showPrevious = () => {
    setActivePage((page) => (page - 1 + pageCount) % pageCount);
  };

  const showNext = () => {
    setActivePage((page) => (page + 1) % pageCount);
  };

  return (
    <section
      aria-labelledby="google-reviews-heading"
      className="overflow-hidden bg-gray-100 py-16 md:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsPaused(false);
      }}
    >
      <Container>
        <div className="mb-10 max-w-2xl md:mb-14 mx-auto">
          <p className="text-center mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Community feedback
          </p>
          <div id="google-reviews-heading">
            <Heading
              text={" Our Google Reviews"}
              className={
                "text-center font-chivo font-bold text-secondary"
              }
            />
          </div>
          <p className="text-center mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Families trust us with an important decision. Here is what they say
            about their experience with Dreamway Global.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.82fr_1.65fr] lg:items-stretch">
          <aside className="relative overflow-hidden rounded-[1.75rem] bg-secondary p-7 text-white shadow-[0_18px_45px_rgba(54,69,79,0.2)] md:p-9">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[28px] border-primary/20" />
            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full border-[26px] border-white/5" />
            <div className="relative flex h-full flex-col">
              <div className="mb-9 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl shadow-lg">
                  <FaGoogle aria-hidden="true" className="text-[#4285F4]" />
                </span>
                <div>
                  <p className="font-chivo text-lg font-bold">Google Reviews</p>
                  <p className="font-jost text-sm text-white/65">
                    Verified customer feedback
                  </p>
                </div>
              </div>

              <div className="mb-5 flex items-end gap-3">
                <strong className="font-chivo text-6xl font-bold tracking-tight">
                  4.9
                </strong>
                <span className="mb-2 font-jost text-lg text-white/65">
                  / 5
                </span>
              </div>
              <div
                className="mb-3 flex gap-1.5 text-primary"
                aria-label="4.9 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar aria-hidden="true" key={index} />
                ))}
              </div>
              <p className="font-jost text-sm text-white/70">
                Based on 127 Google reviews
              </p>

              <div className="mt-auto border-t border-white/15 pt-7">
                <p className="font-jost text-sm leading-6 text-white/75">
                  Every review reflects a real journey, and the care our team
                  puts into helping students move forward with confidence.
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="overflow-hidden px-1 pb-4 lg:pt-2">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activePage * 100}%)` }}
              >
                {pages.map((page, pageIndex) => (
                  <div
                    className="grid min-w-full gap-5 md:grid-cols-2"
                    key={pageIndex}
                  >
                    {page.map((customer) => (
                      <article
                        className="group flex min-h-[310px] flex-col rounded-[1.75rem] border border-white bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-2 hover:border-orange-100 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] md:p-7"
                        key={customer.name}
                      >
                        <header className="flex items-center justify-between gap-4">
                          <div className="flex min-w-0 items-center gap-3.5">
                            <img
                              src={customer.image}
                              alt={`${customer.name}'s profile`}
                              className="h-12 w-12 rounded-2xl object-cover ring-2 ring-primary/20"
                              loading="lazy"
                            />
                            <div className="min-w-0">
                              <h3 className="truncate font-chivo text-base font-bold text-secondary">
                                {customer.name}
                              </h3>
                              <p className="mt-0.5 font-jost text-xs text-secondary/55">
                                {customer.date}
                              </p>
                            </div>
                          </div>
                          <FaGoogle
                            aria-label="Google review"
                            className="shrink-0 text-xl text-[#4285F4]"
                          />
                        </header>

                        <div
                          className="mt-6 flex gap-1 text-primary"
                          aria-label="5 out of 5 stars"
                        >
                          {Array.from({ length: 5 }, (_, index) => (
                            <FaStar aria-hidden="true" key={index} />
                          ))}
                        </div>
                        <p className="mt-4 font-jost text-[15px] leading-7 text-secondary/75">
                          {customer.review}
                        </p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 md:mt-6">
              <div className="flex gap-2" aria-label="Google review slides">
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
                    aria-label={`Show review group ${index + 1}`}
                    aria-current={activePage === index ? "true" : undefined}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 bg-white text-secondary shadow-sm transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Show previous Google reviews"
                >
                  <FiArrowLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 bg-white text-secondary shadow-sm transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Show next Google reviews"
                >
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-jost text-sm font-bold text-white shadow-[0_12px_25px_rgba(252,124,22,0.28)] transition hover:-translate-y-1 hover:bg-[#e96c0a] hover:shadow-[0_16px_30px_rgba(252,124,22,0.36)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View All Reviews on Google
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default GoogleReviews;
