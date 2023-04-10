import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { StaticHomeComponent } from './static-home/static-home.component';
import { ApiCallService } from './_services/api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashManagementComponent } from './dash-management/dash-management.component';
import { DataLoadingComponent } from './data-loading/data-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    StaticHomeComponent,
    DashManagementComponent,
    DataLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
