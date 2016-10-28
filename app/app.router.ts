import { Route,Router,RouterModule,Routes } from '@angular/router';
import { EmployeeComponent } from './employee/app.employee.component';
import { LoginComponent } from './login/login.component';
import { Component404 } from './404/404.component';
import { AuthServer } from './core/auth.server';

let routes:Routes=[
    // {path:'employee-create',component:EmployeeDetailComponent},
    // {path:'employee/:id',component:EmployeeDetailComponent},
    {path:'department',canLoad:[AuthServer],loadChildren:'app/department/department.module#DepartmentModule'},
    {path:'employee',canLoad:[AuthServer],loadChildren:'app/employee/app.employee.module#EmployeeModule'},
    {path:'login',component:LoginComponent},
    {path:'',component:LoginComponent},
    {path:'**',component:Component404}
];

export const AppRouter=RouterModule.forRoot(routes,{useHash:true})