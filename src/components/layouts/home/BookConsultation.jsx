import React from "react";
import Container from "../../Container";

const BookConsultation = () => {
  return (
    <>
      <section className="relative z-20 mb-7 md:mb-10 lg:mb-10 bg-[#fffaf6]">
        <Container>
          <div className="bg-[url(/src/assets/consultation.png)] bg-cover bg-center bg-no-repeat rounded-full">
            <div className="py-2 md:py-8 lg:py-15 px-4 md:px-6 lg:px-10 bg-[#ffe7d4ad] rounded-full">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left px-4 md:w-1/2  lg:pr-8">
                  <p className="text-lg md:text-2xl lg:text-4xl text-secondary font-bold font-chivo">
                    Study Abroad with <span className="border-b-4 border-primary" >Dreamway Global Education</span>
                  </p>
                </div>
                <div className="py-1 lg:py-3 px-6 mt-3 md:mt-0 bg-primary rounded-full cursor-pointer shadow-xl shadow-tertiary hover:shadow-lg hover:shadow-gray-400 transition duration-300">
                  <p className="text-white text-base lg:text-2xl font-medium font-jost drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    Book a Free Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BookConsultation;
