import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendacompComponent } from './tiendacomp.component';

describe('TiendacompComponent', () => {
  let component: TiendacompComponent;
  let fixture: ComponentFixture<TiendacompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendacompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
