import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginFlag;
  public userName;

  constructor(private userService: UserService) { }

  logout() {
    const authData = {password: '123456', email: this.userService.data['userName']};
    this.userService.onLogout(authData);
    this.loginFlag = false;
  }

  ngOnInit() {
    this.loginFlag = this.userService.getFromLocal('loginFlag');
    this.userName = this.userService.getFromLocal('userName');
    console.log('OKK => ' + this.loginFlag);
  }
}
