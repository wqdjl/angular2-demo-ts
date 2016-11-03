import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import{ Employee } from './app.employee.model';
import { EmployeeServer} from './app.employee.server';

@Component({
    moduleId:module.id,
    selector:'employee-detail',
    templateUrl:'app.employee-detail.component.html',
})

export class EmployeeDetailComponent{
      hobbies:string[]=['徒步','足球','篮球','游戏','唱歌','阅读'];
      model:Employee=new Employee();
      employees:Employee[]=[];
      id:number;
      constructor(public employeeServer:EmployeeServer,public router:Router,public activatedRoute:ActivatedRoute){}
    
     
      onSave=()=>{
          this.employeeServer.add(this.model);
          this.gotoList();
      }
     
      onDelete=(id:number)=>{
         this.employeeServer.delete(id);
         this.gotoList();
      }
      
      onUpdate=()=>{
          this.employeeServer.update(this.model);
          this.gotoList();
      }

      onCancel=()=>{
          this.gotoList();
      }
      
      gotoList=()=>{
         this.router.navigate(['/employee']);
      }

      ngOnInit(){
        //   this.id=this.activatedRoute.snapshot.params['id'];
        //   if(this.id){
        //       this.model=this.employeeServer.get(this.id);
        //   }
        this.activatedRoute.params.forEach((params:Params)=>{
            this.id=params['id'];
            if(this.id){
              this.model=this.employeeServer.get(this.id);
            }
        })
      }
}