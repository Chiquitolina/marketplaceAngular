import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from 'src/app/components/edit-product/edit-product.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public productos: any = [];
  public productosmas: any = [];
  public postNewProduct: object = {};

  constructor(private prodSer: ProductsService, public dialog: MatDialog) {}

  async loadProducts() {
    try {
      this.productos = await this.prodSer.getProducts();

      this.postNewProduct = {
        id: this.productos[this.productos.length - 1].id + 1,
        name: '',
        description: '',
        price: null,
        currency: '',
        image: '',
        analitics: [],
        contenido: '',
        ratio: '',
      };

      this.productos.push(this.postNewProduct);

      console.log(this.productos);
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    i: number
  ): void {
    this.dialog.open(EditProductComponent, {
      width: '140%',
      height: '100%',
      data: this.productos[i],
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  displayedColumns: string[] = ['name', 'price'];
  displayedórdenesGeneradasColumns: string[] = [
    'position',
    'name',
    'price',
    'symbol',
  ];
  dataSource = new MatTableDataSource(this.productos);
}
