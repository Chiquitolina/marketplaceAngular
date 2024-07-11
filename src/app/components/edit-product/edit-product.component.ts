import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup; // Declaración del formulario

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditProductComponent>,
    private prodser: ProductsService,
    private dialog: MatDialog
  ) {
    this.productForm = new FormGroup({
      id: new FormControl(this.data?.id || ''),
      name: new FormControl(this.data?.name || '', Validators.required),
      price: new FormControl(
        Number(this.data?.price) || '',
        Validators.required,
      ),
      description: new FormControl(
        this.data?.description || '',
        Validators.required
      ),
      ratio: new FormControl(this.data?.ratio || '', Validators.required),
      contenido: new FormControl(
        this.data?.contenido || '',
        Validators.required
      ),
      image: new FormControl(this.data?.image || '', Validators.required),
      analytics: new FormControl(this.data?.analytics || []),
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
      data: '', // Pasando el producto seleccionado al modal
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close(true);
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productOperation = this.productForm.value.id
        ? this.prodser.editProduct(this.productForm.value)
        : this.prodser.addProduct(this.productForm.value);

      productOperation.subscribe({
        next: (response) => {
          console.log('Operación exitosa:', response);
          this.closeDialog(); // Cierra el diálogo después de una operación exitosa
        },
        error: (error) => {
          console.error('Error en la operación:', error);
          // Decide si quieres cerrar el diálogo también en caso de error o permitir al usuario corregirlo
        },
      });
    }
  }
}
