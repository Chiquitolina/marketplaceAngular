import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { TiendaComponent } from './views/tienda/tienda.component';
import { AnaliticasComponent } from './views/analiticas/analiticas.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { BlogComponent } from './views/blog/blog.component';
import { LoginviewComponent } from './views/loginview/loginview.component';
import { AdminComponent } from './views/admin/admin.component';
import { AuthGuard } from './guards/authguard.guard';
import { ProductselectedComponent } from './views/ProductSelected/productselected.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'tienda/:gender', component: TiendaComponent },
  { path: 'tienda/:gender/:categorie', component: TiendaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginviewComponent },
  { path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard] },
  {path: 'product/:id', component: ProductselectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
