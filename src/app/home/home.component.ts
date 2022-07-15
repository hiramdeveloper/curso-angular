import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/interfaces/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  propiedad: IUser = {
    id: '',
    name: '',
    age: '',
    ocupation: '',
    address: ''
  };

  constructor() { }

  ngOnInit(): void {
    console.log('HOla mundo');
  }

}
