import { baseApi } from "@/redux/baseApi";
import type { IMeta, IUser, Response } from "@/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<
      { data: IUser[]; meta: IMeta | undefined },
      unknown
    >({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params,
      }),
      providesTags: ["USER"],
      transformResponse: (response: Response<IUser[]>) => ({
        meta: response.meta,
        data: response.data,
      }),
    }),
    blockRider: builder.mutation({
      query: (id) => ({
        url: `/users/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    approveDriver: builder.mutation({
      query: (id) => ({
        url: `/drivers/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    suspendDriver: builder.mutation({
      query: (id) => ({
        url: `/drivers/suspend/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useBlockRiderMutation,
  useApproveDriverMutation,
  useSuspendDriverMutation,
} = userApi;
