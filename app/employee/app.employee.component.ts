import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ Employee } from './app.employee.model';
import { EmployeeServer} from './app.employee.server';
@Component({
    moduleId:module.id,
    selector:'employee-list',
    templateUrl:'app.employee.component.html',
    // providers:[EmployeeServer]
})

export class EmployeeComponent{
      hobbies:string[]=['徒步','足球','篮球','游戏','唱歌','阅读'];
      employees:Employee[]=[];

      constructor(public employeeServer:EmployeeServer,public router:Router){}
 
      onGotoDetail=(id:number)=>{
           this.router.navigate(['/employee',id]); 
      }
      
      onCreate=()=>{
           this.router.navigate(['/employee/create']); 
      }
 
      ngOnInit(){
           this.employees=this.employeeServer.getList();
      }
     
      onDelete=(id:number)=>{ 
         this.employeeServer.delete(id);
         this.employees=this.employeeServer.getList();
      }

}