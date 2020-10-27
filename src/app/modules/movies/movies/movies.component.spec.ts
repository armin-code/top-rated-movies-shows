import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockMovies, mockMoviesResponse } from 'src/app/mock/movie.mock';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { moviesService } from '../../../mock/movie-service.mock';
import { routes } from './../../../app-routing.module';
import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let getMoviesSpy: jasmine.Spy;
  let searchMoviesSpy: jasmine.Spy;

  beforeEach(async(() => {
    getMoviesSpy = moviesService.getMovies.and.returnValue(
      of(mockMoviesResponse)
    );
    searchMoviesSpy = moviesService.searchMovies.and.returnValue(
      of(mockMoviesResponse)
    );

    TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [{ provide: MoviesService, useValue: moviesService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTopRatedTvShows', () => {
    component.getTopRatedMovies();
    expect(getMoviesSpy).toHaveBeenCalled();
  });

  it('should call searchMovies', () => {
    const filter = '12 n';
    component.getMovies(filter);
    component.data = mockMovies;
    expect(component.data).toEqual(mockMovies);
    expect(searchMoviesSpy).toHaveBeenCalled();
  });
});
