import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsHomeComponent } from './modals-home/modals-home.component';
import { ModsComponent } from './mods/mods.component';
import { SharedModule } from '../shared/shared.module';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    ModalsHomeComponent,
    ModsComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    SharedModule
  ]
})
export class ModalsModule { }
