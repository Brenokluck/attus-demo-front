import { TestBed } from '@angular/core/testing';

import { DeslikeService } from './deslike-service';

describe('DeslikeService', () => {
  let service: DeslikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeslikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
