#Angular =>TS

##Question1,About angular router
### children back to parent and refresh parent data
   父：ngOnInit() {
        this.activatedRoute.params.forEach((params:Params)=>{
             doSomething();
        });
    } <br />
  子1：this.router.navigate(['XXX'])返回到父级路由，父级doSomething不会调用 <br />
  子2：this.router.navigate(['department', {带任何的json参数 }]),返回到父级路由，父级doSometthing才会每次调用 <br />
   
##Question 2, About lazy loaded 
 add  '{ path: '{router name}', loadChildren: '{module path}}#{module name}' }' to root router, and the module router root path replace 'router name' with "" <br />

 ##Question 3，About load server
 3.1Just load one times and other module can use it <br/>
 3.2多次引用会产生多个实例？