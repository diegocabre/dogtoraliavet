// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  reservaHora(): void {
    this.router.navigate(['/reserva-hora']);
  }

  iniciaSesion(): void {
    this.router.navigate(['/inicia-sesion']);
  }

  staff(): void {
    this.router.navigate(['/staff']);
  }
  inicio(): void {
    this.router.navigate(['/inicio']);
  }
}

