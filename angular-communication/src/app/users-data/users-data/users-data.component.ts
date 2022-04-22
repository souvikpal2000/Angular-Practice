import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/data.service';
import { LoginService } from 'src/app/login/login.service';
import { DeleteUpdateUserService } from '../delete-update-user.service';
import { UserPositionService } from '../user-position.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  users:any;

  constructor(private service : DataService, private user: UserPositionService, private router: Router,
              private deleteupdateService: DeleteUpdateUserService, 
              private cookie: CookieService) { }

  ngOnInit(): void {
    if(!this.cookie.get("username")){
      this.router.navigate(['/home']);
    }else{
      this.deleteupdateService.getAllUser().subscribe((response) => {
        this.service.users = response;
      })
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

  deleteUser = (username:string) => {
    this.deleteupdateService.deleteUser(username).subscribe();
    const index = this.service.users.findIndex((user:any) => {
      return user.username === username;
    })
    this.service.users.splice(index,1);
  }

  updateUser = (username:number) => {
    const index = this.service.users.findIndex((user:any) => {
      return user.username === username;
    })
    this.user.position = index;
  }

}
