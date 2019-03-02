import { Injectable ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedIn = false;
  public data:any[];

  onLogin(authData) {
    this.http.post('http://192.168.43.168:8000/accounts/api/token/auth/', authData)
    .subscribe(res => {
      console.log(res);
      this.isLoggedIn = true;
      this.router.navigate([parent]);
      this.router.navigate(['/index']);
      this.saveInLocal('key',authData.email);
    });
  };

  onLogout(authData) {
    this.http.post('http://yk97.pythonanywhere.com/accounts/login/', authData)
    .subscribe(res => {
      console.log(res);
      this.isLoggedIn = false;
      this.saveInLocal('key','');

      this.router.navigate(['../index']);
    });
  };

  sign() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }
   getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
   }
   constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router, private http: HttpClient) {

   }
}
