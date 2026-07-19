import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router";
import Container from "../../Container";
import Heading from "../../Heading";
import universities from "../../../data/universities.json";
import "swiper/css";
import "swiper/css/pagination";
import "./D_D_Universities.css";

const logoModules = import.meta.glob(
  "../../../assets/university-logos/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" },
);

const resolveLogo = (logoPath) => {
  if (!logoPath) return null;
  if (logoPath.startsWith("http")) return logoPath;

  const fileName = logoPath.split("/").pop();
  const relativeKey = `../../../assets/university-logos/${fileName}`;
  return logoModules[relativeKey] || logoPath;
};

const D_D_Universities = ({ country }) => {
  const filteredUniversities = useMemo(() => {
    if (!country?.id) return [];
    const countryUnis = universities.filter((u) => u.countryId === country.id);
    const featured = countryUnis.filter((u) => u.featured === true);
    return featured.length > 0 ? featured : countryUnis;
  }, [country]);

  const [swiperInstance, setSwiperInstance] = useState(null);

  if (!filteredUniversities.length) {
    return (
      <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Top Universities
            </p>
            <Heading
              text={`Explore Leading Universities in ${country?.name || ""}`}
              className="font-chivo font-bold text-secondary"
            />
            <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
              {country?.name
                ? `We're adding top universities in ${country.name} soon. Stay tuned for our curated list of institutions.`
                : "We're adding top universities soon. Stay tuned for our curated list of institutions."}
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Top Universities
          </p>
          <Heading
            text={`Explore Leading Universities in ${country?.name || ""}`}
            className="font-chivo font-bold text-secondary"
          />
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            {country?.name
              ? `Discover world-class education opportunities in ${country.name} with our partner institutions.`
              : "Discover world-class education opportunities with our partner institutions."}
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="university-swiper !overflow-hidden"
            onSwiper={setSwiperInstance}
          >
            {filteredUniversities.map((university) => (
              <SwiperSlide key={university.id} className="pt-4 pb-15">
                <Link
                  aria-label={`Explore ${university.name}`}
                  to={`/universities/${university.slug}`}
                  className="block no-underline"
                >
                  <article className="group flex flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]">
                    <div className="relative h-56 overflow-hidden">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={
                            resolveLogo(university.logo) ||
                            "/placeholder-university.svg"
                          }
                          alt={university.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {university.ranking?.qsWorld && (
                        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-jost text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur-sm">
                          QS #{university.ranking.qsWorld}
                        </span>
                      )}
                      {university.scholarship && (
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-jost text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20">
                          Scholarship
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-chivo text-xl font-bold text-secondary">
                        {university.name}
                      </h3>
                      <p className="mt-2 font-jost text-sm text-secondary/70">
                        {university.city}
                      </p>
                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-5 py-2.5 font-jost text-sm font-semibold text-secondary transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                          Explore University
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperInstance?.slidePrev()}
            disabled={!swiperInstance}
            className="group absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:bg-tertiary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"
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
            className="group absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:bg-tertiary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"
          >
            <HiArrowLongRight
              size={24}
              className="group-hover:text-primary transition-all duration-300"
            />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default D_D_Universities;
