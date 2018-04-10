import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../servicios/rest-api.service'
import { Publicacion } from '../../interfaces/publicacion.interface';
import { Semillero } from '../../interfaces/semillero'

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicacion:Publicacion = {
    tituloPublicacion :"",
    textoPublicacion :"",
    imagenPublicacion:"",
    fechaPublicacion: new Date,
    idSemillero:0
  }
  semilleros:Semillero[]
  borro:boolean = false
  exito:boolean = false

  constructor( private activatedRoute : ActivatedRoute, private _apiservice:RestApiService ) {
    this.activatedRoute.params.subscribe( params=>{
      this._apiservice.buscarPublicacion(params['id']).subscribe(
        seleccionada =>{
          this.publicacion = seleccionada;
        }
      )
    });
   }

   actualizarPublicacion( publicacion:Publicacion ){
     console.log(publicacion)
     this._apiservice.actualizarPublicacion( publicacion ).subscribe(
       datos => {
         console.log(publicacion);
         this.exito = true;
       }
     )
   }

   borrarPublicacion(){
     console.log("Entre")
     this._apiservice.borrarPublicacion( this.publicacion.idPublicacion ).subscribe(
       (info)=>{
         console.log(info);
         this.borro = true;
       }
     )
   }

  ngOnInit() {
    this._apiservice.listaSemilleros().subscribe(
      lista =>{
        this.semilleros = lista;
      }
    )
  }

}
