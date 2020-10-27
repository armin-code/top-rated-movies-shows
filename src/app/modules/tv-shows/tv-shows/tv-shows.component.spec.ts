import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { mockTvShowResponse } from 'src/app/mock/tv-shows.mock';
import { SharedModule } from 'src/app/shared/shared.module';
import { getTopTen } from 'src/app/shared/utils/helper.utils';
import { tvShowsService } from '../../../mock/tv-shows-service.mock';
import { TvShowsService } from './../../../services/tv-shows/tv-shows.service';
import { TvShowsComponent } from './tv-shows.component';

describe('TvShowsComponent', () => {
  let component: TvShowsComponent;
  let fixture: ComponentFixture<TvShowsComponent>;
  let getTvShowsSpy: jasmine.Spy;
  let searchTvShowsSpy: jasmine.Spy;

  beforeEach(async(() => {
    getTvShowsSpy = tvShowsService.getTvShows.and.returnValue(
      of(mockTvShowResponse)
    );

    searchTvShowsSpy = tvShowsService.searchTvShows.and.returnValue(
      of(mockTvShowResponse)
    );

    TestBed.configureTestingModule({
      declarations: [TvShowsComponent],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [{ provide: TvShowsService, useValue: tvShowsService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTopRatedTvShows', () => {
    component.getTopRatedTvShows();
    expect(getTvShowsSpy).toHaveBeenCalled();
  });

  it('should call searchMovies', () => {
    const filter = '12 n';
    component.getTvShows(filter);
    expect(searchTvShowsSpy).toHaveBeenCalled();
  });

  it('should call getTopTen', () => {
    const results = [0,1,2.3,4,5,6,7,8,9,10,11];
    const data = getTopTen(results);
    expect(data.length).toBe(10);
  });
});
