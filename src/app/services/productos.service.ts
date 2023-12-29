import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  urlbase = 'https://localhost:7104/api/'
  controlador = 'Productos/'

  constructor(private httpClient:HttpClient) { }
  getProductos():Observable<any>{
    var metodo ='ObtenerProductos'
    return this.httpClient.get<any>(this.urlbase+this.controlador+metodo)
  }
  setProductos(datosProductos: any) {
    var metodo = 'setProductos'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosProductos)
  }
  updateProductos(datosPersonas: any) {
    var metodo = 'putProductos'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  deleteProductos(id: number) {
    var metodo='deletProducto'
    let params = new HttpParams()
      .append("id", id)
    console.log(id);
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, id, { headers, params });
  }
  getCompras():Observable<any>{
    var metodo ='ObtenerCompras'
    return this.httpClient.get<any>(this.urlbase+this.controlador+metodo)
  }
  setCompras(datosPolizas: any) {
    var metodo = 'SetCompras'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPolizas);
}
getComprasById(id: number): Observable<any> {
  var metodo = 'ObtenerComprasId'
  const params = new HttpParams().append('id', id);
  let headers = new HttpHeaders().set('Type-content', 'aplication/json')
  return this.httpClient.get<any>(this.urlbase + this.controlador + metodo, { params });
}
}