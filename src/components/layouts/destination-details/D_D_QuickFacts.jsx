import {
  FiDollarSign,
  FiGlobe,
  FiMapPin,
  FiCalendar,
  FiBookOpen,
  FiUsers,
  FiLayers,
} from "react-icons/fi";
import universities from "/src/data/universities.json";
import courses from "/src/data/courses.json";
import Container from "../../Container";

const D_D_QuickFacts = ({ country }) => {
  const totalUniversities = universities.filter(
    (u) => u.countryId === country.id,
  ).length;
  const totalCourses = courses.filter((c) => c.countryId === country.id).length;

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container>
        <div className="mb-8 md:mb-10">
          <p className=" text-center mb-2 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            At a glance
          </p>
          <h2 className=" text-center font-chivo text-3xl font-bold text-secondary md:text-4xl">
            Quick Facts
          </h2>
          <p className="mt-2 text-center  font-jost text-base text-secondary/70 md:text-lg">
            Everything you need to know at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          {/* Row 1-2 */}
          {/* 1 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                <FiDollarSign size={22} className="group-hover:rotate-360 transition-transform duration-300" />
              </div>
              <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                Currency
              </p>
              <p className="mt-1 font-jost text-base font-semibold text-secondary md:text-lg">
                {country.currency}
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                <FiGlobe size={22} className="group-hover:rotate-360 transition-transform duration-300" />
              </div>
              <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                Language
              </p>
              <p className="mt-1 font-jost text-base font-semibold text-secondary md:text-lg">
                {country.language}
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                <FiMapPin size={22} className="group-hover:rotate-360 transition-transform duration-300" />
              </div>
              <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                Capital
              </p>
              <p className="mt-1 font-jost text-base font-semibold text-secondary md:text-lg">
                {country.capital}
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                <FiUsers size={22} className="group-hover:rotate-360 transition-transform duration-300" />
              </div>
              <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                Total Universities
              </p>
              <p className="mt-1 font-jost text-base font-semibold text-secondary md:text-lg">
                {totalUniversities}
              </p>
            </div>
          </div>

          {/* 2 */}
          {/* study level */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-1">
            <div className="mb-4 mx-auto lg:w-12 rounded-xl bg-orange-50 p-3 text-primary">
              <FiBookOpen
                size={22}
                className="group-hover:rotate-360 transition-transform duration-300 mx-auto"
              />
            </div>
            <p className="font-jost text-xs font-semibold text-center uppercase tracking-wider text-secondary/60">
              Study Levels
            </p>
            <div className="mt-3 flex flex-col flex-wrap gap-2 text-center">
              {(country.studyLevels || []).map((level) => (
                <span
                  key={level}
                  className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 font-jost text-lg font-semibold text-primary"
                >
                  {level}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* row 3 */}
        {/* 1 */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-1">
            <div className="mb-4 mx-auto lg:w-12 rounded-xl bg-orange-50 p-3 text-primary">
              <FiCalendar size={22} className="group-hover:rotate-360 transition-transform duration-300 mx-auto"/>
            </div>
            <p className="font-jost text-center text-xs font-semibold uppercase tracking-wider text-secondary/60">
              Available Intakes
            </p>
            <div className="mt-3 text-center flex flex-col gap-2">
              {(country.intakes || []).map((intake) => (
                <span
                  key={intake}
                  className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 font-jost text-lg font-semibold text-primary"
                >
                  {intake}
                </span>
              ))}
            </div>
          </div>

          {/* 2 */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="mb-4 mx-auto lg:w-12 rounded-xl bg-orange-50 p-3 text-primary">
                  <FiLayers size={22} className="group-hover:rotate-360 transition-transform duration-300 mx-auto"/>
                </div>
                <div>
                  <p className="font-jost text-center text-xs font-semibold uppercase tracking-wider text-secondary/60">
                    Available study opportunities
                  </p>
                  <div className="mt-1">
                    <div className="text-center">
                      <span className="font-jost text-2xl font-bold text-secondary">
                        {totalUniversities}
                      </span>
                      <span className="ml-2 font-jost text-lg text-secondary/70">
                        Universities
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-jost text-2xl font-bold text-secondary">
                        {totalCourses}
                      </span>
                      <span className="ml-2 font-jost text-lg text-secondary/70">
                        Courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default D_D_QuickFacts;
