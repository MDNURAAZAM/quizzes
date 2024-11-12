import { apiSlice } from "../apiSlice";

const baseUrl = "/api/quizzes";
const quizTakingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizDetails: builder.query({
      query: ({ quizSetId }) => ({
        url: `${baseUrl}/${quizSetId}`,
      }),
    }),
    getQuizList: builder.query({
      query: () => ({
        url: baseUrl,
      }),
    }),
    getQuizAttempts: builder.query({
      query: ({ quizSetId }) => ({
        url: `${baseUrl}/${quizSetId}/attempts`,
      }),
    }),
    submitQuizAttempt: builder.mutation({
      query: ({ quizId, formData }) => ({
        url: `${baseUrl}/${quizId}/attempt`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetQuizDetailsQuery,
  useGetQuizListQuery,
  useGetQuizAttemptsQuery,
  useSubmitQuizAttemptMutation,
} = quizTakingApi;
