import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { MovieDisplayComponent } from '../../movie-display/component/movie-display.component';
import {
  MoviesInterface,
  PaginatedInterface,
} from '../../../../shared/interfaces/movies.interface';
import { MainPageService } from '../service/main-page.service';
import { PageComponent } from '../../../../shared/page/component/page.component';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    MovieDisplayComponent,
    NavbarComponent,
    PageComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPagecomponent implements OnInit {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInterface> =
    {} as PaginatedInterface<MoviesInterface>;

  private mainPageService = Inject(MainPageService);

  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.mainPageService.getPaginatedContent(page).subscribe((res: any) => {
      this.pages = res;
      this.movies = res.content as unknown as MoviesInterface[];
    });
  }
}
