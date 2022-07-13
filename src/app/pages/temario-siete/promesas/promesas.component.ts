import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  data = [
    { name: 'Hiram', age: 30 },
    { name: 'Pedro', age: 25 },
    { name: 'Juan', age: 40 },
    { name: 'Pablo', age: 33 },
  ]

  constructor() { }

  ngOnInit(): void {
    // console.log(1);
    // this.primerPromise(2000).then((response) => {
    //   console.log(response)
    // }).catch((error) => console.warn(error));
    // console.log(3);
    this.metodoAsync();
  }

  async metodoAsync() {
    console.log(1);
    const metodo = await this.primerPromise(1500);
    console.log(metodo);
    console.log(3);
  }


  primerPromise(timer: number) {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        (timer === 1500) ? resolve(this.data) : reject('Error en la promesa')
      }, timer);
    });
  }

}
