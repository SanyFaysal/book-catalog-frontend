import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server_url } from "../config";


const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: server_url,
    }),
    tagTypes: ['User', 'Book', 'Books'],
    endpoints: () => ({}),
});

export default apiSlice;
