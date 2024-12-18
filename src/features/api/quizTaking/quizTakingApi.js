import { apiSlice } from "../apiSlice";

const baseUrl = "/api/quizzes";
const quizTakingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizDetails: builder.query({
      query: ({ quizSetId }) => ({
        url: `${baseUrl}/${quizSetId}`,
      }),
      providesTags: (_result, _error, arg) => [
        { type: "quizAttempt", id: arg?.quizSetId },
      ],
    }),

    getQuizList: builder.query({
      query: () => ({
        url: baseUrl,
      }),
      providesTags: ["quizzes"],
    }),

    getQuizAttempts: builder.query({
      query: ({ quizSetId }) => ({
        url: `${baseUrl}/${quizSetId}/attempts`,
      }),
      providesTags: (_result, _error, arg) => [
        { type: "quizAttempt", id: arg?.quizSetId },
      ],
    }),

    submitQuizAttempt: builder.mutation({
      query: ({ quizSetId, formData }) => ({
        url: `${baseUrl}/${quizSetId}/attempt`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "quizAttempt", id: arg?.quizSetId },
        "quizzes",
      ],
    }),
  }),
});

export const {
  useGetQuizDetailsQuery,
  useGetQuizListQuery,
  useGetQuizAttemptsQuery,
  useSubmitQuizAttemptMutation,
} = quizTakingApi;
