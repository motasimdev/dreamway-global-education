import {
  HiAcademicCap,
  HiBookOpen,
  HiShieldCheck,
  HiArrowRight,
} from "react-icons/hi2";

const renderLevelIcon = (level) => {
  if (!level) return <HiAcademicCap size={22} className="text-primary" />;
  const lower = level.toLowerCase();
  if (lower.includes("master")) {
    return <HiBookOpen size={22} className="text-primary" />;
  }
  if (lower.includes("phd") || lower.includes("doctor")) {
    return <HiShieldCheck size={22} className="text-primary" />;
  }
  return <HiAcademicCap size={22} className="text-primary" />;
};

const U_D_ProgramCard = ({ universitySlug, level, programCount, description }) => {

  return (
    <div
      data-university-slug={universitySlug}
      className="group relative flex h-full flex-col rounded-3xl border-2 border-orange-100 bg-white p-6 md:p-8 shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] hover:border-primary/30"
    >
      {/* Decorative background element — large faded graduation cap */}
      <div className="absolute top-0 right-0 opacity-5 transition-transform duration-700 group-hover:scale-110">
        <HiAcademicCap size={140} className="text-secondary" />
      </div>

      <div className="relative z-10 flex flex-col gap-5">
        {/* Header: icon + title */}
        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-xl bg-orange-50 p-2.5 text-primary">
            {renderLevelIcon(level)}
          </div>
          <h3 className="font-chivo text-2xl font-bold text-secondary md:text-3xl">
            {level}
          </h3>
        </div>

        {/* Program count — visually prominent */}
        <p className="font-chivo text-4xl font-bold text-primary md:text-5xl">
          {programCount}
          <span className="font-jost text-base font-semibold text-secondary/60">
            {" "}
           Available Programs
          </span>
        </p>

        {/* Description */}
        <p className="max-w-md font-jost text-sm text-secondary/60 leading-relaxed md:text-base">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-2 cursor-pointer">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2.5 font-jost text-sm font-semibold text-secondary transition-all duration-300 group-hover:border-primary group-hover:text-primary">
            Explore Programs
            <HiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default U_D_ProgramCard;