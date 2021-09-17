import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallfunctionComponent } from './callfunction.component';

describe('CallfunctionComponent', () => {
  let component: CallfunctionComponent;
  let fixture: ComponentFixture<CallfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallfunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
