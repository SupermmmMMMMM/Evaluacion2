import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  loginFailed: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void {
    ''// No es necesario suscribirse aquí
  }

  async login(usuario: string, contrasena: string) {
    this.isLoading = true;
    this.loginFailed = false;

    try {
      await this.authService.buscarBD4(usuario, contrasena);

      this.authService.isAuthenticated$.pipe(take(1)).subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.authService.usuarioCompleto$.pipe(take(1)).subscribe(usuarioCompleto => {
            this.usuario = '';
            this.contrasena = '';

            this.presentSuccessAlert('Inicio de sesión exitoso');

            if (usuarioCompleto && usuarioCompleto.tipo === "docente") {
              this.router.navigate(['pantalla-principal']);
            } else if (usuarioCompleto && usuarioCompleto.tipo === "alumno") {
              this.router.navigate(['pantalla-principal']);
            }
          });
        } else {
          this.loginFailed = true;
          this.presentErrorAlert('Usuario o clave incorrectos');
        }
      });
    } catch (error) {
      console.error('Error during login:', error);
      this.loginFailed = true;
      this.presentErrorAlert('Error al iniciar sesión');
    } finally {
      this.isLoading = false;
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      this.presentSuccessAlert('Sesión cerrada exitosamente');
      this.router.navigate(['inicio-sesion']);
    } catch (error) {
      console.error('Error during logout:', error);
      this.presentErrorAlert('Error al cerrar sesión');
    }
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  async mostrarAlertaOlvidoContrasena() {
    const alert = await this.alertController.create({
      header: '¿Olvidó su contraseña?',
      message: '¿Desea ir a la página de recuperación de contraseña?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Ir a recuperar',
          handler: () => {
            this.router.navigate(['restablecer']);
          }
        }
      ]
    });
    await alert.present();
  }
}
