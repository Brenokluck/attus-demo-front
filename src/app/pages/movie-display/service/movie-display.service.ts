import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MoviesInteractedInterface,
  MoviesInterface,
} from '../../../../shared/interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDisplayService {
  private httpClient = Inject(HttpClient);

  saveMovieWhenInteracted(
    movie: MoviesInteractedInterface
  ): Observable<MoviesInteractedInterface> {
    return this.httpClient.post('/actions', movie);
  }

  deleteMovie(movie: MoviesInterface, apiUrl: string): Observable<unknown> {
    return this.httpClient.delete(`${apiUrl}/${movie.id}`);
  }
}
