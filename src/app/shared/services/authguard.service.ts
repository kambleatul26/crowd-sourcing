import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.getFromLocal('loginFlag')) {
      console.log('YOU ARE NOT AUTHENTICATED');
      this.router.navigate(['/login']);
    }
    console.log(this.userService.getFromLocal('loginFlag'));
    return this.userService.getFromLocal('loginFlag');
  }
}
