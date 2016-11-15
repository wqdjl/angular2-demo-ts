#Angular =>TS

##About angular router
### children back to parent and refresh parent data
   父：ngOnInit() {

        this.activatedRoute.params.forEach((params:Params)=>{

             doSomething();

        });

    } 
    
  子1：this.router.navigate(['XXX'])返回到父级路由，父级doSomething不会调用 
  
  子2：this.router.navigate(['department', {带任何的json参数 }]),返回到父级路由，父级doSometthing才会每次调用
  
   
##About lazy loaded 
 add  '{ path: '{router name}', loadChildren: '{module path}}#{module name}' }' to root router, and the module router root path replace 'router name' with "" 
 

##About load server
 1、Just load one times and other module can use it
 
 2、惰性加载导致server会产生多个实例？ 

      为什么在惰性加载模块中声明的服务提供商只对该模块自身可见？
      
      和启动时就加载的模块中的提供商不同，惰性加载模块中的提供商是 局限于模块 的
      
      当 Angular 路由器惰性加载一个模块时，它创建了一个新的运行环境。 那个环境 拥有自己的注入器 ，它是应用注入器的直属子级
      
      路由器把该惰性加载模块的提供商和它导入的模块的提供商添加到这个子注入器中
      
      这些提供商不会被拥有相同令牌的应用级别提供商的变化所影响。 当路由器在惰性加载环境中创建组件时， Angular 优先使用惰性加载模块中的服务实例，而不是来自应用的根注入器的
      
 3、 Angular 依赖注入系统的一个基本特征：
 
      在注入器还没有被第一次使用之前，可以不断为其添加提供商。 一旦注入器已经创建和开始交付服务，它的提供商列表就被冻结了，不再接受新的提供商
      

##Why add ShareModule
 1、为那些可能会在应用中到处使用的组件、指令和管道创建 SharedModule 。 这种模块应该只包含 declarations ，并且应该导出几乎所有 declarations 里面的声明
 
 2、它不应该带有providers，可能会导致providers里面的server产生多个实例

##Why add CoreModule
 1、应用启动时加载的那些服务创建一个带 providers 的 CoreModule并且只能在根模块 AppModule 中导入 CoreModule，避免providers里面的server产生多个实例

##About 生命周期
 1、每次组件有更新或者更改的时候都会调用都次生命周期的方法去检测，这是否会增加相应的性能开销

##About file upload and show file ？？
 1、在选取本地文件的时候如何预览本图片
 
 2、显示图片的时候如果赋值的src是null或者undefined如何避免发起一个无效的请求

##Angular2+webpack how should I output file with templateUrl?
 1、"templateUrl:'XXX.html'" change to "template:require('XXX.html')", 注：ts不支持require，需要安装‘ npm i --save-dev @types/node’ 
 
 2、install loader “angular2-template-loader html-loader”. '.ts' loader change to "loaders: ['awesome-typescript-loader', 'angular2-template-loader']" 
 
 3、use html-loader instead of raw loader .If you do not instead,it will be ok,but html file can not be compressed。

 注：http://stackoverflow.com/questions/39157580/angular2webpack-how-should-i-output-html-file-with-templateurl

##Angular2+webpack package css 
### package styleUrls 
 1、install "raw-loader" 
 
 2、webpack config file add loader { test:'/\.css$/',loader:'raw',include:'styleUrls file path' }
 
### package other css
 1、install “css-loader style-loader”

 2、webpack config file add loader { test:'/\.css$/',loaders: ['style-loader', 'css-loader'],include:'other css file path' }
 
 注：include，exclude 目的是为了选择需要打包 的css文件所在的目录

 
##About npm install error "UNMET PEER DEPENDENCY XXXX"
  需要重新install当前的安装包，用提示的版本

##Webpack and 惰性加载不兼容？
 
  