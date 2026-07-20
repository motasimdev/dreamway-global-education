import { useMemo, useState } from "react";
import { Link } from "react-router";
import Select from "react-select";
import { HiMagnifyingGlass } from "react-icons/hi2";
import courses from "/src/data/courses.json";
import universities from "/src/data/universities.json";
import countries from "/src/data/countries.json";
import categories from "/src/data/categories.json";
import Container from "../components/Container";
import Heading from "../components/Heading";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedStudyLevel, setSelectedStudyLevel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const universityMap = useMemo(() => {
    const map = {};
    universities.forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, []);

  const countryMap = useMemo(() => {
    const map = {};
    countries.forEach((c) => {
      map[c.id] = c.name;
    });
    return map;
  }, []);

  const countryOptions = useMemo(
    () =>
      countries.map((c) => ({
        value: c.id,
        label: c.name,
      })),
    []
  );

  const studyLevelOptions = useMemo(() => {
    const levels = new Set();
    courses.forEach((course) => {
      if (course.level) levels.add(course.level);
    });
    return Array.from(levels)
      .sort()
      .map((level) => ({
        value: level,
        label: level,
      }));
  }, []);

  const categoryOptions = useMemo(
    () =>
      categories.map((cat) => ({
        value: cat.id,
        label: cat.name,
      })),
    []
  );

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "9999px",
      borderColor: "#e5e7eb",
      padding: "2px 8px",
      minHeight: "42px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#fc7c16",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffffff" : "#36454f",
      backgroundColor: state.isSelected ? "#fc7c16" : "#ffffff",
      "&:hover": {
        backgroundColor: "#ffefe2a8",
        color: "#fc7c16",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 10px 15px -3px rgba(54, 69, 79, 0.1)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      fontSize: "0.875rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#36454f",
      fontSize: "0.875rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return courses.filter((course) => {
      if (term && !course.title.toLowerCase().includes(term)) return false;
      if (selectedCountry && course.countryId !== selectedCountry.value) return false;
      if (selectedStudyLevel && course.level !== selectedStudyLevel.value) return false;
      if (selectedCategory && course.categoryId !== selectedCategory.value) return false;
      return true;
    });
  }, [searchTerm, selectedCountry, selectedStudyLevel, selectedCategory]);

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Courses
          </p>
          <Heading
            text="Explore Our Courses"
            className="font-chivo font-bold text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Discover a wide range of world-class courses tailored to your career goals.
          </p>
        </div>

        <div className="mb-10 rounded-3xl border border-orange-100 bg-white p-4 shadow-[0_14px_35px_rgba(54,69,79,0.08)] md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4">
            <div className="relative flex-1">
              <HiMagnifyingGlass
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-full border border-secondary/20 bg-white py-2.5 pl-11 pr-4 font-jost text-sm text-secondary placeholder:text-secondary/50 transition-all duration-300 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:w-auto">
              <div className="sm:w-56">
                <Select
                  inputId="country-select"
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  placeholder="Country"
                  isClearable
                  isSearchable
                  styles={customStyles}
                />
              </div>

              <div className="sm:w-56">
                <Select
                  inputId="study-level-select"
                  options={studyLevelOptions}
                  value={selectedStudyLevel}
                  onChange={setSelectedStudyLevel}
                  placeholder="Study Level"
                  isClearable
                  isSearchable
                  styles={customStyles}
                />
              </div>

              <div className="sm:w-56">
                <Select
                  inputId="category-select"
                  options={categoryOptions}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Category"
                  isClearable
                  isSearchable
                  styles={customStyles}
                />
              </div>
            </div>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-jost text-base text-secondary/70 md:text-lg">
              No courses found.
            </p>
            <p className="mt-2 font-jost text-sm text-secondary/60">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => {
              const universityName = universityMap[course.universityId] || "";
              const countryName = countryMap[course.countryId] || "";

              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  className="block no-underline"
                >
                  <article className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]">
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
                      <p className="mt-2 font-jost text-sm text-secondary/70">
                        {universityName}
                      </p>
                      <p className="mt-1 font-jost text-sm text-secondary/70">
                        {countryName}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-jost text-sm text-secondary/70">
                          {course.level}
                        </span>
                        <span className="font-jost text-sm text-secondary/70">
                          • {course.duration.value} {course.duration.unit}
                        </span>
                      </div>
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

export default Courses;
