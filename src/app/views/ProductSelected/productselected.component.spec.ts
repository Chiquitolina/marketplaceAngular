import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductselectedComponent } from './productselected.component';

describe('ProductselectedComponent', () => {
  let component: ProductselectedComponent;
  let fixture: ComponentFixture<ProductselectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductselectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
