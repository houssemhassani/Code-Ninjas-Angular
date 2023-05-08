import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, Subject, tap, throwError} from "rxjs";
import { CookieService } from 'ngx-cookie-service';
;
import { Router } from '@angular/router';
import { User } from 'src/model/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public dataSubject = new BehaviorSubject<string>('Empty');
  public data$ = this.dataSubject.asObservable();
  user = new Subject<User>();
  constructor(private cookieservice : CookieService,private http:HttpClient) { }
  login(username: string, password: string) {   
    const url = 'http://localhost:8081/pidev/api/auth/login';
    const requestBody = {
      username: username,
      password: password
    };
    return this.http.post<any>(url, requestBody)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          const expirationDate = new Date(new Date().getTime() + resData.expires_in * 1000);
          const user = new User(resData.username,resData.session_state,resData.access_token,expirationDate);
          this.user.next(user);
          // this.cookieservice.set('token', resData.access_token, expirationDate);
          localStorage.setItem("token",resData.authenticationToken);
          localStorage.setItem("username",resData.username)
          console.log("data",resData); 
  
        })
      );

  }




  EditUser(user: any, username: any) {   
    const url = 'http://localhost:8081/pidev/api/auth/editUser/'+username;
    return this.http.put<any>(url, user);

  }


  getallusers() {   
    const url = 'http://localhost:8081/pidev/api/auth/getallusers';
    return this.http.get<any>(url);

  }
  register(email:string ,   username:string, password:string  , typeUser:string, universityId:string)
{
  const url = 'http://localhost:8081/pidev/api/auth/signup';
const requestBody =
{
  email:email,
  username:username,
  password:password,
  typeUser:typeUser,
  universityId:universityId
}
return this.http.post<any>(url, requestBody);
}
  private handleError(errorRes:HttpErrorResponse)
  {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
        // switch (errorRes.error.error.message) {
        //     case 'user_not_found':
        //         errorMessage = 'user_not_found';
        //         break;
        //     case 'invalid_grant':
        //         errorMessage = 'invalid_grant';
        //         break;
        //     case 'access_denied':
        //         errorMessage = 'This password is not correct.';
        //         break;
    // }
    else if (errorRes.status == 500 || errorRes.status == 401)
    {
      errorMessage = 'Login Failed Please Check your details or contact the administrator';
    }


    return throwError(errorMessage);

  }

  // checkTokenExpiration() {
  //   const token = this.cookieservice.get('token');
  //   const expirationDate = new Date(this.cookieservice.get('expirationDate'));
  
  //   if (!token || expirationDate <= new Date()) {
  //     // Token is not present or has expired, display a pop-up message
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Session Expired',
  //       text: 'Your session has expired. Please log in again.',
  //       confirmButtonText: 'OK'
  //     }).then( (result)=>{
  //        if(result.isConfirmed)
  //         {
  //           this.router.navigate(['/auth/login'])
  //         }
  //     });
      
  //     return false;
  //   }
  
  //   return true;
  // }
  

}

