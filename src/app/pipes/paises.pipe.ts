import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paises'
})
export class PaisesPipe implements PipeTransform {

  transform(value: string, args: string[]): unknown {
    let pais = '';
    if (args[0][0] === 'P') {
      pais = 'Peru';
    } else if (args[0][0] === 'M') {
      pais = 'Mexico';
    }

    return `${value}: ${pais}`;
  }

}
