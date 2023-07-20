import React from 'react'
import { Link } from 'react-router-dom';

const HostVan = (van) => {
    const { id, name, price, description, imageUrl, type } = van;
  return (
    <Link to={`/host/vans/${id}`}>
      <div className="flex items-center px-4 py-4 gap-4 bg-[#FFFFFF] rounded-md">
        <div className="van-image">
          <img
            src={imageUrl}
            alt={description}
            className="rounded-md  max-w-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h5>{name}</h5>
          <small className="font-semibold">${price}/day</small>
        </div>
      </div>
    </Link>
  );
}

export default HostVan