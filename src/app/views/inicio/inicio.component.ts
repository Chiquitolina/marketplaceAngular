import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { Product } from 'src/app/models/Products';
import { CartItem } from 'src/app/models/CartItem';
import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';

// Registra Swiper como elemento personalizado
register();

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          750,
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
    trigger('enterStateTwo', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          1500,
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class InicioComponent implements AfterViewInit, OnInit {

  constructor(private cartServ: CartServiceService) {}


  ngAfterViewInit() {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 1000, // Velocidad de la animación en milisegundos
      autoplay: true,
    });
  }

  ngOnInit(): void {
  }
}
