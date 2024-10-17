import { Component, OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatosAsignaturaService } from 'src/app/servicios/datos-asignatura.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QRComponent implements OnInit {
  qrData: string = '';  // Aquí almacenamos los datos del QR
  private authService = inject(AuthService); // Obtener el servicio de autenticación
  usuario: string;
  subscriptionAuthService: Subscription;

  constructor(
    private router: Router,
    private datosAsignatura: DatosAsignaturaService,

  ) {}

  ngOnInit() {
    // Obtener nombre de la asignatura
    const nombreAsignatura = this.datosAsignatura.getNombre();
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario
      console.log('Docente:', usuario);
    });


    // Validar si el nombre está vacío o no ha sido seteado
    if (!nombreAsignatura) {
      console.error('Nombre de la asignatura no disponible');
      return;  // Evitamos seguir si no hay un nombre de asignatura disponible
    }

    // Obtener fecha y hora actuales
    const fechaHora = new Date().toLocaleString();  // Formato 'MM/DD/YYYY, HH:MM:SS'

    // Combinar para el QR
    this.qrData = `http://localhost:8100/asistencia/ ${this.usuario}/${nombreAsignatura}/${fechaHora}`;
    console.log(this.qrData);  // Para debug, asegúrate de que se esté asignando correctamente
  }

  volver() {
    this.router.navigate(['/pantalla-principal']);
  }
}
