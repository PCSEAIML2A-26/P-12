import React from "react";
import { Link } from "react-router-dom";

const Getstarted = () => {
  return (
    <div className="w-full bg-[#47878E] bg-no-repeat">
      <div className="p-10 py-20 flex flex-col flex-wrap justify-center content-center">
        <div className="m-0 p-0 text-3xl text-white antialiased text-center">
          Get Started
        </div>
        <div className="m-0 p-0 text-xl text-white antialiased text-center">
          Find out Hospitals, Pharmacies and more..
        </div>
        <div className="mt-3 flex flex-row justify-center">
          <button
            className="p-2 w-2/3 bg-cyan-900 rounded text-white hover:bg-cyan-500"
            type="button"
          >
            <Link to="/nearbyhospitals">Find Nearby Hospitals</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
