import { TestBed } from '@angular/core/testing';

import { MainPageservice } from './main-page.service';

describe('MainPageservice', () => {
  let service: MainPageservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
