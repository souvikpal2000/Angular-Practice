import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserPositionService } from '../user-position.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  users:any;

  constructor(private service : DataService, private user: UserPositionService, private router: Router) { }

  ngOnInit(): void {
    if(!this.service.username){
      this.router.navigate(['/home']);
    }
  }

  containUsers = () => {
    this.users = this.service.users;
    if(this.users.length == 0){
      return false;
    }else{
      return true;
    }
  }

  deleteUser = (i:number) => {
    this.user.position = -1;
    this.service.users.splice(i,1);
  }

  updateUser = (i:number) => {
    this.user.position = i;
  }

}
