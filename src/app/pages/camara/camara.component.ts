import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {
  loginError: string = '';
  constructor(private router: Router) { }

  ngOnInit() {''}

  cancelar() {
    this.loginError = 'Presione volver al menú principal';
  }
  onSubmit() {
    this.loginError = 'QR escaneado correctamente, presione volver al menú principal';
  }
  volver() {
    this.router.navigate(['/pantalla-principal']);
  }
}
