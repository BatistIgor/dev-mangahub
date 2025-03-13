import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseQuery";
import { API_LOGIN_PATH, API_REGISTRATION_PATH, API_REFRESH_PATH } from "./configApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: API_LOGIN_PATH,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: userData => ({
        url: API_REGISTRATION_PATH,
        method: "POST",
        body: { ...userData },
      }),
    }),
    checkAuth: builder.query({
      query: () => ({
        url: API_REFRESH_PATH,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCheckAuthQuery } = authApi;