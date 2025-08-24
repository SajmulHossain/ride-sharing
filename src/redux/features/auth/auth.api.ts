import { baseApi } from "@/redux/baseApi";
import type { IUser, Response } from "@/types";
import { setRole } from "./authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<IUser, unknown>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["USER"],
      transformResponse: (response: Response<IUser>) => response.data,
      onQueryStarted:async (_, queryLifeCycleApi) => {
        try {
          const { data } = await queryLifeCycleApi.queryFulfilled;
          queryLifeCycleApi.dispatch(setRole(data.role));
        } catch {
          // 
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
