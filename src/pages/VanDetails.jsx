import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams, Link } from "react-router-dom";
import TypeBtn from "../components/TypeBtn";
import BtnLarge from "../components/BtnLarge";

const VanDetails = () => {
  const [van, setVan] = useState(() => "");
  const { id } = useParams();
  const { fetchData } = useFetch();
  useEffect(() => {
    const fetchVan = async () => {
      const data = await fetchData(`/api/vans/${id}`);
      setVan(data.vans);
    };
    fetchVan();
  }, []);

  return (
    <div className="container flex flex-col gap-12 pb-28">
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

        <small className="font-semibold underline">Back to all vans</small>
      </div>
      <div className="van-detail-img">
        <img src={van.imageUrl} alt={van.description} className="rounded-md" />
      </div>

      <div className="van-info flex flex-col gap-6">
        <TypeBtn type={van.type} />
        <h2>{van.name}</h2>
        <h3>${van.price}/day</h3>
        <p>
          The Modest Explorer is a van designed to get you out of the house and
          into nature. This beauty is equipped with solar panels, a composting
          toilet, a water tank and kitchenette. The idea is that you can pack up
          your home and escape for a weekend or even longer!
        </p>
      </div>
      <BtnLarge text={"Rent this van"} />
    </div>
  );
};

export default VanDetails;
