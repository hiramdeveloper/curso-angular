import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    const token = 'fgkjhasdkjfklajsdhkfja';
    const headers = new HttpHeaders({
      Accept: 'application/json',
      HeaderPersonalizado: 'Hola mundo',
      Authorization: `Bearer: ${token}`
    });
    return this.http.get(`${this.baseUrl}/users`, {headers});
  }

  getCustomers() {
    const token = 'fgkjhasdkjfklajsdhkfja';
    const headers = new HttpHeaders({
      Accept: 'application/json',
      HeaderPersonalizado: 'Hola mundo',
      Authorization: `Bearer: ${token}`
    });
    return this.http.get(`${this.baseUrl}/customers`, {headers});
  }
}
