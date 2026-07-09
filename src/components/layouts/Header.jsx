import React from "react";
import { NavLink } from "react-router";
import Container from "../Container";

const Header = () => {
  return (
    <nav className="lg:py-3 shadow-sm sticky w-full top-0 z-1000 bg-gray-200">
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <NavLink to={"/"} className="w-35 h-12.5 block">
            <img
              src="Logo"
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
                    `px-3 py-2 font-bold text-base uppercase border-b-2 ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg"
                        : "text-secondary hover:text-primary border-transparent "
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `px-3 py-2 font-bold text-base uppercase border-b-2 ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg"
                        : "text-secondary hover:text-primary border-transparent "
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/university"
                  className={({ isActive }) =>
                    `px-3 py-2 font-bold text-base uppercase border-b-2 ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary border-transparent "
                    }`
                  }
                >
                  Universities
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/our-services"
                  className={({ isActive }) =>
                    `px-3 py-2 font-bold text-base uppercase border-b-2 ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary border-transparent "
                    }`
                  }
                >
                  Our Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `px-3 py-2 font-bold text-base uppercase border-b-2 ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary border-transparent "
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-2 font-bold text-base uppercase border-b-2 ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary border-transparent "
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
