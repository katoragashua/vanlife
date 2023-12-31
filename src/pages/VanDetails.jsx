import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
import TypeBtn from "../components/TypeBtn";
import BtnLarge from "../components/BtnLarge";
import { getVan } from "../api";

export const loader = async ({ request, params }) => {
  const van = await getVan(params.id);
  return van;
};

const VanDetails = () => {
  const van = useLoaderData();
  // const [van, setVan] = useState(() => vans);
  const { id } = useParams();
  const { fetchData } = useFetch();

  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  // useEffect(() => {
  //   const fetchVan = async () => {
  //     const data = await fetchData(`/api/vans/${id}`);
  //     setVan(data.vans);
  //   };
  //   fetchVan();
  // }, []);

  return (
    <div className="container flex flex-col gap-12 pb-28 ">
      <Link to={`..${search}`} relative="path">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <small className="font-semibold underline">Back to {type} vans</small>
        </div>
      </Link>
      <div className="van-detail-img xl:w-1/2">
        <img src={van.imageUrl} alt={van.description} className="rounded-md" />
      </div>

      <div className="van-info flex flex-col gap-6 xl:w-1/2">
        <TypeBtn type={van.type} />
        <h2>{van.name}</h2>
        <h3>${van.price}/day</h3>
        <p>{van.description}</p>
      </div>
      <div className="self-start">
        <BtnLarge text={"Rent this van"} />
      </div>
    </div>
  );
};

export default VanDetails;
