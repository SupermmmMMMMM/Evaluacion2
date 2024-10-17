import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatosAsignaturaService } from 'src/app/servicios/datos-asignatura.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.scss'],
})
export class PantallaPrincipalComponent {
  nombre!: string;
  datosAsignatura = inject(DatosAsignaturaService)
  constructor(private router: Router) {}
  detallesA() {
    this.datosAsignatura.setNombre('Arquitectura');
    this.router.navigate(['/detalle-asignatura']);
  }
  detallesP() {
    this.datosAsignatura.setNombre('Programación de Aplicaciones Móviles');
    this.router.navigate(['/detalle-asignatura']);
  }
  detallesC() {
    this.datosAsignatura.setNombre('Calidad de Software');
    this.router.navigate(['/detalle-asignatura']);
  }
}
