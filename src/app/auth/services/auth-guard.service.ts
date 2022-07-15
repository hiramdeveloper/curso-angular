import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authServiceService: AuthServiceService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.authServiceService.isAuthtenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

}
