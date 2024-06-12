import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { IResponse } from '../models/response.interface';

const API_KEY = '5ec2bd3a6abba247c256fdcab87f2313';
const LANGUAGE = 'es-ES';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getUrl(endPoint: string, params:{
    language?: string,
    [key: string]: any
  
  } = {})  //`https://api.themoviedb.org/3/${endPoint}?api_key=${API_KEY}&language=${LANGUAGE}`;
{
    let url = `https://api.themoviedb.org/3/${endPoint}?api_key=${API_KEY}`;

    if (!params.language) {
        params.language = LANGUAGE;
    }

    Object.keys(params).forEach(key => {
        url += `&${key}=${params[key]}`;
    });

    return url;
}

  getTopRatedMovies(): Observable<Movie[]> {
    const url = this.getUrl(`movie/top_rated`);
    return this.http.get<IResponse<Movie>>(url).pipe(map(response => response.results));
  }

  getMoviesByName(name: string): Observable<Movie[]> {
    const url = this.getUrl(`search/movie`, {query: encodeURIComponent(name)});
    return this.http.get<Movie[]>(url);
  }

  getMovieById(id: number): Observable<Movie> {
    const url = this.getUrl(`movie/${id}`);
    return this.http.get<Movie>(url);
  }

}
