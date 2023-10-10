import { Injectable } from '@angular/core';
import { Product } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(products: Product[]) {
    
  }
}
