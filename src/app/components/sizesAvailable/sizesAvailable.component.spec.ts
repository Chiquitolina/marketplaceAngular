import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesavailableComponent } from './sizesAvailable.component';

describe('SizesavailableComponent', () => {
  let component: SizesavailableComponent;
  let fixture: ComponentFixture<SizesavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizesavailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizesavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
