
import { BookType, UserType } from '../../types/dataTypes';
import apiSlice from '../api';

const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: ({ bookData, token }: { bookData: BookType, token: string }) => ({
                url: "/book/create",
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: bookData,
            }),
            invalidatesTags: ["Books"],
        }),
        getBooks: builder.query({
            query: () => ({
                url: `/book`,
            }),
            providesTags: ["Books"],
        }),

    }),
});


export const { useAddBookMutation, useGetBooksQuery } = bookApi;