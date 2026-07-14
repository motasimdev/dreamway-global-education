import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";

const faqData = [
  {
    question:
      "How do I choose the right country and university for my studies?",
    answer:
      "Our experienced counsellors assess your academic background, budget, career goals, and personal preferences to recommend the best-fit institutions across destinations like Australia, Canada, the UK, and the USA.",
  },
  {
    question: "What documents are required for a student visa application?",
    answer:
      "Typical requirements include a valid passport, offer letter from your chosen institution, proof of funds, English proficiency test results, and health insurance. Our team provides a personalized checklist based on your destination.",
  },
  {
    question: "Do you offer scholarship guidance?",
    answer:
      "Yes, we help identify scholarship opportunities, prepare applications, and ensure you meet eligibility criteria. Many of our students have secured partial or full tuition waivers through our guidance.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Timelines vary by institution and country. On average, university applications take 2-4 weeks, while visa processing can take 4-8 weeks. We recommend starting at least 3-4 months before your intended intake.",
  },
  {
    question: "Can you help with part-time work opportunities while studying?",
    answer:
      "Absolutely. We guide you on local work regulations, help you understand permissible working hours, and connect you with resources to find part-time employment that complements your studies.",
  },
  {
    question:
      "What support do you provide after I arrive in my study destination?",
    answer:
      "Our support extends beyond the visa. We offer pre-departure briefings, airport pickup coordination, accommodation assistance, and ongoing guidance to help you settle comfortably.",
  },
  {
    question: "Is your consultancy service free?",
    answer:
      "Yes, our initial counselling and university shortlisting services are completely free. We believe in building trust first — any additional premium services are clearly communicated upfront with no hidden fees.",
  },
  {
    question: "How do I book a consultation with Dreamway Global?",
    answer:
      "You can book a free consultation through our website, call us directly, or visit our office. Our team will match you with a counsellor specializing in your preferred study destination and field.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#fffaf6] py-16 md:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Got Questions?
          </p>
          <div id="faq-heading">
            <Heading
              text="Frequently Asked Questions"
              className="font-chivo font-bold text-secondary"
            />
          </div>
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Find quick answers to common questions about studying abroad with
            Dreamway Global.
          </p>
        </div>

        <div className="mx-auto max-w-[900px] space-y-4">
          {faqData.map((item, index) => {
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
                      <p className="font-jost text-[15px] leading-7 text-secondary/75">
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

export default Faq;
