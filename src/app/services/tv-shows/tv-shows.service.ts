import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TvShowDetails } from '../../models/tv-show/tv-show-details.model';
import { TvShowResponse } from '../../models/tv-show/tv-show.model-response.model';
import { createHttpParams } from '../../shared/utils/create-http-params.utils';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  filter = '';
  private resourceUrl = `${environment.api_url}tv`;
  constructor(private http: HttpClient) {}

  getTvShows(searchValues): Observable<HttpResponse<TvShowResponse>> {
    const params = createHttpParams(searchValues);
    return this.http.get<TvShowResponse>(`${this.resourceUrl}/top_rated`, {
      params,
      observe: 'response'
    });
  }

  getTVShowDetails(
    searchValues,
    id: number
  ): Observable<HttpResponse<TvShowDetails>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${this.resourceUrl}/${id}`, {
      params,
      observe: 'response'
    });
  }

  searchTvShows(searchValues): Observable<HttpResponse<TvShowResponse>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${environment.api_url}search/tv`, {
      params,
      observe: 'response'
    });
  }
}
