import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    tagTypes: ['User', 'Book', 'Books'],
    endpoints: () => ({}),
});

export default apiSlice;
