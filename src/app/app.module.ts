import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { SemillerosComponent } from './componentes/semilleros/semilleros.component';
//Servicios
import { RestApiService } from './servicios/rest-api.service';
import { CrearSemilleroComponent } from './componentes/crear-semillero/crear-semillero.component';

//Rutas
import { APP_ROUTING } from './routes.app';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { CrearPublicacionComponent } from './componentes/crear-publicacion/crear-publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SemillerosComponent,
    CrearSemilleroComponent,
    PublicacionesComponent,
    PublicacionComponent,
    CrearPublicacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
