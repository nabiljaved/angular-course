import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { DifferentComponent } from './moduleexample/different/different.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { CallfunctionComponent } from './callfunction/callfunction.component';
import { CommonModule } from '@angular/common';  
import {FormsModule} from '@angular/forms'
import {CallFunctionHeader} from './callfunction/callfunction-header.component'
import { CallFunctionFooter } from './callfunction/callfunction-footer.component';
import { from, Observable } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DifferentComponent,
    LoginComponent,
    SignupComponent,
    CallfunctionComponent,
    CallFunctionHeader,
    CallFunctionFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule    
  ],
  providers: [],
  bootstrap: [CallfunctionComponent]
})
export class AppModule { }
