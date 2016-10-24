import { ModuleWithProviders } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
import { EmployeeComponent } from './app.employee.component';
import { EmployeeDetailComponent } from './app.employee-detail.component';
 

let routes:Routes=[
    {path:'employee-detail',component:EmployeeDetailComponent},
    {path:'employee/:id',component:EmployeeDetailComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'',component:EmployeeComponent},
  
];

export const EmployeeRouter:ModuleWithProviders=RouterModule.forChild(routes);