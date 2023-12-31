import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbuttonsComponent } from './cartbuttons.component';

describe('CartbuttonsComponent', () => {
  let component: CartbuttonsComponent;
  let fixture: ComponentFixture<CartbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
