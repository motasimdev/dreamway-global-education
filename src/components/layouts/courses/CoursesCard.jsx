import { Link } from "react-router";

const CoursesCard = ({ course, universityName, countryName }) => {
  return (
    <>
      <Link
        // key={course.id}
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
    </>
  );
};

export default CoursesCard;
