import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate, redirect } from "../../utils/mutateResponse";
import { redirect, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate()
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
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => {
              localStorage.removeItem("loggedIn");
              navigate("/login");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
