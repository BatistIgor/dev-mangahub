import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_MANGA_PATH, API_COMMENTS_PATH, API_PUBLICK_COMMENTS_PATH } from "./configApi";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // credentials: "include" можно удалить, так как API общедоступное
});

export const mangaApi = createApi({
  reducerPath: "mangaApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getMangaByQuery: builder.query({
      query: (params) => ({
        url: API_MANGA_PATH,
        params,
      }),
    }),
    getMangaById: builder.query({
      query: (id) => `${API_MANGA_PATH}/${id}`,
    }),
    getMangaChapters: builder.query({
      query: (id) => `${API_MANGA_PATH}/${id}/chapters`,
    }),
    getMangaChapterById: builder.query({
      query: ({ id, chapterId }) => `${API_MANGA_PATH}/${id}/chapters/${chapterId}`,
    }),

    // Новый endpoint для получения комментариев, добавляем параметр manga
    getCommentsByMangaId: builder.query({
      query: (mangaId) => ({
        url: API_PUBLICK_COMMENTS_PATH,
        params: { manga: mangaId }, // Передаем параметр manga в строку запроса
      }),
    }),

    // Новый endpoint для добавления комментария
    addComment: builder.mutation({
      query: (newComment) => ({
        url: API_COMMENTS_PATH,
        method: "POST",
        body: newComment,
      }),
    }),
  }),
});

export const {
  useGetMangaByQueryQuery,
  useGetMangaByIdQuery,
  useGetMangaChaptersQuery,
  useGetMangaChapterByIdQuery,
  useGetCommentsByMangaIdQuery,
  useAddCommentMutation,
} = mangaApi;