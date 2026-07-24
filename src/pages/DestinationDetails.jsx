import { useParams } from "react-router";
import countries from "../data/countries.json";
import D_D_Banner from "../components/layouts/destination-details/D_D_Banner";
import D_D_QuickFacts from "../components/layouts/destination-details/D_D_QuickFacts";
import D_D_WhyChoose from "../components/layouts/destination-details/D_D_WhyChoose";
import D_D_Universities from "../components/layouts/destination-details/D_D_Universities";
import D_D_ChooseCourse from "../components/layouts/destination-details/D_D_ChooseCourse";
import D_D_AdmissionRequirements from "../components/layouts/destination-details/D_D_AdmissionRequirements";
import D_D_CostOfStudying from "../components/layouts/destination-details/D_D_CostOfStudying";
import D_D_FAQ from "../components/layouts/destination-details/D_D_FAQ";
import D_D_FreeConsultation from "../components/layouts/destination-details/D_D_FreeConsultation";

const DestinationDetails = () => {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    return (
      <section className="py-20 text-center">
        <p className="font-jost text-lg text-secondary/70">
          Destination not found.
        </p>
      </section>
    );
  }

  return (
    <>
      <D_D_Banner countryBanner={country.banner} title={country.name} />
      <D_D_QuickFacts country={country} />
      <D_D_WhyChoose country={country} />
      <D_D_Universities country={country} />
      <D_D_ChooseCourse country={country} />
      <D_D_AdmissionRequirements
        requirements={country?.admissionRequirements}
        title={"Admission Requirements"}
        subtitle={"What You Need to Apply"}
        description={
          "Prepare these essential documents to start your application journey."
        }
      />
      <D_D_CostOfStudying country={country} />
      <D_D_FAQ country={country} />
      <D_D_FreeConsultation country={country} />
    </>
  );
};

export default DestinationDetails;
