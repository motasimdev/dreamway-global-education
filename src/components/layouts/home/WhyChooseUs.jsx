import React from "react";
import Container from "../../Container";
import { FaGraduationCap } from "react-icons/fa";
import Heading from "../../Heading";
import RoundProgressbar from "../../../hooks/RoundProgressbar";
import ques from "/src/assets/svg/question.svg";

const WhyChooseUs = () => {
  return (
    <>
      <section className="relative pb-15 pt-53 md:py-20 lg:py-25 bg-[#fffaf6] z-20 ">
        <Container>
          <div className="lg:hidden absolute top-13 md:top-85 left-1/2 -translate-x-1/2 bg-gray-100 rounded-full z-50 shadow-lg shadow-gray-500">
            <RoundProgressbar duration={3000} target={90} size={100} />
            <div className="absolute top-1/2 left-1/2 -translate-1/2">
              <p className="font-jost font-semibold text-secondary text-xl bg-transparent ">
                Overall <br /> Success
              </p>
            </div>
          </div>
          {/* ===== circle sm ======= */}

          <Heading
            text={"Why Choose Us?"}
            className={
              "relative z-10 text-center pb-9 lg:pb-14 font-chivo text-secondary drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)]"
            }
          />

          <img
            src={ques}
            alt="Question Mark"
            className="absolute top-45 md:top-14 lg:top-10 left-1/2 -translate-x-1/2 size-30 lg:size-50"
          />
          <div className="relative flex flex-col md:flex-row justify-between items-center md:gap-x-6">
            {/* ===== circle lg ======= */}
            <div className="hidden lg:block absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-gray-100 rounded-full z-50 shadow-lg shadow-gray-500">
              <RoundProgressbar duration={3000} target={90} size={150} />
              <div className="absolute top-1/2 left-1/2 -translate-1/2">
                <p className="font-jost font-semibold text-secondary text-2xl">
                  Overall <br /> Success
                </p>
              </div>
            </div>
            {/* ===== circle lg ======= */}

            {/* ==== flex ==== */}
            <div className="md:w-1/2 flex flex-col gap-y-6 mb-6 md:mb-0">
              <div className="py-9 px-3 md:py-11 lg:px-11 bg-tertiary shadow-md hover:shadow-lg hover:shadow-gray-500 rounded-md hover:-translate-y-2 transition-all duration-200">
                <FaGraduationCap className="mx-auto text-6xl" />
                <p className="pt-3 lg:pt-3 text-[17px] font-jost font-medium text-justify md:text-center text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, a! Cum corporis blanditiis veritatis vero impedit?
                  Cupiditate qui nihil, dolorem quia ea fuga vitae.
                </p>
              </div>

              <div className="py-9 px-3 md:py-11 lg:px-11 bg-tertiary shadow-md hover:shadow-lg hover:shadow-gray-500 rounded-md hover:-translate-y-2 transition-all duration-200">
                <FaGraduationCap className="mx-auto text-6xl" />
                <p className="pt-3 lg:pt-3 text-[17px] font-jost font-medium text-justify md:text-center text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, a! Cum corporis blanditiis veritatis vero impedit?
                  Cupiditate qui nihil, dolorem quia ea fuga vitae.
                </p>
              </div>
            </div>

            {/* ===== flex ==== */}

            <div className="md:w-1/2 flex flex-col gap-y-7">
              <div className="py-9 px-3 md:py-11 lg:px-11 bg-tertiary shadow-md hover:shadow-lg hover:shadow-gray-500 rounded-md hover:-translate-y-2 transition-all duration-200">
                <FaGraduationCap className="mx-auto text-6xl" />
                <p className="pt-3 lg:pt-3 text-[17px] font-jost font-medium text-justify md:text-center text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, a! Cum corporis blanditiis veritatis vero impedit?
                  Cupiditate qui nihil, dolorem quia ea fuga vitae.
                </p>
              </div>

              <div className="py-9 px-3 md:py-11 lg:px-11 bg-tertiary shadow-md hover:shadow-lg hover:shadow-gray-500 rounded-md hover:-translate-y-2 transition-all duration-200">
                <FaGraduationCap className="mx-auto text-6xl" />
                <p className="pt-3 lg:pt-3 text-[17px] font-jost font-medium text-justify md:text-center text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, a! Cum corporis blanditiis veritatis vero impedit?
                  Cupiditate qui nihil, dolorem quia ea fuga vitae.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyChooseUs;
