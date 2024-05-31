import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUserLocalStorage } from "@/app/auth/auth";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getUserLocalStorage();

      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  // tagTypes: [""],

  endpoints: () => ({}),
});
