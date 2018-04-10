import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../servicios/rest-api.service';
import { Observable } from 'rxjs/Observable';
import { Semillero } from '../../interfaces/semillero'

@Component({
  selector: 'app-semilleros',
  templateUrl: './semilleros.component.html',
  styleUrls: ['./semilleros.component.css']
})
export class SemillerosComponent implements OnInit {

  semilleros:Semillero[];
  constructor( public _apiservice:RestApiService ) {
    this._apiservice.listaSemilleros().subscribe(
      datos => {
        this.semilleros = datos;
        console.log(datos)
      }
    )
  }

  borrarSemillero( idSemillero:string, inx:number ){
    console.log("Borrando")
    this._apiservice.borrarSemillero(idSemillero).subscribe(
      (datos) => {
        console.log(datos)
        this.semilleros.splice(inx,1);
      }
    )
  }


  ngOnInit() {
  }

}
