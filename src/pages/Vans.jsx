import React, { useEffect, useState } from "react";
import Van from "../components/Van";
import Loader from "../components/Loader";
import {
  Link,
  useSearchParams,
  useLoaderData,
  useRouteError,
  defer,
  Await,
} from "react-router-dom";
import TypeBtn from "../components/TypeBtn";
import useFetch from "../useFetch.js";
import { getVans } from "../api";

export const loader = async ({ request, params }) => {
  const vans = getVans();
  return defer({ vans });
};

const Vans = () => {
  const error = useRouteError();
  const { vans } = useLoaderData();
  // console.log(vans);
  const [searchParams, setSearchParams] = useSearchParams();

  /** 
    // The Former Way
  // const [vans, setVans] = useState(() => data.vans);

  // useEffect(() => {
  //   const fetchVans = async () => {
  //     try {
  //       const res = await fetch("/api/van");
  //       if (!res.ok) {
  //         throw new Error("Couldn't fetch vans'.");
  //       }
  //       const data = await res.json();
  //       setVans(data.vans);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchVans();
  // }, []);
*/

  function hoverStyle(type) {
    let classes = "";
    switch (type) {
      case "simple":
        classes = `hover:bg-[#E17654]`;
        break;
      case "rugged":
        classes = `hover:bg-[#115E59]`;
        break;
      case "luxury":
        classes = `hover:bg-[#161616]`;
        break;
      default:
        classes = "";
    }
    return classes;
  }

  const typeFilter = searchParams.get("type");

  function typeBg(type) {
    let bg = "";
    switch (type) {
      case "simple":
        bg = `#E17654`;
        break;
      case "rugged":
        bg = `#115E59`;
        break;
      case "luxury":
        bg = `#161616`;
        break;
      default:
        bg = "";
    }

    return bg;
  }

  const listedVans = () => (
    <React.Suspense fallback={<Loader />}>
      <Await resolve={vans}>
        {(vans) =>
          vans
            .filter((van) => (typeFilter ? van.type === typeFilter : van))
            .map((van) => (
              <Van
                key={van.id}
                van={van}
                search={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
              />
            ))
        }
      </Await>
    </React.Suspense>
  );

  return (
    <div className="container vans flex flex-col gap-8 pb-16">
      <h2>Explore our van options</h2>
      <div className="flex justify-between items-center xl:max-w-[40%] ">
        <React.Suspense fallback={null}>
          <Await resolve={vans}>
            {(vans) => {
              // An array of van types/ Removing duplicates using sets
              const vanTypes = [...new Set(vans.map((van) => van.type))];
              return vanTypes.map((type, index) => (
                <span
                  className={`filter-btn ${hoverStyle(type)} `}
                  onClick={() => setSearchParams({ type })}
                  key={index}
                  style={{
                    backgroundColor: type === typeFilter ? typeBg(type) : "",
                  }}
                >
                  {type}
                </span>
              ));
            }}
          </Await>
        </React.Suspense>
        <span
          className="underline hover:cursor-pointer"
          onClick={() => setSearchParams({})}
        >
          Clear filters
        </span>
      </div>

      <div className="listed-vans">{listedVans()}</div>
    </div>
  );
};

export default Vans;
