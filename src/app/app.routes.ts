// app.routes.ts
import { Routes } from '@angular/router';
import { ReservaHoraComponent } from './reserva-hora/reserva-hora.component';
import { IniciaSesionComponent } from './inicia-sesion/inicia-sesion.component';
import { StaffComponent } from './staff/staff.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicia-sesion', component: IniciaSesionComponent },
  { path: 'reserva-hora', component: ReservaHoraComponent },
  { path: 'staff', component: StaffComponent },
  { path: '**', redirectTo: '/inicio' } // Redirección a reserva-hora si la ruta no existe
];

