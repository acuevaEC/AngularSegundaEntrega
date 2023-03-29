import { NgModule } from '@angular/core';
export class Estudiante {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public notaPromedio: number,
        public estadoAprobacion: boolean
    ) {}
}