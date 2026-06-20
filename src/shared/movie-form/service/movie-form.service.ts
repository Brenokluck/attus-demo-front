import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesInterface } from '../../interfaces/movies.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieFormService {
  private httpClient = inject(HttpClient);

  saveMovie(movie: unknown): Observable<MoviesInterface> {
    return this.httpClient.post<MoviesInterface>(`${environment.apiUrl}/movies`, movie);
  }
}
