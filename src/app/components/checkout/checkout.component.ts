import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { PaymentsService } from 'src/app/services/payments/payments.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CheckoutComponent>,
    private _formBuilder: FormBuilder,
    public cartSer: CartServiceService,
    private paymentSer: PaymentsService
  ) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  public responser: boolean = false;
  public url: string = '';

  public backToCart(): void {
    this.dialogRef.close();
  }

  public abrirPago() {
    window.open(this.url, '_blank');
  }

  generateOrder() {
    this.responser = false;
    console.log(this.cartSer.cart);
    this.paymentSer.createOrder(this.cartSer.cart).subscribe((response) => {
      this.responser = true;
      this.url = response.message;
    });
  }

  ngOnInit(): void {}
}
