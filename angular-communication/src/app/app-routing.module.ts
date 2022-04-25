import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SignupModule } from './signup/signup.module';
import { UsersDataModule } from './users-data/users-data.module';
import { YoutubeDataModule } from './youtube-data/youtube-data.module';
import { YoutubeVideoModule } from './youtube-video/youtube-video.module';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full" },  
  {path: "home", loadChildren: () => HomeModule},
  {path: "users", loadChildren: () => UsersDataModule},
  {path: "videos", loadChildren: () => YoutubeVideoModule},
  {path: "add", loadChildren: () => YoutubeDataModule},
  {path: "signup", loadChildren: () => SignupModule},
  {path: "login", loadChildren: () => LoginModule},
  {path: "**", loadChildren: () => PageNotFoundModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
