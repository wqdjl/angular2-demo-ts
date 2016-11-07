import { Component } from '@angular/core';
import { AuthServer } from '../core/auth.server';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    constructor(
        private authServer: AuthServer,
        private router:Router
    ) {

    }

    ngOnInit() {
        if(this.authServer.isLogin){
             this.router.navigate(['employee']);
            // if(this.authServer.redirectUrl){
            //     this.router.navigate([this.authServer.redirectUrl]);
            // }else{
            //      this.router.navigate(['employee']);
            // }
        }
    }

    onLogin() {
        this.authServer.login();
    }
}

