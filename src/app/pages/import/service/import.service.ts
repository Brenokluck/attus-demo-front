import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  private httpClient = inject(HttpClient);

  importMovie(movieID: string): Observable<String> {
    return this.httpClient.post<String>(
      `${environment.apiUrl}/movies/IMDB/import/${movieID}`,
      {}
    );
  }
}
