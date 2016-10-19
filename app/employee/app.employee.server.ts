import { Injectable } from '@angular/core';
import { Employee } from './app.employee.model';


let employees:Employee[]=[];
let lastestId:number=0;
@Injectable()
export class EmployeeServer{
    add=(employee:Employee)=>{
       employee.Id=++lastestId;
       employees.push(employee);
    }

    get=(id:number)=>{
        return employees.find((employee)=>{
           return employee.Id==id;
        })
    }

    getList=()=>{
        return employees;
    }
    
    delete=(id:number)=>{
        let index=employees.findIndex((employee)=>{
            return employee.Id==id;
        })
        employees.splice(index,1);
    }

    update=(employee:Employee)=>{
         let index=employees.findIndex((em)=>{
            return em.Id==employee.Id;
        })
        employees.splice(index,1,employee);
    }

}
