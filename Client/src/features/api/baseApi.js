import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://blog-project-delta-sepia.vercel.app"
    }),
    tagTypes:["Posts"],
    endpoints: (builder) => ({
       
    }),

})