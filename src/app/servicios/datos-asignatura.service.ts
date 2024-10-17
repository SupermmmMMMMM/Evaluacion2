import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosAsignaturaService {
  nombre!: string;
  constructor() { }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  getNombre() {
    return this.nombre;
  }
}
