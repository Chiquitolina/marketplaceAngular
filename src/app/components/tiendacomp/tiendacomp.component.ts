import { Component, OnInit } from '@angular/core';
//import { database, Database } from '../../data/data';  // Ajusta la ruta según tu estructura
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { CartItem } from 'src/app/models/CartItem';
import { ProductsService } from 'src/app/services/products/products.service';
import { AlertsService } from 'src/app/utils/alerts/alerts.service';

@Component({
  selector: 'app-tiendacomp',
  templateUrl: './tiendacomp.component.html',
  styleUrls: ['./tiendacomp.component.css'],
})
export class TiendacompComponent implements OnInit {
  products: any[] = [];

  constructor(
    private cartServ: CartServiceService,
    private prodSer: ProductsService,
    private alertSer: AlertsService
  ) {}

  isLoading: boolean = true

  loadProducts() {
    this.prodSer.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.isLoading = false
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(cartItem: CartItem, productname: string) {
    this.cartServ.addItemToCart(cartItem);
    this.alertSer.showAlert(
      `¡Producto ${productname} añadido al carrito correctamente!`,
      'Cerrar',
      3000,
      'snackbar-success',
      productname
    );
  }

  ngOnInit(): void {
    this.loadProducts(); // Llama a la función loadProducts() cuando se inicialice el componente
  }
}
