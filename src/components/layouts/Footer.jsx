import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Container from "../Container";
import logo from "/src/assets/loogo.png";

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="font-jost text-secondary/80 transition-colors duration-300 hover:text-primary hover:underline"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ to, icon: Icon, label }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="grid h-9 w-9 place-items-center rounded-full bg-secondary/10 text-secondary transition-colors duration-300 hover:bg-primary hover:text-white"
  >
    <Icon />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#f7f8fa] text-secondary z-50">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4">
            {/* Column 1: About */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="mb-5 inline-block w-48">
                <img
                  src={logo}
                  alt="Dreamway Global Education Logo"
                  className="w-full"
                  loading="lazy"
                />
              </Link>
              <p className="mb-5 max-w-xs font-jost text-base leading-relaxed text-secondary/80">
                Your trusted partner in navigating the path to international
                education and achieving your academic dreams.
              </p>

              {/* contact us  */}

              <h3 className="mb-5 font-chivo text-xl font-bold">Contact Us</h3>
              <address className="not-italic">
                <ul className="space-y-4 font-jost text-base text-secondary/80">
                  <li>
                    <strong className="font-semibold text-secondary">
                      Address:
                    </strong>{" "}
                    123 Education Lane, Knowledge City, 12345
                  </li>
                  <li>
                    <strong className="font-semibold text-secondary">
                      Phone:
                    </strong>{" "}
                    +1 (234) 567-890
                  </li>
                  <li>
                    <strong className="font-semibold text-secondary">
                      Email:
                    </strong>{" "}
                    info@dreamway.edu
                  </li>
                  <li>
                    <strong className="font-semibold text-secondary">
                      Office Hours:
                    </strong>{" "}
                    Sat - Thu, 10am - 6pm
                  </li>
                </ul>
              </address>
              <div className="mt-6 flex gap-3">
                <SocialIcon
                  to="https://facebook.com"
                  icon={FaFacebookF}
                  label="Facebook"
                />
                <SocialIcon
                  to="https://instagram.com"
                  icon={FaInstagram}
                  label="Instagram"
                />
                <SocialIcon
                  to="https://linkedin.com"
                  icon={FaLinkedinIn}
                  label="LinkedIn"
                />
                <SocialIcon
                  to="https://youtube.com"
                  icon={FaYoutube}
                  label="YouTube"
                />
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-row justify-between lg:justify-normal lg:flex-col">
              <div className="">
                <h3 className="mb-5 font-chivo text-xl font-bold">
                  Student Services
                </h3>
                <ul className="space-y-3 text-base">
                  <FooterLink to="/services/counselling">
                    Counselling
                  </FooterLink>
                  <FooterLink to="/services/application">
                    Application Processing
                  </FooterLink>
                  <FooterLink to="/services/visa">Visa Guidance</FooterLink>
                  <FooterLink to="/services/scholarship">
                    Scholarship Aid
                  </FooterLink>
                  <FooterLink to="/services/pre-departure">
                    Pre-Departure Briefing
                  </FooterLink>
                </ul>
              </div>
              <div className="mt-0 lg:mt-5">
                <h3 className="mb-5 font-chivo text-xl font-bold">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-base">
                  <FooterLink to="/">Home</FooterLink>
                  <FooterLink to="/about">About Us</FooterLink>
                  <FooterLink to="/blogs">Blogs</FooterLink>
                  <FooterLink to="/faq">FAQ</FooterLink>
                  <FooterLink to="/contact">Contact Us</FooterLink>
                </ul>
              </div>
            </div>

            {/* Column 3: Study Destinations */}

            <div className="hidden lg:block">
              <h3 className="mb-5 font-chivo text-xl font-bold">
                Study Destinations
              </h3>
              <ul className="space-y-3 text-base">
                <FooterLink to="/">Australia</FooterLink>
                <FooterLink to="/about">UK</FooterLink>
                <FooterLink to="/blogs">Canada</FooterLink>
                <FooterLink to="/faq">Malaysia</FooterLink>
                <FooterLink to="/contact">USA</FooterLink>
                <FooterLink to="/contact">Japan</FooterLink>
                <FooterLink to="/contact">Europe</FooterLink>
                <FooterLink to="/contact">Dubai</FooterLink>
                <FooterLink to="/contact">New Zealand</FooterLink>
                <FooterLink to="/contact">Ireland</FooterLink>
                <FooterLink to="/contact">Indonesia</FooterLink>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="hidden lg:block">
              <h3 className="mb-5 font-chivo text-xl font-bold">Courses</h3>
              <ul className="space-y-3 text-base">
                <FooterLink to="/">Nursing</FooterLink>
                <FooterLink to="/">Accounting</FooterLink>
                <FooterLink to="/">Engineering</FooterLink>
                <FooterLink to="/">Business Studies</FooterLink>
                <FooterLink to="/">Food and Hospitality Management</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-secondary/10 py-6 sm:flex-row">
          <p className="font-jost text-sm text-secondary/60 text-center lg:text-left">
            &copy; {new Date().getFullYear()} Dreamway Global Education. All
            Rights Reserved.
          </p>
          <div className="flex gap-x-5 font-jost text-sm">
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
