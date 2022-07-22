import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-simple',
  templateUrl: './formulario-simple.component.html',
  styleUrls: ['./formulario-simple.component.scss']
})
export class FormularioSimpleComponent implements OnInit {

  search = 'abc';
  fields = {
    search: '',
    tipo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(text: string) {
    console.log(text);
    this.handleSearch();
  }

  handleSearch() {
    if (!!this.search) {
      // Vistar API
      console.log(this.fields);
    } else {
      alert('No se tiene palabra para buscar');
    }


  }

}
