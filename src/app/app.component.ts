import { Component, OnInit } from '@angular/core';

interface IDatosUsuario {
  nombre: string;
  edad: number;
  esMayor: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CursoAngular';
  edad = 0;
  bool: boolean = false;
  datosUsuario: IDatosUsuario = {
    nombre: '',
    edad: 0,
    esMayor: false
  };
  letra = 'P';

  constructor() {}

  ngOnInit(): void {
    // console.log('ngOnInit lanzado!');
    // console.log(this.suma(1, 3));
  }

  suma(num1: number, num2: number): number {
    return num1 + num2;
  }

  getTituloModificado(titulo: string) {
    // console.log(titulo);
    // this.title = titulo;
    this.letra = titulo;
  }

  getRetonaNumero(numero: number) {
    // console.log(numero);
  }

  handleClickEvent() {
    // console.log('Hiciste dado click');
  }

}
