import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login: boolean = false;

  getAuth(): boolean{
    return this.login;
  }

  loginAuth(){
    this.login = true;
  }

  logoutAuth(){
    this.login = false;
  }
}
