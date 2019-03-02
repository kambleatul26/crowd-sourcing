import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin(Form: NgForm) {
    if (Form.invalid) {
      return;
    }
    const authData = {password: Form.value.password, email: Form.value.mail};
    this.userService.onLogin(authData);
  }

  sign() {
    this.userService.sign();
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
