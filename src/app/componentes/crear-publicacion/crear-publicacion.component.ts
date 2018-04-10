import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../servicios/rest-api.service';
import { Publicacion } from '../../interfaces/publicacion.interface';
import { Semillero } from '../../interfaces/semillero';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  nuevaPublicacion:Publicacion={
    fechaPublicacion: new Date,
    imagenPublicacion: "src",
    tituloPublicacion: "",
    textoPublicacion: "",
    idSemillero: 0
  }
  semilleros:Semillero[]
  exito:boolean = false;

  constructor( public _apiservice:RestApiService) {

   }

   agregarPublicacion(){
     this._apiservice.nuevaPublicacion(this.nuevaPublicacion).subscribe(
       datos =>{
         console.log(datos);
         this.exito = true;
       }
     )
   }

  ngOnInit() {
    this._apiservice.listaSemilleros().subscribe(
      (datos)=>{
        this.semilleros = datos
      }
    )
  }

}
