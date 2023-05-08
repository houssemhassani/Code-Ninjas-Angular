import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  userName : string | any;
  editForm : FormGroup | any;
  username : any;
  PasswordForm : FormGroup | any;
  currentPassword: string | any;
  newPassword: string | any;
  constructor(private fb : FormBuilder,
    private authService : AuthService) {
     }
  InitEditForm(){
    this.editForm = this.fb.group({
      username : [''],
      email : ['']
    })
  }
  InitPasswordForm(){
    this.PasswordForm = this.fb.group({
      username : [''],
      currentPassword : [''],
      newPassword : ['']
    })
  }
  ngOnInit(): void {
    this.InitEditForm();
    this.userName = localStorage.getItem("username");
    
  }
  onEdit(){
    this.username = localStorage.getItem("username");
    this.authService.EditUser(this.editForm.value,this.username).subscribe((res)=>{
     localStorage.setItem("username",res.username);
     this.userName = res.username;
     this.authService.dataSubject.next("Changed");
    }); 
}



}
