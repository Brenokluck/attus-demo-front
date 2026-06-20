import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MoviesInteractedInterface,
  MoviesInterface,
} from '../../../../shared/interfaces/movies.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieDisplayService {
  private httpClient = inject(HttpClient);

  saveMovieWhenInteracted(
    movie: MoviesInteractedInterface,
    url: string
  ): Observable<MoviesInteractedInterface> {
    return this.httpClient.put<MoviesInteractedInterface>(
      `${environment.apiUrl}/movies/${url}`,
      movie
    );
  }

  deleteMovie(movie: MoviesInterface, apiUrl: string): Observable<unknown> {
    return this.httpClient.delete(`${environment.apiUrl}${apiUrl}/${movie.id}`);
  }
}
