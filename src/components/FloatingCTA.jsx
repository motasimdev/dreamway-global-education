import React from "react";
import { useNavigate } from "react-router";
import { FaGraduationCap } from "react-icons/fa6";

const FloatingCTA = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate("/contact")}
        className="animate-fade-in-up flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-jost text-sm font-semibold text-white shadow-lg shadow-orange-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-orange-200/70 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
        aria-label="Choose your course"
      >
        <FaGraduationCap aria-hidden="true" className="text-base" />
        <span className="whitespace-nowrap">Choose Your Course</span>
      </button>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;
