import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-330 m-auto px-3 md:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
