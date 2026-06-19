import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PaginatedInterface,
  MoviesInterface,
} from '../../../../shared/interfaces/movies.interface';
import { PaginatorService } from '../../../../shared/paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class MainPageService extends PaginatorService<
  PaginatedInterface<MoviesInterface>
> {
  protected apiUrl: string = '/movies/paginated?page=';
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
