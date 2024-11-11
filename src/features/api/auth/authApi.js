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
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
