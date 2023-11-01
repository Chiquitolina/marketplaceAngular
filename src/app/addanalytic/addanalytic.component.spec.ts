import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanalyticComponent } from './addanalytic.component';

describe('AddanalyticComponent', () => {
  let component: AddanalyticComponent;
  let fixture: ComponentFixture<AddanalyticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddanalyticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddanalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
