import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex justify-center bg-[#252525] py-4 mt-auto"
      style={{ color: "white" }}
    >
      <small className="container text-white text-center font-semibold">
        &copy;{new Date().getFullYear()} #VANLIFE
      </small>
    </footer>
  );
};

export default Footer;
