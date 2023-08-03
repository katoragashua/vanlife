import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between">
        <li>
          <NavLink
            to={"/host"}
            className="text-xl font-semibold"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : null
            }
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className="text-xl font-semibold"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : null
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/vans"}
            className="text-xl font-semibold"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : null
            }
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/login"}
            className="text-xl font-semibold"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : null
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
