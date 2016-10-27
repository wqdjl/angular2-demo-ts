import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/app.employee.module';

import { AppRouter } from './app.router';
import { ShareModule } from './share/share.module';

import { LoginComponent } from './login/login.component';
import { Component404 } from './404/404.component';
@NgModule({
  imports: [
    BrowserModule,
    ShareModule,
    EmployeeModule,
    AppRouter
  ],
  exports:[
   
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    Component404
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
