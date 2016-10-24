import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Angular Learn</h1>
  <nav>
   <a routerLink="/employee">Employee</a>
   <a routerLink="/department">Department</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
