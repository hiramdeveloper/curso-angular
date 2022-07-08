import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getCustomers() {
    return this.http.get(`${this.baseUrl}/customers`);
  }

  addUser(name: string, age: string, ocupation: string) {
    return this.http.post(`${this.baseUrl}/users`, {name, age, ocupation});
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.baseUrl}/users/${userId}`);
  }

  getUserById(userId: string) {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }
}
