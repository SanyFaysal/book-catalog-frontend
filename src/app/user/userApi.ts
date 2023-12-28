
import { UserType } from '../../types/dataTypes';
import apiSlice from '../api';

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data: UserType) => ({
                url: "/user/signup",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        login: builder.mutation({
            query: (data: Partial<UserType>) => ({
                url: "/user/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});


export const { useSignUpMutation, useLoginMutation } = userApi;