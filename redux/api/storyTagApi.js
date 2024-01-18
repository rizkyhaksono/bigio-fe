import { baseApi } from "../axiosBaseQuery";

export const storyTagApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getStoryTag: builder.query({
        query: () => ({
          url: `/story_tag`,
          method: "GET",
        }),
      }),
      postStoryTag: builder.mutation({
        query: (newStoryTag) => ({
          url: "/story_tags",
          method: "POST",
          body: newStoryTag,
        }),
      }),
      putStoryTag: builder.mutation({
        query: ({ tagId, storyId, newTagId }) => ({
          url: `/story_tags/${tagId}`,
          method: "PUT",
          body: { storyId, newTagId },
        }),
      }),
      deleteStoryTag: builder.mutation({
        query: ({ tagId, storyId }) => ({
          url: `/story_tags/${tagId}`,
          method: "DELETE",
          body: { storyId },
        }),
      }),
    };
  },
});

export const { useGetStoryTagQuery, usePostStoryTagMutation, usePutStoryTagMutation, useDeleteStoryTagMutation } = storyTagApi;
