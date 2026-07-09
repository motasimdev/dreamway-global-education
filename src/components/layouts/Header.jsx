import React from "react";
import { NavLink } from "react-router";
import Container from "../Container";
import logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <nav className="lg:py-3 shadow-sm sticky w-full top-0 z-1000 bg-gray-200">
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <NavLink to={"/"} className="w-35 h-12.5 block">
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
                    `px-3 py-2 rounded-full font-bold text-base uppercase   font-jost ${
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
                    `px-3 ml-7 py-2 rounded-full bg-primary font-bold text-base uppercase   font-jost ${
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
    </nav>
  );
};

export default Header;
