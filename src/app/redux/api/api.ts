import { baseApi } from "./baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login and register
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

    // item category
    category: builder.query({
      query: () => {
        return {
          url: "/found-item-categories",
          method: "GET",
        };
      },
    }),

    // lost item
    getLostItems: builder.query({
      query: (data: any) => {
        return {
          url: "/lostItem",
          method: "GET",
          params: data,
        };
      },
    }),
    createLostItem: builder.mutation({
      query: (data: any) => {
        return {
          url: "/lostItem",
          method: "POST",
          body: data,
        };
      },
    }),
    getSingleLostItem: builder.query({
      query: (id: string) => {
        return {
          url: `/lostItem/${id}`,
          method: "GET",
        };
      },
    }),

    // found item
    createFoundItem: builder.mutation({
      query: (data: any) => {
        return {
          url: `/found-items`,
          method: "POST",
          body: data,
        };
      },
    }),
    getFoundItems: builder.query({
      query: (data: any) => {
        return {
          url: "/found-items",
          method: "GET",
          params: data,
        };
      },
    }),
    getSingleFoundItem: builder.query({
      query: (id: string) => {
        return {
          url: `/found-item/${id}`,
          method: "GET",
        };
      },
    }),

    // change password
    changePassword: builder.mutation({
      query: (data: any) => {
        return {
          url: `/change-password`,
          method: "POST",
          body: data,
        };
      },
    }),

    // change email
    changeEmail: builder.mutation({
      query: (data: any) => {
        return {
          url: `/change-email`,
          method: "POST",
          body: data,
        };
      },
    }),

    // change username
    changeUsername: builder.mutation({
      query: (data: any) => {
        return {
          url: `/change-username`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetLostItemsQuery,
  useLoginMutation,
  useRegistersMutation,
  useCategoryQuery,
  useCreateLostItemMutation,
  useGetSingleLostItemQuery,
  useCreateFoundItemMutation,
  useGetFoundItemsQuery,
  useGetSingleFoundItemQuery,
  useChangePasswordMutation,
  useChangeEmailMutation,
  useChangeUsernameMutation,
} = api;
