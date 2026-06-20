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
    movie: MoviesInteractedInterface
  ): Observable<MoviesInteractedInterface> {
    return this.httpClient.post<MoviesInteractedInterface>(`${environment.apiUrl}/actions`, movie);
  }

  deleteMovie(movie: MoviesInterface, apiUrl: string): Observable<unknown> {
    return this.httpClient.delete(`${environment.apiUrl}${apiUrl}/${movie.id}`);
  }
}
