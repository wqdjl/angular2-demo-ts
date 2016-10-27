import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';

import { EmployeeServer} from './app.employee.server';
import { EmployeeComponent } from './app.employee.component';
import { EmployeeDetailComponent } from './app.employee-detail.component';
import { EmployeeRouter } from './app.employee.router'; 
 


@NgModule({
    imports:[
        ShareModule,
        EmployeeRouter
    ],
    declarations:[
        EmployeeComponent,
        EmployeeDetailComponent
    ],
    exports:[
        
    ],
    providers:[
        EmployeeServer
    ]
})

export class EmployeeModule{}