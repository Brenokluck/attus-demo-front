import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ImportService } from '../service/import.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-import-component',
  imports: [
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    NavbarComponent,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './import.component.html',
  styleUrl: './import.component.scss',
})
export class ImportComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private importService = inject(ImportService);
  private messageService = inject(MessageService);
  form: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
    });
  }

  submit() {
    this.importService.importMovie(this.form.value.id).subscribe({
      next: () =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Filme importado com sucesso',
        }),
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao importar filme',
        }),
    });
  }
}
