import { baseApi } from "@/redux/baseApi";
import type { IAdminAnalytics, Response } from "@/types";

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminAnalytics: builder.query({
      query: () => ({
        url: "/analytics/admin",
        method: "GET",
      }),
      transformResponse: (res: Response<IAdminAnalytics>) => res.data 
    }),
  }),
});

export const { useGetAdminAnalyticsQuery } = analyticsApi;
