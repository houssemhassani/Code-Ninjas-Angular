import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
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

    this.Auth.login(username,password)
        .subscribe((res)=>{
          // console.log("response",res);
          this.router.navigate(['/']);
          
        })
       


  }}
