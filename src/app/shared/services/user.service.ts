import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedIn = false;

  onLogin(authData) {
    this.http.post('http://yk97.pythonanywhere.com/accounts/login/', authData)
    .subscribe(res => {
      console.log(res);
      this.isLoggedIn = true;
      this.router.navigate([parent]);
      this.router.navigate(['/index']);
    });
  }

  onLogout(authData) {
    this.http.post('http://yk97.pythonanywhere.com/accounts/login/', authData)
    .subscribe(res => {
      console.log(res);
      this.isLoggedIn = false;
      this.router.navigate(['../index']);
    });
  }

  sign() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  constructor(private router: Router, private http: HttpClient) { }
}
