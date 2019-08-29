import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';     
import { LoginService } from '../login.service';    
import {Register} from '../register';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
    
@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.css']    
})    
export class RegisterComponent implements OnInit {    
  data = false;    
  employeeForm: any;    
  massage:string;    
  constructor(private router:Router, private formbulider: FormBuilder,private loginService:LoginService) { }    
    
  ngOnInit() {    
    this.employeeForm = this.formbulider.group({    
      UserName: ['', [Validators.required]],    
      LoginName: ['', [Validators.required]],    
      Password: ['', [Validators.required]],    
      Email: ['', [Validators.required]],    
      ContactNo: ['', [Validators.required]],    
      Address: ['', [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.employeeForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.employeeForm.reset();
      this.router.navigate(['/login']);    
    });    
  }
  goBack() {
    debugger;
    this.router.navigate(['/login']);
  }    
}    
