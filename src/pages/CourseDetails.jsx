import { useParams } from "react-router";
import universities from "/src/data/universities.json";
import countries from "/src/data/countries.json";
import courses from "/src/data/courses.json";
import C_D_Banner from "../components/layouts/course-details/C_D_Banner";
import C_D_Overview from "../components/layouts/course-details/C_D_Overview";
import C_D_ProgramHighlights from "../components/layouts/course-details/C_D_ProgramHighlights";
import D_D_AdmissionRequirements from "../components/layouts/destination-details/D_D_AdmissionRequirements";

const CourseDetails = () => {
  const { slug } = useParams();

  const course = courses.find((c) => c.slug === slug);
  const university = universities.find((u) => u.id === course.universityId);
  const country = countries.find((c) => c.id === course.countryId);

  //   if (!country) {
  //     return (
  //       <section className="py-20 text-center">
  //         <p className="font-jost text-lg text-secondary/70">
  //           Destination not found.
  //         </p>
  //       </section>
  //     );
  //   }
  return (
    <>
      <C_D_Banner course={course} university={university} country={country} />
      <C_D_Overview course={course} university={university} country={country} />
      <C_D_ProgramHighlights course={course} />
      <D_D_AdmissionRequirements
        requirements={course?.entryRequirements}
        title={"Admission Requirements"}
        subtitle={"What You Need to Apply"}
        description={
          "Prepare these essential documents to start your application journey."
        }
      />
    </>
  );
};

export default CourseDetails;
