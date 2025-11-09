import { baseApi } from "@/redux/baseApi";
import type { IHistory, IRide, Response } from "@/types";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRideHistory: builder.query<Response<IHistory>, unknown>({
      query: (params) => ({
        url: "/rides/history",
        method: "GET",
        params,
      }),
      //   transformResponse: (response: Response<IHistory>) => response.data,
    }),
    getRides: builder.query<IRide[], unknown>({
      query: () => ({
        url: "/rides/me",
        method: "GET",
      }),
      transformResponse: (response: Response<IRide[]>) => response.data,
    }),
    requestRide: builder.mutation({
      query: (data) => ({
        url: "/rides/request",
        data,
        method: "POST",
      }),
    }),
    getRequestedRide: builder.query<IRide, unknown>({
      query: () => ({
        url: "/rides/ride",
        method: "GET",
      }),
      transformResponse: (response: Response<IRide>) => response.data,
    }),
    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/rides/${id}/status`,
        method: "PATCH",
        data: { status },
      }),
    }),
    getAvailableRides: builder.query<IRide[], unknown>({
      query: () => ({
        url: "/rides/available-rides",
        method: "GET",
      }),
      transformResponse: (response: Response<IRide[]>) => response.data
    }),
  }),
});

export const {
  useGetRideHistoryQuery,
  useGetRidesQuery,
  useRequestRideMutation,
  useGetRequestedRideQuery,
  useUpdateRideStatusMutation,
  useGetAvailableRidesQuery
} = rideApi;
