import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-page',
  imports: [CommonModule, PaginatorModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() totalRecords: number = 0;
  @Output() pageChange = new EventEmitter<PaginatorState>();

  onPageChange(event: PaginatorState) {
    this.pageChange.emit(event);
  }
}
