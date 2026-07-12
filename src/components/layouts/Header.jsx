import React, { useState } from "react";
import { NavLink } from "react-router";
import Container from "../Container";
import logo from "/src/assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="lg:py-3 shadow-sm sticky w-full top-0 z-1000 bg-tertiary">
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <NavLink to={"/"} className="w-50 h-12.5 block">
            <img
              src={logo}
              alt="Dreamway Global Education Logo"
              className="w-full h-full"
              loading="lazy"
              decoding="async"
            />
          </NavLink>
          {/* Logo */}

          {/* Desktop Menu*/}
          <div className="w-[60%] flex justify-end">
            <ul className="flex items-center space-x-2 whitespace-nowrap">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full font-bold text-base uppercase font-jost ${
                      isActive
                        ? " text-primary   border-primary  shadow-sm"
                        : "text-secondary hover:text-primary  "
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full font-bold text-base uppercase   font-jost ${
                      isActive
                        ? " text-primary   border-primary  shadow-sm"
                        : "text-secondary hover:text-primary  "
                    }`
                  }
                >
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/destinations"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full font-bold text-base uppercase   font-jost ${
                      isActive
                        ? " text-primary   border-primary  shadow-sm  "
                        : "text-secondary hover:text-primary  "
                    }`
                  }
                >
                  Destinations
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full font-bold text-base uppercase   font-jost ${
                      isActive
                        ? " text-primary   border-primary  shadow-sm  "
                        : "text-secondary hover:text-primary  "
                    }`
                  }
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full font-bold text-base uppercase   font-jost ${
                      isActive
                        ? " text-primary   border-primary  shadow-sm  "
                        : "text-secondary hover:text-primary  "
                    }`
                  }
                >
                  FAQ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-5 ml-7 py-2 rounded-full bg-primary font-bold text-base uppercase   font-jost ${
                      isActive
                        ? " text-primary bg-secondary shadow-sm  "
                        : "text-secondary hover:text-primary hover:bg-secondary transition duration-300 shadow-sm"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* =============Mobile Menu============= */}

      <div className={`lg:hidden py-2 px-3 md:px-5 bg-white z-50`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to={"/"} className="max-w-25">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
          </NavLink>
          {/* Logo */}

          <div className="flex items-center gap-x-3 ">
            <button
              className="lg:hidden "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaXmark className="text-4xl text-secondary" />
              ) : (
                <HiBars3 className="text-4xl text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="relative pb-4 border-t border-gray-200 z-50">
              <ul className="flex flex-col pt-2 text-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-jost rounded-full  font-medium text-base ${
                        isActive
                          ? " text-primary shadow-sm"
                          : "text-secondary hover:text-primary  "
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-jost rounded-full  font-medium text-base ${
                        isActive
                          ? " text-primary shadow-sm"
                          : "text-secondary hover:text-primary  "
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/destinations"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-jost rounded-full  font-medium text-base ${
                        isActive
                          ? " text-primary shadow-sm"
                          : "text-secondary hover:text-primary  "
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Destinations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-jost rounded-full  font-medium text-base ${
                        isActive
                          ? " text-primary shadow-sm"
                          : "text-secondary hover:text-primary  "
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-jost rounded-full  font-medium text-base ${
                        isActive
                          ? " text-primary shadow-sm"
                          : "text-secondary hover:text-primary  "
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-full font-jost  font-medium text-base ${
                        isActive
                          ? "bg-primary text-secondary "
                          : "text-secondary bg-primary "
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
