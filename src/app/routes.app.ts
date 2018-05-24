import { RouterModule, Routes } from '@angular/router';
import { SemillerosComponent } from './componentes/semilleros/semilleros.component';
import { CrearSemilleroComponent } from './componentes/crear-semillero/crear-semillero.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { CrearPublicacionComponent } from './componentes/crear-publicacion/crear-publicacion.component';

const APP_ROUTES: Routes = [
  { path: 'semilleros', component: SemillerosComponent },
  { path: 'crearSemillero', component: CrearSemilleroComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: 'publicaciones/publicacion/:id', component: PublicacionComponent },
  { path: 'publicaciones/crearPublicacion', component: CrearPublicacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'publicaciones' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
