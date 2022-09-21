import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse } from './types';

export const AUTH_API_REDUCER_KEY = 'authApi';
export const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AUTH_SERVER,
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<AuthResponse, string>({
      // final url: baseUrl/url
      query: (code) => {
       // params come from useQuery
        return ({
          url: 'github/access_token',
          method: 'POST',
          body: { code }
        })
      },
    }),
  }),
});