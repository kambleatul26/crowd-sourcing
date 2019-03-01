import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  }

  sign() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

}
