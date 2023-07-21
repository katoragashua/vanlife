import React, { useEffect, useState } from "react";
import Van from "../components/Van";
import { Link, useSearchParams } from "react-router-dom";
import TypeBtn from "../components/TypeBtn";

const Vans = () => {
  const [vans, setVans] = useState(() => []);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/vans");
        if (!res.ok) {
          throw new Error("Couldn't fetch vans'.");
        }
        const data = await res.json();
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVans();
  }, []);

  const listedVans = vans
    .filter((van) => (typeFilter ? van.type === typeFilter : van))
    .map((van) => <Van key={van.id} {...van} />);
  const vanTypes = [...new Set(vans.map((van) => van.type))];

  // console.log(vanTypes)

  return (
    <div className="container vans flex flex-col gap-8 pb-16">
      <h2>Explore our van options</h2>
      <div className="flex justify-between">
        {vanTypes.map((type, index) => (
          <div onClick={() => setSearchParams({ type })} key={index}>
            <TypeBtn type={type} />
          </div>
        ))}
      </div>

      <div className="listed-vans">{listedVans}</div>
    </div>
  );
};

export default Vans;
