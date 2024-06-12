import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

export const routes: Routes = [
    { path: '', component: MoviesComponent},
    { path: 'movie/:id', component: MovieComponent},
    { path: '**', component: MoviesComponent},
];
