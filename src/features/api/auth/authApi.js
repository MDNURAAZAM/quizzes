import { userLoggedIn } from "../../auth/authSlice";
import { apiSlice } from "../apiSlice";

const baseUrl = "/api/auth";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ formData }) => ({
        url: `${baseUrl}/register`,
        method: "POST",
        body: formData,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ formData }) => ({
        url: `${baseUrl}/login`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["quizAttempt", "quizzes"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { data } = result?.data || {};
          const accessToken = data?.tokens?.accessToken;
          const refreshToken = data?.tokens?.refreshToken;
          const user = data?.user;

          if (accessToken && refreshToken && user) {
            localStorage.setItem(
              "auth",
              JSON.stringify({
                accessToken,
                refreshToken,
                user,
              })
            );

            dispatch(
              userLoggedIn({
                accessToken,
                refreshToken,
                user,
              })
            );
          }
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
