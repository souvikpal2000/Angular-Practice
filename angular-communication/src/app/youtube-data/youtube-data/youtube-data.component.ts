import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-youtube-data',
  templateUrl: './youtube-data.component.html',
  styleUrls: ['./youtube-data.component.css']
})
export class YoutubeDataComponent implements OnInit {

  alertMessage = '';
  status = '';

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    if(this.cookie.get("username") !== "admin"){
      this.router.navigate(['/home']);
    }
  }

  onSubmit = (form: Form) => {
    
  }

  closeMessage = () => {
    return false;
  }
}
