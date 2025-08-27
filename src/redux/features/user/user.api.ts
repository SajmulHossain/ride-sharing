import { baseApi } from "@/redux/baseApi";
import type { IUser, Response } from "@/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], unknown>({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params,
      }),
      transformResponse: (response: Response<IUser[]>) => response.data,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
