import React from "react";

const Txt16 = ({ text, className,children }) => {
  return (
    <>
      <p className={`text-xs md:text-[15px] lg:text-base ${className}`}>{text}{children}</p>
    </>
  );
};

export default Txt16;
