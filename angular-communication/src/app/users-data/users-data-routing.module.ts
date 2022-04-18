import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersDataComponent } from './users-data/users-data.component';

const routes: Routes = [
  { path: "", 
    component: UsersDataComponent, 
    children:[{path: "updateuser", component: UpdateUserComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDataRoutingModule { }
