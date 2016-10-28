import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthServer implements CanActivate, CanLoad {
    
    set isLogin(value:boolean) {
       localStorage.setItem('isLogin',value.toString());
    }
    get isLogin():boolean{
        let _isLogin:string=  localStorage.getItem('isLogin');
        return _isLogin==="true";
    } 
   
    set redirectUrl(value:string){
        localStorage.setItem('redirectUrl',value);
    }  
    get redirectUrl():string{
        return localStorage.getItem('redirectUrl');
    }


    constructor(private router: Router) {

    }

   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url = state.url;

        return this.checkLogin(url);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.isLogin) { return true }

        this.redirectUrl = url;
        alert('请登录之后再访问。');
        this.router.navigate(['/login']);
        return false;
    }

    login() {
        this.isLogin = true;
        if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
        } else {
            this.router.navigate(['/employee']);
        }
    }

    logout() {
        this.isLogin = false;
         this.redirectUrl = "";
        this.router.navigate(['/login']);
    }

}