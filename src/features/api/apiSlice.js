import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If the status is 401, try to refresh the token
  if (result?.error && result.error.status === 401) {
    // Attempt to refresh the token
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions
    );

    const prevData = api?.getState()?.auth;

    if (refreshResult?.data) {
      // Save the new token
      api.dispatch(
        userLoggedIn({
          ...prevData,
          accessToken: refreshResult.data.accessToken,
        })
      );

      // Retry the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Refresh failed; clear the token and potentially redirect to login
      api.dispatch(userLoggedOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: baseQueryWithReauth,

  endpoints: () => ({}),
});
