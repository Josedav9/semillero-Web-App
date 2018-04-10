import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Semillero } from '../interfaces/semillero';
import { Publicacion } from '../interfaces/publicacion.interface';

@Injectable()
export class RestApiService {

  url:string = "http://localhost:3000/"
  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');


  constructor(public http:HttpClient) {  }

  listaSemilleros():Observable<any> {
    return this.http.get(`${this.url}semilleros/listaSemilleros`)
  }

  borrarSemillero( id:string ): Observable<any> {
    return this.http.get(`${this.url}semilleros/eliminarSemillero/${id}`)
  }

  crearSemillero( body:Semillero ): Observable<any>{
    return this.http.post(`${this.url}semilleros/crearSemillero`, body )
  }

  listaPublicaciones():Observable<any>{
    return this.http.get(`${ this.url }publicaciones/listaPublicaciones`)
  }

  buscarPublicacion( id:number ):Observable<any>{
    return this.http.get(`${ this.url }publicaciones/buscarPublicacion/${ id }`)
  }

  actualizarPublicacion( publicacion:Publicacion ):Observable<any>{
    return this.http.post(`${ this.url }publicaciones/modificarPublicacion`, publicacion)
  }

  nuevaPublicacion( publicacion:Publicacion ):Observable<any>{
    return this.http.post(`${ this.url }publicaciones/agregarPublicacion`, publicacion)
  }

  borrarPublicacion( id:number ): Observable<any> {
    return this.http.get(`${this.url}publicaciones/eliminarPublicacion/${id}`)
  }

}
