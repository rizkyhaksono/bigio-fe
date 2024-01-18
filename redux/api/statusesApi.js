import { baseApi } from "../axiosBaseQuery";

export const statusesApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getStatus: builder.query({
        query: () => ({
          url: `/status`,
          method: "GET",
        }),
      }),
      postStatus: builder.mutation({
        query: (newStatus) => ({
          url: `/status`,
          method: "POST",
          body: newStatus,
        }),
      }),
      putStatus: builder.mutation({
        query: ({ statusId, updatedStatus }) => ({
          url: `/status/${statusId}`,
          method: "PUT",
          body: updatedStatus,
        }),
      }),
      deleteStatus: builder.mutation({
        query: (statusId) => ({
          url: `/status/${statusId}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useGetStatusQuery, usePostStatusMutation, usePutStatusMutation, useDeleteStatusMutation } = statusesApi;
