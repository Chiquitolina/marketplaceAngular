import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlgoComponent } from './blgo.component';

describe('BlgoComponent', () => {
  let component: BlgoComponent;
  let fixture: ComponentFixture<BlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
