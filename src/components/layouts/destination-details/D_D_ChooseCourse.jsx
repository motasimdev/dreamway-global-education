import { useMemo, useState } from "react";
import { Link } from "react-router";
import categories from "../../../data/categories.json";
import courses from "../../../data/courses.json";
import universities from "../../../data/universities.json";
import Container from "../../Container";

const D_D_ChooseCourse = ({ country }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const countryCourses = useMemo(() => {
    if (!country?.id) return [];
    return courses.filter((course) => course.countryId === country.id);
  }, [country]);

  const categoryCounts = useMemo(() => {
    const counts = {};
    countryCourses.forEach((course) => {
      counts[course.categoryId] = (counts[course.categoryId] || 0) + 1;
    });
    return counts;
  }, [countryCourses]);

  const totalCourses = countryCourses.length;

  const visibleCategories = useMemo(() => {
    const all = { name: "All", count: totalCourses };
    const filtered = categories
      .filter((cat) => (categoryCounts[cat.id] || 0) > 0)
      .map((cat) => ({
        name: cat.name,
        count: categoryCounts[cat.id] || 0,
      }));
    return [all, ...filtered];
  }, [categoryCounts, totalCourses]);

  const universityMap = useMemo(() => {
    const map = {};
    universities.forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, []);

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") return countryCourses;
    const category = categories.find((cat) => cat.name === activeCategory);
    if (!category) return [];
    return countryCourses.filter((course) => course.categoryId === category.id);
  }, [activeCategory, countryCourses, categories]);

  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Study Opportunities
          </p>
          <h2 className="font-chivo text-3xl font-bold text-secondary md:text-4xl lg:text-[42px]">
            Choose Your Course
          </h2>
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Explore a wide range of courses tailored to your career goals.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {visibleCategories.map((category) => {
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`rounded-full border px-5 py-2.5 font-jost text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-secondary/20 bg-white text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                {category.name} ({category.count})
              </button>
            );
          })}
        </div>

        {filteredCourses.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-jost text-base text-secondary/70 md:text-lg">
              No courses found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => {
              const universityName = universityMap[course.universityId] || "";

              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  className="block no-underline"
                >
                  <article className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-tertiary shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]">
                    <div className="relative h-56 overflow-hidden">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-chivo text-xl font-bold text-secondary">
                        {course.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-jost text-sm text-secondary/70">
                          {course.level}
                        </span>
                        <span className="font-jost text-sm text-secondary/70">
                          • {course.duration.value} {course.duration.unit}
                        </span>
                      </div>
                      <p className="mt-2 font-jost text-sm text-secondary/70">
                        {universityName}
                      </p>
                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2.5 font-jost text-sm font-semibold text-secondary transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                          Explore Course
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default D_D_ChooseCourse;
