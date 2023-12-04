import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/laptop-office.avif";

const Banner = () => {
  return (
    <div>
      <div
        bac
        className="bg-cover bg-center h-[20rem] lg:h-[95vh] relative z-0"
      >
        <img
          src={img}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute w-[98%] lg:w-[55%] inset-0 flex flex-col  justify-center p-4 lg:p-0">
          <div className="lg:p-12 space-y-3 lg:space-y-6">
            <h1 className="text-1xl text-gray-50">FOR A BETTER FUTURE</h1>
            <h1 className="text-3xl lg:text-5xl text-gray-50">
              Education for Life
            </h1>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-50">
              With Frank Castle
            </h1>
            <Link to="">
              <button className="bg-teal-600 rounded text-gray-50 py-3 px-16 lg:text-xl mt-8">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
