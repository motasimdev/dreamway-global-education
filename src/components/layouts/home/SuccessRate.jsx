import React, { useEffect, useRef, useState } from "react";
import Container from "../../Container";
import succeed from "/src/assets/svg/succeed.svg";
import Progressbar from "../../../hooks/Progressbar";

const SuccessRate = () => {

  return (
    <>
      <section className="relative py-15 md:py-20 lg:pt-25 lg:pb-40 lg:-mt-100 z-20 bg-gray-200 scroll-smooth">
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
