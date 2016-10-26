import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeServer} from './app.employee.server';
import { EmployeeComponent } from './app.employee.component';
import { EmployeeDetailComponent } from './app.employee-detail.component';
import { EmployeeRouter } from './app.employee.router'; 
 
import { HighlightDirectieve } from '../common/highlight.directive';


@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        EmployeeRouter
    ],
    declarations:[
        EmployeeComponent,
        EmployeeDetailComponent,
        HighlightDirectieve
    ],
    exports:[
        
    ],
    providers:[
        EmployeeServer
    ]
})

export class EmployeeModule{}