import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/app.employee.module';

import { AppRouter } from './app.router';
import { ShareModule } from './share/share.module';

@NgModule({
  imports: [
    BrowserModule,
    ShareModule,
    EmployeeModule,
    AppRouter
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
