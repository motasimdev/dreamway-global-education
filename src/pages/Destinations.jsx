import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import Heading from "../components/Heading";
import countries from "../data/countries.json";

const Destinations = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="bg-[#fffaf6]">
      <div className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Study Destinations
            </p>
            <div>
              <Heading
                text="Popular Destinations"
                className="font-chivo font-bold text-secondary"
              />
            </div>
            <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
              Explore top study destinations around the world and start your
              international education journey with Dreamway Global.
            </p>
          </div>
        </Container>
      </div>

      <div className="pb-16 md:pb-20 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations..."
              className="w-full rounded-full border border-orange-100 bg-white px-5 py-3 font-jost text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              aria-label="Search destinations"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filtered.map((country) => (
              <button
                key={country.id}
                type="button"
                onClick={() => navigate(`/destinations/${country.slug}`)}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white text-left shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center p-6">
                  <h3 className="font-chivo text-xl font-bold text-secondary">
                    {country.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-8 text-center font-jost text-base text-secondary/70">
              No destinations found matching your search.
            </p>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Destinations;
