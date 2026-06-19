import { TestBed } from '@angular/core/testing';

import { MovieDisplayService } from './movie-display.service';

describe('MovieDisplayService', () => {
  let service: MovieDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
