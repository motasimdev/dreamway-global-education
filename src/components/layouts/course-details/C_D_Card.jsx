import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router";
import countries from "/src/data/countries.json";

const C_D_Card = ({ university }) => {
  if (!university) return null;

  const {
    slug,
    name,
    logo,
    city,
    countryId,
    ranking,
    type,
    shortName,
    courses,
  } = university;
  const countryName = countries.find((c) => c.id === countryId)?.name ?? "";

  return (
    <Link to={`/universities/${slug}`} className="group block no-underline">
      <article className="flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] hover:border-primary/30">
        {/* Logo */}
        {/* flex h-full w-full items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 transition-transform duration-500 group-hover:scale-105 */}
        <div className="flex h-44 items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 p-8">
          {logo ? (
            <img
              src={logo}
              alt={name}
              // h-full w-full object-cover transition-transform duration-500 group-hover:scale-105
              className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-16 w-full max-w-[200px] items-center justify-center rounded-xl bg-orange-50 text-primary">
              <span className="font-chivo text-lg font-bold">
                {shortName || name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-chivo text-lg font-bold text-secondary md:text-xl">
            {name}
          </h3>

          <p className="mt-1 font-jost text-sm text-secondary/70">
            {city}
            <span className="text-primary font-medium">{countryName  ? `, ${countryName }` : ""}</span>
          </p>

          {/* Badges */}

          <div className="mt-4 flex flex-wrap gap-2">
            {ranking?.qsWorld && (
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                QS #{ranking.qsWorld}
              </span>
            )}

            {type && (
              <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                {type}
              </span>
            )}
          </div>

          {/* courses */}

          {courses?.length > 0 && (
            <p className="mt-4 font-jost text-sm text-secondary/70">
              Offers{" "}
              <span className="font-semibold text-primary">
                {courses.length}
              </span>{" "}
              Programs
            </p>
          )}

          {/* CTA */}
          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2.5 font-jost text-sm font-semibold text-secondary transition-all duration-300 group-hover:border-primary group-hover:text-primary">
              View University
              <HiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default C_D_Card;
