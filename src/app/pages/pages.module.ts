import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { DetalleAsignaturaComponent } from './detalle-asignatura/detalle-asignatura.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { CamaraComponent } from './camara/camara.component';
import { QRComponent } from './qr/qr.component';
import { RegistroComponent } from './registro/registro.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AsistenciaComponent } from './asistencia/asistencia.component';

@NgModule({
  declarations: [
    InicioSesionComponent,
    PantallaPrincipalComponent,
    DetalleAsignaturaComponent,
    RestablecerContrasenaComponent,
    CamaraComponent,
    QRComponent,
    RegistroComponent,AsistenciaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,QRCodeModule
  ],
  exports: [
    PantallaPrincipalComponent,
    DetalleAsignaturaComponent,
    RestablecerContrasenaComponent,
    RegistroComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
