import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalsHomeComponent } from './modals-home/modals-home.component';

const routes: Routes = [
  {path:"modals", component: ModalsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
