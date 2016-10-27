import { Route,Router,RouterModule,Routes } from '@angular/router';
import { EmployeeComponent } from './employee/app.employee.component';

let routes:Routes=[
    // {path:'employee-create',component:EmployeeDetailComponent},
    // {path:'employee/:id',component:EmployeeDetailComponent},
    {path:'department',loadChildren:'app/department/department.module#DepartmentModule'},
    {path:'',component:EmployeeComponent},
    //{path:'**',component:EmployeeComponent}
];

export const AppRouter=RouterModule.forRoot(routes,{useHash:true})