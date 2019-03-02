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
    this.userService.onLogin(Form);
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
