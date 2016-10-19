import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeServer} from './app.employee.server';
import { EmployeeComponent } from './app.employee.component';
 
 
@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[
        EmployeeComponent,
    ],
    exports:[
        EmployeeComponent
    ],
    providers:[
        EmployeeServer
    ]
})

export class EmployeeModule{}