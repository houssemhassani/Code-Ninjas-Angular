import { Component, OnInit } from '@angular/core';
;
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {
 
  error="";
  public registerForm : FormGroup | any;
  constructor(private Auth:AuthService,private fb : FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.InitRegisterform();
  }
  InitRegisterform(){
    this.registerForm = this.fb.group({
     email : ['',Validators.required],
     username : ['',Validators.required],
     password : ['', Validators.required],
     typeUser : ['', Validators.required],
     universityId : ['', Validators.required]
    });
  }
  onSubmit() {

    
   console.log('Register Form ', this.registerForm.value);
    const email = this.registerForm.value.email;
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const typeUser = this.registerForm.value.typeUser;
    const universityId = this.registerForm.value.universityId;

    this.Auth.register(email,username,password,typeUser,universityId)
     .subscribe((d:any) =>{
      console.log('login success',d);
      this.router.navigateByUrl('/login');
     },
     (err:any)=>{
      console.log('login error',err);
      this.router.navigateByUrl('/login');
    
     });
 

}

}

