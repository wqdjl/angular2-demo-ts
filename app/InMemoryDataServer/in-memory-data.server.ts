import { ModuleWithProviders } from '@angular/core';
import { InMemoryWebApiModule,InMemoryDbService } from 'angular-in-memory-web-api';
 

 class InMemoryDataServer implements InMemoryDbService {
    createDb() {
        let employees = [
            {
                "id": 1,
                "Age": 21,
                "Name": "Name1",
                "Sex": "男",
                "Hobby": "足球"
            },
            {
                "id": 2,
                "Age": 22,
                "Name": "Name2",
                "Sex": "女",
                "Hobby": "篮球"
            }
        ];

        let departments = [
            {
                "id": 1,
                "Name": "Dep-1"
            },
            {
                "id": 2,
                "Name": "Dep-2"
            } 
        ];

        return { employees,departments };
    }
}

export const  MyMemoryWebApiModule:ModuleWithProviders= InMemoryWebApiModule.forRoot(InMemoryDataServer);