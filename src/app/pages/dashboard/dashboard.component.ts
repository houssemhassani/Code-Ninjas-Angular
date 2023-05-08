import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listUsers : [] | any;
  constructor(private elementRef: ElementRef,
    private authService : AuthService) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    this.getAllUsers();
  }
  getAllUsers(){
this.authService.getallusers().subscribe((res : any)=>{
this.listUsers =res;
});
  }

}
