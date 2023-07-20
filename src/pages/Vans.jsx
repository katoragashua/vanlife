import React, { useEffect, useState } from "react";
import Van from "../components/Van";

const Vans = () => {
  const [vans, setVans] = useState(() => []);

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

  const listedVans = vans.map((van) => (
      <Van key={van.id} {...van}/>
  ));

  return (
    <div className="container vans flex flex-col gap-8 pb-16">
      <h2>Explore our van options</h2>
      <div className="listed-vans">{listedVans}</div>
    </div>
  );
};

export default Vans;
