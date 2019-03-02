import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  onLogin(Form: NgForm) {
    const authData = {password: Form.value.password, email: Form.value.mail};
    this.http.post('http://yk97.pythonanywhere.com/accounts/login/', authData)
    .subscribe(res => {
      console.log(res);
    });
  }

  sign() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  constructor(private router: Router, private http: HttpClient) { }
}
