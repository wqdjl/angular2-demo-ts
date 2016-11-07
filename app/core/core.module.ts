//本module主要是用来引用只需注入一次的server，
//最好放在app.module 在app.module里面注入
import { NgModule,SkipSelf,Optional } from '@angular/core'; 
import { AuthServer } from './auth.server';
import { ApiServer } from './api.server';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/toPromise';

@NgModule({
    imports:[],
    providers:[AuthServer,ApiServer]
})
export class CoreModule{
    /*@SkipSel 依赖的解析从父级注入器开始
     *@Optional() 允许parentModule为空，
     */ 
   constructor(@Optional() @SkipSelf() parentModule:CoreModule){
       if(parentModule){
           throw new Error("CoreModule is already loaded.Import it in the AppModule only.");
       }
   }
}