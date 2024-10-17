import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent {
  statusMessage: string = '';

  constructor(private router: Router) { }

  cancelar() {
    this.statusMessage = 'Acceso a la cámara denegado. No se puede escanear el QR.';
  }

  onSubmit() {
    this.statusMessage = 'Acceso a la cámara permitido. QR escaneado correctamente.';
  }

  volver() {
    this.router.navigate(['/pantalla-principal']);
  }
}
