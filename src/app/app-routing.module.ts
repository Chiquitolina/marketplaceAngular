import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { TiendaComponent } from './views/tienda/tienda.component';
import { AnaliticasComponent } from './views/analiticas/analiticas.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { BlgoComponent } from './views/blgo/blgo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'analiticas', component: AnaliticasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlgoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
