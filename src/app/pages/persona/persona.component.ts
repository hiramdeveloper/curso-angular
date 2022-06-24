import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Persona inicia');
  }

  ngOnDestroy(): void {
    console.log('Persona finaliza');
  }

}
