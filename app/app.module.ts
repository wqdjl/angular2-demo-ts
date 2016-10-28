import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
 
import { AppRouter } from './app.router';
import { ShareModule } from './share/share.module';

import { CoreModule } from './core/core.module';

import { LoginComponent } from './login/login.component';
import { Component404 } from './404/404.component';

@NgModule({
  imports: [
    BrowserModule,
    ShareModule,
    CoreModule,
    AppRouter
  ],
  exports:[
   
  ],
   providers: [
        
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    Component404
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
