import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDataRoutingModule } from './users-data-routing.module';
import { UsersDataComponent } from './users-data/users-data.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersDataComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UsersDataRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UsersDataModule { }
