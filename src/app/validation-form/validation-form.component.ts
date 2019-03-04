import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Category } from '../signup/signup.component';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  public file: File;

  categories: Category[] = [
    {value: 'NGO', viewValue: 'NGO'},
    {value: 'Medical', viewValue: 'Medical'},
    {value: 'Personal Cause', viewValue: 'Personal Cause'},
    {value: 'Creative Ideas', viewValue: 'Creative Ideas'}
  ];

  onSubmit(Form: NgForm) {
    const organization = { userType: Form.value.u_type, organization: Form.value.organization, document: Form.value.doc};
    this.http.post( '', organization)
    .subscribe(res => {

    });
  }

    importFile(event) {
    if (event.target.files.length === 0) {
       console.log('No file selected!');
       return;
    }
      this.file = event.target.files[0];
      console.log(this.file);
      // after here 'file' can be accessed and used for further process
    }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
