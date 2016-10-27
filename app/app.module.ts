import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { EmployeeModule } from './employee/app.employee.module';
//import { DepartmentModule } from './department/department.module';
import { AppRouter} from './app.router';
import { HighlightDirectieve } from './common/highlight.directive';
//import { employeeRouter } from './employee/app.employee.router';
// import { FormsModule } from '@angular/forms';

// import { EmployeeComponent } from './employee/app.employee.component';
// import { Employeee} from './employee/app.employee.model';

@NgModule({
  imports:      [ 
    BrowserModule,
    EmployeeModule,
    //DepartmentModule,
    AppRouter
     ],
  declarations: [ 
    AppComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
