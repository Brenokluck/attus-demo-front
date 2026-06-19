import { Component, Inject } from '@angular/core';
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
  imports: [
    MovieDisplayComponent,
    NavbarComponent,
    PageComponent
],
  templateUrl: './watched.component.html',
  styleUrl: './watched.component.scss',
})
export class WatchedComponent {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInteractedInterface> =
    {} as PaginatedInterface<MoviesInteractedInterface>;

  private watchedService = Inject(WatchedService);

  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.watchedService.getPaginatedContent(page).subscribe((res: any) => {
      this.pages = res;
      this.movies = this.pages.content.map((movie) => {
        return {
          id: movie.movie_id.id,
          title: movie.movie_id.title,
          description: movie.movie_id.description,
          launch_date: movie.movie_id.launch_date,
          update_date: movie.movie_id.update_date,
          views: movie.movie_id.views,
          review_stars: movie.movie_id.review_stars,
          duration: movie.movie_id.duration,
        } as MoviesInterface;
      });
    });
  }
}
