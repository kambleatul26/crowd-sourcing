import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  secondFormGroup: FormGroup;
  Relations_List: string[] = ['Self', 'Parent', 'College', 'Mentor', 'Spouse'];

  validateMail() {
    this.http.get('http://192.168.43.169:8000/api/uidai/kyc/' + this.aadhar)
    .subscribe(res => {
      console.log(res);
      console.log(res['error']['detail']);
    });

    // this.http.get('http://192.168.43.169:8000/api/uidai/kyc/' + this.aadhar)
    // .catch((err: HttpErrorResponse) => {
    //   // simple logging, but you can do a lot more, see below
    //   console.error('An error occurred:', err.error);
    // });
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
