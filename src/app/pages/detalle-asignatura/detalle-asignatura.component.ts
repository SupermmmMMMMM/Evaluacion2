import { DatosAsignaturaService } from './../../servicios/datos-asignatura.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'src/app/servicios/web.service';
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
  datosAsignatura = inject(DatosAsignaturaService);
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private webService: WebService) {}

  ngOnInit() {
    this.authService.usuarioCompleto$.subscribe((usuario: Usuario | null)=> {
      if(usuario){
        this.nombre = usuario.nombre;
        this.tipoUsuario = usuario.tipo;
      }
    }

  )
  }
  generarQR() {
    this.router.navigate(['/qr']);
  }

  abrirCamara() {
    this.router.navigate(['/camara']);
  }
}
