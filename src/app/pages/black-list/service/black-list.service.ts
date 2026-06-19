import { Injectable } from '@angular/core';
import {
  PaginatedInterface,
  MoviesInteractedInterface,
} from '../../../../shared/interfaces/movies.interface';
import { PaginatorService } from '../../../../shared/paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class BlackListService extends PaginatorService<
  PaginatedInterface<MoviesInteractedInterface>
> {
  protected override apiUrl: string = '/actions/blacklist?page=';
}
