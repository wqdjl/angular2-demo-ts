import { Component } from '@angular/core';
import{ Employee } from './app.employee.model';
import { EmployeeServer} from './app.employee.server';
@Component({
    moduleId:module.id,
    selector:'employee-detail',
    templateUrl:'app.employee.component.html',
    // providers:[EmployeeServer]
})

export class EmployeeComponent{
      lastesIdt=0;
      isList:boolean=false;
      hobbies:string[]=['徒步','足球','篮球','游戏','唱歌','阅读'];
      model:Employee=new Employee();
      employees:Employee[]=[];

      constructor(public employeeServer:EmployeeServer){}
    
      onCreate=()=>{
          this.isList=false;
          this.model=new Employee();
      }
      
      onGotoDetail=(id:number)=>{
           this.model=this.employeeServer.get(id);
           this.isList=false;
      }

      onSave=()=>{
          this.employeeServer.add(this.model);
          this.gotoList();
      }
     
      onDelete=(id:number)=>{
         this.employeeServer.delete(id);
      }
      
      onUpdate=()=>{
          this.employeeServer.update(this.model);
          this.gotoList();
      }

      gotoList=()=>{
          this.isList=true;
          this.employees=this.employeeServer.getList();
      }
}