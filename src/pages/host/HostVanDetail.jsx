import React, { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";
import TypeBtn from "../../components/TypeBtn";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(() => null);
  const { fetchData } = useFetch();

  useEffect(() => {
    const fetchCurrentVan = async () => {
      const van = await fetchData(`/api/host/vans/${id}`);
      setCurrentVan(van.vans);
    };
    fetchCurrentVan();
  }, []);

  if (!currentVan)
    return <div className="flex justify-center items-center">Loading...</div>;

  console.log(currentVan);
  const { name, type, price, imageUrl } = currentVan;

  return (
    <div>
      <section>
        <Link to=".." relative="path">
          <div className="flex container">
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
        </Link>
      </section>
      <section className="host-van-details">
        <div className="host-van-details-img-div">
          <img src={imageUrl} alt="" />
          <div>
            <TypeBtn />
            <h3>{name}</h3>
            <div>
              <h4>{price}</h4>
              <span>/day</span>
            </div>
          </div>
        </div>
        <nav className="vans-nav max-w-[70%]">
          <ul className="flex  justify-between">
            <li>
              <NavLink
                to="."
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline" }
                    : { color: "#4D4D4D" }
                }
                end
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="./pricing"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline" }
                    : { color: "#4D4D4D" }
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="./photos"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline" }
                    : { color: "#4D4D4D" }
                }
              >
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </section>
    </div>
  );
};

export default HostVanDetail;
