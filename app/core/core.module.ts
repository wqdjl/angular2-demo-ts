//本module主要是用来引用只需注入一次的server，在app.module里面注入
import { NgModule } from '@angular/core'; 

import { AuthServer } from './auth.server.js';

@NgModule({
    imports:[],
    providers:[AuthServer]
})
export class CoreModule{

}