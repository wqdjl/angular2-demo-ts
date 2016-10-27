import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Angular Learn</h1>
  <nav>
   <a routerLink="employee" routerLinkActive="active">Employee</a>
   <a routerLink="department" routerLinkActive="active">Department</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
