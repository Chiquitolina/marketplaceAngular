import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './services/cart/cart-service.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentsService } from './services/payments/payments.service';
import { AlertsService } from './utils/alerts/alerts.service';
import { CartItem } from './models/CartItem';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'marketplace';

  constructor(
    public cartSer: CartServiceService,
    public dialog: MatDialog,
    public paySer: PaymentsService,
    private alertsServ: AlertsService
  ) {}

  public checkoutEvent(side: any): void {
    side.toggle();
    this.openDialog('0ms', '0ms');
  }

  public cleanCartEvent(side: any) {
    this.cartSer.cleanCart();
    side.opened ? side.toggle() : 0;
  }

  public removeItem(itemcart: CartItem, drawer: MatDrawer, productname:string) {
    this.cartSer.removeItemFromCart(itemcart, drawer);
    this.alertsServ.showAlert(
      `¡Producto ${productname} removido del carrito correctamente!`,
      'Cerrar',
      4000,
      '',
      productname
    );
  }

  ngOnInit(): void {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CheckoutComponent, {
      width: '140%',
      height: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
