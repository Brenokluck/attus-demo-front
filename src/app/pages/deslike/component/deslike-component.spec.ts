import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslikeCOmponent } from './deslike-component';

describe('DeslikeCOmponent', () => {
  let component: DeslikeCOmponent;
  let fixture: ComponentFixture<DeslikeCOmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeslikeCOmponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslikeCOmponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
