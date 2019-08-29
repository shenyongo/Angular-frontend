import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
import { FormsModule } from '@angular/forms'; 
import { NavbarService } from '../navbar.service';
import { AuthService } from '../auth.service';    
    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent {    
    
  model : any={};    
    
  errorMessage:string;    
  constructor(private nav: NavbarService, private auth: AuthService,private router:Router,private LoginService:LoginService) { }    
    
    
  ngOnInit() {    
    sessionStorage.removeItem('UserName');
    sessionStorage.clear(); 
    localStorage.clear();   
  }    
  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        { 
          sessionStorage.setItem('UserName', this.model.UserName);
          this.auth.setLoggedIn(true);
          this.router.navigate(['/home']);
          this.nav.show();
          if(data.isManager)
          {
            this.nav.designated();
          }     
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };
  newUser() {
    debugger;
    this.router.navigate(['/AddUser']);
    debugger;
  };    
 }     