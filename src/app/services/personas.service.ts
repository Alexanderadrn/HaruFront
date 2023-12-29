import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  urlbase = 'https://localhost:7104/api/'
  controlador = 'Personas/'
  constructor( private httpClient:HttpClient) { }
  getPersonas(): Observable<any> {
    var metodo = 'ObtenerPersonas'
    return this.httpClient.get<any>(this.urlbase + this.controlador + metodo);
  }
  setPersonas(datosPersonas: any) {
    var metodo = 'setPersonas'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  updatePersonas(datosPersonas: any) {
    var metodo = 'putPersonas'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  deletePersonas(id: number) {
    var metodo='deletPersona'
    let params = new HttpParams()
      .append("id", id)
    console.log(id);
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, id, { headers, params });
  }
}
