import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginFlag = true;

  constructor(private userService: UserService) { }

  logout() {
    const authData = {password: '123456', email: 'mane@gmail.com'};
    this.userService.onLogout(authData);
    this.loginFlag = false;
  }

  ngOnInit() {
    // this.loginFlag = this.userService.isLoggedIn;
  }

}
