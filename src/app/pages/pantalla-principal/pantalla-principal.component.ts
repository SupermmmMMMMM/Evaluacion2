import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatosAsignaturaService } from 'src/app/servicios/datos-asignatura.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.scss'],
})
export class PantallaPrincipalComponent {
  datosAsignatura = inject(DatosAsignaturaService);

  asignaturas = [
    { nombre: 'Arquitectura', seccion: '001D' },
    { nombre: 'Programación de Aplicaciones Móviles', seccion: '001D' },
    { nombre: 'Calidad de Software', seccion: '001D' }
  ];

  constructor(private router: Router) {}

  detalles(nombreAsignatura: string) {
    this.datosAsignatura.setNombre(nombreAsignatura);
    this.router.navigate(['/detalle-asignatura']);
  }
}
