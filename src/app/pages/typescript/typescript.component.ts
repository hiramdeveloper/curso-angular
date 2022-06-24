import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  @Input() titulo = 'Uno';
  @Output() tituloModificado: EventEmitter<string> = new EventEmitter();
  @Output() retornaNumero: EventEmitter<number> = new EventEmitter();
  numero = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleTitleChange(nuevoTitulo: string) {
    console.log(nuevoTitulo);
    this.tituloModificado.emit(nuevoTitulo);
  }

  handleNumeroCambiado(numero: number) {
    console.log(numero);
    this.retornaNumero.emit(numero);
  }

}
