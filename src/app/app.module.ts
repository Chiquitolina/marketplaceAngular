import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register()

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { TiendaComponent } from './views/tienda/tienda.component';
import { AnaliticasComponent } from './views/analiticas/analiticas.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { BlgoComponent } from './views/blgo/blgo.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    AnaliticasComponent,
    NosotrosComponent,
    ContactoComponent,
    BlgoComponent,
    ProductCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
