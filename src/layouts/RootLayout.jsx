import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

// grid-rows-[200px_minmax(900px,_1fr)_100px];
// className = "grid grid-rows-[max-content_auto_max-content] h-[100vh]";
// className = "grid grid-rows-[max-content_minmax(auto,100vh)_max-content]";
