import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/signup/user';
import { DeleteUpdateUserService } from '../delete-update-user.service';
import { UserPositionService } from '../user-position.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  username = '';
  password = '';
  addUser = false;

  constructor(private service: DataService, private user: UserPositionService, private deleteupdateService: DeleteUpdateUserService) { }

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

  checkUser = (event: Event) => {
    if(this.service.users[this.user.position].username != (event.target as HTMLInputElement).value){
      this.addUser = true;
    }else{
      this.addUser = false;
    }
  }

  updateUserData = (form: NgForm) => {
    this.addUser = false;

    const user = new User(form.value.username, form.value.password);

    this.deleteupdateService.updateUser(user).subscribe();

    if(this.service.users[this.user.position].username != form.value.username){
      this.service.users = [
        ...this.service.users,
        user
      ]
      this.user.position = -1;
      return;
    }

    this.service.users[this.user.position].username = form.value.username;
    this.service.users[this.user.position].password = form.value.password;
  }

  closeUpdateForm = () => {
    this.user.position = -1;
  }

  add = () => {
    return this.addUser;
  }
}
