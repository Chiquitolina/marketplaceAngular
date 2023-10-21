import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { database, Database } from '../../data/data';  // Ajusta la ruta según tu estructura
import { CartItem } from 'src/app/models/CartItem';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {

  database: Database = database;


  constructor(private cartServ: CartServiceService) {
    
  }

  addProduct(cartItem: CartItem) {
    this.cartServ.addItemToCart(cartItem)
  }

}
