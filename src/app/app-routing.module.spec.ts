import { AppComponent } from './app.component';
import { AppModule } from './app.module';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { routes } from './app-routing.module';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let router: Router;
const authGuard = jasmine.createSpyObj('AuthGuard', ['canActivate']);
const privilegeGuard = jasmine.createSpyObj('PrivilegeGuard', ['canLoad']);
describe('AppRoutingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(routes),

      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();

    const injector = fixture.debugElement.injector;
    router = injector.get(Router);
  }));

  it('should navigate to "movies"', async(() => {
    router.navigate(['movies']).then(() => {
      expect(router.url).toEqual('/movies');
    });
  }));

  it('should navigate to "tv-shows"', async(() => {
    router.navigate(['tv-shows']).then(() => {
      expect(router.url).toEqual('/tv-shows');
    });
  }));

});
