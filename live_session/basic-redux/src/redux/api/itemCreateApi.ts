import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["items", "users"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
      providesTags: ["items"],
    }),
    addItem: builder.mutation({
      query: (body) => ({
        url: "/items",
        method: "POST",
        body,
      }),
      invalidatesTags: ["items"],
    }),

    updateItem: builder.mutation({
        query: ({id, body}) => ({
            url:`/items/${id}`,
            method: "PUT",
            body
        })
    })
  }),
});

export const { useGetItemsQuery, useAddItemMutation } = itemsApi;
