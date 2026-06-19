import { TestBed } from '@angular/core/testing';

import { MovieForm } from './movie-form';

describe('MovieForm', () => {
  let service: MovieForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
