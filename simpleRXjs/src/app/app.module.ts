import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnternameComponent } from './entername/entername.component';
import { ListnameComponent } from './listname/listname.component';

@NgModule({
  declarations: [
    AppComponent,
    EnternameComponent,
    ListnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
