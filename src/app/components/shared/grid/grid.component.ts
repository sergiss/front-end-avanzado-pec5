import { Component, Input } from '@angular/core';
import { Movie } from '../../../models/movie.interface';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [ MatTableModule, RouterModule ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() movies: Movie[] = [];
  displayedColumns: string[] = ['poster', 'title', 'overview', 'vote_average'];

  getMoviePosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }
}