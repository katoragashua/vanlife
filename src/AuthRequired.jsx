import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default AuthRequired;
