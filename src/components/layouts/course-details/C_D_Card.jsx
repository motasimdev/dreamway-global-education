import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router";

const C_D_Card = ({ university }) => {
  if (!university) return null;

  const {
    slug,
    name,
    logo,
    city,
    country,
    ranking,
    type,
    shortName,
  } = university;

  const badgeText = ranking?.qsWorld
    ? `QS #${ranking.qsWorld}`
    : type
    ? type
    : null;

  return (
    <Link
      to={`/universities/${slug}`}
      className="group block no-underline"
    >
      <article className="flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] hover:border-primary/30">
        {/* Logo */}
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 transition-transform duration-500 group-hover:scale-105">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
            {country ? `, ${country}` : ""}
          </p>

          {/* Badges */}
          {badgeText && (
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full border border-secondary/20 bg-white px-3 py-1 font-jost text-xs font-semibold uppercase tracking-wider text-secondary/70">
                {badgeText}
              </span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2.5 font-jost text-sm font-semibold text-secondary transition-all duration-300 group-hover:border-primary group-hover:text-primary">
              View Details
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