import { Component, inject } from '@angular/core';
import { MovieFormService } from '../service/movie-form.service';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-movie-form',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    DatePickerModule,
    RatingModule,
    InputNumberModule,
    ButtonModule,
    TextareaModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss',
})
export class MovieFormComponent {
  form: FormGroup = {} as FormGroup;
  private movieFormService = inject(MovieFormService);
  private formBuilder = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      imdb_id: [''],
      launch_date: [''],
      review_stars: [''],
      duration: [''],
      views: [''],
    });
    this.formatForm();
  }

  submit() {
    this.multiplieStars();
    this.getDurationInMinuteForm();
    this.sendForm();
  }

  formatForm() {
    this.route.params.subscribe((res) => {
      const date = new Date(
        res['launch_date'] ? res['launch_date'] : new Date()
      );

      this.form.patchValue(res);
      this.form.get('launch_date')?.setValue(date);
    });
  }

  sendForm() {
    this.movieFormService.saveMovie(this.form.getRawValue()).subscribe({
      next: () => {
        this.form.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Filme salvo com sucesso',
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao salvar filme',
        });
      },
    });
  }

  multiplieStars() {
    const stars = this.form.get('review_stars')?.value;
    this.form.get('review_stars')?.setValue(stars * 10);
  }

  getDurationInMinuteForm() {
    const duration = this.form.get('duration')?.value;
    this.form.get('duration')?.setValue(duration * 60);
  }
}
