import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { filterDefault } from 'src/app/app.constants';
import { mockMovieDetails, mockMoviesResponse } from './../../mock/movie.mock';
import { MovieDetails } from './../../models/movie/movie-details.model';
import { MovieResponse } from './../../models/movie/movie-response.model';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movies successful', () => {
    service
      .getMovies(filterDefault)
      .subscribe((data: HttpResponse<MovieResponse>) => {
        expect(data.body).toEqual(mockMoviesResponse);
      });
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=95ff95cafc9d894e2e8a305e1e1f37ee`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMoviesResponse);

    httpMock.verify();
  });

  it('should get the movie details successful', () => {
    service
      .getMovieDetails(filterDefault, 100)
      .subscribe((data: HttpResponse<MovieDetails>) => {
        expect(data.body).toEqual(mockMovieDetails);
      });
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/movie/100?page=1&api_key=95ff95cafc9d894e2e8a305e1e1f37ee`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovieDetails);

    httpMock.verify();
  });

  it('should get the searched data successful', () => {
    const filter = { ...filterDefault, ...{ query: '1220n' } };
    service
      .searchMovies(filter)
      .subscribe((data: HttpResponse<MovieResponse>) => {
        expect(data.body).toEqual(mockMoviesResponse);
      });
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/search/movie?page=1&api_key=95ff95cafc9d894e2e8a305e1e1f37ee&query=1220n`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMoviesResponse);

    httpMock.verify();
  });
});
