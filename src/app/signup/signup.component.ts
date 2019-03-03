import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/services/user.service';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  onSignup(Form: NgForm) {
    if (Form.invalid) {
      return;
    }
    const authData = {password: Form.value.password, email: Form.value.email};
    this.userService.onSignup(authData);
    console.log(authData);
  }

  log() {
    this.userService.log();
  }

  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
  }

}
