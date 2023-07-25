import React from "react";
import { Link } from "react-router-dom";
import BtnLarge from "../components/BtnLarge";

const Home = () => {
  return (
    <div className="home flex bg-home-bg bg-cover text-center h-screen">
      <div className="container flex justify-center">
        <main className="flex flex-col gap-8 justify-center text-center">
          <h1 className="text-shadow max-w-2xl">
            You got the travel plans, we got the travel vans.
          </h1>
          <h4 className="text-shadow max-w-2xl">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </h4>
          <BtnLarge text={"Find your van"}/>
        </main>
      </div>
    </div>
  );
};

export default Home;
