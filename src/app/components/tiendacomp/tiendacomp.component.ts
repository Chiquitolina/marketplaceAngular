import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { AlertsService } from 'src/app/utils/alerts/alerts.service';
import { SizesavailableComponent } from '../sizesAvailable/sizesAvailable.component';
import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tiendacomp',
  templateUrl: './tiendacomp.component.html',
  styleUrls: ['./tiendacomp.component.css'],
  animations: [trigger('enterState', [
    state(
      'void',
      style({
        opacity: 0,
      })
    ),
    transition(':enter', [
      animate(
        750,
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),]

})
export class TiendacompComponent implements OnInit {
  products: any[] = [];

  constructor(
    private prodSer: ProductsService,
    private alertSer: AlertsService,
    public dialog: MatDialog
  ) {}

  isLoading: boolean = true

  loadProducts() {
    this.prodSer.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.isLoading = false
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    data: []
    ): void {
    const dialogRef = this.dialog.open(SizesavailableComponent, {
      width: '60%',
      height: '75%',
      enterAnimationDuration,
      exitAnimationDuration,
      data
    });
    // Manejar el cierre del diálogo
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // Si el diálogo se cerró con un resultado 'true', significa que un producto fue editado exitosamente.
        console.log('Producto editado, actualizando lista de productos...');
        this.loadProducts(); // Vuelve a cargar los productos para reflejar los cambios
      } else {
        // Manejar otros casos, como cierre sin edición
        console.log('Diálogo cerrado sin edición');
      }
    });
  }

  ngOnInit(): void {
    this.loadProducts(); // Llama a la función loadProducts() cuando se inicialice el componente
  }
}
