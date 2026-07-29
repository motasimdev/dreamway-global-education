import { useParams } from "react-router";
import universities from "/src/data/universities.json";

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
  
  </>
  );
};

export default UniversityDetails;
