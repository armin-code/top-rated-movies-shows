import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';
import { environment } from './../../../../environments/environment';
import { filterDefault } from './../../../app.constants';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  data: any[] = [];
  imagePath = environment.image_path;
  constructor(private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.getTopRatedTvShows();
  }

  getTopRatedTvShows(): void {
    this.tvShowsService.getTvShows(filterDefault).subscribe(response => {
      this.data = response.body.results.slice(0, 10);
    });
  }
}
