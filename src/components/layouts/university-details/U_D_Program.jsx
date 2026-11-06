import { useMemo } from "react";
import courses from "/src/data/courses.json";
import Container from "../../Container";
import Heading from "../../Heading";
import U_D_ProgramCard from "./U_D_ProgramCard";

const levelDescriptions = {
  Bachelor: "Explore undergraduate degrees across multiple disciplines.",
  Master: "Advanced graduate programs to advance your professional career.",
  PhD: "Research-intensive doctoral programs for academic leaders.",
  Doctorate: "Research-intensive doctoral programs for academic leaders.",
};

const U_D_Program = ({ university }) => {
  if (!university) return null;

  const { availableLevels, courses: courseIds, slug } = university;

  const levelCourseCounts = useMemo(() => {
    if (!courseIds || !courseIds.length || !availableLevels?.length) return {};

    const counts = {};
    availableLevels.forEach((level) => {
      counts[level] = courses.filter(
        (c) => courseIds.includes(c.id) && c.level === level,
      ).length;
    });
    return counts;
  }, [courseIds, availableLevels]);

  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Programs
          </p>
          <Heading
            text="Study Levels Offered"
            className="font-chivo font-bold text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Explore the range of programs available at this university.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {availableLevels?.map((level) => (
            <U_D_ProgramCard
              key={level}
              universitySlug={slug}
              level={level}
              programCount={levelCourseCounts[level] || 0}
              description={levelDescriptions[level] || ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default U_D_Program;