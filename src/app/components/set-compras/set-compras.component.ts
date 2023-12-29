import { Component } from '@angular/core';
import { IPersonas } from 'src/app/interface/personas';
import { IProductos } from 'src/app/interface/productos';
import { IRelacion } from 'src/app/interface/relacion';
import { PersonasService } from 'src/app/services/personas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-set-compras',
  templateUrl: './set-compras.component.html',
  styleUrls: ['./set-compras.component.css']
})
export class SetComprasComponent {
  public compras :any[]=[]
  public productos: IProductos[]=[]
  public personas: IPersonas[]=[]
  public productoSelected: IProductos={
    idProductos:0,
    nombreProductos: "",
    valorProducto: 0,
    stockProducto:0,
    codProducto:""
  }
  public personasSelected:IPersonas={
    idPersonas:0,
    nombrePersona: "",
    direccionPersona:"",
    telefonoPersona:"",
    cedulaPersona:"",
    emailPersona:"",
  }
  public codSeguro="";
  public cedula ="";
  public idPersona=0;
  public idSguro=0;
  public relacion:IRelacion={
    
    idPersonas: 0,
    idProductos:0
  }
constructor(
  private productoService:ProductosService,
  private personasService:PersonasService
){}
ngOnInit(){
  this.getProductos()
  this.getPersonas()
  this.getCompras()
}
getProductos() {
  this.productos = []
  this.productoService.getProductos().subscribe(resp => {
    this.productos = resp
    console.log(resp)
  });
}

getCompras(){
  this.compras=[]
  console.log(this.personasSelected.idPersonas)
  this.productoService.getComprasById(this.personasSelected.idPersonas).subscribe(resp=>{
    this.compras=resp
    console.log(resp);
  })
}
getPersonas() {
  this.personas = []
  this.personasService.getPersonas().subscribe(resp => {
    this.personas = resp
    console.log(resp)
  });
}

setCompra(){
  this.relacion.idPersonas=this.personasSelected.idPersonas
  this.relacion.idProductos=this.productoSelected.idProductos
  console.log(this.relacion)
  this.productoService.setCompras(this.relacion).subscribe(resp=>{
    if (resp) {
      alert(resp)
      console.log(resp)
     this.getCompras();
  }});

}

}
