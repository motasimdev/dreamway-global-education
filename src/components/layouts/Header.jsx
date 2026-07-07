import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <section className="py-5 bg-gray-400 text-center">
      <div className="max-w-[1280px] m-auto">
        <ul className="flex items-center gap-x-4 text-center">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/shop"}>
            <li>Shop</li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
};

export default Header;
