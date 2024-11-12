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
  //attempt the initial request
  let result = await baseQuery(args, api, extraOptions);

  // If the status is 401, try to refresh the token
  if (result?.error && result.error.status === 401) {
    const prevData = api?.getState()?.auth;

    // Attempt to refresh the token
    const refreshResult = await baseQuery(
      {
        url: "/api/auth/refresh-token",
        method: "POST",
        body: {
          refreshToken: prevData?.refreshToken,
        },
      },
      api,
      extraOptions
    );

    //check if refrsh was succesful
    if (refreshResult?.data) {
      const updatedAuth = {
        ...prevData,
        accessToken: refreshResult?.data?.data?.accessToken,
        refreshToken: refreshResult?.data?.data?.refreshToken,
      };

      // Save the new token
      api.dispatch(userLoggedIn(updatedAuth));
      localStorage.setItem("auth", JSON.stringify(updatedAuth));

      // Retry the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Refresh failed; clear the token and potentially redirect to login
      api.dispatch(userLoggedOut());
      localStorage.removeItem("auth");
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: baseQueryWithReauth,

  endpoints: () => ({}),
});
