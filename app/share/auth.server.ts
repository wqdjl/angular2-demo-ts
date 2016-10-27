import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthServer implements CanActivate {
    isLogin: boolean = false;
    redirectUrl:string;

    constructor(private router:Router){

    }



    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
        let url=state.url;

        return this.checkLogin(url);
    }

    checkLogin(url:string):boolean{
        if(this.isLogin){return true}

        this.redirectUrl=url;
        alert('请登录之后再访问。');
        this.router.navigate(['/login']);
        return false;
    }

    login() {
        this.isLogin = true;
        if(this.redirectUrl){
            this.router.navigate([this.redirectUrl]);
        }else  {
            this.router.navigate(['/employee']);
        }
    }

    logout() {
        this.isLogin = false;
        this.router.navigate(['/login']);
    }

}