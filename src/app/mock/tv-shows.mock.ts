import { TvShowDetails } from './../models/tv-show/tv-show-details.model';
import { TvShow } from './../models/tv-show/tv-show.model';

export const mockTVShows: TvShow[] = [
  {
    backdrop_path: 'test',
    first_air_date: 'test',
    genre_ids: [1, 2],
    id: 1,
    name: 'test',
    origin_country: ['test', 'test2'],
    original_language: 'test',
    original_name: 'test',
    overview: 'test',
    popularity: 100,
    poster_path: 'test',
    vote_average: 8.5,
    vote_count: 899
  },
  {
    backdrop_path: 'test2',
    first_air_date: 'test2',
    genre_ids: [3, 4],
    id: 2,
    name: 'test2',
    origin_country: ['test3', 'test4'],
    original_language: 'test',
    original_name: 'test',
    overview: 'test3',
    popularity: 730,
    poster_path: 'test3',
    vote_average: 5.5,
    vote_count: 256
  }
];

export const mockTvShowResponse = {
  page: 1,
  results: mockTVShows,
  total_pages: 100,
  total_results: 2555
};

export const mockTVShowsDetails: TvShowDetails = {
  backdrop_path: 'test',
  created_by: [],
  episode_run_time: [1, 2],
  first_air_date: 'test',
  genres: [],
  homepage: 'test',
  id: 1,
  in_production: false,
  languages: ['test', 'test2'],
  last_air_date: 'test',
  last_episode_to_air: {},
  name: 'test',
  networks: [],
  next_episode_to_air: 'test',
  number_of_episodes: 5254,
  number_of_seasons: 2,
  origin_country: ['test', 'test2'],
  original_language: 'test',
  original_name: 'test',
  overview: 'test',
  popularity: 5,
  poster_path: 'test',
  production_companies: [],
  seasons: [],
  status: 'test',
  type: 'test',
  vote_average: 9,
  vote_count: 255
};
