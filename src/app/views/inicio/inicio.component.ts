import { Component, AfterViewInit, OnInit  } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { database, Database } from '../../data/data';  // Ajusta la ruta según tu estructura
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';  
import { Product } from 'src/app/models/Products';
import { CartItem } from 'src/app/models/CartItem';


// Registra Swiper como elemento personalizado
register();   

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit, OnInit {

  database: Database = database;

  constructor(private cartServ: CartServiceService) {

  }

  addProduct(cartItem: CartItem) {
    this.cartServ.addItemToCart(cartItem)
  }

  ngAfterViewInit() {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  
  ngOnInit(): void {
        console.log('Database:', this.database);
  }

}
