import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { ReusableComponent } from './reusable/reusable.component';
import { SendparentComponent } from './sendparent/sendparent.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReusableComponent,
    SendparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
