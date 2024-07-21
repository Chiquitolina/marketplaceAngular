import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { AlertsService } from 'src/app/utils/alerts/alerts.service';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-productselected',
  templateUrl: './productselected.component.html',
  styleUrls: ['./productselected.component.css']
})
export class ProductselectedComponent implements OnInit {

  product: any;

  constructor(private prodSer: ProductsService,
              private route: ActivatedRoute,
              private _cartSer: CartServiceService,
              private _alertSer: AlertsService
  ) {

  }

  addProduct(cartItem: CartItem, productname: string) {
    this._cartSer.addItemToCart(cartItem);
    this._alertSer.showAlert(
      `¡Producto ${productname} añadido al carrito correctamente!`,
      'Cerrar',
      3000,
      'snackbar-success',
      productname
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.prodSer.getProductById(productId).subscribe(
          data => {
            this.product = data;
            console.log(data)
          },
          error => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });

}
}