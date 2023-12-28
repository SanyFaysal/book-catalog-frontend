
import apiSlice from '../api';

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "/user/signup",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});


export const { useSignupMutation, useLoginMutation } = userApi;