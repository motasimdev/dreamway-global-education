import React from "react";
import Container from "../../Container";
import plane from "/src/assets/svg/plane.svg";

const Banner = () => {
  return (
    <>
      <section className="fixed lg:top-18 left-0 w-full bg-[url(/src/assets/homeBanner2.png)] bg-cover bg-center bg-no-repeat ">
        <div className="pt-15 pb-5 md:py-20 lg:py-30 bg-[#00000073]">
          <Container>
            <div className="flex justify-between items-center flex-col lg:flex-row gap-10">
              <div className="lg:w-2/3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white pr-20 md:pr-70 lg:pr-30 md:pb-4 lg:pb-5 font-chivo">
                  One step closer to your dream university
                </h1>
                <p className="inline text-sm md:text-lg lg:text-[27px] lg:font-medium border-b-2 border-primary text-white mt-4 font-jost">
                  Discover your suitable university with our expert guidance
                </p>
              </div>
              <div className="lg:w-1/3">
                <img
                  src={plane}
                  alt="Plane"
                  className="size-40 md:size-60 lg:size-80 absolute top-0 right-0 md:right-40 lg:right-60"
                />

              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
