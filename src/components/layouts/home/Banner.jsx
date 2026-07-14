import React from "react";
import Container from "../../Container";
import plane from "/src/assets/svg/plane.svg";
// import planeair from "/src/assets/svg/airplane.gif";

const Banner = () => {
  return (
    <>
      <section className="relative w-full h-auto lg:h-[160vh] bg-transparent">
        <div className="relative lg:sticky lg:top-19 lg:h-screen left-0 w-full bg-[url(/src/assets/homeBanner2.png)] bg-cover bg-center bg-no-repeat z-0">
          <div className="pt-15 pb-5 md:py-20 lg:py-0 lg:pb-0 lg:h-screen bg-[#00000073]">
            <Container>
              <div className="lg:py-30 flex justify-between items-center flex-col lg:flex-row gap-10">
                <div className="lg:w-2/3">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white pr-20 md:pr-70 lg:pr-60 md:pb-4 lg:pb-5 font-chivo drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]">
                    One step closer to your dream university
                  </h1>
                  <p className="inline text-sm md:text-lg lg:text-[27px] lg:font-medium border-b-2 border-primary text-white mt-4 font-jost drop-shadow-[0_4px_2px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]">
                    Discover your suitable university with our expert guidance
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img
                    src={plane}
                    alt="Plane"
                    className="size-40 md:size-60 lg:size-80 absolute top-0 right-0 md:right-40 lg:right-60 drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]"
                  />
                </div>
                {/* <img
                src={planeair}
                alt=""
                className="size-20 md:size-25 lg:size-30 -rotate-0 absolute top-4 md:top-8 lg:top-13 right-3 md:right-46 lg:right-71"
              /> */}
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
