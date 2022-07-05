import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../services/persona/persona.service';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  modelo = '';
  show = true;
  personas: string[] = [];

  people: any[] = [
    {
      name: "Douglas  Pace",
      country: 'MARS'
    },
    {
      name: "Mcleod  Mueller",
      country: 'USA'
    },
    {
      name: "Day  Meyers",
      country: 'HK'
    },
    {
      name: "Aguirre  Ellis",
      country: 'UK'
    },
    {
      name: "Cook  Tyson",
      country: 'USA'
    },
    {
      name: "Hiram R",
      country: 'MX'
    }
  ];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personas = this.personaService.getPersonas();
    console.log(this.personas);
  }

  handleShow() {
    this.show = !this.show;
  }

  handleDisabled() {
    console.log('Clicked');
  }

}
