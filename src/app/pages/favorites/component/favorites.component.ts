import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { PageComponent } from '../../../../shared/page/component/page.component';
import { MovieDisplayComponent } from '../../movie-display/component/movie-display.component';
import {
  MoviesInterface,
  PaginatedInterface,
  MoviesInteractedInterface,
} from '../../../../shared/interfaces/movies.interface';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-favorites-component',
  imports: [MovieDisplayComponent, NavbarComponent, PageComponent],
  templateUrl: './favorites-component.html',
  styleUrl: './favorites-component.scss',
})
export class FavoritesComponent implements OnInit {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInteractedInterface> =
    {} as PaginatedInterface<MoviesInteractedInterface>;

  private favoritesPageService = inject(FavoritesService);

  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.favoritesPageService
      .getPaginatedContent(page)
      .subscribe((res: any) => {
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
