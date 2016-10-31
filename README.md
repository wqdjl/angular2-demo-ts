#Angular =>TS

##About angular router
### children back to parent and refresh parent data
   父：ngOnInit() {
        this.activatedRoute.params.forEach((params:Params)=>{
             doSomething();
        });
    } <br />
  子1：this.router.navigate(['XXX'])返回到父级路由，父级doSomething不会调用 <br />
  子2：this.router.navigate(['department', {带任何的json参数 }]),返回到父级路由，父级doSometthing才会每次调用 <br />
   
##About lazy loaded 
 add  '{ path: '{router name}', loadChildren: '{module path}}#{module name}' }' to root router, and the module router root path replace 'router name' with "" <br />

##About load server
 1、Just load one times and other module can use it <br/>
 2、惰性加载导致server会产生多个实例？<br/>
      为什么在惰性加载模块中声明的服务提供商只对该模块自身可见？<br/>
      和启动时就加载的模块中的提供商不同，惰性加载模块中的提供商是 局限于模块 的。<br/>
      当 Angular 路由器惰性加载一个模块时，它创建了一个新的运行环境。 那个环境 拥有自己的注入器 ，它是应用注入器的直属子级。<br/>
      路由器把该惰性加载模块的提供商和它导入的模块的提供商添加到这个子注入器中。<br/>
      这些提供商不会被拥有相同令牌的应用级别提供商的变化所影响。 当路由器在惰性加载环境中创建组件时， Angular 优先使用惰性加载模块中的服务实例，而不是来自应用的根注入器的。<br/>
 3、 Angular 依赖注入系统的一个基本特征：<br/>
      在注入器还没有被第一次使用之前，可以不断为其添加提供商。 一旦注入器已经创建和开始交付服务，它的提供商列表就被冻结了，不再接受新的提供商。<br/>

##Why add ShareModule
 1、为那些可能会在应用中到处使用的组件、指令和管道创建 SharedModule 。 这种模块应该只包含 declarations ，并且应该导出几乎所有 declarations 里面的声明。
 2、它不应该带有providers，可能会导致providers里面的server产生多个实例

##Why add CoreModule
 1、应用启动时加载的那些服务创建一个带 providers 的 CoreModule并且只能在根模块 AppModule 中导入 CoreModule，避免providers里面的server产生多个实例