import { DatosAsignaturaService } from './../../servicios/datos-asignatura.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/models/bd.models';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.scss'],
})
export class DetalleAsignaturaComponent implements OnInit {

  tipoUsuario: string = '';
  nombre: string = '';
  asignaturaNombre: string = '';
  datosAsignatura = inject(DatosAsignaturaService);

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.usuarioCompleto$.subscribe((usuario: Usuario | null) => {
      if(usuario){
        this.nombre = usuario.nombre;
        this.tipoUsuario = usuario.tipo;
      }
    });
    this.asignaturaNombre = this.datosAsignatura.getNombre();
  }

  accionQR() {
    if (this.tipoUsuario === 'docente') {
      this.router.navigate(['/qr']);
    } else {
      this.router.navigate(['/camara']);
    }
  }
}
