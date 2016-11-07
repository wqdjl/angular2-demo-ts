import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './app.employee.model';
import { EmployeeServer } from './app.employee.server';
import { ApiServer } from '../core/api.server.js';
@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'app.employee.component.html',
    // providers:[EmployeeServer]
})

export class EmployeeComponent {
    hobbies: string[] = ['徒步', '足球', '篮球', '游戏', '唱歌', '阅读'];
    employees: Employee[] = [];

    constructor(
        public employeeServer: EmployeeServer,
        public router: Router,
        public apiServer: ApiServer
    ) { }

    onGotoDetail(id: number) {
        this.router.navigate(['/employee', id]);
    }

    onCreate() {
        this.router.navigate(['/employee/create']);
    }

    ngOnInit() {
        this.getEmployees();
    }

    onDelete(id: number) {
        // this.apiServer.deleteEmployee(id).subscribe(()=>{
        //     this.getEmployees();
        // });
        this.employeeServer.delete(id);
          this.getEmployees();
    }

    getEmployees() {
      this.employees=this.employeeServer.getList();
        // this.apiServer.getEmployees()
        // .then(employees => this.employees = employees ).catch( error => console.log(error));
        // .subscribe(
        //     employees => {
        //         this.employees = employees
        //     },
        //     error => console.log(error))
    }

}