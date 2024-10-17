import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.scss'],
})
export class RestablecerContrasenaComponent  implements OnInit {
  loginError: string = '';
  email: string = '';
  constructor() { }

  ngOnInit() {''}

  onSubmit() {
    this.loginError = 'Correo electrónico enviado con éxito al correo '
    + this.email;
}}
