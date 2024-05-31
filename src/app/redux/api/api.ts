import { baseApi } from "./baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLostItems: builder.query({
      query: (data: any) => {
        return {
          url: "/lostItem",
          method: "GET",
          params: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data: any) => {
       
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
    registers: builder.mutation({
      query: (data: any) => {  
        return {
          url: "/register",
          method: "POST",
          body: data,
        };
      },
    }),
    lostItems: builder.mutation({
      query: (data: any) => {  
        return {
          url: "/lostItem",
          method: "POST",
          body: data,
        };
      },
    }),
    category: builder.query({
      query: () => {  
        return {
          url: "/found-item-categories",
          method: "GET",
        };
      },
    }),
    createLostItem: builder.mutation({
      query: (data:any) => {  
        return {
          url: "/lostItem",
          method: "POST",
          body:data
        };
      },
    }),
  }),
});

export const { useGetLostItemsQuery, useLoginMutation ,useRegistersMutation, useCategoryQuery,useCreateLostItemMutation} = api;
