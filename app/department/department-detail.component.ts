import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Department } from './department.model';
import { DepartmentServer } from './department.server';

@Component({
    moduleId:module.id,
    selector:'department-detail',
    templateUrl:'department-detail.component.html'
})

export class DepartmentDetailComponent{
     model:Department;
     id:number;
     constructor(public activatedRoute:ActivatedRoute,
                 public router:Router,
                 public departmentServer:DepartmentServer){}

     ngOnInit(){
         this.id=this.activatedRoute.snapshot.params['id'];
         if(this.id){
             this.model=this.departmentServer.get(this.id);
         }else{
             this.model==new Department();
         }
     }

     gotoList(){}

     onSave(){
         this.departmentServer.add(this.model);
         this.gotoList();
     }

     onUpdata(){
        this.departmentServer.update(this.model);
        this.gotoList();
     }

     onCancel(){
         this.gotoList();
     }
}
