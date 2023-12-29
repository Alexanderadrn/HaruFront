import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  public compras: any[] = []
 
  
  constructor(
    private comprasService: ProductosService,
    private router:Router,
    
    
  ) { }
  ngOnInit(): void {
    this.getCompras()
  }
  getCompras() {
    this.compras = []
    this.comprasService.getCompras().subscribe(resp => {
      this.compras = resp
      console.log(resp);
    });
  }
   
  setCompra(){
    this.router.navigate(["SetCompras"])
  }
}
