import { Component, OnInit } from '@angular/core';
//import { database, Database } from '../../data/data';  // Ajusta la ruta según tu estructura
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { CartItem } from 'src/app/models/CartItem';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-tiendacomp',
  templateUrl: './tiendacomp.component.html',
  styleUrls: ['./tiendacomp.component.css']
})
export class TiendacompComponent implements OnInit {

 // database: Database = database;

  products: any[] = [];

  constructor(private cartServ: CartServiceService,
              private prodSer:ProductsService) {
    
  }

  loadProducts() {
    this.prodSer.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.error('Error fetching products:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
      }
    );
  }

  addProduct(cartItem: CartItem) {
    this.cartServ.addItemToCart(cartItem)
  }

  ngOnInit(): void {
    this.loadProducts(); // Llama a la función loadProducts() cuando se inicialice el componente
  }

}
