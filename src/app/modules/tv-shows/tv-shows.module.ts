import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

@NgModule({
  declarations: [TvShowsComponent, TvShowDetailsComponent],
  imports: [CommonModule, TvShowsRoutingModule, SharedModule]
})
export class TvShowsModule {}
