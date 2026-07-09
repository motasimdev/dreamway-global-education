import React, { useState, useEffect, useRef } from "react";
import prgplane from "/src/assets/svg/progressplane.svg";

const Progressbar = ({ title, description, target, prgplane }) => {
  const [isVisual, setIsVisual] = useState(false);
  const [count, setCount] = useState(0);
  const progressBarRef = useRef(null);

  // ১. ভিউপোর্ট অবজার্ভার (স্ক্রিনে আসলে ট্রিগার হবে)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisual(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // ২. কাউন্টার অ্যানিমেশন (টার্গেট নাম্বার অনুযায়ী অটোমেটিক চলবে)
  useEffect(() => {
    if (isVisual) {
      let start = 0;
      const end = target;
      const duration = 1900;
      const incrementTime = Math.floor(duration / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isVisual, target]);
  return (
    <>
      <div className="mb-6" ref={progressBarRef}>
        <h4 className="text-xl text-center md:text-left lg:text-2xl font-jost font-medium text-secondary">
          {title}
        </h4>
        <p className="text-sm text-center md:text-left lg:text-base font-jost font-normal text-secondary">
          {description}
        </p>

        <div className="relative flex justify-between items-center mt-4">
          <div className="w-full h-2.5 bg-gray-300 rounded-full">
            <div
              className="relative h-2.5 bg-primary rounded-full transition-all duration-1900 ease-out"
              style={{ width: isVisual ? `${target}%` : "0%" }}
            >
              {/* ডাইনামিক সংখ্যা */}
              <span className="absolute -right-2 -top-6 text-sm font-medium text-primary font-jost">
                {count}%
              </span>

              {/* প্লেন আইকন */}
              <img
                src={prgplane}
                alt="plane"
                className="size-9 -rotate-12 absolute -right-5 top-1/2 -translate-y-1/2 max-w-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
