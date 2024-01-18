// import { baseApi } from "../axiosBaseQuery";

// export const storiesApi = baseApi.enhanceEndpoints({}).injectEndpoints({
//   endpoints(builder) {
//     return {
//       getStory: builder.query({
//         query: () => ({
//           url: `/stories`,
//           method: "GET",
//         }),
//         postStory: builder.mutation({
//           query: (newStory) => ({
//             url: "/stories",
//             method: "POST",
//             body: newStory,
//           }),
//         }),
//         postStory: builder.mutation({
//           query: ({ id, updatedStory }) => ({
//             url: `/stories/${id}`,
//             method: "PUT",
//             body: updatedStory,
//           }),
//         }),
//         deleteStory: builder.mutation({
//           query: (id) => ({
//             url: `/stories/${id}`,
//             method: "DELETE",
//           }),
//         }),
//       }),
//     };
//   },
// });

// export const { useGetStoryQuery } = storiesApi;

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
      postStory: builder.mutation({
        query: (newStory) => ({
          url: `/stories`,
          method: "POST",
          body: newStory,
        }),
      }),
      putStory: builder.mutation({
        query: ({ id, updatedStory }) => ({
          url: `/stories/${id}`,
          method: "PUT",
          body: updatedStory,
        }),
      }),
      deleteStory: builder.mutation({
        query: (id) => ({
          url: `/stories/${id}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useGetStoryQuery, usePostStoryMutation, usePutStoryMutation, useDeleteStoryMutation } = storiesApi;
