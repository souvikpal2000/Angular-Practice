import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule,
    // SignupModule,
    // LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
