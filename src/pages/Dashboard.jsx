import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import HostVan from "../components/HostVan";

const Dashboard = () => {
  const [hostVans, setHostVans] = useState(() => []);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/host/vans");
        if (!res.ok) {
          throw new Error("Couldn't fetch vans'.");
        }
        const data = await res.json();
        setHostVans(data.vans.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    fetchVans();
  }, []);

  const hostListedVans = hostVans.map((van) => (
    <HostVan key={van.id} {...van} />
  ));

  return (
    <>
      <section className="dashboard-stats py-6 bg-orange-lighter">
        <div className="container">
          <h2>Welcome</h2>
          <div className="days flex justify-between items-baseline">
            <span className="">
              Income last{" "}
              <span className="underline-offset-1 font-semibold">30 days</span>
            </span>
            <span className="details font-semibold">
              <Link>Details</Link>
            </span>
          </div>
          <h1 className="dashboard-total">${(2260).toLocaleString()}</h1>
        </div>
      </section>
      <section className="dashboard-review-score py-10 bg-orange-light">
        <div className="container flex justify-between items-baseline">
          <div className="flex gap-4 items-baseline">
            <h4>Review Score</h4>
            <div className="flex">
              {(
                <i className="ri-star-fill" style={{ color: "#FF8C38" }}></i>
              ) || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FF8C38"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span className="font-semibold">5.0/5</span>
            </div>
          </div>
          <span className="details font-semibold">
            <Link>Details</Link>
          </span>
        </div>
      </section>
      <section className="host-listed-vans py-10">
        <div className="container flex flex-col gap-8">
          <div className="flex justify-between items-baseline">
            <h4>Your listed vans</h4>
            <Link to={"/host/vans"} className="font-semibold ">
              View all
            </Link>
          </div>
          <div className="host-listed-vans-container grid gap-4">
            {hostListedVans}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
