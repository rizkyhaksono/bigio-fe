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
    };
  },
});

export const { useGetStoryTagQuery } = storyTagApi;
