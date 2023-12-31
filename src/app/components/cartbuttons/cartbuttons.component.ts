import { Component } from '@angular/core';
import { CartServiceService } from '../../services/cart/cart-service.service';

@Component({
  selector: 'app-cartbuttons',
  templateUrl: './cartbuttons.component.html',
  styleUrls: ['./cartbuttons.component.css']
})
export class CartbuttonsComponent {

  constructor(public cartSer: CartServiceService){

  }

}
