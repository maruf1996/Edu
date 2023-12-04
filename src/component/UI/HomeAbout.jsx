import React from "react";

const HomeAbout = () => {
  return (
    <div>
      <section className="w-full lg:w-[90%] mx-auto">
        <div className=" flex flex-col justify-center lg:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
          <div className="flex items-center justify-center px-3 lg:p-6 mt-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://assignment-10-b8408.web.app/static/media/about.6176e7393e1e90ec74af.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center px-3 lg:p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-3 lg:space-y-4">
            <h1 className="text-3xl font-bold text-teal-700">
              Hi, I'm Frank Castle.
            </h1>
            <h1 className="text-3xl font-bold">I'm The Founder of The Edu.</h1>
            <p>
              Facing the study with the right mindset can change our chances of
              learning everything necessary. At the same time, having learned
              these contents will make our way of interpreting the world change.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
