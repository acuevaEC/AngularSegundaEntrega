import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante.modelo';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    console.log("asdf");
    const resultEstudiante = [];
    for (const Estudiante of value) {
      if (Estudiante.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultEstudiante.push(Estudiante);
      };
    };
    return resultEstudiante;
  }
}
   
  
