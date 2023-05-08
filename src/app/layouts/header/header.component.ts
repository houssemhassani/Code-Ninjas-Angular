import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName : string | any;
  constructor(@Inject(DOCUMENT) private document: Document,private router:Router,
  private authService : AuthService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username");
   this.authService.data$.subscribe((res)=>{
    console.log(res);
    if(res == "Changed"){
    this.userName = localStorage.getItem("username");
    this.authService.dataSubject.next("Empty");
    }
   })
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
  logOut(){
 localStorage.clear();
 this.router.navigateByUrl('/login');
  }
}
