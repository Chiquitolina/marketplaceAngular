import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart: Cart = {
    products : [],
    finalPrice : 0
  }

  public addProductToCart(producto: Product) : void {
    this.cart.products.push(producto)
    this.cart.finalPrice = this.cart.finalPrice + producto.price
  }

}
