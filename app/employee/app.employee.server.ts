import { Injectable } from '@angular/core';
import { Employee } from './app.employee.model';


let employees:Employee[]=[];
let lastestId:number=0;
const  hobbies:string[]=['徒步','足球','篮球','游戏','唱歌','阅读'];
@Injectable()
export class EmployeeServer{

    constructor(){
        (()=>{
            for(let i=1;i<=5;i++){
              let employee=new Employee();
              lastestId=i;
              employee.Id=i;
              employee.Age=i+20;
              employee.Name='Name'+i;
              employee.Sex=i%2?'男':'女';
              employee.Hobby=hobbies[i%6]
              employees.push(employee); 
            }
        })()
    }

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
