import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * @title Stepper overview
 */
 @Component({
   selector: 'app-fundraiser-form',
   templateUrl: './fundraiser-form.component.html',
   styleUrls: ['./fundraiser-form.component.css']
 })

export class FundraiserFormComponent implements OnInit {
  public aadhar;
  public otp;

  validateMail() {
    this.http.post('http://192.168.43.169:8000/api/accounts/register/', this.aadhar).subscribe(res => {
      console.log(res);
    });
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
