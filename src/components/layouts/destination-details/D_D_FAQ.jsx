import { useState } from "react";
import Container from "../../Container";
import Heading from "../../Heading";

const D_D_FAQ = ({ country }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = country?.faq;

  if (!faqs?.length) return null;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Got Questions?
          </p>
          <Heading
            text="Frequently Asked Questions"
            className="font-chivo font-bold text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Find quick answers to common questions about studying abroad with
            Dreamway Global.
          </p>
        </div>

        <div className="mx-auto max-w-[900px] space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[1.5rem] border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-primary shadow-sm"
                    : "border-orange-100 hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8 md:py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    id={`faq-question-${index}`}
                    className="font-jost text-base font-semibold text-secondary md:text-lg"
                  >
                    {item.question}
                  </span>
                  <span
                    className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={isOpen ? "rotate-45" : "rotate-0"}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 md:px-8">
                      <p className="font-jost text-[15px] md:text-lg leading-7 text-secondary/75">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default D_D_FAQ;
