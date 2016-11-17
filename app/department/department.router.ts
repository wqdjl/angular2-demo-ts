import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { AuthServer } from '../core/auth.server';

const routes: Routes = [
    {
        path: "",
        component: DepartmentComponent,
        canActivate: [AuthServer],
        children: [
            { path: 'create', component: DepartmentDetailComponent },
            { path: ':id', component: DepartmentDetailComponent },
            { path: '', component: DepartmentDetailComponent },
        ]
    }
];

const DepartmentRoute: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [DepartmentRoute],
    exports: [RouterModule]
})
export class DepartmentRouteModule { }