import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('attus-demo-front');

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
