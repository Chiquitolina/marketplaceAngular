import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from 'src/app/components/edit-product/edit-product.component';
import { AddanalyticComponent } from 'src/app/components/addanalytic/addanalytic.component';

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

  constructor(
    private prodSer: ProductsService,
    public dialog: MatDialog,
    public dialogAn: MatDialog
  ) {}

  deleteProduct(product: any) {
    this.prodSer.deleteProduct(product.id).subscribe({
      next: (response) => {
        console.log(response);
        this.loadProducts();
      },
      error: (error) => {
        console.error('Error eliminando el producto:', error);
        // Puedes manejar el error como prefieras, por ejemplo, asignando un array vacío a productos
        this.productos = [];
      },
    });
  }

  loadProducts() {
    this.prodSer.getProducts().subscribe({
      next: (data) => {
        this.productos = data; // Asigna los datos recibidos a la propiedad del componente
      },
      error: (error) => {
        console.error('Error cargando productos:', error);
        // Puedes manejar el error como prefieras, por ejemplo, asignando un array vacío a productos
        this.productos = [];
      },
    });
  }

  openDialogAnalytics(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    i: number
  ): void {
    const dialogRef = this.dialogAn.open(AddanalyticComponent, {
      width: '140%',
      height: '80%',
      data: this.productos[i], // Pasando el producto seleccionado al modal
      enterAnimationDuration,
      exitAnimationDuration,
    });
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

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    index: number
  ): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '140%',
      height: '100%',
      data: this.productos[index], // Pasando el producto seleccionado al modal
      enterAnimationDuration,
      exitAnimationDuration,
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
