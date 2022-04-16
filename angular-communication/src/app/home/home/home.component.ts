import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';

  constructor(private service: DataService) { }

  ngOnInit(): void {}

  loggedIn = () => {
    this.username = this.service.username;
    return this.username;
  }

}
