import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username = '';

  constructor(private service: DataService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {}

  loggedIn = () => {
    //this.username = this.service.username;
    this.username = this.cookie.get("username")
    return this.username;
  }

  logOut = () => {
    //this.service.username = '';
    this.cookie.delete("username");
    this.router.navigate(['/home']);
  }
}
