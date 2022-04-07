import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { ViewsModule } from './views/views.module';
import { ModalsModule } from './modals/modals.module';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "elements", loadChildren: () => ElementsModule},
  {path: "collections", loadChildren: () => CollectionsModule},
  {path: "views", loadChildren: () => ViewsModule},
  {path: "modals", loadChildren: () => ModalsModule},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
