import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 所有页面导入根模块
import { TabsComponent } from './tabs/tabs.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,//声明所有页面组件
    Tab1Component,
    Tab2Component,
    Tab3Component,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
