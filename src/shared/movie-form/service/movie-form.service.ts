import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesInterface } from '../../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieFormService {
  private httpClient = Inject(HttpClient);

  saveMovie(movie: unknown): Observable<MoviesInterface> {
    return this.httpClient.post('/movies', movie);
  }
}
