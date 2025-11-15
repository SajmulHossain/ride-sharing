import { baseApi } from "@/redux/baseApi";
import type { IAdminAnalytics, Response } from "@/types";

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminAnalytics: builder.query({
      query: () => ({
        url: "/analytics/admin",
        method: "GET",
      }),
      transformResponse: (res: Response<IAdminAnalytics>) => res.data,
    }),
    getDriverAnalytics: builder.query({
      query: () => ({
        url: "/analytics/driver",
        method: "GET",
      }),
      transformResponse: (res: Response<{
      daily: { amount: number, createdAt: string }[];
      monthly: { amount: number, createdAt: string }[];
      yearly: { amount: number, createdAt: string }[];
    }>) => res.data
    }),
  }),
});

export const { useGetAdminAnalyticsQuery, useGetDriverAnalyticsQuery } = analyticsApi;
