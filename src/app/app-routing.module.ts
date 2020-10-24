import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'tv-shows',
        loadChildren: () =>
          import('./modules/tv-shows/tv-shows.module').then(
            m => m.TvShowsModule
          )
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./modules/movies/movies.module').then(m => m.MoviesModule)
      },
      { path: '', redirectTo: '/tv-shows', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
