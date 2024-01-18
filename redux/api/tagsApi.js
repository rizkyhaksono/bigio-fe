import { baseApi } from "../axiosBaseQuery";

export const tagsApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getTags: builder.query({
        query: () => ({
          url: `/tags`,
          method: "GET",
        }),
      }),
      postTag: builder.mutation({
        query: (newTag) => ({
          url: "/tags",
          method: "POST",
          body: newTag,
        }),
      }),
      putTag: builder.mutation({
        query: ({ tagId, tagName }) => ({
          url: `/tags/${tagId}`,
          method: "PUT",
          body: { tagName },
        }),
      }),
      deleteTag: builder.mutation({
        query: (tagId) => ({
          url: `/tags/${tagId}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useGetTagsQuery, usePostTagMutation, usePutTagMutation, useDeleteTagMutation } = tagsApi;
