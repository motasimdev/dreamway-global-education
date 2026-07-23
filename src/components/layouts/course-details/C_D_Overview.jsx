import {
  HiAcademicCap,
  HiGlobeAlt,
  HiBuildingOffice,
  HiCurrencyDollar,
  HiCalendar,
} from "react-icons/hi2";
import Container from "../../Container";

const C_D_Overview = ({ course, university, country }) => {
  const overviewItems = [
    {
      icon: HiCurrencyDollar,
      label: "Tuition Fee",
      value: course?.tuitionFee
        ? `${course.tuitionFee.currency} ${course.tuitionFee.amount.toLocaleString()} / ${course.tuitionFee.period}`
        : null,
    },
    {
      icon: HiCurrencyDollar,
      label: "Application Fee",
      value: course?.applicationFee
        ? `${course.applicationFee.currency} ${course.applicationFee.amount}`
        : null,
    },
    {
      icon: HiCalendar,
      label: "Intakes",
      value: course?.intakes?.join(", "),
    },
    {
      icon: HiAcademicCap,
      label: "Scholarship",
      value: course?.scholarship?.available
        ? course.scholarship.details
        : "Not Available",
    },
    {
      icon: HiGlobeAlt,
      label: "Language",
      value: course?.language,
    },
    {
      icon: HiBuildingOffice,
      label: "Attendance",
      value: course?.attendance,
    },
  ].filter((item) => item.value);

  return (
    <section className="bg-tertiary py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 relative">
          <div className="lg:col-span-7 flex items-center">
            <div className="lg:w-2xl rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] md:p-8">
              <h2 className="font-chivo text-3xl font-bold text-secondary md:text-4xl">
                Course Overview
              </h2>
              <div className="mt-6 space-y-5 ">
                <p className="font-jost text-base leading-7 text-secondary/70 md:text-lg">
                  {course?.description}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] md:p-8 ">
                <h3 className="font-chivo text-xl font-bold text-secondary">
                  Course Facts
                </h3>
                <div className="mt-6 space-y-5">
                  {overviewItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex rounded-xl bg-orange-50 p-2 text-primary">
                          <Icon size={20} />
                        </div>
                        <div className="flex-1  lg:pr-45">
                          <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                            {item.label}
                          </p>
                          <p className="mt-1 font-jost text-sm font-semibold text-secondary">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default C_D_Overview;
