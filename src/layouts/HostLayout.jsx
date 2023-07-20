import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="host-layout">
      <nav className="container host-nav py-8">
        <ul className="flex justify-between font-bold">
          <li>
            <NavLink
              to="/host"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline" }
                  : { color: "#4D4D4D" }
              }
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/income"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline" }
                  : { color: "#4D4D4D" }
              }
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/vans"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline" }
                  : { color: "#4D4D4D" }
              }
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/reviews"
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline" }
                  : { color: "#4D4D4D" }
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
