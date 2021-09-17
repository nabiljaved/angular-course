import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendparentComponent } from './sendparent.component';

describe('SendparentComponent', () => {
  let component: SendparentComponent;
  let fixture: ComponentFixture<SendparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
