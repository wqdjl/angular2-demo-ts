import { NgModule,ModuleWithProviders } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
import { EmployeeComponent } from './app.employee.component';
import { EmployeeDetailComponent } from './app.employee-detail.component';
import { AuthServer } from '../core/auth.server';

let routes:Routes=[
    {path:'create', canActivate:[AuthServer],component:EmployeeDetailComponent},
    {path:':id', canActivate:[AuthServer],component:EmployeeDetailComponent},
    {path:'', canActivate:[AuthServer],component:EmployeeComponent},
   
];

const EmployeeRouter:ModuleWithProviders=RouterModule.forChild(routes);

@NgModule({
    imports:[
       EmployeeRouter 
    ],
    exports:[RouterModule]
})
export class EmployeeRouterModule{}
