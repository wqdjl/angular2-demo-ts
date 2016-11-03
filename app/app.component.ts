import { Component } from '@angular/core';
import { AuthServer } from './core/auth.server'; 
@Component({
  selector: 'my-app',
  template: `
  	<nav class="nav navbar-default nav-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
				<a class="navbar-brand" href="javascript:void(0)">Project name</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li><a href="javascript:void(0)" routerLink="employee" routerLinkActive="active">Employee</a></li>
					<li><a href="javascript:void(0)" routerLink="department" routerLinkActive="active">Department</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="javascript:void(0)"  (click)='auth.logout()'>Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">
		<router-outlet></router-outlet>
	</div>
 

  `
})
export class AppComponent {
  constructor(public auth:AuthServer){}
 }
//  <nav [hidden]='!auth.isLogin'>
//    <a routerLink="employee" routerLinkActive="active">Employee</a>
//    <a routerLink="department" routerLinkActive="active">Department</a>
//    <button  class='btn btn-default pull-right' (click)='auth.logout()'>Logout</button>
//   </nav>
 