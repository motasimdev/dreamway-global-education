import {
  FiBriefcase,
  FiCode,
  FiBarChart2,
  FiCpu,
  FiShield,
} from "react-icons/fi";
import Container from "../../Container";
import Heading from "../../Heading";
import careerimg from "/src/assets/svg/career.svg";

const iconMap = {
  software: FiCode,
  developer: FiCode,
  engineer: FiCode,
  devops: FiCode,
  frontend: FiCode,
  backend: FiCode,
  fullstack: FiCode,
  data: FiBarChart2,
  analyst: FiBarChart2,
  scientist: FiBarChart2,
  analytics: FiBarChart2,
  machine: FiCpu,
  ai: FiCpu,
  artificial: FiCpu,
  intelligence: FiCpu,
  ml: FiCpu,
  cybersecurity: FiShield,
  security: FiShield,
  cyber: FiShield,
};

const getCareerIcon = (career) => {
  const lower = career.toLowerCase();
  for (const [keyword, Icon] of Object.entries(iconMap)) {
    if (lower.includes(keyword)) return Icon;
  }
  return FiBriefcase;
};

const C_D_CareerOpportunities = ({ careerOpportunities }) => {
  if (!careerOpportunities?.length) return null;

  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="relative mx-auto mb-10 max-w-2xl text-center md:mb-14 z-10">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Career Opportunities
          </p>
          <Heading
            text="What Awaits You"
            className="font-chivo text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Explore the career paths available to graduates of this program.
          </p>
        </div>

        <div className="relative">
          <img
            src={careerimg}
            alt="career"
            className="absolute left-1/2 top-1/2 -translate-1/2 size-120 opacity-30 z-0 pointer-events-none"
          />
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 z-10">
            {careerOpportunities.map((career, index) => {
              const Icon = getCareerIcon(career);
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-orange-100 bg-tertiary p-8 text-center shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]"
                >
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="relative z-10 font-chivo text-lg font-bold text-secondary md:text-xl">
                    {career}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default C_D_CareerOpportunities;
