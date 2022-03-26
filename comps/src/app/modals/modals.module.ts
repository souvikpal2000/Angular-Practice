import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsHomeComponent } from './modals-home/modals-home.component';


@NgModule({
  declarations: [
    ModalsHomeComponent
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule
  ]
})
export class ModalsModule { }
