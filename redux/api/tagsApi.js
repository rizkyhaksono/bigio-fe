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
    };
  },
});

export const { useGetTagsQuery } = tagsApi;
