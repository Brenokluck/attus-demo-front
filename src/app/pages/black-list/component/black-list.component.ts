import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { PageComponent } from '../../../../shared/page/component/page.component';
import { MovieDisplayComponent } from '../../movie-display/component/movie-display.component';
import {
  MoviesInterface,
  PaginatedInterface,
  MoviesInteractedInterface,
} from '../../../../shared/interfaces/movies.interface';
import { BlackListService } from '../service/black-list.service';

@Component({
  selector: 'app-black-list',
  imports: [MovieDisplayComponent, NavbarComponent, PageComponent],
  templateUrl: './black-list.component.html',
  styleUrl: './black-list.component.scss',
})
export class BlackListComponent implements OnInit {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInteractedInterface> =
    {} as PaginatedInterface<MoviesInteractedInterface>;

  private blackListService = inject(BlackListService);

  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.blackListService.getPaginatedContent(page).subscribe((res: any) => {
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
