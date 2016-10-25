import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from './department.model';
import { DepartmentServer } from './department.server';

@Component({
    moduleId: module.id,
    selector: 'department-list',
    templateUrl: 'department.component.html'
})

export class DepartmentComponent {
    deps: Department[];

    constructor(
        public router: Router,
        public depServer: DepartmentServer,
        public activatedRouterSnap: ActivatedRoute
    ) { }

    ngOnInit() {
        this.deps = this.depServer.getList();
    }

    onDelete(id: number) {
        this.depServer.delete(id);
        this.deps = this.depServer.getList();
    }

    onEdit(id: number) {
        this.router.navigate(["department", id]);
    }

    onAdd() {
        this.router.navigate(['department/create']);
    }
}