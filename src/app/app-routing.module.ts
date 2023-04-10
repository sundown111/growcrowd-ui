import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashManagementComponent } from './dash-management/dash-management.component';
import { DataLoadingComponent } from './data-loading/data-loading.component';
import { StaticHomeComponent } from './static-home/static-home.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [


  { path: '', component: StaticHomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path:'loading',component:DataLoadingComponent
  },
  {
    path:'loading/:id',component:DataLoadingComponent
  },
  {
    path:'app' ,component:DashManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
