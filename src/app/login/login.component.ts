import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  sessionId: any = "";

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  login() {
    let  loginRequest={};
    let url = '/api/auth/login';
    this.http.post<any>(url, {
      loginRequest:{
      username: this.model.username,
      password: this.model.password}
    }).subscribe(res => {
      console.log(res)
      if (res) {
        this.sessionId = res.sessionId;
          
        sessionStorage.setItem(
          'token',
          this.sessionId
        );
        this.router.navigate(['']);
      } else {
          alert("Authentication failed.")
      }
    });
}

}