import { baseApi } from "@/redux/baseApi";
import type { Response } from "@/types";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActiveStatus: builder.query<boolean, unknown>({
      query: () => ({
        url: "/drivers/status",
        method: "GET",
      }),
      transformResponse: (res: Response<boolean>) => res.data
    }),
    toggleStatus: builder.mutation({
        query: () => ({
            url: "/drivers/active",
            method: "PATCH",
        })
    })
  }),
});

export const { useGetActiveStatusQuery, useToggleStatusMutation } = driverApi;