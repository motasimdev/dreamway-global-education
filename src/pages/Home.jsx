import Banner from "../components/layouts/home/Banner";
import SuccessRate from "../components/layouts/home/SuccessRate";
import WhyChooseUs from "../components/layouts/home/WhyChooseUs";
import HowWeWork from "../components/layouts/home/HowWeWork";
import UniversityLogos from "../components/layouts/home/UniversityLogos";
import Testimonial from "../components/layouts/home/Testimonial";
import GoogleReviews from "../components/layouts/home/GoogleReviews";
import BookConsultation from "../components/layouts/home/BookConsultation";

const Home = () => {
  return (
    <>
      <Banner />
      <SuccessRate />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonial />
      <GoogleReviews />
      <UniversityLogos />
      <BookConsultation/>
    </>
  );
};

export default Home;
