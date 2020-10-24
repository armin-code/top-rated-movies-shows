import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { environment } from './../../../../environments/environment';
import { filterDefault } from './../../../app.constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  data: any[] = [];
  imagePath = environment.image_path;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies(): void {
    this.moviesService.getMovies(filterDefault).subscribe(response => {
      this.data = response.body.results.slice(0, 10);
    });
  }
}
