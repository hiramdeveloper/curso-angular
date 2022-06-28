import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paises'
})
export class PaisesPipe implements PipeTransform {

  transform(value: string, ...args: any): unknown {
    console.log(value);
    console.log(args[0]);
    let pais = '';
    if (args[0] === 'P') {
      pais = 'Peru';
    } else if (args[0] === 'M') {
      pais = 'Mexico';
    }

    return `${value}: ${pais}`;
  }

}
