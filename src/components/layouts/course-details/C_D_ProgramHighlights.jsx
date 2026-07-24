import { FiCheckCircle } from "react-icons/fi";
import Container from "../../Container";
import Heading from "../../Heading";

const C_D_ProgramHighlights = ({ course }) => {
  const highlights = course?.programHighlights;

  if (!highlights?.length) return null;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Program Highlights
          </p>
          <Heading text={"What Makes This Course Unique"} className={"font-chivo text-secondary"}/>
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Discover the key features and advantages of this program.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]"
            >
              <div className="flex-shrink-0 text-primary">
                <FiCheckCircle size={22} />
              </div>
              <p className="font-jost text-base font-semibold text-secondary md:text-lg">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default C_D_ProgramHighlights;
