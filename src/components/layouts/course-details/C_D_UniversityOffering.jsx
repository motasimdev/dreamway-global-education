import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import universities from "/src/data/universities.json";
import Container from "../../Container";
import Heading from "../../Heading";
import C_D_Card from "./C_D_Card";
import "swiper/css";
import "swiper/css/pagination";

const C_D_UniversityOffering = ({ course }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // const universityIds = course ? [course.universityId].filter(Boolean) : [];

  const matchedUniversities = universities.filter((u) =>
    u.courses?.includes(course?.id),
  );

  if (!matchedUniversities.length) return null;

  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Partners
          </p>
          <Heading
            text="Universities Offering This Course"
            className="font-chivo text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Discover the universities that offer this program.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            centerInsufficientSlides={true}
            loop={matchedUniversities.length > 3}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            onSwiper={setSwiperInstance}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="university-swiper overflow-hidden"
          >
            {matchedUniversities.map((university) => (
              <SwiperSlide key={university.id} className="pt-4 lg:pb-15">
                <C_D_Card university={university} />
              </SwiperSlide>
            ))}
          </Swiper>

          {matchedUniversities.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => swiperInstance?.slidePrev()}
                disabled={!swiperInstance}
                className="group absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:bg-tertiary group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"
              >
                <HiArrowLongLeft
                  size={24}
                  className="group-hover:text-primary transition-all duration-300"
                />
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={() => swiperInstance?.slideNext()}
                disabled={!swiperInstance}
                className="group absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:bg-tertiary group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"
              >
                <HiArrowLongRight
                  size={24}
                  className="group-hover:text-primary transition-all duration-300"
                />
              </button>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default C_D_UniversityOffering;
