import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from './app.employee.model';
import { EmployeeServer } from './app.employee.server';

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'app.employee-detail.component.html',
})

export class EmployeeDetailComponent {
    hobbies: string[] = ['徒步', '足球', '篮球', '游戏', '唱歌', '阅读'];
    model: Employee = new Employee();
    employees: Employee[] = [];
    id: number;

    constructor(public employeeServer: EmployeeServer, public router: Router, public activatedRoute: ActivatedRoute) { }

    fileChange = (event) => {
        let url=event.srcElement.value;
        let urlArray=url.split('.');
        let outputFormat=urlArray[urlArray.length-1];
        let canvas:HTMLCanvasElement =<HTMLCanvasElement>document.createElement('CANVAS');
        let ctx = canvas.getContext('2d');
        let img = new Image;
       
        img.crossOrigin = 'Anonymous';
        img.onload =  ()=> {
             //Not allowed to load local resource.how can i resolve it?
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            this.model.Head = canvas.toDataURL(outputFormat || 'image/png');
            // Clean up 
            canvas = null;
        };
        img.src = url;
    }

    onSave = () => {
        this.employeeServer.add(this.model);
        this.gotoList();
    }

    onDelete = (id: number) => {
        this.employeeServer.delete(id);
        this.gotoList();
    }

    onUpdate = () => {
        this.employeeServer.update(this.model);
        this.gotoList();
    }

    onCancel = () => {
        this.gotoList();
    }

    gotoList = () => {
        this.router.navigate(['/employee']);
    }

    ngOnInit() {
        //   this.id=this.activatedRoute.snapshot.params['id'];
        //   if(this.id){
        //       this.model=this.employeeServer.get(this.id);
        //   }
        this.activatedRoute.params.forEach((params: Params) => {
            this.id = params['id'];
            if (this.id) {
                this.model = this.employeeServer.get(this.id);
            }
        })
    }
}