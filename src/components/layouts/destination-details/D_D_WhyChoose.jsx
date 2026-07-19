import React from "react";
import Container from "../../Container";
import { IoMdQuote } from "react-icons/io";

const STICKY_MARGIN_STEP = 85;
const STICKY_PADDING_STEP = 26;
const ANIMATION_BASE_OFFSET = 400;
const ANIMATION_OFFSET_STEP = 600;

const D_D_WhyChoose = ({ country }) => {
  const highlights = country?.highlights || [];

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f7f8fa]">
      <Container>
        <div className="mb-8 md:mb-10 lg:mb-0">
          <p className=" text-center mb-2 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose
          </p>
          <h3 className=" text-center font-chivo text-3xl font-bold text-secondary md:text-4xl">
            Why Study in {country?.name}?
          </h3>
          <p className="mt-2 text-center  font-jost text-base text-secondary/70 md:text-lg">
            {country?.description}
          </p>
        </div>

        <div className="px-5 flex flex-col gap-y-8 lg:gap-60 items-start relative overflow-x-clip">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative lg:sticky lg:top-28 w-full will-change-transform lg:[margin-left:var(--m-left)] lg:[padding-top:var(--p-top)]"
              style={{
                "--m-left": `${index * STICKY_MARGIN_STEP}px`,
                "--p-top": `${index * STICKY_PADDING_STEP}px`,
                "--start-x": `${ANIMATION_BASE_OFFSET + index * ANIMATION_OFFSET_STEP}px`,
                "--start-y": `${ANIMATION_BASE_OFFSET + index * ANIMATION_OFFSET_STEP}px`,
              }}
            >
              <article
                className={`w-full max-w-[700px] bg-[#ffefe2] text-primary border border-primary lg:translate-x-23 shadow-md lg:shadow-lg rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col justify-between lg:animate-fade-in lg:[animation-timeline:view()] relative`}
              >
                <span className="absolute top-4 right-6 text-8xl text-primary/20 font-serif leading-none select-none pointer-events-none">
                  <IoMdQuote />
                </span>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 lg:mb-6 font-chivo">
                    <span className="opacity-25">0{index + 1}</span> <br /> {highlight.title}
                  </h3>
                  {/* <div className="w-12 h-1 bg-primary rounded-full mb-4" /> */}
                  <p className="text-sm sm:text-base lg:text-xl font-medium leading-relaxed font-jost max-w-lg text-left">
                    {highlight.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-6 lg:pt-8 border-t border-primary/20 mt-6">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 font-medium">
                    Study in {country?.name}
                  </span>
                  <span className="text-xs sm:text-sm font-bold opacity-80">
                    Highlight 0{index + 1}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default D_D_WhyChoose;
