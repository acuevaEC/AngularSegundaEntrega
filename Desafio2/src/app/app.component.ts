import { Component, OnInit } from '@angular/core';
import { Estudiante} from './modelos/estudiante.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Desafio2';
  size = 'x-large';
  filterEstudiante = '';
  public estudiantes: Estudiante[]=[
    new Estudiante(1,'andres','cueva',10,true),
    new Estudiante(2,'pablo','cueva',6,true),
    new Estudiante(3,'JUAN','BUCHELI',8,true),
    new Estudiante(4,'DANIEL','ARCOS',5,true),
    new Estudiante(5,'MARIA','PACHA',10,true),
    new Estudiante(6,'DANIELA','COLMENA',1,true),

  ]
}
