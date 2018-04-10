import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../servicios/rest-api.service';
import { Semillero } from '../../interfaces/semillero';

@Component({
  selector: 'app-crear-semillero',
  templateUrl: './crear-semillero.component.html',
  styleUrls: ['./crear-semillero.component.css']
})
export class CrearSemilleroComponent implements OnInit {

  nuevoSemillero:Semillero ={
    nombreSemillero:"",
    liderSemillero:"",
    descripcionSemillero:""
  }

  exito:boolean = false;

  constructor(public _apiservice:RestApiService) { }

  crearSemillero(){
    this._apiservice.crearSemillero( this.nuevoSemillero ).subscribe(
      (datos)=>{
        console.log(datos);
        this.exito = true;
      }
    )
  }

  ngOnInit() {
  }

}
