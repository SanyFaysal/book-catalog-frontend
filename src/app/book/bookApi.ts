import {
    BookType,
    IUpdateBookMutationType,
    ReviewType,
    UserType,
} from "../../types/dataTypes";
import { objectToQueryString } from "../../helpers/queryString";
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
            query: (query) => {
                const queryString: any = objectToQueryString(query);
                return ({
                    url: `/book?${queryString}`,
                })
            },
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

        getAllGenre: builder.query({
            query: () => ({
                url: `/book/all-genre`,
            }),
            providesTags: ["Books"],
        }),
        getAllPublicationYear: builder.query({
            query: () => ({
                url: `/book/all-publication-year`,
            }),
            providesTags: ["Books"],
        }),
    }),
});

export const {
    useAddBookMutation,
    useGetBooksQuery,
    useGetBookByIdQuery,
    useAddReviewMutation,
    useEditBookMutation,
    useDeleteBookMutation,
    useGetAllGenreQuery,
    useGetAllPublicationYearQuery
} = bookApi;
