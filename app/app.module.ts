import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRouter } from './app.router';
import { ShareModule } from './share/share.module';
import { MyMemoryWebApiModule }   from './InMemoryDataServer/in-memory-data.server';
import { CoreModule } from './core/core.module';

import { LoginComponent } from './login/login.component';
import { Component404 } from './404/404.component';

@NgModule({//是一个装饰器函数，接收一个用来描述模块属性的元数据对象
  imports: [
    BrowserModule,
    ShareModule,
    CoreModule,
    MyMemoryWebApiModule,
    AppRouter
  ],
  exports: [

  ],
  providers: [

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    Component404
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
