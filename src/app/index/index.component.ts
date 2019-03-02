import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    console.log(this.userService.data);
  }

}
