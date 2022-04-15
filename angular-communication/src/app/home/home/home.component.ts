import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.username = this.cookie.get("username");
  }

}
