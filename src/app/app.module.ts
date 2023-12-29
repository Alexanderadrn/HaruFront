import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonasComponent } from './components/personas/personas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { SetPersonasComponent } from './components/set-personas/set-personas.component';
import { SetProductosComponent } from './components/set-productos/set-productos.component';
import { SetComprasComponent } from './components/set-compras/set-compras.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule}from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    ProductosComponent,
    ComprasComponent,
    SetPersonasComponent,
    SetProductosComponent,
    SetComprasComponent,
    MenuComponent,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
