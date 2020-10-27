import { Movie } from './../models/movie/movie.model';

export const mockMovies: Movie[] = [
  {
    adult: true,
    backdrop_path: 'test',
    genre_ids: [1, 2],
    id: 1,
    original_language: 'test',
    original_title: 'test',
    overview: 'test',
    popularity: 1,
    poster_path: 'test',
    release_date: 'test',
    title: 'test',
    video: false,
    vote_average: 61,
    vote_count: 11
  },
  {
    adult: true,
    backdrop_path: 'test2',
    genre_ids: [2, 3],
    id: 2,
    original_language: 'test2',
    original_title: 'test2',
    overview: 'test2',
    popularity: 2,
    poster_path: 'test2',
    release_date: 'test2',
    title: 'tes2t',
    video: false,
    vote_average: 19,
    vote_count: 12
  }
];

export const mockMoviesResponse = {
  page: 1,
  results: mockMovies,
  total_pages: 100,
  total_results: 2555
};

export const mockMovieDetails = {
  adult: false,
  backdrop_path: 'test',
  belongs_to_collection: {},
  budget: 1,
  genres: [],
  homepage: 'test',
  id: 1,
  imdb_id: 'test',
  original_language: 'test',
  original_title: 'test',
  overview: 'test',
  popularity: 1,
  poster_path: 'test',
  production_companies: [],
  production_countries: [],
  release_date: 'test',
  revenue: 1,
  runtime: 1,
  spoken_languages: [],
  status: 'test',
  tagline: 'test',
  title: 'test',
  video: false,
  vote_average: 1,
  vote_count: 1
};
