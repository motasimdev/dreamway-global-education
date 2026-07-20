import { HiAcademicCap } from "react-icons/hi2";
import Container from "../../Container";
import Heading from "../../Heading";

const D_D_CostOfStudying = ({ country }) => {
  if (!country?.studyCosts?.length) return null;

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tuition Fees
          </p>
          <Heading
            text="Estimated Cost of Studying"
            className="font-chivo font-bold text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Average yearly tuition fees for international students.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {country.studyCosts.map((item) => (
            <div
              key={item.level}
              className="flex flex-col items-center rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-primary">
                <HiAcademicCap size={28} />
              </div>
              <h3 className="font-chivo text-center text-xl font-bold text-secondary">
                {item.level}
              </h3>
              <p className="mt-2 text-center font-jost text-lg font-semibold text-primary">
                {item.fee}
              </p>
              <p className="mt-1 text-center font-jost text-xs text-secondary/60">
                / year
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default D_D_CostOfStudying;
