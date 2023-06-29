import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { InfoComponent } from './info/info.component';
// 一级路由匹配到的页面在定义该路由规则所在的模块的组件中的<router-outlet></router-outlet>中插入显示
//相应的，一级路由下匹配到的页面的子路由在相应页面的<router-outlet></router-outlet>中显示
//这里一级路径在app模块（本项目根模块）中定义，则一级路由页面插入到app.component.html里的<router-outlet></router-outlet>中
// 这里一级路由有2个分别为tabs和info页面，tabs页面的子路由匹配到的页面插入到tabs页面组件中的<router-outlet></router-outlet>中显示
// tabs子路由有三个页面，在tabs中通过路由指令routerLink指定路径，配合tabs页面的<router-outlet></router-outlet>即实现首页导航
const routes: Routes = [
  // 一级路由，输入http://localhost:port/默认导航到/tabs/tab1，
  //tabs是首页，带多个导航选项卡，点击切换不同内容
  //输入http://localhost:port/info则进入info页面，也可通过
 
  { 
    path:"tabs",
    component:TabsComponent,
    children:[
      //tabs的子路由，实现了一个首页导航tab切换选项卡，
      //输入http://localhost:port默认导航到/tabs/tab1页面
      {
        path:"tab1",
        component:Tab1Component
      },
      {
        path:"tab2",
        component:Tab2Component
      },
      {
        path:"tab3",
        component:Tab3Component
      },
      {//这里路径为空则会重定向到tabs/tab1
        //比如http://localhost:port/tabs就会默认到http://localhost:port/tabs/tab1
        path:"",
        redirectTo:"tabs/tab1",
        pathMatch:"full"
        
      }
    ]
  },
  {
    path:"info",
    component:InfoComponent
  },
  //这里路径为空就会重定向到tabs/tab1
  //比如http://localhost:port就会默认到http://localhost:port/tabs/tab1
  {
    path:"",
    redirectTo:"tabs/tab1",
    pathMatch:"full"
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
