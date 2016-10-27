import { Component } from '@angular/core';
import { AuthServer } from './share/auth.server'; 
@Component({
  selector: 'my-app',
  template: `
  <h1>Angular Learn</h1>
  <nav [hidden]='!auth.isLogin'>
   <a routerLink="employee" routerLinkActive="active">Employee</a>
   <a routerLink="department" routerLinkActive="active">Department</a>
   <button  class='btn btn-default pull-right' (click)='auth.logout()'>Logout</button>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(public auth:AuthServer){}
 }
