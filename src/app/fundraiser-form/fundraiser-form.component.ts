import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/services/user.service';

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
    this.http.get('http://192.168.43.169:8000/api/uidai/kyc/otp/'  + '123456789/' + this.otp)
    .subscribe(res => {
      console.log(res);
      if (res === 'success'){
        this.otpnext = true;
      }
    }, err => {
      console.log(err['error']['detail']);
    });
  }

  onSubmit(Form: NgForm) {
    if (Form.invalid) {
      return;
    }
    const FundData = {email: this.userService.getFromLocal('userName'), title: Form.value.Title,
                      goal_amount: Form.value.Goal_Amont, beneficiary_name: Form.value.Beneficiary_Name,
                      relation_with: Form.value.Relation, purpose: Form.value.Story};
    console.log(FundData);
    this.http.post('http://192.168.43.169:8000/api/fundraisers/new/', FundData)
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err['error']['detail']);
    });
  }

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private userService: UserService) {}

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
