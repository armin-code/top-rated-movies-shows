import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { filterDefault } from '../../../app.constants';
import { TvShowDetails } from '../../../models/tv-show/tv-show-details.model';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {
  data: TvShowDetails;
  imagePath = environment.image_path;
  videoPath = environment.video_path;

  constructor(
    private tvShowsService: TvShowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTVShowDetails();
  }

  getTVShowDetails(): void {
    const showId = this.route.snapshot.params.id;
    this.tvShowsService
      .getTVShowDetails(filterDefault, showId)
      .subscribe(response => {
        this.data = response.body;
      });
  }
}
