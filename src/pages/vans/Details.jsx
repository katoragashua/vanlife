import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { name, type, description } = useOutletContext();
  return (
    <div className="xl:max-w-[50%] flex flex-col gap-4 font-medium">
      <div className="flex gap-2">
        <span className="font-bold">Name:</span> <p>{name}</p>
      </div>
      <div className="flex gap-2">
        <span className="font-bold">Category:</span> <p>{type}</p>
      </div>
      <div>
        <span className="font-bold mr-2">Description:</span>{" "}
        <span>{description}</span>
      </div>
      <div>
        <span className="font-bold mr-2">Viscibilty:</span>{" "}
        <span>Public</span>
      </div>
    </div>
  );
};

export default Details;
