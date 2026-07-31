import { HiAcademicCap, HiBuildingOffice, HiCalendar } from "react-icons/hi2";
import countries from "/src/data/countries.json";
import Container from "../../Container";

const U_D_Banner = ({ university }) => {
  if (!university) return null;

  const { banner, logo, name, city, countryId, ranking, type, founded } =
    university;

  const country = countries.find((c) => c.id === countryId);

  const infoItems = [];

  if (ranking?.qsWorld) {
    infoItems.push({
      icon: HiAcademicCap,
      label: `QS #${ranking.qsWorld}`,
    });
  }

  if (type) {
    infoItems.push({
      icon: HiBuildingOffice,
      label: type,
    });
  }

  if (founded) {
    infoItems.push({
      icon: HiCalendar,
      label: `Est. ${founded}`,
    });
  }

  return (
    <section className="relative bg-[#1a1a2e]">
      {banner && (
        <div className="relative lg:sticky lg:top-20.5 left-0 h-[250px] md:h-[300px] lg:h-[400px]">
          <img
            src={banner}
            alt={name}
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2ec5] via-[#1a1a2e]/70 to-transparent" />
        </div>
      )}
      <div className="relative ">
        <Container>
          <div className="relative -mt-20 md:-mt-24 flex flex-col items-center gap-5 pb-12 md:pb-16 animate-fade-in">
            {logo && (
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl" />
                <img
                  src={logo}
                  alt={name}
                  className="relative h-24 w-auto max-w-[180px] object-contain rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                />
              </div>
            )}
            <h3 className="font-chivo text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight">
              {name}
            </h3>
            <p className="font-jost text-sm md:text-base text-white/70 text-center">
              {city}
              {country ? `, ${country.name}` : ""}
            </p>
            <div className="h-px w-16 bg-primary/30" />
            {infoItems.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {infoItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-jost text-xs md:text-sm font-semibold text-white/70 backdrop-blur-sm"
                    >
                      <Icon size={16} className="text-primary" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default U_D_Banner;
