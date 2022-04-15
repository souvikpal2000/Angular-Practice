import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;

  constructor(private service: DataService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    if(this.cookie.get("username")){
      this.loggedIn = true;
      this.service.loggedIn = this.loggedIn;
    }
  }

  logOut = () => {
    this.cookie.delete("username");
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    })
  }
}
