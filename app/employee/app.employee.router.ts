import { ModuleWithProviders } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
import { EmployeeComponent } from './app.employee.component';
import { EmployeeDetailComponent } from './app.employee-detail.component';
import { AuthServer } from '../share/auth.server';

let routes:Routes=[
    {path:'employee-create', canActivate:[AuthServer],component:EmployeeDetailComponent},
    {path:'employee/:id', canActivate:[AuthServer],component:EmployeeDetailComponent},
    {path:'employee', canActivate:[AuthServer],component:EmployeeComponent},
   
];

export const EmployeeRouter:ModuleWithProviders=RouterModule.forChild(routes);