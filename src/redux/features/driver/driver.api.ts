import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActiveStatus: builder.query({
      query: () => ({
        url: "/drivers/status",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetActiveStatusQuery } = driverApi;