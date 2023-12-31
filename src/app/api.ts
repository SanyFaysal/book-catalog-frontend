import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://book-catalog-backend-wheat.vercel.app/api/v1`,
    }),
    tagTypes: ['User', 'Book', 'Books'],
    endpoints: () => ({}),
});

export default apiSlice;
