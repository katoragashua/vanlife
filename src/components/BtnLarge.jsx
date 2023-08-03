import React from "react";
import { Link } from "react-router-dom";

const BtnLarge = ({ text }) => {
  return (
    <span
      className="bg-orange px-8 py-3 rounded font-bold text-center xl:self-center hover:scale-[1.1] ease-in duration-300"
      style={{ color: "white" }}
    >
      <Link to="/van">{text}</Link>
    </span>
  );
};

export default BtnLarge;
