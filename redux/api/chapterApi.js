import { baseApi } from "../axiosBaseQuery";

export const chapterApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getChapter: builder.query({
        query: () => ({
          url: `/chapter`,
          method: "GET",
        }),
      }),
      postChapter: builder.mutation({
        query: (data) => ({
          url: `/chapter`,
          method: "POST",
          body: {
            title: data.title,
            story: data.story,
            story_id: data.story_id,
          },
        }),
      }),
      putChapter: builder.mutation({
        query: ({ CHAPTER_ID, TITLE, STORY, StoryID }) => ({
          url: `/chapter/${CHAPTER_ID}`,
          method: "PUT",
          body: { TITLE, STORY, StoryID },
        }),
      }),
      deleteChapter: builder.mutation({
        query: ({ CHAPTER_ID }) => ({
          url: `/chapter/${CHAPTER_ID}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { useGetChapterQuery, usePostChapterMutation, usePutChapterMutation, useDeleteChapterMutation } = chapterApi;
