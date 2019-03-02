import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  public aadhar: String;
  public otp;
  public aadharnext = false;
  public otpnext = false;
  secondFormGroup: FormGroup;
  Relations_List: string[] = ['Self', 'Parent', 'College', 'Mentor', 'Spouse'];

  validateMail() {
    this.http.get('http://192.168.43.169:8000/api/uidai/kyc/' + this.aadhar)
    .subscribe(res => {
      console.log(res);
      this.aadharnext = true;
    }, err => {
      console.log(err['error']['detail']);
    });
  }

  validateOtp() {
    this.http.get('http://192.168.43.169:8000/api/uidai/kyc/otp/' + this.aadhar + '/' + this.otp)
    .subscribe(res => {
      console.log(res);
      if(res === 'success'){
        this.otpnext = true;
      }
    }, err => {
      console.log(err['error']['detail']);
    });
  }

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      Title: ['', Validators.required],
      Goal_Amont: ['', Validators.required],
      Beneficiary_Name: ['', Validators.required],
      Relation: ['',Validators.required],
      Story: ['',Validators.required]
    });
  }
}
