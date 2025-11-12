import { baseApi } from "@/redux/baseApi";
import type { IHistory, IRide, IRideWithUser, Response } from "@/types";

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
      }),providesTags: ["RIDE"],
      transformResponse: (response: Response<IRide>) => response.data,
    }),
    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/rides/${id}/status`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["RIDE"]
    }),
    getAvailableRides: builder.query<(IRideWithUser)[], unknown>({
      query: () => ({
        url: "/rides/available-rides",
        method: "GET",
      }),
      providesTags: ["RIDE"],
      transformResponse: (response: Response<IRideWithUser[]>) => response.data
    }),
    getCurrentRide: builder.query<IRideWithUser, unknown>({
      query: () => ({
        url: "/rides/current",
        method: "GET"
      }),
      providesTags: ["RIDE"],
      transformResponse: (res: Response<IRideWithUser>) => res.data
    })
  }),
});

export const {
  useGetRideHistoryQuery,
  useGetRidesQuery,
  useRequestRideMutation,
  useGetRequestedRideQuery,
  useUpdateRideStatusMutation,
  useGetAvailableRidesQuery,
  useGetCurrentRideQuery
} = rideApi;
