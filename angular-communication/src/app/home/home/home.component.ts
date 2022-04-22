import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';

  constructor(private service: DataService, private cookie: CookieService) { }

  ngOnInit(): void {}

  loggedIn = () => {
    //this.username = this.service.username;
    this.username = this.cookie.get("username");
    return this.username;
  }

}
