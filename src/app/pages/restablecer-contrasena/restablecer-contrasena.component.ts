import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.scss'],
})
export class RestablecerContrasenaComponent {
  mensaje: string = '';
  email: string = '';
  error: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.email) {
      // Aquí iría la lógica real para enviar el correo
      this.mensaje = `Se ha enviado un correo de restablecimiento a ${this.email}`;
      this.error = false;
    } else {
      this.mensaje = 'Por favor, introduce un correo electrónico válido';
      this.error = true;
    }
  }

  volver() {
    this.router.navigate(['/inicio-sesion']);
  }
}
