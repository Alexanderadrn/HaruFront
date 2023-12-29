import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { SetPersonasComponent } from './components/set-personas/set-personas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SetProductosComponent } from './components/set-productos/set-productos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { SetComprasComponent } from './components/set-compras/set-compras.component';

const routes: Routes = [
  {path:"Personas", component:PersonasComponent},
  {path:"SetPersonas",component:SetPersonasComponent},
  {path:"Productos",component:ProductosComponent},
  {path:"SetProductos",component:SetProductosComponent},
  {path:"Compras",component:ComprasComponent},
  {path:"SetCompras",component:SetComprasComponent},
  {path:"**",redirectTo:"Personas",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
