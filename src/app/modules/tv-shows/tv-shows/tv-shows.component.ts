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
  constructor(public tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.getTvShows(this.tvShowsService.filter);
  }

  getTopRatedTvShows(): void {
    this.tvShowsService.getTvShows(filterDefault).subscribe(response => {
      this.data = response.body.results.slice(0, 10);
    });
  }

  searchMovies(filter): void {
    this.tvShowsService.searchTvShows(filter).subscribe(response => {
      this.data = response.body.results.slice(0, 10);
    });
  }

  getTvShows(value: string): void {
    const searchFilter = value ? value.length > 2 : 0;
    this.tvShowsService.filter = value;
    if (searchFilter) {
      const filterSerach = {
        ...filterDefault,
        ...{ query: this.tvShowsService.filter }
      };
      this.searchMovies(filterSerach);
    } else {
      this.getTopRatedTvShows();
    }
  }
}
