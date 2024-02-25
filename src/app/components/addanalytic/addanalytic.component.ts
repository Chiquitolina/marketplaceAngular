import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-addanalytic',
  templateUrl: './addanalytic.component.html',
  styleUrls: ['./addanalytic.component.css'],
})
export class AddanalyticComponent {
  analyticForm: FormGroup; // Declaración del formulario

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddanalyticComponent>,
    private prodSer: ProductsService
  ) {
    console.log(data);
    this.analyticForm = new FormGroup({
      id: new FormControl(Number(data.id)),
      name: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
    });
  }

  closeDialog(bool: boolean) {
    this.dialogRef.close(bool);
  }

  onSubmit() {
    console.log(this.analyticForm.value);
    if (this.analyticForm.valid) {
      this.prodSer.addAnalytic(this.analyticForm.value).subscribe({
        next: (response) => {
          console.log('Operación exitosa:', response);
          this.closeDialog(true); // Cierra el diálogo después de una operación exitosa
        },
        error: (error) => {
          console.error('Error en la operación:', error);
          // Decide si quieres cerrar el diálogo también en caso de error o permitir al usuario corregirlo
        },
      });
    }
  }

  panelOpenState = false;
}
