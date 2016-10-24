import { Route,Router,RouterModule,Routes } from '@angular/router';
import { EmployeeComponent } from './employee/app.employee.component';

let routes:Routes=[
    // {path:'employee-create',component:EmployeeDetailComponent},
    // {path:'employee/:id',component:EmployeeDetailComponent},
    // {path:'employee',component:EmployeeComponent},
    {path:'',component:EmployeeComponent},
    {path:'**',component:EmployeeComponent}
];

export const AppRouter=RouterModule.forRoot(routes,{useHash:true})