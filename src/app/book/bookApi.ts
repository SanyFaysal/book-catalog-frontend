import {
    BookType,
    IUpdateBookMutationType,
    ReviewType,
    UserType,
} from "../../types/dataTypes";
import apiSlice from "../api";

const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: ({ bookData, token }: { bookData: BookType; token: string }) => ({
                url: "/book/create",
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: bookData,
            }),
            invalidatesTags: ["Books"],
        }),
        editBook: builder.mutation({
            query: ({ data, token, bookId }: IUpdateBookMutationType) => ({
                url: `/book/${bookId}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: ({ token, bookId }: { token: string, bookId: string }) => ({
                url: `/book/${bookId}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["Books"],
        }),
        getBooks: builder.query({
            query: () => ({
                url: `/book`,
            }),
            providesTags: ["Books"],
        }),
        getBookById: builder.query({
            query: (bookId: string) => ({
                url: `/book/${bookId}`,
            }),
            providesTags: ["Book"],
        }),
        addReview: builder.mutation({
            query: ({
                reviewData,
                token,
                bookId,
            }: {
                reviewData: ReviewType;
                token: string;
                bookId: string;
            }) => ({
                url: `/book/add-review/${bookId}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: reviewData,
            }),
            invalidatesTags: ["Book"],
        }),
    }),
});

export const {
    useAddBookMutation,
    useGetBooksQuery,
    useGetBookByIdQuery,
    useAddReviewMutation,
    useEditBookMutation,
    useDeleteBookMutation
} = bookApi;
