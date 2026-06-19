import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import {
  MoviesInteractedInterface,
  MoviesInterface,
} from '../../../../shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MovieDisplayService } from '../service/movie-display.service';

@Component({
  selector: 'app-movie-display',
  imports: [DatePipe, RatingModule, FormsModule, ToastModule],
  templateUrl: './movie-display.component.html',
  styleUrl: './movie-display.component.scss',
})
export class MovieDisplayComponent {
  @Input() movies: MoviesInterface[] = [];
  private messageService = inject(MessageService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private movieDisplayService = inject(MovieDisplayService);

  interactWithMovie(movie: MoviesInterface, event: any) {
    const movieInteraction = {
      ...event,
      movie_id: movie,
    } as MoviesInteractedInterface;

    this.movieDisplayService
      .saveMovieWhenInteracted(movieInteraction)
      .subscribe({
        next: () =>
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Interação salva com sucesso',
          }),
        error: () =>
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Erro ao salvar interação',
          }),
      });
  }

  deleteMovie(movie: MoviesInterface) {
    let apiUrl = '/movies';

    if (this.route.snapshot.url[0].path !== 'home') {
      apiUrl = '/actions';
    }

    this.movieDisplayService.deleteMovie(movie, apiUrl).subscribe({
      next: () =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Filme deletado com sucesso',
        }),
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao deletar filme',
        }),
    });
  }

  editMovie(movie: MoviesInterface) {
    this.router.navigate(['/register', movie]);
  }
}
