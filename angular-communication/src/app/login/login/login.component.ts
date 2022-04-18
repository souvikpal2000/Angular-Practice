import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertMessage = '';
  status = '';

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.service.users);
  }

  onSubmit = (form: NgForm) => {
    const username = form.value.username;
    const password = form.value.password;

    if(username === 'admin'){
      if(password === 'admin'){
        this.service.username = username;
        this.router.navigate(['/home']);
      }else{
        this.alertMessage = "Password Incorrect!!!";
        this.status = "red";
      }
      return;
    }

    let containUser = 0;
    let position = 0;
    for(let i=0; i<this.service.users.length; i++){
      if(this.service.users[i].username === username){
        containUser = 1;
        position = i;
        break;
      }
    }

    if(containUser == 0){
      this.alertMessage = "Username is not Registered!!!";
      this.status = "red";
    }
    else{
      if(this.service.users[position].password === password){
        this.service.username = username;
        this.router.navigate(['/home']);
      }
      else{
        this.alertMessage = "Password Incorrect!!!";
        this.status = "red";
      }
    }
  }
  
  closeMessage = () => {
    this.alertMessage = '';
  }
}
