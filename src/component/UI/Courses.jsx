import React from "react";
import { Link } from "react-router-dom";
import { useGetCourseQuery } from "../../redux/api/apiSlice";
import Loading from "./loading";

const Courses = () => {
  const { data, isLoading } = useGetCourseQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full lg:w-[90%] mx-auto my-16 lg:my-0">
      <h1 className="text-3xl text-center font-bold">Online Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  my-4 lg:my-8">
        {data?.map((course) => (
          <div
            key={course?._id}
            className="w-[90%] lg:w-full mx-auto lg:w-sm rounded-md shadow-lg"
          >
            <img
              src={course?.thumbnail}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 "
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-teal-600 tracki">
                  {course?.name}
                </h2>
                <h2 className="text-xl font-bold mb-2">
                  {course?.description}
                </h2>
              </div>

              <Link
                to={`course/${course?._id}`}
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-teal-600 text-gray-50"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
