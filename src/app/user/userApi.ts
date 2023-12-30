
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
        addWishlist: builder.mutation({
            query: ({ token, bookId }: { token: string, bookId: string }) => ({
                url: `/user/add-wishlist/${bookId}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["User"],
        }),

        getBookById: builder.query({
            query: (bookId: string) => ({
                url: `/book/${bookId}`,
            }),
            providesTags: ["Book"],
        }),
    }),
});


export const { useSignUpMutation, useLoginMutation, useAddWishlistMutation } = userApi;