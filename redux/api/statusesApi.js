import { baseApi } from "../axiosBaseQuery";

export const statusesApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getStatuses: builder.query({
        query: () => ({
          url: `/status`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useGetStatusesQuery } = statusesApi;
