import { Injectable } from '@angular/core';
import { Department } from './department.model';

let deps: Department[] = [];
let lastId = 0;
@Injectable()
export class DepartmentServer {
    constructor() {
        for (let i = 1; i <= 3; i++) {
            let dep = new Department();
            dep.Id = lastId = i;
            dep.Name = 'Dep-' + i;
            deps.push(dep)
        }
    }

    add(dep: Department): void {
        dep.Id = ++lastId;
        deps.push(dep);
    }

    delete(id: number): void {
        let index = deps.findIndex((dep) => {
            return dep.Id == id;
        })
        deps.splice(index, 1);
    }

    update(depUpdated: Department): void {
        let index = deps.findIndex((dep) => {
            return dep.Id == depUpdated.Id;
        })
        deps.splice(index, 1, depUpdated);
    }

    get(id: number): Department {
        return deps.find((dep) => {
            return dep.Id == id;
        })
    }

    getList(): Department[] {
        return JSON.parse(JSON.stringify(deps));
    }
}
