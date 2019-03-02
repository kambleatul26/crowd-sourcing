//

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
 @Component({
   selector: 'app-fundraiser-form',
   templateUrl: './fundraiser-form.component.html',
   styleUrls: ['./fundraiser-form.component.css']
 })

export class FundraiserFormComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  Relations_List:string[]=[
    'Self','Parent','College','Mentor','Spouse'
  ]

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Title: ['', Validators.required],
      Goal_Amont: ['', Validators.required],
      Beneficiary_Name: ['', Validators.required],
      Relation: ['',Validators.required],
      Story: ['',Validators.required]
    });

  }
}
