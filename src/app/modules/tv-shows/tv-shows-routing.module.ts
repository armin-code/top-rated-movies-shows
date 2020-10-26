import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowsComponent
  },
  {
    path: ':id',
    component: TvShowDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule {}
