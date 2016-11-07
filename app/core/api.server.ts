import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Employee } from '../employee/app.employee.model';

@Injectable()
export class ApiServer {
    constructor(private http: Http) {

    }

    

    getEmployees(): Promise<Employee[]> {
        let url="app/employees";
        return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
                    // .map(this.extractData)
                    // .catch(this.handleError);
    }

    addEmployee(employee:Employee){
        let url="app/employees";
        return this.http.post(url,employee)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    deleteEmployee(id:number){
         let url="app/employees/"+id;
         return  this.http.delete(url)
         .map(this.extractData)
         .catch(this.handleError);
    }
  

    private extractData(res: Response) {
        if(res.status==204){
            return  true;
        }
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
