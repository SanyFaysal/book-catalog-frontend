import { UserType } from "../../types/dataTypes";
import apiSlice from "../api";

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
        getMe: builder.query({
            query: (token) => ({
                url: `/user/me`,
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ["User"],
        }),
        addWishlist: builder.mutation({
            query: ({ token, bookId }: { token: string; bookId: string }) => ({
                url: `/user/add-wishlist/${bookId}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["User"],
        }),
        removeWishlist: builder.mutation({
            query: ({ token, bookId }: { token: string; bookId: string }) => ({
                url: `/user/remove-wishlist/${bookId}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["User"],
        }),
        updateWishlist: builder.mutation({
            query: ({ token, data }: { token: string; data: any }) => ({
                url: `/user/update-wishlist`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useSignUpMutation,
    useLoginMutation,
    useAddWishlistMutation,
    useRemoveWishlistMutation,
    useGetMeQuery,
    useUpdateWishlistMutation
} = userApi;
