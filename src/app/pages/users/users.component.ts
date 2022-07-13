import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/users';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  usuarios: any[] = [];
  name = '';
  age = '';
  ocupation = '';
  userId = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();

    this.subscription.add(
      this.usersService.getCustomers().subscribe({
        next: (customers: any) => console.log(customers)
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUsers() {
    this.subscription.add(
      this.usersService.getUsers().subscribe({
        next: (users: any) => {
          console.log(users);
          this.usuarios = users;
        }
      })
    );
  }

  sendData() {
    this.usersService.addUser(this.name, this.age, this.ocupation).subscribe({
      next: (response: any) => {
        console.log(response);
        this.usuarios.push(response);
      }
    });
  }

  removeUser(usario: IUser) {
    console.log(usario);
    this.usersService.deleteUser(usario.id).subscribe({
      next: (response: any) => this.getUsers()
    });
  }

  searchByUserId() {
    console.log(this.userId);
    this.usersService.getUserById(this.userId).subscribe({
      next: (user: any) => console.log(user),
      error: (error: any) => this.otraBusqueda(this.userId)
    });
  }

  otraBusqueda(userId: string) {
    alert(`Ejecuta otra busqueda con el id de usuario ${userId}`);
  }

}
