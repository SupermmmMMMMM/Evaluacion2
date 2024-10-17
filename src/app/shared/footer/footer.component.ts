import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(private router: Router) {} // Inyecta el Router

  logout() {
    // Limpia el localStorage para cerrar sesión
    localStorage.removeItem('username'); // Borra el elemento que guarda la sesión (ajusta la clave según sea necesario)

    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/inicio-sesion'] ,{ replaceUrl: true });
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
      window.history.pushState(null, '', window.location.href);
    };

  }
}
