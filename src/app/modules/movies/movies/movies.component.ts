import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie/movie.model';
import { MoviesService } from '../../../services/movies/movies.service';
import {
  checkSearchFilter,
  getTopTen
} from '../../../shared/utils/helper.utils';
import { environment } from './../../../../environments/environment';
import { filterDefault } from './../../../app.constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  data: Movie[] = [];
  imagePath = environment.image_path;

  constructor(public moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies(this.moviesService.filter);
  }

  getTopRatedMovies(): void {
    this.moviesService.getMovies(filterDefault).subscribe(response => {
      this.data = response.body ? getTopTen(response.body.results) : [];
    });
  }

  searchMovies(filter): void {
    this.moviesService.searchMovies(filter).subscribe(response => {
      this.data = response.body ? response.body.results : [];
    });
  }

  getMovies(value: string): void {
    const searchFilter = checkSearchFilter(value);
    this.moviesService.filter = value;
    if (searchFilter) {
      const filterSerach = {
        ...filterDefault,
        ...{ query: this.moviesService.filter }
      };
      this.searchMovies(filterSerach);
      return;
    }

    this.getTopRatedMovies();
  }
}
