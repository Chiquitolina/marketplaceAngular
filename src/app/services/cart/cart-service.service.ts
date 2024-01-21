import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cart: Cart = {
    items: [],
    finalPrice: 0,
  };

  public findOneItemByName(nombre: string): boolean {
    const foundItem = this.cart.items.find((itemcart: CartItem) => {
      return itemcart.product.name === nombre;
    });

    return foundItem ? true : false;
  }

  public addItemToCart(cartItem: CartItem): void {
    if (this.findOneItemByName(cartItem.product.name)) {
      const foundItem = this.cart.items.find((itemcart: CartItem) => {
        return itemcart.product.name === cartItem.product.name;
      });
      foundItem ? foundItem.cantidad++ : 0;
      this.cart.finalPrice += cartItem.product.price;
    } else {
      this.cart.items.push(cartItem);
      this.cart.finalPrice += cartItem.product.price;
    }
  }

  public removeItemFromCart(itemcart: CartItem, side?: any): void {
    const itemToRemove = this.cart.items.find((item: CartItem) => {
      item.product.name == itemcart.product.name;
    });
    const indexItem = this.cart.items.findIndex((item: CartItem) => {
      item == itemToRemove;
    });
    this.cart.items.splice(indexItem, 1);
    this.cart.finalPrice =
      this.cart.finalPrice - itemcart.product.price * itemcart.cantidad;
    this.cart.items.length == 0 ? side.close() : 0;
  }

  public cleanCart(): void {
    this.cart = {
      items: [],
      finalPrice: 0,
    };
  }
}
