import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { mockMovieDetails } from 'src/app/mock/movie.mock';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { moviesService } from '../../../mock/movie-service.mock';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let getMovieDetailsSpy: jasmine.Spy;

  beforeEach(async(() => {
    getMovieDetailsSpy = moviesService.getMovieDetails.and.returnValue(
      of(mockMovieDetails)
    );

    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
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
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
