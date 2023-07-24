import React from "react";
import { Link } from "react-router-dom";
import TypeBtn from "./TypeBtn";

const Van = (props) => {
  const { id, name, price, description, imageUrl, type } = props.van;
  const search = props.search;

  return (
    <div className="flex flex-col gap-4">
      <div className="van-image">
        <Link to={`/vans/${id}`}
        state={{...search}}>
          <img
            src={imageUrl}
            alt={description}
            className="rounded-md max-w-[100%]"
          />
        </Link>
      </div>
      <div className="flex justify-between">
        <h5>{name}</h5>
        <small className="font-semibold">
          ${price}
          <br /> /day
        </small>
      </div>
      <TypeBtn type={type} />
    </div>
  );
};

export default Van;
