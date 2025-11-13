import { baseApi } from "@/redux/baseApi";
import type { IRide, Response } from "@/types";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActiveStatus: builder.query<boolean, unknown>({
      query: () => ({
        url: "/drivers/status",
        method: "GET",
      }),
      providesTags: ["DRIVER_ACTIVE"],
      transformResponse: (res: Response<boolean>) => res.data,
    }),
    getDriverHistory: builder.query<IRide[], unknown>({
      query: () => ({
        url: "/drivers/history",
        method: "GET",
      }),
      transformResponse: (res: Response<IRide[]>) => res.data,
    }),
    toggleStatus: builder.mutation({
      query: () => ({
        url: "/drivers/active",
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER_ACTIVE"],
    }),
  }),
});

export const { useGetActiveStatusQuery, useToggleStatusMutation, useGetDriverHistoryQuery } = driverApi;
