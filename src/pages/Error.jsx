import React from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { FaPlaneDeparture } from "react-icons/fa6";
import errorr from "/src/assets/404 Page Not Found.png";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fffaf6] py-8 md:py-10 lg:py-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <img src={errorr} alt="error" className="size-50" />
          </div>
          <div className="mt-3">
            <Heading
              text="Oops! Page Not Found"
              className="font-chivo font-bold text-secondary"
            />
          </div>
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            The page you are looking for does not exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-jost text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Back to Home
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-6 py-3 font-jost text-sm font-semibold text-secondary transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Go Back
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Error;
