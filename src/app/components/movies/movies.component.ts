import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { GridComponent } from '../shared/grid/grid.component';
import { CardComponent } from '../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, GridComponent, CardComponent, MatIconModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  list: boolean = false;

  constructor(private moviesService: MoviesService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.moviesService.getTopRatedMovies().subscribe(movies => {
      this.movies = movies;
      this.spinnerService.hide();
    });
  }

  setViewList(): void {
    this.list = true;
  }

  setViewCard(): void {
    this.list = false;
  }

}
