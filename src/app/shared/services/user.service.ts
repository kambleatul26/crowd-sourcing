import { Injectable , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedIn = false;
  public data: any[] = [];

  onSignup(authData) {
    this.http.post('http://192.168.43.169:8000/accounts/register/', authData)
    .subscribe(res => {
      console.log(res);
      this.router.navigate([parent]);
      this.router.navigate(['/login']);
    });
  }

  onLogin(authData) {
    this.http.post('http://192.168.43.169:8000/accounts/login/', authData)
    .subscribe(res => {
      console.log(res);
      this.router.navigate([parent]);
      this.router.navigate(['/index']);
      this.saveInLocal('key', res['token']);
      if (res['token'] !== undefined) {
        this.saveInLocal('loginFlag', true);
        this.saveInLocal('userName', authData.email);
      }
    });
  }

  onLogout(authData) {
      this.saveInLocal('key', undefined);
      this.router.navigate(['../index']);
      this.saveInLocal('loginFlag', false);
  }

  sign() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  log() {
    this.router.navigate([parent]);
    this.router.navigate(['/login']);
  }

  saveInLocal(key, val): void {
    console.log('recieved = key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
   }
   getFromLocal(key): any {
    console.log('recieved = key:' + key);
    this.data[key] = this.storage.get(key);
    console.log(this.data);
    return this.data[key];
   }
   constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private router: Router, private http: HttpClient) {

   }
}
