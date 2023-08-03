import React, { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";
import TypeBtn from "../../components/TypeBtn";

export const loader = async ({ request, params }) => {
  const { fetchData } = useFetch();
  const vans = await fetchData("/api/host/vans", params.id);
  console.log(vans);
  return vans;
};

const HostVanDetail = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(() => data.vans);
  const [loading, setLoading] = useState(() => false)
  const { fetchData } = useFetch();

  useEffect(() => {
    const fetchCurrentVan = async () => {
      setLoading(true)
      const van = await fetchData(`/api/host/vans/${id}`);
      setCurrentVan(van.vans);
      setLoading(false)
    };
    fetchCurrentVan();
  }, []);
  
  if (!currentVan)
    return <div className="flex justify-center items-center">Loading...</div>;

  return (
    <div className="flex flex-col gap-8 pb-8">
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
      <section className="host-van-details container bg-white p-6 grid gap-6">
        <div className="host-van-details-img-div flex gap-6 items-center">
          <img
            src={currentVan.imageUrl}
            alt=""
            className="max-w-[50%] object-contain"
          />
          <div>
            <TypeBtn type={currentVan.type} />
            <h4>{currentVan.name}</h4>
            <div className="flex">
              <h5>{currentVan.price}</h5>
              <span>/day</span>
            </div>
          </div>
        </div>
        <nav className="vans-nav max-w-[70%]">
          <ul className="flex  justify-between">
            <li>
              <NavLink
                to="."
                className="font-semibold"
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
                to="pricing"
                className="font-semibold"
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
                to="photos"
                className="font-semibold"
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
        <Outlet context={{ ...currentVan }} />
      </section>
    </div>
  );
};

export default HostVanDetail;
