import { TvShow } from './tv-show.model';

export interface TvShowResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}
