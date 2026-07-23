import { useMemo, useState } from "react";
import Select from "react-select";
import { HiMagnifyingGlass } from "react-icons/hi2";
import CustomPaginate from "../components/CustomPaginate";
import courses from "/src/data/courses.json";
import universities from "/src/data/universities.json";
import countries from "/src/data/countries.json";
import categories from "/src/data/categories.json";
import Container from "../components/Container";
import Heading from "../components/Heading";
import CoursesCard from "../components/layouts/courses/CoursesCard";
import { customSelectStyles } from "../styles/selectStyles";
import CoursesFilter from "../components/layouts/courses/CoursesFilter";

const ITEMS_PER_PAGE = 12;

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedStudyLevel, setSelectedStudyLevel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

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
    [],
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
    [],
  );

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return courses.filter((course) => {
      if (term && !course.title.toLowerCase().includes(term)) return false;
      if (selectedCountry && course.countryId !== selectedCountry.value)
        return false;
      if (selectedStudyLevel && course.level !== selectedStudyLevel.value)
        return false;
      if (selectedCategory && course.categoryId !== selectedCategory.value)
        return false;
      return true;
    });
  }, [searchTerm, selectedCountry, selectedStudyLevel, selectedCategory]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredCourses.length / ITEMS_PER_PAGE),
  );

  const currentItems = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredCourses]);

  const hasActiveFilters = Boolean(
    searchTerm.trim() ||
    selectedCountry ||
    selectedStudyLevel ||
    selectedCategory,
  );

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCountry(null);
    setSelectedStudyLevel(null);
    setSelectedCategory(null);
    setCurrentPage(0);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  const handleCountryChange = (option) => {
    setSelectedCountry(option);
    setCurrentPage(0);
  };

  const handleStudyLevelChange = (option) => {
    setSelectedStudyLevel(option);
    setCurrentPage(0);
  };

  const handleCategoryChange = (option) => {
    setSelectedCategory(option);
    setCurrentPage(0);
  };

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
            Discover a wide range of world-class courses tailored to your career
            goals.
          </p>
        </div>

        <CoursesFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          selectedCountry={selectedCountry}
          selectedStudyLevel={selectedStudyLevel}
          selectedCategory={selectedCategory}
          onCountryChange={handleCountryChange}
          onStudyLevelChange={handleStudyLevelChange}
          onCategoryChange={handleCategoryChange}
          countryOptions={countryOptions}
          studyLevelOptions={studyLevelOptions}
          categoryOptions={categoryOptions}
          hasActiveFilters={hasActiveFilters}
          clearAllFilters={clearAllFilters}
          filteredCount={filteredCourses.length}
          totalCount={courses.length}
        />

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
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((course) => {
                const universityName = universityMap[course.universityId] || "";
                const countryName = countryMap[course.countryId] || "";

                return (
                  <CoursesCard
                    key={course.id}
                    course={course}
                    universityName={universityName}
                    countryName={countryName}
                  />
                );
              })}
            </div>

            {pageCount > 1 && (
              <div className="mt-10 flex justify-center">
                <CustomPaginate
                  pageCount={pageCount}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                  onPageChange={({ selected }) => setCurrentPage(selected)}
                  currentPage={currentPage}
                  containerClassName="flex items-center justify-center gap-2"
                  pageClassName="page-item"
                  pageLinkClassName="page-link inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-white font-jost text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
                  previousClassName="page-item"
                  previousLabel="Previous"
                  previousLinkClassName="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-white px-4 py-2 font-jost text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
                  nextClassName="page-item"
                  nextLabel="Next"
                  nextLinkClassName="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-white px-4 py-2 font-jost text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
                  activeClassName="!bg-primary !text-white !border-primary hover:!text-white"
                  activeLinkClassName="!text-white"
                  disabledClassName="opacity-40 pointer-events-none"
                />
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default Courses;
