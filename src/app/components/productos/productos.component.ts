import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductosService } from 'src/app/services/productos.service';
import { SetProductosComponent } from '../set-productos/set-productos.component';
import { IProductos } from 'src/app/interface/productos';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public productos: any[]=[]
  
  constructor(
    private productoService :ProductosService,
    private matDialog: MatDialog
  ){}
  ngOnInit():void{
    this.getProductos()

  }
  getProductos() {
    this.productos = []
    this.productoService.getProductos().subscribe(resp => {
      this.productos = resp
      console.log(resp)
    });
  }
  registrarProducto() {
    const dialogRef = this.matDialog.open(SetProductosComponent, {
      width: '600px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getProductos();
    });
  }
  actualizarProductos( producto: any){
    alert(producto.idProductos);
    localStorage.setItem("usuario",JSON.stringify(producto));
    const dialogRef = this.matDialog.open(SetProductosComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getProductos();
    });
  }
  openConfirmationDialog(producto: IProductos): void {
    const dialogRef = this.matDialog.open(ConfirmacionComponent, {
      width: '300px',
      data: {
        message: '¿Estás seguro de eliminar el cliente seleccionado?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productoService.deleteProductos(producto.idProductos).subscribe(resp => {
          if (resp) {
            alert("Se elmino correctamente");
            this.ngOnInit();
          } else { alert("No se pudo eliminar la persona") }
        });
        console.log('Usuario confirmó');
      } else {
        console.log('Usuario canceló');
      }
    });
  }
}
