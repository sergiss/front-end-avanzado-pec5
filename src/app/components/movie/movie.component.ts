import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerService } from '../../services/spinner.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatIconModule, MatExpansionModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  movie!: Movie;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    if (!identifier) {
      this.router.navigate(['/']);
      return;
    }
    this.spinnerService.show();
    this.moviesService.getMovieById(Number(identifier)).subscribe((movie) => {
      this.movie = movie;
      this.spinnerService.hide();
    });
  }

  getMoviePosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }

  getImdbUrl(imdbId: string): string {
    return `https://www.imdb.com/title/${imdbId}`;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
