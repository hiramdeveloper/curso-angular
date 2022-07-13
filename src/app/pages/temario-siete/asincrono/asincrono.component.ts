import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrono',
  templateUrl: './asincrono.component.html',
  styleUrls: ['./asincrono.component.scss']
})
export class AsincronoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.main();
  }

  main() {
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 1500);
    this.segundaFuncion();
    console.log(5);
  }

  segundaFuncion() {
    setTimeout(() => {
      console.log(4);
    }, 1000);
  }

}
