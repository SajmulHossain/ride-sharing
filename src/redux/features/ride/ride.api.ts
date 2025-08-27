import { baseApi } from "@/redux/baseApi";
import type { IHistory, Response } from "@/types";

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
  }),
});

export const { useGetRideHistoryQuery } = rideApi;
