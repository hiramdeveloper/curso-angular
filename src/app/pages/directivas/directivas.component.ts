import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  modelo = '';
  show = true;

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

  constructor() { }

  ngOnInit(): void {
  }

  handleShow() {
    this.show = !this.show;
  }

  handleDisabled() {
    console.log('Clicked');
  }

}
