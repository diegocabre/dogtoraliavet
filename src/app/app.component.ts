import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RedsocialComponent } from './redsocial/redsocial.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component'; // Importa tu componente Inicio

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    RedsocialComponent,
    ServiciosComponent,
    InicioComponent // Añade InicioComponent aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dogtoralia';
}



