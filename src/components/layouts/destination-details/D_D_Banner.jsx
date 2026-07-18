import React from "react";
import Container from "../../Container";

const D_D_Banner = ({ countryBanner, title }) => {
  return (
    <>
      <section className="py-10 md:py-20 lg:py-10">
        <Container>
          <div className="text-center border-2 border-primary rounded-lg lg:py-4">
            <p className="mb-2 font-jost text-sm text-center font-semibold uppercase tracking-[0.2em] text-primary z-10">Study in</p>
            <h1
              className="text-7xl md:text-9xl font-extrabold font-chivo uppercase tracking-wider bg-clip-text text-transparent bg-cover bg-center select-none [-webkit-text-stroke:2px_#FC7C16]"
              style={{ backgroundImage: `url(${countryBanner})` }}
            >
              {title}
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default D_D_Banner;
