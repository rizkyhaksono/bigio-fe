import { baseApi } from "../axiosBaseQuery";

export const storiesApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getStory: builder.query({
        query: () => ({
          url: `/stories`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useGetStoryQuery } = storiesApi;
