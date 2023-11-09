import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication';

  constructor(private authService: AuthService){}

  userLoggedIn(){
    return this.authService.getAuth()
  }

  doLogout(){
    this.authService.logoutAuth();
    window.location.reload();
  }
}
