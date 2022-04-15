import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertMessage = '';
  status = '';

  constructor(private service: DataService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    console.log(this.service.users)
  }

  onSubmit = (form: NgForm) => {
    const username = form.value.username;
    const password = form.value.password;
    this.service.users.forEach((user:any) => {
      if(user.username === username){
        if(user.password === password){
          this.cookie.set("username", username);
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        }else{
          this.alertMessage = "Password Incorrect!!!";
          this.status = "danger";
        }
      }
      else{
        this.alertMessage = "Username is not Registered!!!";
        this.status = "danger";
      }
    });
  }
}
