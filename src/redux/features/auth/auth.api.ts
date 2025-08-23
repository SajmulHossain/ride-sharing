import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: "/auth/me",
                method: "GET"
            }),
            providesTags: ["USER"],
        }),
        login: builder.mutation({
            query: data => ({
                url: "/auth/login",
                method: "POST",
                data
            })
        })
    })
})

export const { useGetMeQuery, useLoginMutation } = authApi;