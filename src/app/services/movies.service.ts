import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { createHttpParams } from '../shared/utils/create-http-params.utils';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  resourceUrl = `${environment.api_url}movie`;
  constructor(private http: HttpClient) {}
  getMovies(searchValues): Observable<HttpResponse<any>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${this.resourceUrl}/top_rated`, {
      params,
      observe: 'response'
    });
  }

  getMovieDetails(searchValues, id: number): Observable<HttpResponse<any>> {
    const params = createHttpParams(searchValues);

    return this.http.get<any>(`${this.resourceUrl}/${id}`, {
      params,
      observe: 'response'
    });
  }
}
