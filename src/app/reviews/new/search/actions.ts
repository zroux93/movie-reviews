'use server';

const TMDB_AUTH_TOKEN = process.env.TMDB_AUTH_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
  },
};

export type MovieSearchParams = {
  query: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string;
  page?: number;
  region?: string;
  year?: string;
};

export type MovieSearchResult = {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type PagedResponse<TResult> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TResult[];
};

const defaultSearchParams: Partial<MovieSearchParams> = {
  include_adult: false,
  language: 'en_US',
  page: 1,
};

export const search = async (params: MovieSearchParams) => {
  const mergedParams: MovieSearchParams = { ...defaultSearchParams, ...params };
  const strParams = Object.entries(mergedParams).map(([key, value]) => [
    key,
    value.toString(),
  ]);

  const url =
    'https://api.themoviedb.org/3/search/movie?' +
    new URLSearchParams(strParams);

  try {
    const searchResults = await fetch(url, options);
    const responseJson = await searchResults.json();
    return responseJson as PagedResponse<MovieSearchResult>;
  } catch (err) {
    console.error(err);
  }
};
