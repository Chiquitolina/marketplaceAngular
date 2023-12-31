import { Component } from '@angular/core';
import { database, Database } from '../../data/data';  // Ajusta la ruta según tu estructura
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-tiendacomp',
  templateUrl: './tiendacomp.component.html',
  styleUrls: ['./tiendacomp.component.css']
})
export class TiendacompComponent {

  database: Database = database;

  constructor(private cartServ: CartServiceService) {
    
  }

  
  addProduct(cartItem: CartItem) {
    this.cartServ.addItemToCart(cartItem)
  }

}
