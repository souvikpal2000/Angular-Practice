import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { SignupService } from '../signup.service';
import { User } from '../user';

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

  constructor(private service: DataService, private signupService: SignupService) { }

  ngOnInit(): void {
  }

  inputPassword = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
    if(!this.password){
      this.alertMessage = '';
    }
  }

  confirmPassword = (event: Event) => {
    this.confirmPass = (event.target as HTMLInputElement).value;
    if(this.confirmPass !== this.password){
      this.alertMessage = "Password doesn't Match!!!";
      this.status = "red";
    }
    else if(this.confirmPass === this.password){
      this.alertMessage = '';
    }
    if(this.confirmPass.length == 0){
      this.alertMessage = '';
    }
  }

  onClickSubmit = (form: NgForm) => {
    if(form.value.password !== form.value.confirmpassword){
      this.alertMessage = "Password doesn't Match!!!";
      this.status = "red";
      return;
    }
    
    // let flag = 0;
    // for(let i=0; i<this.service.users.length; i++){
    //   if(this.service.users[i].username === form.value.username){
    //     flag = 1;
    //     break;
    //   }
    // }

    // if(flag == 1){
    //   this.alertMessage = "This Username is Already Registered!!!";
    //   this.status = "red";
    //   return;
    // }

    const userData = new User(form.value.username, form.value.password);

    // const user = {
    //   username: form.value.username,
    //   password: form.value.password
    // }

    // this.service.users = [
    //   ...this.service.users,
    //   userData
    // ];

    this.signupService.addUser(userData).subscribe((response) => {
      if(response == "This Username is Already Registered!!!"){
        this.alertMessage = "This Username is Already Registered!!!";
        this.status = "red";
      }
      else{
        this.alertMessage = "User Registered Successfully!!!";
        this.status = "green";
        this.password = '';
        form.reset();
      }
    })

    // this.alertMessage = "User Registered Successfully!!!";
    // this.status = "green";
    // this.password = '';
    // form.reset();
  }

  closeMessage = () => {
    this.alertMessage = '';
  }
}
