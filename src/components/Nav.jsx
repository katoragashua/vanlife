import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate, redirect } from "../../utils/mutateResponse";
import { redirect, useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

const Nav = () => {
  const navigate = useNavigate()
  const loggedIn = localStorage.getItem('loggedIn')
  return (
    <nav>
      <ul className="flex items-center justify-between xl:gap-8">
        <li>
          <NavLink
            to={"/host"}
            className="text-xl font-semibold navlink"
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
            className="text-xl font-semibold navlink"
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
            className="text-xl font-semibold navlink"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : null
            }
          >
            Vans
          </NavLink>
        </li>
        <li>
          {!loggedIn && (
            <NavLink
              to={"/login"}
              className="text-xl font-semibold navlink"
              style={({ isActive }) =>
                isActive ? { textDecoration: "underline" } : null
              }
            >
              Login
            </NavLink>
          )}
        </li>
        <li>
          {loggedIn && <NavLink
            to={"/login"}
            className="text-xl font-semibold navlink"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : null
            }
            onClick={() =>
              setTimeout(async() => {
                await logoutUser()
                return navigate("/login");
              }, 3000)
            }
          >
            Logout
          </NavLink>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
