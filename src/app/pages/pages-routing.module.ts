import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { QRComponent } from './qr/qr.component';
import { CamaraComponent } from './camara/camara.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';

const routes: Routes = [
  {path: '',component:InicioSesionComponent},
  {path:'inicio-sesion',component: InicioSesionComponent},
  {path:'registro', component: RegistroComponent},
  {path: 'pantalla-principal',component: PantallaPrincipalComponent},
  {path: 'qr',component: QRComponent},
  {path: 'camara',component: CamaraComponent},
  {path: 'restablecer',component: RestablecerContrasenaComponent},
  {path: 'asistencia/:nombre/:fecha',component: AsistenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
