import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
  {path: "", loadChildren: () => HomeModule},
  {path: "signup", loadChildren: () => SignupModule},
  {path: "login", loadChildren: () => LoginModule},
  {path: "**", loadChildren: () => PageNotFoundModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
