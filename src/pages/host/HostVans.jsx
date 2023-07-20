import React, { useState, useEffect } from "react";
import HostVan from "../../components/HostVan";

const HostVans = () => {
  const [hostVans, setHostVans] = useState(() => []);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/host/vans");
        if (!res.ok) {
          throw new Error("Couldn't fetch vans'.");
        }
        const data = await res.json();
        setHostVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVans();
  }, []);

  const listedVans = hostVans.map((van) => <HostVan key={van.id} {...van} />);

  return (
    <div className="container vans flex flex-col gap-8 pb-16">
      <h2>Your listed vans</h2>
      <div className="host-vans grid gap-4">{listedVans}</div>
    </div>
  );
};

export default HostVans;
