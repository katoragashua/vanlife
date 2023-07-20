import React from "react";
import { Link } from "react-router-dom";
import about from  "../assets/images/about-bg.jpg";

const About = () => {
  return (
    <div className="pb-8">
      <img src={about} alt="" className="h-[100vh] w-full object-cover" />
      <div className="container">
        <main className="pt-8 xl:text-center">
          <h2 className="pb-8">
            Don't squeeze in a sedan when you could relax in a van.
          </h2>
          <div className="mission flex flex-col gap-8">
            <p className="">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
            <div className="card p-8 bg-orange-light flex flex-col items-start gap-8 text-left rounded-md xl:items-center">
              <h3>Your destination is waiting. Your van is ready.</h3>
              <span className="px-6 py-3 rounded-md">
                <Link to="vans">Explore our vans</Link>
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
