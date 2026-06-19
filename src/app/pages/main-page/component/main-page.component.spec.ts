import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagecomponent } from './main-page.component';

describe('MainPagecomponent', () => {
  let component: MainPagecomponent;
  let fixture: ComponentFixture<MainPagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPagecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPagecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
