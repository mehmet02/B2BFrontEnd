import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { LayoutsComponent } from './admin/layouts/layouts.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutsComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
        loadChildren:()=>import('./admin/home/home.module').then(m=>m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
