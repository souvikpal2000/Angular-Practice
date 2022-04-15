import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password = '';
  confirmPass = '';
  alertMessage = '';
  status='';

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  inputPassword = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
  }

  confirmPassword = (event: Event) => {
    this.confirmPass = (event.target as HTMLInputElement).value;
    if(this.confirmPass !== this.password){
      this.alertMessage = "Password doesn't Match!!!";
      this.status = "danger";
    }
    else if(this.confirmPass === this.password){
      this.alertMessage = '';
    }
  }

  onClickSubmit = (form: NgForm) => {
    const user = {
      username: form.value.username,
      password: form.value.password
    }

    this.service.users = [
      ...this.service.users,
      user
    ];

    this.alertMessage = "User Registered Successfully!!!";
    this.status = "success";
  }

}
