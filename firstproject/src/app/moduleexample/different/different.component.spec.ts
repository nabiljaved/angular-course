import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentComponent } from './different.component';

describe('DifferentComponent', () => {
  let component: DifferentComponent;
  let fixture: ComponentFixture<DifferentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
