import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sincrono',
  templateUrl: './sincrono.component.html',
  styleUrls: ['./sincrono.component.scss']
})
export class SincronoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.primeraFunction();
  }

  primeraFunction() {
    console.log(1);
    console.log(2);
    console.log(this.segundaFuncion());
    console.log(this.terceraFuncion());
    console.log(this.cuartaFuncion());
    console.log(4);
    console.log(5);
  }

  segundaFuncion() {
    return 3;
  }

  terceraFuncion() {
    return 2*100*10/2*5+1500;
  }

  cuartaFuncion() {
    for(let a = 0; a <= 10; a++){
      console.log(a);
    }
  }

}
