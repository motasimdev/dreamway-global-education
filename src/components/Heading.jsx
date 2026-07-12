import React from "react";

const Heading = ({ className, text }) => {
  return (
    <>
      <h3
        className={`text-3xl md:text-4xl lg:text-[48px] font-bold ${className}`}
      >
        {text}
      </h3>
    </>
  );
};

export default Heading;
