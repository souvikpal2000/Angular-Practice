import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { UserPositionService } from '../user-position.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  username = '';
  password = '';

  constructor(private service: DataService, private user: UserPositionService) { }

  ngOnInit(): void {
  }

  getUserData = () => {
    if(this.user.position == 0){
      this.username = this.service.users[this.user.position].username;
      this.password = this.service.users[this.user.position].password;
      return true;
    }
    if(this.user.position == -1){
      return false;
    }
    this.username = this.service.users[this.user.position].username;
    this.password = this.service.users[this.user.position].password;
    return this.user.position;
  }

  updateUserData = (form: NgForm) => {
    this.service.users[this.user.position].username = form.value.username;
    this.service.users[this.user.position].password = form.value.password;
  }

  closeUpdateForm = () => {
    this.user.position = -1;
  }
}
