import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';

import { HttpClientModule } from '@angular/common/http';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { TiendaComponent } from './views/tienda/tienda.component';
import { AnaliticasComponent } from './views/analiticas/analiticas.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { BlogComponent } from './views/blog/blog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';
import { MatListModule } from '@angular/material/list';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddanalyticComponent } from './addanalytic/addanalytic.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartbuttonsComponent } from './components/cartbuttons/cartbuttons.component';
import { TiendacompComponent } from './components/tiendacomp/tiendacomp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginviewComponent } from './views/loginview/loginview.component';
import { AdminComponent } from './views/admin/admin.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    AnaliticasComponent,
    NosotrosComponent,
    ContactoComponent,
    BlogComponent,
    ProductCardComponent,
    FooterComponent,
    CartDialogComponent,
    CheckoutComponent,
    AddanalyticComponent,
    CartbuttonsComponent,
    TiendacompComponent,
    NavbarComponent,
    LoginComponent,
    LoginviewComponent,
    AdminComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
