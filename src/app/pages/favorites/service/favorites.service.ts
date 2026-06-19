import { Injectable } from '@angular/core';
import { MoviesInteractedInterface } from '../../../../shared/interfaces/movies.interface';
import { PaginatorService } from '../../../../shared/paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService extends PaginatorService<MoviesInteractedInterface> {
  protected apiUrl: string = '/actions/favorite?page=';
}
