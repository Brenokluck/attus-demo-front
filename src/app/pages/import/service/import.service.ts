import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  private httpClient = inject(HttpClient);

  importMovie(ID: string): Observable<String> {
    return this.httpClient.post<String>(`/IMDB/import/${ID}`, {});
  }
}
