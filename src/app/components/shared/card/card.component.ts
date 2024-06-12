import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '../../../models/movie.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() movies: Movie[] = [];

  getMoviePosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }
}
