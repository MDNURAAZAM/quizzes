import { apiSlice } from "../apiSlice";

const baseUrl = "/api/admin";

const quizManagementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizSetList: builder.query({
      query: () => ({
        url: `${baseUrl}/quizzes`,
      }),
      providesTags: ["quizzesAdmin"],
    }),
    createQuiz: builder.mutation({
      query: ({ formData }) => ({
        url: `${baseUrl}/quizzes`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["quizzesAdmin"],
    }),
    updateQuiz: builder.mutation({
      query: ({ quizSetId, formData }) => ({
        url: `${baseUrl}/quizzes/${quizSetId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["quizzesAdmin", "quizzes", "quizAttempt"],
    }),
    deleteQuiz: builder.mutation({
      query: ({ quizSetId }) => ({
        url: `${baseUrl}/quizzes/${quizSetId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quizzesAdmin"],
    }),
    addQuestion: builder.mutation({
      query: ({ quizSetId, formData }) => ({
        url: `${baseUrl}/quizzes/${quizSetId}/questions`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["quizzesAdmin"],
    }),
    updateQuestion: builder.mutation({
      query: ({ questionId, formData }) => ({
        url: `${baseUrl}/questions/${questionId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["quizzesAdmin", "quizAttempt"],
    }),
    deleteQuestion: builder.mutation({
      query: ({ questionId }) => ({
        url: `${baseUrl}/questions/${questionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quizzesAdmin", "quizAttempt"],
    }),
  }),
});

export const {
  useGetQuizSetListQuery,
  useAddQuestionMutation,
  useCreateQuizMutation,
  useDeleteQuestionMutation,
  useDeleteQuizMutation,
  useUpdateQuizMutation,
  useUpdateQuestionMutation,
} = quizManagementApi;
