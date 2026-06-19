import { Injectable } from '@angular/core';
import { MoviesInteractedInterface } from '../../../../shared/interfaces/movies.interface';
import { PaginatorService } from '../../../../shared/paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class WatchedService extends PaginatorService<MoviesInteractedInterface> {
  protected apiUrl = '/actions/watched?page=';
}
