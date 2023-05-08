import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  error="";
  constructor(private Auth:AuthService,private router:Router) { }

  ngOnInit(): void {
     

  }
  onSubmit(form :NgForm) {

    
   

    const username = form.value.username;
    const password = form.value.password;

    this.Auth.getUserByUsername(username)
  .subscribe(
    (user: User) => {
      console.log(user);
      // do something with the user data
    },
    (error) => {
      console.log(error);
      // handle the error
    }
  );
    this.Auth.login(username,password)
        .subscribe((res)=>{
          // console.log("response",res);
          
          this.router.navigate(['/']);
          
        })
       
       


  }}
