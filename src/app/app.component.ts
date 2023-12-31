import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './services/cart/cart-service.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatSidenav } from '@angular/material/sidenav';
import { PaymentsService } from './services/payments/payments.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marketplace';

  constructor(public cartSer: CartServiceService,
              public dialog: MatDialog,
              public paySer: PaymentsService) {
  
  }
  

  public checkoutEvent(side: any) : void {
    side.toggle()
    this.openDialog('0ms', '0ms')
    }

  public cleanCartEvent(side: any) {
    this.cartSer.cleanCart();
    (side.opened) ? side.toggle() : 0
  }

  ngOnInit(): void {
    
  }  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CheckoutComponent, {
      width: '140%',
      height: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}