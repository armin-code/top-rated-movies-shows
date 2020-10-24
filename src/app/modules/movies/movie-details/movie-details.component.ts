import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { filterDefault } from '../../../app.constants';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  data: any;
  imagePath = environment.image_path;
  videoPath = environment.video_path;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const movieId = this.route.snapshot.params.id;
    this.moviesService
      .getMovieDetails(filterDefault, movieId)
      .subscribe(response => {
        this.data = response.body;
      });
  }
}
