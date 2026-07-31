import { HiUsers, HiCalendar, HiMapPin, HiAcademicCap } from "react-icons/hi2";
import Container from "../../Container";
import Heading from "../../Heading";
import man from "/src/assets/svg/graduate-man.svg";
import woman from "/src/assets/svg/student-woman.svg";
import CountUp from "../../../hooks/CountUp";

const U_D_Overview = ({ university }) => {
  if (!university) return null;

  const { internationalStudents, intakes, campusCount, availableLevels } =
    university;

  const cards = [
    {
      icon: HiUsers,
      label: "International Students",
      value: internationalStudents,
      span: "lg:row-span-2 lg:col-span-2 flex flex-col items-center justify-center",
      //   bgIcon: HiUsers,
      isLarge: true,
      bgImage: man,
      bgImage2: woman,
    },
    {
      icon: HiCalendar,
      label: "Intakes",
      values: intakes,
      span: "",
      isLarge: false,
    },
    {
      icon: HiMapPin,
      label: "Campuses",
      value: campusCount ? `${campusCount} Campuses` : null,
      span: "",
      isLarge: false,
    },
    {
      icon: HiAcademicCap,
      label: "Study Levels",
      values: availableLevels,
      span: "lg:col-span-3 flex flex-col items-center justify-center",
        bgIcon:HiAcademicCap ,
      isLarge: true,
    },
  ];

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Quick Facts
          </p>
          <Heading
            text="University at a Glance"
            className="font-chivo font-bold text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Key facts and figures at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const BgIcon = card.bgIcon;
            const span = card.span;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] ${span}`}
              >
                {BgIcon && (
                  <div className="hidden lg:block pointer-events-none absolute -bottom-7 -right-6 text-primary/25 transition-transform duration-500 group-hover:scale-110">
                    <BgIcon size={280} />
                  </div>
                )}

                {/* ===bg image=== */}
                {card.bgImage && (
                  <div className="hidden lg:block pointer-events-none absolute -bottom-4 -right-4 w-48 h-48 md:w-30 lg:w-60 md:h-60 transition-transform duration-500 group-hover:scale-110 z-10">
                    <img
                      src={card.bgImage}
                      alt="Background Graphic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                {card.bgImage2 && (
                  <div className="hidden lg:block pointer-events-none absolute -bottom-12 right-34 w-48 h-48 md:w-30 lg:w-60 md:h-60 transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={card.bgImage2}
                      alt="Background Graphic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}


                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-primary">
                    <Icon size={22} />
                  </div>

                  {card.value ? (
                    <>
                      <p className="font-jost text-3xl font-bold text-secondary">
                        <CountUp value={card.value}/>
                      </p>
                      <p className="mt-1 font-jost text-sm font-semibold uppercase tracking-wider text-secondary/60">
                        {card.label}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-jost text-base font-semibold uppercase tracking-wider text-secondary/60">
                        {card.label}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {card.values?.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-orange-100 bg-orange-50 px-4 py-1.5 font-jost text-sm font-semibold text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default U_D_Overview;
