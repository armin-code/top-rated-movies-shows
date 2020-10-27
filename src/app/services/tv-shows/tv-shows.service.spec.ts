import { HttpParams, HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TvShowResponse } from 'src/app/models/tv-show/tv-show.model-response.model';
import { createHttpParams } from 'src/app/shared/utils/create-http-params.utils';
import { filterDefault } from './../../app.constants';
import {
  mockTvShowResponse,
  mockTVShowsDetails
} from './../../mock/tv-shows.mock';
import { TvShowDetails } from './../../models/tv-show/tv-show-details.model';
import { TvShowsService } from './tv-shows.service';

describe('TvShowsService', () => {
  let service: TvShowsService;
  let httpMock: HttpTestingController;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvShowsService]
    });
    service = TestBed.inject(TvShowsService);
    httpMock = TestBed.inject(HttpTestingController);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check createHttpParams util', () => {
    let params = new HttpParams();
    params = createHttpParams(filterDefault);
    expect(String(params.get('page'))).toBe('1');
  });

  it('should get the tv shows data successful', () => {
    service
      .getTvShows(filterDefault)
      .subscribe((data: HttpResponse<TvShowResponse>) => {
        expect(data.body).toEqual(mockTvShowResponse);
      });
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/tv/top_rated?page=1&api_key=95ff95cafc9d894e2e8a305e1e1f37ee`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTvShowResponse);

    httpMock.verify();
  });

  it('should get the tv show details successful', () => {
    service
      .getTVShowDetails(filterDefault, 100)
      .subscribe((data: HttpResponse<TvShowDetails>) => {
        expect(data.body).toEqual(mockTVShowsDetails);
      });
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/tv/100?page=1&api_key=95ff95cafc9d894e2e8a305e1e1f37ee`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTVShowsDetails);

    httpMock.verify();
  });

  it('should get the searched data successful', () => {
    const filter = { ...filterDefault, ...{ query: '1220n' } };
    service.searchTvShows(filter).subscribe((data: HttpResponse<any>) => {
      expect(data.body).toEqual(null);
    });
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/search/tv?page=1&api_key=95ff95cafc9d894e2e8a305e1e1f37ee&query=1220n`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');
    req.flush(null);

    httpMock.verify();
  });
});
