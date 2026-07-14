import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
  };

  return (
    <section className="bg-[#fffaf6]">
      {/* Hero */}
      <div className="bg-[#fffaf6] py-16 md:py-20 lg:py-18">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Get In Touch
            </p>
            <div>
              <Heading
                text="Contact Us"
                className="font-chivo font-bold text-secondary"
              />
            </div>
            <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
              Have questions about studying abroad? Reach out to our expert
              counsellors and take the first step toward your dream education.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Info Cards */}
      <div className="pb-16 md:pb-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FaMapMarkerAlt,
                label: "Address",
                value: "123 Education Lane, Knowledge City, 12345",
              },
              {
                icon: FaPhoneAlt,
                label: "Phone",
                value: "+1 (234) 567-890",
              },
              {
                icon: FaEnvelope,
                label: "Email",
                value: "info@dreamway.edu",
              },
              {
                icon: FaClock,
                label: "Office Hours",
                value: "Sat - Thu, 10am - 6pm",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-[1.5rem] border border-orange-100 bg-white p-6 text-center shadow-[0_14px_35px_rgba(54,69,79,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(54,69,79,0.14)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon aria-hidden="true" className="text-xl" />
                </div>
                <h3 className="font-chivo text-lg font-bold text-secondary">
                  {item.label}
                </h3>
                <p className="mt-1 font-jost text-sm leading-7 text-secondary/75">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Contact Form + Map */}
      <div className="pb-16 md:pb-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-[1.5rem] border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)] md:p-8">
              <h2 className="font-chivo text-2xl font-bold text-secondary">
                Send Us a Message
              </h2>
              <p className="mt-2 font-jost text-sm leading-7 text-secondary/70">
                Fill out the form below and we will get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block font-jost text-sm font-semibold text-secondary"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 py-3 font-jost text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-jost text-sm font-semibold text-secondary"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 py-3 font-jost text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block font-jost text-sm font-semibold text-secondary"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 py-3 font-jost text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="mb-1 block font-jost text-sm font-semibold text-secondary"
                  >
                    Destination Country
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 py-3 font-jost text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a country</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">USA</option>
                    <option value="germany">Germany</option>
                    <option value="new-zealand">New Zealand</option>
                    <option value="japan">Japan</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="dubai">Dubai</option>
                    <option value="europe">Europe</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block font-jost text-sm font-semibold text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 py-3 font-jost text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your study plans..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 font-jost text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map + Social + Support */}
            <div className="flex flex-col gap-6">
              {/* Map Placeholder */}
              <div className="flex-1 rounded-[1.5rem] border border-orange-100 bg-white shadow-[0_14px_35px_rgba(54,69,79,0.08)] overflow-hidden">
                <div className="flex h-64 w-full items-center justify-center bg-secondary/5 md:h-80">
                  <div className="text-center">
                    <FaMapMarkerAlt
                      aria-hidden="true"
                      className="mx-auto text-4xl text-primary"
                    />
                    <p className="mt-2 font-jost text-sm font-semibold text-secondary/70">
                      Google Maps Placeholder
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-chivo text-xl font-bold text-secondary">
                    Our Office
                  </h3>
                  <p className="mt-2 font-jost text-sm leading-7 text-secondary/75">
                    Visit us for a free in-person consultation. Our counsellors
                    are available to guide you through every step of your study
                    abroad journey.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-[1.5rem] border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)]">
                <h3 className="font-chivo text-xl font-bold text-secondary">
                  Follow Us
                </h3>
                <div className="mt-4 flex gap-3">
                  {[
                    {
                      icon: FaFacebookF,
                      label: "Facebook",
                      href: "https://facebook.com",
                    },
                    {
                      icon: FaInstagram,
                      label: "Instagram",
                      href: "https://instagram.com",
                    },
                    {
                      icon: FaLinkedinIn,
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                    },
                    {
                      icon: FaYoutube,
                      label: "YouTube",
                      href: "https://youtube.com",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                      <social.icon aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="rounded-[1.5rem] border border-orange-100 bg-primary/5 p-6 shadow-[0_14px_35px_rgba(54,69,79,0.08)]">
                <h3 className="font-chivo text-xl font-bold text-secondary">
                  Need Immediate Help?
                </h3>
                <p className="mt-2 font-jost text-sm leading-7 text-secondary/75">
                  Our support team is available during office hours to answer
                  your questions about applications, visas, and scholarships.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-jost text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
