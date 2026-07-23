import Breadcrumb from "../../Breadcrumb";
import Container from "../../Container";

const C_D_Banner = ({ course, university, country }) => {
  return (
    <>
      <Breadcrumb />
      <section className="bg-[#f7f8fa] py-10 md:py-20 lg:py-10">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-secondary/20 bg-white px-4 py-1.5 font-jost text-xs font-semibold uppercase tracking-wider text-primary">
                  {course.level}
                </span>
                <span className="rounded-full border border-secondary/20 bg-white px-4 py-1.5 font-jost text-xs font-semibold uppercase tracking-wider text-primary">
                  {course.duration.value} {course.duration.unit}
                </span>
                <span className="rounded-full border border-secondary/20 bg-white px-4 py-1.5 font-jost text-xs font-semibold uppercase tracking-wider text-primary">
                  {course.studyMode}
                </span>
              </div>

              <h1 className="mt-4 font-chivo text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
                {course.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                {university && (
                  <p className="font-jost text-sm lg:text-xl font-semibold text-secondary">
                    {university?.name}
                  </p>
                )}
                {country && (
                  <p className="font-jost font-medium text-sm lg:text-lg text-primary/70">
                    {country?.name}
                  </p>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default C_D_Banner;
