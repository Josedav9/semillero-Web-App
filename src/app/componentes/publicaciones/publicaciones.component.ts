import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../servicios/rest-api.service';
import { Publicacion } from '../../interfaces/publicacion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones:Publicacion[]
  constructor(public _apiservice:RestApiService, private router:Router) {
    this._apiservice.listaPublicaciones().subscribe(
      (datos)=>{
        this.publicaciones = datos;
      }

    )
  }

  verPublicacion(id:number){
      console.log(id);
      this.router.navigate( ['publicaciones/publicacion',id] );
  }

  agregarPublicacion(){
      this.router.navigate( ['publicaciones/crearPublicacion'] );
  }

  ngOnInit() {
  }

}
