import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieDetails } from '../../models/movie/movie-details.model';
import { MovieResponse } from '../../models/movie/movie-response.model';
import { createHttpParams } from '../../shared/utils/create-http-params.utils';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  filter = '';
  private resourceUrl = `${environment.api_url}movie`;

  constructor(private http: HttpClient) {}

  getMovies(searchValues): Observable<HttpResponse<MovieResponse>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${this.resourceUrl}/top_rated`, {
      params,
      observe: 'response'
    });
  }

  getMovieDetails(
    searchValues,
    id: number
  ): Observable<HttpResponse<MovieDetails>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${this.resourceUrl}/${id}`, {
      params,
      observe: 'response'
    });
  }

  searchMovies(searchValues): Observable<HttpResponse<MovieResponse>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${environment.api_url}search/movie`, {
      params,
      observe: 'response'
    });
  }
}
