import { HiAcademicCap, HiDocumentText } from "react-icons/hi2";
import Container from "../../Container";
import Heading from "../../Heading";

const C_D_TuitionFees = ({ tuitionFee, scholarship, applicationFee }) => {
  if (!tuitionFee) return null;

  const feeParts = [];
  if (tuitionFee.currency) feeParts.push(tuitionFee.currency);
  if (tuitionFee.amount != null) feeParts.push(tuitionFee.amount.toLocaleString());
  const feeDisplay = feeParts.join(" ");

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tuition Fees
          </p>
          <Heading
            text="Estimated Cost"
            className="font-chivo text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Understanding the investment for your academic journey.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-[0_14px_35px_rgba(54,69,79,0.08)] md:p-10">
            <div className="text-center">
              <p className="font-jost text-sm font-semibold uppercase tracking-wider text-secondary/60">
                Estimated Tuition Fee
              </p>
              <p className="mt-2 font-chivo text-xl font-bold text-primary md:text-2xl lg:text-4xl">
                {feeDisplay}
              </p>
              <p className="mt-1 font-jost text-sm text-secondary/70">
                per {tuitionFee.period || "year"}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {applicationFee && (
                <div className="flex items-center gap-3 rounded-xl bg-[#f7f8fa] p-4">
                  <div className="inline-flex rounded-lg bg-orange-50 p-2 text-primary">
                    <HiDocumentText size={20} />
                  </div>
                  <div>
                    <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                      Application Fee
                    </p>
                    <p className="font-jost text-sm font-semibold text-secondary">
                      {applicationFee.currency
                        ? `${applicationFee.currency} ${applicationFee.amount}`
                        : applicationFee.amount}
                    </p>
                  </div>
                </div>
              )}

              {scholarship?.available && (
                <div className="flex items-center gap-3 rounded-xl bg-[#f7f8fa] p-4">
                  <div className="inline-flex rounded-lg bg-orange-50 p-2 text-primary">
                    <HiAcademicCap size={20} />
                  </div>
                  <div>
                    <p className="font-jost text-xs font-semibold uppercase tracking-wider text-secondary/60">
                      Scholarship
                    </p>
                    <p className="font-jost text-sm font-semibold text-secondary">
                      {scholarship.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <p className="mt-6 text-center font-jost text-xs text-secondary/50">
              Tuition fees may vary depending on the university, intake, or
              other factors.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default C_D_TuitionFees;