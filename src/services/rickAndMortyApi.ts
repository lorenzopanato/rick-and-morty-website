import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../utils/api";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    findAllCharacters: builder.query({
      query: () => "characters",
    }),
    findAllLocations: builder.query({
      query: () => "location",
    }),
    findAllEpisodes: builder.query({
      query: () => "episode",
    }),
  }),
});
