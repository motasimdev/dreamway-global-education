import React, { useEffect, useRef, useState } from "react";
import Container from "../../Container";
import prgplane from "/src/assets/svg/progressplane.svg";
import succeed from "/src/assets/svg/succeed.svg";
import Progressbar from "../../../hooks/Progressbar";

const SuccessRate = () => {
  const [count, setCount] = useState(0);
  const [isVisual, setIsVisual] = useState(false);
  const progressBarRef = useRef(null);

  // =========== progress number ===============
  useEffect(() => {
    if (isVisual) {
      let start = 0;
      const end = 89; // আপনি যত পর্যন্ত কাউন্ট করতে চান
      const duration = 1900; // আপনার প্রোগ্রেস বারের স্পিড (duration-1900)

      // প্রতিটা সংখ্যা বাড়তে কতটুকু সময় লাগবে তার হিসাব
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
      setCount(0); // ভিউপোর্ট থেকে বের হয়ে গেলে আবার ০ হয়ে যাবে
    }
  }, [isVisual]);
  // =========== progress number ===============

  //======== progress bar animation when it comes into view ==============
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ইউজার যখন স্ক্রল করে এই এলিমেন্টটি স্ক্রিনে দেখবে
        if (entry.isIntersecting) {
          setIsVisual(true); // অ্যানিমেশন স্টার্ট করার স্টেট ট্রু হবে
          observer.unobserve(entry.target); // একবার অ্যানিমেশন হয়ে গেলে অবজার্ভ করা বন্ধ করে দেবে
        }
      },
      { threshold: 0.2 }, // এলিমেন্টটির ২০% স্ক্রিনে আসলেই ট্রিগার হবে
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => observer.disconnect();
  }, []);
  //======== progress bar animation when it comes into view ==============
  return (
    <>
      <section className="relative py-15 md:py-20 lg:py-25 lg:mt-120 z-20 bg-gray-200 scroll-smooth">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">

            <div className="relative mb-10 md:mb-0 md:w-1/2 md:pl-10 md:pr-12 lg:pr-15 md:py-33 lg:py-40">
              <img src={succeed} alt="" className="absolute -top-10 lg:-top-15 left-0 md:-left-8 lg:-left-10" />
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary font-chivo">
                  Our Success Rate
                </h3>
                <p className="text-sm lg:text-lg font-medium font-jost text-secondary mt-4">
                  We have helped thousands of students achieve their dreams of
                  studying abroad.
                </p>
              </div>
            </div>

            {/* ====================== flex ============================== */}

            <div className="lg:w-1/2 relative z-10 md:z-0">
              {/* ============= 1st bar =================== */}

              <div className="">
                <Progressbar
                  title={"Admissions Success Rate"}
                  description={
                    "over 89% of our students have successfully gained admission to their desired universities."
                  }
                  target={89}
                  prgplane={prgplane}
                />
              </div>
              {/* ============= 1st bar =================== */}

              {/* ============= 2nd bar =================== */}
              <div className="">
                <Progressbar
                  title={"visa success rate"}
                  description={
                    "over 89% of our students have successfully gained admission to their desired universities."
                  }
                  target={81}
                  prgplane={prgplane}
                />
              </div>
              {/* ============= 2nd bar =================== */}

              {/* ============= 3rd bar =================== */}
              <div className="">
                <Progressbar
                  title={"student satisfaction rate"}
                  description={
                    "over 89% of our students have successfully gained admission to their desired universities."
                  }
                  target={94}
                  prgplane={prgplane}
                />
              </div>
              {/* ============= 3rd bar =================== */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SuccessRate;
