import React from "react";
import { useParams } from "react-router-dom";
import { useSingleCourseQuery } from "../../redux/api/apiSlice";
import Loading from "../UI/loading";

const Course = () => {
  const { id } = useParams();
  console.log(id);
  const { data: course, isLoading } = useSingleCourseQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="w-[99%] lg:w-full my-4 mx-auto lg:w-sm rounded-md">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <h2 className="text-3xl font-bold text-center tracki">
            Course Details
          </h2>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-teal-600 tracki">
              {course?.name}
            </h2>
            <h2 className=" mb-2">
              {" "}
              <span className="font-bold">instructor:</span>{" "}
              {course?.instructor}
            </h2>
            <h2 className="mb-2">
              <span className="font-bold">description:</span>{" "}
              {course?.description}
            </h2>
            <h2 className="mb-2">
              <span className="font-bold">Status: </span>
              {course?.enrollmentStatus}
            </h2>
            <p>
              {" "}
              <span className="font-bold">duration: </span> {course?.duration}
            </p>
            <p>
              <span className="font-bold">scedule: </span> {course?.schedule}
            </p>
            <p>
              <span className="font-bold">location: </span>
              {course?.location}
            </p>
            <p>
              <span className="font-bold">prerequisites: </span>
              {course?.prerequisites}
            </p>
            <section className="">
              <div className="flex flex-col justify-center  py-8 mx-auto">
                <div className="space-y-4">
                  {course?.syllabus?.map((syllabus, idx) => (
                    <details key={idx} className="w-full border rounded-lg">
                      <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                        Week : {syllabus?.week} - {syllabus?.topic}
                      </summary>
                      <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        {syllabus?.content}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* <Link
            to={`anrolled/${course.id}`}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-teal-600 text-gray-50"
          >
            Details
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Course;
