import Select from "react-select";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { customSelectStyles } from "../../../styles/selectStyles";
const CoursesFilter = ({
  searchTerm,
  onSearchChange,

  selectedCountry,
  selectedStudyLevel,
  selectedCategory,

  onCountryChange,
  onStudyLevelChange,
  onCategoryChange,

  countryOptions,
  studyLevelOptions,
  categoryOptions,

  hasActiveFilters,
  clearAllFilters,

  filteredCount,
  totalCount,
}) => {
//   const filteredCount = filteredCourses.length;
//   const totalCount = courses.length;
  return (
    <>
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
              onChange={onSearchChange}
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
                onChange={onCountryChange}
                placeholder="Country"
                isClearable
                isSearchable
                styles={customSelectStyles}
              />
            </div>

            <div className="sm:w-56">
              <Select
                inputId="study-level-select"
                options={studyLevelOptions}
                value={selectedStudyLevel}
                onChange={onStudyLevelChange}
                placeholder="Study Level"
                isClearable
                isSearchable
                styles={customSelectStyles}
              />
            </div>

            <div className="sm:w-56">
              <Select
                inputId="category-select"
                options={categoryOptions}
                value={selectedCategory}
                onChange={onCategoryChange}
                placeholder="Category"
                isClearable
                isSearchable
                styles={customSelectStyles}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-jost text-sm text-secondary/70">
          {filteredCount === totalCount
            ? `Showing ${totalCount} courses`
            : `Showing ${filteredCount} of ${totalCount} courses`}
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAllFilters}
            className="rounded-full border border-secondary/20 bg-white px-5 py-2 font-jost text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </>
  );
};

export default CoursesFilter;
