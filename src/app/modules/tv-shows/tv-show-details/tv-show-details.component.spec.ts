import { mockTVShowsDetails } from './../../../mock/tv-shows.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { tvShowsService } from '../../../mock/tv-shows-service.mock';
import { TvShowsService } from './../../../services/tv-shows/tv-shows.service';
import { TvShowDetailsComponent } from './tv-show-details.component';

describe('TvShowDetailsComponent', () => {
  let component: TvShowDetailsComponent;
  let fixture: ComponentFixture<TvShowDetailsComponent>;
  let getTvShowDetails: jasmine.Spy;

  beforeEach(async(() => {
    getTvShowDetails = tvShowsService.getTVShowDetails.and.returnValue(of(mockTVShowsDetails));

    TestBed.configureTestingModule({
      declarations: [TvShowDetailsComponent],
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
    fixture = TestBed.createComponent(TvShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
