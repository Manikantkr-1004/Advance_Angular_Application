import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private authService: AuthService,private router: Router){}

  email: string = "";
  password: string = "";

  emailSet(e: Event){
    this.email = (e.target as HTMLInputElement).value;
  }
  passSet(e: Event){
    this.password = (e.target as HTMLInputElement).value;
  }

  doLogin(){
    if(this.email===""){
      alert("Please fill Email");
      return;
    }
    if(this.password===""){
      alert("Please fill Password");
      return;
    }

    this.http.post("https://reqres.in/api/login",{email: this.email, password: this.password}).subscribe((data)=>{
      
    this.authService.loginAuth();
    alert("Login Successfull");
    this.router.navigate([''])
      
    },(error)=>{
      alert(error.error.error)
    })

  }
}
