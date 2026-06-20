import { Component, inject } from '@angular/core';
import {
  MoviesInterface,
  PaginatedInterface,
  MoviesInteractedInterface,
} from '../../../../shared/interfaces/movies.interface';
import { WatchedService } from '../service/watched.service';
import { PageComponent } from '../../../../shared/page/component/page.component';

import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { MovieDisplayComponent } from '../../movie-display/component/movie-display.component';

@Component({
  selector: 'app-watched-component',
  imports: [MovieDisplayComponent, NavbarComponent, PageComponent],
  templateUrl: './watched.component.html',
  styleUrl: './watched.component.scss',
})
export class WatchedComponent {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInteractedInterface> =
    {} as PaginatedInterface<MoviesInteractedInterface>;

  private watchedService = inject(WatchedService);

  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.watchedService.getPaginatedContent(page).subscribe((res: any) => {
      this.pages = res;
      this.movies = this.pages.content.map((movie) => {
        return {
          id: movie.movie_id.id,
          Title: movie.movie_id.Title,
          Plot: movie.movie_id.Plot,
          Released: movie.movie_id.Released,
          BoxOffice: movie.movie_id.BoxOffice,
          imdbRating: movie.movie_id.imdbRating,
          Runtime: movie.movie_id.Runtime,
        } as MoviesInterface;
      });
    });
  }
}
