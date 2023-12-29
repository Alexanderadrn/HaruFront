import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProductos } from 'src/app/interface/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-set-productos',
  templateUrl: './set-productos.component.html',
  styleUrls: ['./set-productos.component.css']
})
export class SetProductosComponent {
  titulo: string ="Registrar"

  productos: IProductos={
    idProductos: 0,
    nombreProductos: "",
    codProducto:"",
    valorProducto:0,
    stockProducto:0,
    
  }
  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    numero: /^[0-9]$/

  }
  constructor(
    private productoService: ProductosService,
    private matdialog:MatDialog
  ) { }
  ngOnDestroy(): void {
    localStorage.removeItem("usuario")
  }
  ngOnInit(): void {
    this.obtenerDatos();
    }
    obtenerDatos() {
      if (localStorage.getItem("usuario")) {
        var datos = localStorage.getItem("usuario")
        this.productos = JSON.parse(datos!)
        this.titulo = "Actualizar"
      }
    }
    onKeyPressTexto(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[a-z A-Z]+$/;
      if (!regex.test(input)) {
        event.preventDefault();
      }
    }
    onKeyPressNumero(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[0-9]+$/;
      if (!regex.test(input)) {
        event.preventDefault();
      }
    }
    
    /*validarDatos() {
      if (this.expresiones.texto.test(this.personas.nombrePersona)
        && this.expresiones.numero.test(this.personas.cedulaPersona)
        && this.expresiones.numero.test(this.personas.telefonoPersona)
        //&& this.expresiones.numero.test(this.personas.edadPersonas)
      ) {
  
        return true;
      } else {
        alert("Los datos son incorrectos")
        return false;
      }
    } 
  */
    setProductoss() {
      //if (this.validarDatos()) {
      if (this.productos.idProductos == 0) {
        this.productoService.setProductos(this.productos).subscribe(resp => {
          if (resp) {
            alert(resp)
            console.log(resp)
          } else {
            alert("No se pudo registrar")
          }
        });
      } else {
        this.productoService.updateProductos(this.productos).subscribe(resp => {
          if (resp) {
            localStorage.removeItem("usuario");
            this.matdialog.closeAll();
          }
          else {
            alert("No se pudo editar la persona");
          }
        });
      }
      this.matdialog.closeAll();
    }

    dismissModal() {
      this.matdialog.closeAll();
    }
}
