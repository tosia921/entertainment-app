import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ImbdApi = createApi({
  reducerPath: 'ImbdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (pageNum) => `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNum}`,
    }),
    getTrendingMovies: builder.query({
      query: () => `trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPopularMoviesQuery, useGetTrendingMoviesQuery } = ImbdApi;