import { apiSlice } from "../apiSlice";

const baseUrl = "/api/admin";

const quizManagementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizSetList: builder.query({
      query: () => ({
        url: `${baseUrl}/quizzes`,
      }),
    }),
    createQuiz: builder.mutation({
      query: ({ formData }) => ({
        url: `${baseUrl}/quizzes`,
        method: "POST",
        body: formData,
      }),
    }),
    updateQuiz: builder.mutation({
      query: ({ quizSetId, formData }) => ({
        url: `${baseUrl}/quizzes/${quizSetId}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    deleteQuiz: builder.mutation({
      query: ({ quizSetId }) => ({
        url: `${baseUrl}/quizzes/${quizSetId}`,
        method: "DELETE",
      }),
    }),
    addQuestion: builder.mutation({
      query: ({ quizSetId, formData }) => ({
        url: `${baseUrl}/quizzes/${quizSetId}/questions`,
        method: "POST",
        body: formData,
      }),
    }),
    updateQuestion: builder.mutation({
      query: ({ questionId, formData }) => ({
        url: `${baseUrl}/questions/${questionId}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    deleteQuestion: builder.mutation({
      query: ({ questionId }) => ({
        url: `${baseUrl}/questions/${questionId}`,
        method: "DELETE",
      }),
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
} = quizManagementApi;
