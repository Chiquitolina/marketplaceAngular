import { Component, AfterViewInit, OnInit  } from '@angular/core';
import Swiper from 'swiper';  
import { database, Database } from '../../data/data';  // Ajusta la ruta según tu estructura
import { register } from 'swiper/element/bundle';

// Registra Swiper como elemento personalizado
register();   

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit, OnInit {

  database: Database = database;

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
