import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';

import { EmployeeServer} from './app.employee.server';
import { EmployeeComponent } from './app.employee.component';
import { EmployeeDetailComponent } from './app.employee-detail.component';
import { EmployeeRouterModule } from './app.employee.router'; 
 


@NgModule({
    imports:[
        ShareModule,
        EmployeeRouterModule
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