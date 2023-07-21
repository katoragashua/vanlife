import React from "react";
import { Link } from "react-router-dom";

const TypeBtn = ({ type }) => {

  let btnColor = "";
  switch (type) {
    case "simple":
      btnColor = "#E17654";
      break;
    case "rugged":
      btnColor = "#115E59";
      break;
    case "luxury":
      btnColor = "#161616";
      break;
    default:
      btnColor = "";
  }
  
  return (
    <span
      className="flex justify-center px-4 py-2 font-semibold rounded-md self-start"
      style={{ backgroundColor: `${btnColor}`, color: "white" }}
    >
      <Link>{type}</Link>
    </span>
  );
};

export default TypeBtn;
