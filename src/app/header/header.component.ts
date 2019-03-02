import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginFlag;

  constructor(private userService: UserService) { }

  logout() {
    const authData = {password: '123456', email: this.userService.data['userName']};
    this.userService.onLogout(authData);
    this.loginFlag = false;
  }

  ngOnInit() {
    this.userService.getFromLocal('loginFlag');
    this.loginFlag = this.userService.data['loginFlag'];
    console.log('OKK => ' + this.loginFlag);
  }
}
