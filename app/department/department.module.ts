import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';

import { DepartmentRoute } from './department.router';

import { DepartmentServer } from './department.server';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DepartmentRoute
    ],
    declarations: [
        DepartmentComponent,
        DepartmentDetailComponent
    ],
    providers: [
        DepartmentServer
    ]
})

export class DepartmentModule { }