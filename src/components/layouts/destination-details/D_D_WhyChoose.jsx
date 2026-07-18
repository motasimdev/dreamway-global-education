import React from "react";
import Container from "../../Container";

const AESTHETIC_CARDS = [
  {
    id: 1,
    title: "01. Global Counseling",
    desc: "We start with your dreams, evaluating the best global education paths tailored just for your future career.",
    bgColor: "bg-slate-900 text-white",
  },
  {
    id: 2,
    title: "02. University Matching",
    desc: "Finding the perfect institution where your academic profile aligns with premium scholarships.",
    bgColor: "bg-teal-800 text-white",
  },
  {
    id: 3,
    title: "03. Document Presentation",
    desc: "Crafting a flawless statement of purpose and CV that leaves a powerful impression on the admissions board.",
    bgColor: "bg-amber-700 text-white",
  },
  {
    id: 4,
    title: "04. Visa Strategy & Launch",
    desc: "Navigating final embassy interviews with high-precision mock tests and total documentation readiness.",
    bgColor: "bg-zinc-800 text-white",
  },
];

const STICKY_MARGIN_STEP = 85;
const STICKY_PADDING_STEP = 26;
const ANIMATION_BASE_OFFSET = 80;
const ANIMATION_OFFSET_STEP = 20;

const D_D_WhyChoose = () => {
  return (
    <section>
      <Container>
        <article className="px-5 flex flex-col lg:gap-40 items-start relative overflow-x-clip">
          {AESTHETIC_CARDS.map((card, index) => (
            <div
              key={card.id}
              className="relative lg:sticky lg:top-28 w-full will-change-transform"
              style={{
                marginLeft: `${index * STICKY_MARGIN_STEP}px`,
                paddingTop: `${index * STICKY_PADDING_STEP}px`,
                "--enter-x": `${ANIMATION_BASE_OFFSET + index * ANIMATION_OFFSET_STEP}px`,
                "--enter-y": `${ANIMATION_BASE_OFFSET + index * ANIMATION_OFFSET_STEP}px`,
              }}
            >
              <div
                className={`w-full max-w-[700px] min-h-[300px] lg:translate-x-23 sm:min-h-[340px] lg:min-h-[320px] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] lg:shadow-[0_30px_100px_rgba(0,0,0,0.15)] flex flex-col justify-between ${card.bgColor} animate-fade-in [animation-timeline:view()] [animation-range:entry_20%_cover_30%]`}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 lg:mb-6 font-chivo">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg opacity-80 leading-relaxed font-jost max-w-xl text-justify">
                    {card.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-6 lg:pt-8 border-t border-white/10 mt-6">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 font-medium">
                    Dreamway Global Education
                  </span>
                  <span className="text-xs sm:text-sm font-bold opacity-80">
                    Phase 0{card.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </article>
      </Container>
    </section>
  );
};

export default D_D_WhyChoose;
