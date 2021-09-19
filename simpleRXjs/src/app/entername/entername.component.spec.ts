import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnternameComponent } from './entername.component';

describe('EnternameComponent', () => {
  let component: EnternameComponent;
  let fixture: ComponentFixture<EnternameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnternameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnternameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
