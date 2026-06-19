
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { MovieFormComponent } from '../../../../shared/movie-form/component/movie-form.component';

@Component({
  selector: 'app-register-component',
  imports: [MovieFormComponent, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
