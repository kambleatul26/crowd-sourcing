import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    // console.log(Form.value.username);
    // console.log(Form.value.password);
    // const authData = {email: Form.value.email, password: Form.value.password, username: Form.value.username};
    // this.http.post('http://localhost:3000/signup', authData)
    // .subscribe(res => {
    //   console.log(res);
    // });
    // this.postsService.addPosts(Form.value.title, Form.value.content);
    // Form.resetForm();
  }

  log() {
    this.router.navigate([parent]);
    this.router.navigate(['/login']);
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

}
