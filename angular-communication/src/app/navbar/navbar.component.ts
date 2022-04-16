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
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {}

  loggedIn = () => {
    return this.service.username;
  }

  logOut = () => {
    this.service.username = '';
    this.router.navigate(['/home'])
  }
}
