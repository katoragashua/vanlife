import React from "react";
import { Link } from "react-router-dom";

const BtnLarge = ({ text, to }) => {
  return (
    <button
      className="bg-orange px-8 py-3 rounded font-bold text-center xl:self-center cursor-pointer hover:scale-[1.1] ease-in duration-300"
      style={{ color: "white" }}
    >
      {to? <Link to={to}>{text}</Link>: text}
    </button>
  );
};

export default BtnLarge;
