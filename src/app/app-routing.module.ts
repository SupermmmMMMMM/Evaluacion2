import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PantallaPrincipalComponent } from './pages/pantalla-principal/pantalla-principal.component';
import { DetalleAsignaturaComponent } from './pages/detalle-asignatura/detalle-asignatura.component';
import { RestablecerContrasenaComponent } from './pages/restablecer-contrasena/restablecer-contrasena.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'pantalla-principal', component: PantallaPrincipalComponent },
  { path: 'detalle-asignatura', component: DetalleAsignaturaComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
