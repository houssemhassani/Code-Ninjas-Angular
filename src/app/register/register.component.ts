import { Component, OnInit } from '@angular/core';
import { TypeUser } from '../models/TypeUser';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   typeUser: TypeUser[]=[];
  form = new FormGroup({
    types: new FormArray([])
  });
  constructor() { }

  ngOnInit(): void {
    this.typeUser.push(TypeUser.Admin);
    this.typeUser.push(TypeUser.Candidate);
    this.typeUser.push(TypeUser.Recruiter);


    
  }

}
