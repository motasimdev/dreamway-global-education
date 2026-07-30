import { useParams } from "react-router";
import universities from "/src/data/universities.json";
import Breadcrumb from "../components/Breadcrumb";
import U_D_Banner from "../components/layouts/university-details/U_D_Banner";
import U_D_Overview from "../components/layouts/university-details/U_D_Overview";

const UniversityDetails = () => {
  const { slug } = useParams();
  const university = universities.find((c) => c.slug === slug);

  if (!university) {
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
      <Breadcrumb />
      <U_D_Banner university={university}/>
      <U_D_Overview university={university}/>
    </>
  );
};

export default UniversityDetails;
