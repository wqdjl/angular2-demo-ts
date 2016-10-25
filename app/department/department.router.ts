import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';

//   {path:'department-create',component:DepartmentComponent},
//     {path:'department/:id',component:DepartmentComponent},
const routes: Routes = [
    {
        path: "department",
        component: DepartmentComponent,
        children: [
            { path: 'create', component: DepartmentDetailComponent },
            { path: ':id', component: DepartmentDetailComponent },
            { path: '', component: null },
        ]
    }
];

export const DepartmentRoute: ModuleWithProviders = RouterModule.forChild(routes);