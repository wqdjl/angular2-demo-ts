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
 3.1、Just load one times and other module can use it <br/>
 3.2、惰性加载导致server会产生多个实例？
      为什么在惰性加载模块中声明的服务提供商只对该模块自身可见？
      和启动时就加载的模块中的提供商不同，惰性加载模块中的提供商是 局限于模块 的。
      当 Angular 路由器惰性加载一个模块时，它创建了一个新的运行环境。 那个环境 拥有自己的注入器 ，它是应用注入器的直属子级。
      路由器把该惰性加载模块的提供商和它导入的模块的提供商添加到这个子注入器中。
      这些提供商不会被拥有相同令牌的应用级别提供商的变化所影响。 当路由器在惰性加载环境中创建组件时， Angular 优先使用惰性加载模块中的服务实例，而不是来自应用的根注入器的。