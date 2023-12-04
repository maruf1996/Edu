import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: () => "/course",
    }),
    singleCourse: builder.query({
      query: (id) => `/course/${id}`,
    }),
  }),
});

export const { useGetCourseQuery, useSingleCourseQuery } = api;
