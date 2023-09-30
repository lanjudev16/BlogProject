import { baseApi } from "./baseApi";

const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPost: builder.query({
            query: () => '/allPost',
            providesTags: ["Posts"]
        }),
        updatePost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/updatePost/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Posts"]
        }),
    })
}) 
export const {useGetPostQuery,useUpdatePostMutation}=postApi