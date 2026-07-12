import React from "react";
import Container from "../../Container";

const BookConsultation = () => {
  return (
    <>
      <section className="relative z-20 mb-7 md:mb-10 lg:mb-10">
        <Container>
          <div className="bg-[url(/src/assets/consultation.png)] bg-cover bg-center bg-no-repeat rounded-full">
            <div className="py-12 md:py-20 lg:py-15 px-4 md:px-6 lg:px-10 bg-[#ffe7d4ad] rounded-full">
              <div className="flex justify-between items-center">
                <div className="w-1/2  lg:pr-13">
                  <p className="text-4xl text-secondary font-bold font-chivo">
                    Study Abroad with Dreamway Global Education
                  </p>
                </div>
                <div className="py-3 px-6 bg-primary rounded-full cursor-pointer shadow-xl shadow-tertiary">
                  <p className="text-secondary text-2xl font-bold font-jost drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
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
