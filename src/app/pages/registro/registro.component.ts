import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/bd.models';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  usuario: Usuario ={
    nombre: '',
    usuario: '',
    contrasena: '',
    telefono: '',
    correo: '',
    tipo: '',
    id: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}
  async registrar() {
    if (this.validarFormulario()) {
      const registroExitoso = await this.authService.registrarUsuario(this.usuario);
      if (registroExitoso) {
        this.mostrarAlerta('Éxito', 'Usuario registrado correctamente');
        this.router.navigate(['/login']);
      }
    }
  }

  validarFormulario(): boolean {
    if (!this.usuario.nombre || !this.usuario.usuario || !this.usuario.contrasena ||
        !this.usuario.telefono || !this.usuario.correo || !this.usuario.tipo) {
      this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
      return false;
    }
    // Aquí puedes añadir más validaciones según tus necesidades
    return true;
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
  volverALogin() {
    this.router.navigate(['/inicio-sesion']);
  }

  handleBlur() {
    if (!this.usuario.tipo) {
      // Si no se selecciona ningún rol, puedes realizar alguna acción, como mostrar un mensaje de error
      console.log('No se seleccionó ningún rol');
    }
  }
}

